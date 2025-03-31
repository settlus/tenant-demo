import { ethers } from 'ethers'
import { abi } from '../shared/abi.json'
import { getCorsHeaders } from '../shared/cors'
const RPC_URL = process.env.RPC_URL!
const CHAIN_ID = parseInt(process.env.CHAIN_ID!)
const PRIVATE_KEY = process.env.TENANT_DEMO_PRIVATE_KEY!
const CONTRACT_ADDR = process.env.CONTRACT_ADDR!

export const handler = async (event: any) => {
  const origin = event.headers?.origin || event.headers?.Origin || '*'

  try {
    const body = JSON.parse(event.body)
    const { from, to, tokenId } = body

    if (!from || !to || !tokenId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields: from, to, or tokenId' }),
      }
    }

    const provider = new ethers.JsonRpcProvider(RPC_URL, {
      name: 'settlus',
      chainId: CHAIN_ID,
    })

    const signer = new ethers.Wallet(PRIVATE_KEY, provider)
    const contract = new ethers.Contract(CONTRACT_ADDR, abi, signer)

    const tx = await contract.transferFrom(from, to, tokenId)
    const receipt = await tx.wait()

    return {
      statusCode: 200,
      headers: getCorsHeaders(origin),
      body: JSON.stringify({
        hash: tx.hash,
        blockNumber: receipt.blockNumber,
      }),
    }
  } catch (err: any) {
    console.error('Transfer error:', err)
    return {
      statusCode: 500,
      headers: getCorsHeaders(origin),
      body: JSON.stringify({ error: 'Transfer failed', details: err.message }),
    }
  }
}
