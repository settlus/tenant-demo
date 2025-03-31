import axios from 'axios'
import { Buffer } from 'buffer'
import { ethers } from 'ethers'
import { v4 as uuid } from 'uuid'

import giftImg from '../public/svg/Present.svg'
import { user1, user2, user3, user4, user5, user6, userProfile } from '../public/svg/userProfile'
import { InfoType, DataType } from '../types/type'
import { USER_NAMES } from '../utils/constants'
import { addTime, formatTimeString } from '../utils/util'
import { delay, getBase64Image, convertToFile } from '../utils/util'
import { uploadImageToS3, uploadJsonToS3 } from './s3/s3-upload'

const ENV = import.meta.env

export async function mintNFT(thumbnail: string, sample?: number) {
  const nickname = getNickName()
  const name = uuid()

  const file = await convertToFile(thumbnail, name)
  const imageUrl = await uploadImageToS3(file, sample)

  const metadataObj = {
    name: `${nickname}'s t-shirt`,
    description: 'Tenant Demo NFT',
    image: imageUrl,
    buildFileUrl: '',
    attributes: [],
  }

  const metadata = Buffer.from(JSON.stringify(metadataObj))
  const metadataUrl = await uploadJsonToS3(metadata, `${name}.json`)

  const nonce = await getNonce(ENV.VITE_USER_PB_KEY)

  const MAX_RETRIES = 3
  let currTry = 0

  while (currTry < MAX_RETRIES) {
    try {
      const res = await axios.post(ENV.VITE_MINT_LAMBDA_URL, {
        to: ENV.VITE_USER_PB_KEY,
        metadataUrl,
        nonce: nonce + currTry,
      })

      const now = new Date()
      const { tokenId, hash } = res.data

      sessionStorage.setItem('tokenId', tokenId)
      sessionStorage.setItem('hash', hash)
      sessionStorage.setItem('mintTime', now.toISOString())

      return
    } catch (err) {
      console.error(`mintNFT retry ${currTry}`, err)
      currTry++
    }
  }

  throw { error: 'error has occurred' }
}


export async function createItem(info: InfoType, thumbnail: string, file: string) {
  const base64Thumbnail = await getBase64Image(thumbnail)
  const base64Template = await getBase64Image(file)
  const item = JSON.stringify({
    ...info,
    thumbnail: base64Thumbnail,
    template: base64Template,
  })
  sessionStorage.setItem('itemInfo', item)
}

export async function getItem() {
  const raw = sessionStorage.getItem('itemInfo')
  const tokenId = sessionStorage.getItem('tokenId') || ''
  const hash = sessionStorage.getItem('hash') || ''
  const mintTime = sessionStorage.getItem('mintTime') || ''
  const name = getNickName()
  const result = raw ? JSON.parse(raw) : {}
  return {
    ...result,
    nickname: name,
    tokenId: tokenId,
    hash: hash,
    mintTime: mintTime,
  }
}

export function getNickName() {
  const name = sessionStorage.getItem('nickname') || 'User'
  return name
}

export async function transferNFT() {
  try {
    const raw = sessionStorage.getItem('tokenId') || '0x0'
    const tokenId = BigInt(raw).toString()

    const res = await axios.post(ENV.VITE_TRANSFER_LAMBDA_URL, {
      from: ENV.VITE_USER_PB_KEY,
      to: ENV.VITE_JOY_PB_KEY,
      tokenId,
    })

    await delay(4000)
    return res.data.hash
  } catch (err) {
    console.error(err)
    throw { error: 'transaction error' }
  }
}

async function getNonce(address: string): Promise<number> {
  const provider = new ethers.JsonRpcProvider(ENV.VITE_RPC_URL, {
    name: 'settlus',
    chainId: parseInt(ENV.VITE_CHAIN_ID),
  })
  return await provider.getTransactionCount(address)
}


export async function getData(): Promise<DataType> {
  const data = await getItem()

  return {
    thumbnail: data.thumbnail,
    title: data.name,
    history: [
      {
        Profile: giftImg,
        Activity: 'NFT Offer Arrived',
        Time: addTime(data.mintTime, 10),
      },
      {
        Profile: user5,
        Activity: `${USER_NAMES[4]} bought an item`,
        Time: addTime(data.mintTime, 9.2),
      },
      {
        Profile: user1,
        Activity: `${USER_NAMES[8]} bought an item`,
        Time: addTime(data.mintTime, 8.9),
      },
      {
        Profile: user2,
        Activity: `${USER_NAMES[5]} bought an item`,
        Time: addTime(data.mintTime, 8),
      },
      {
        Profile: user3,
        Activity: `${USER_NAMES[2]} bought an item`,
        Time: addTime(data.mintTime, 7.6),
      },
      {
        Profile: user4,
        Activity: `${USER_NAMES[3]} bought an item`,
        Time: addTime(data.mintTime, 7.1),
      },
      {
        Profile: user5,
        Activity: `${USER_NAMES[4]} bought an item`,
        Time: addTime(data.mintTime, 6.5),
      },
      {
        Profile: user6,
        Activity: `${USER_NAMES[0]} bought an item`,
        Time: addTime(data.mintTime, 6),
      },
      {
        Profile: userProfile,
        Activity: 'created an item',
        Time: addTime(data.mintTime, 5),
      },
      {
        Profile: userProfile,
        Activity: 'minted NFT',
        Time: formatTimeString(data.mintTime),
      },
    ],
    details: {
      'Contract Address': ENV.VITE_CONTRACT_ADDR,
      'Token ID': parseInt(data.tokenId, 16).toString(),
      'Token Standard': 'ERC-721',
      Chain: 'Settlus',
      Creator: data.nickname,
      Owner: data.nickname,
    },
    revenue: {
      Price: data.price,
      Quantity: 7,
    },
  }
}
