import profile1 from '../public/svg/userProfile/profile1.svg';
import { InfoType, DataType } from '../types/type';
import { ethers } from 'ethers';
import { abi as TenantDemoAssetAbi } from './data/TenantDemoAsset.json'

const ENV = import.meta.env

const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function getBase64Image(file: string) {
  const response = await fetch(file);
  const blob = await response.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);

    reader.onload = () => {
      resolve(reader.result); 
    };

    reader.onerror = (error) => {
      reject(error);
    };
  });
}

async function createContract(){
  const provider = new ethers.JsonRpcProvider(ENV.VITE_DEVNET_RPC_URL, {
    name: 'settlus',
    chainId: parseInt(ENV.VITE_DEVNET_CHAIN_ID,10),
  })

  const contract = new ethers.Contract(
    ENV.VITE_CONTRACT_ADDR,
    TenantDemoAssetAbi,
    new ethers.Wallet(ENV.VITE_USER_PV_KEY, provider)
  )
  return contract
}

export async function parseData(hash: any): Promise<string> {
  const provider = new ethers.JsonRpcProvider(ENV.VITE_DEVNET_RPC_URL, {
    name: 'settlus',
    chainId: parseInt(ENV.VITE_DEVNET_CHAIN_ID, 10),
  })

  console.log(hash)
  await provider.waitForTransaction(hash)
  const tx = await provider.getTransactionReceipt(hash) //'0x8512dcb5b0b323bd1a4ca0c94761c7d2c78ca71d92918e15925b90ff3ff9cefe'

  console.log(tx?.logs)
  console.log(typeof tx?.logs[0].topics[3])
  return tx?.logs[0].topics[3] || '0x0'
}


export async function mintNFT(thumbnail: string){
  const contract = await createContract()
  const tx = await contract.mintNft(ENV.VITE_USER_PB_KEY, '알맞은 URI')
  console.log(tx)

  const tokenId = await parseData(tx.hash)
 
  sessionStorage.setItem('tokenId', tokenId);
  return tx
}

export async function transferNFT(offer?: any){
  const tokenId = sessionStorage.getItem('tokenId') || '0x0';
  const dec = BigInt(tokenId)

  const contract = await createContract();
  

  await delay(2000);
  try{
    const tx = await contract.safeTransferFrom(ENV.VITE_USER_PB_KEY, ENV.VITE_JOY_PB_KEY, dec)
    console.log(tx)
    
    return tx
  }catch(e){
    console.log(e);
    return e
  }
}

export async function createItem(info: InfoType, thumbnail: string, file:string){
  const base64Thumbnail = await getBase64Image(thumbnail);
  const base64Template = await getBase64Image(file);
  const item = JSON.stringify({
    ...info,
    thumbnail: base64Thumbnail,
    template: base64Template,
  });
  sessionStorage.setItem('itemInfo',item);
}

export async function getItem(){
  const raw = sessionStorage.getItem('itemInfo');
  const name = getNickName();
  const result = raw ? JSON.parse(raw) : {};
  return {...result, nickname: name};
}

export function getNickName(){
  const name = sessionStorage.getItem('nickname') || 'User';
  return name;
}

export async function getData(): Promise<DataType>{
  const data = await getItem();

  return {
    thumbnail: data.thumbnail,
    title: data.name,
    history: [
      {
        'Profile': profile1,
        'Activity': 'NFT Offer Arrived',
      },
      {
        'Profile': profile1,
        'Activity': 'bought an item',
      },
      {
        'Profile': profile1,
        'Activity': 'bought an item',
      },
      {
        'Activity': 'List an Item and start sales on Avatar Costume Shop',
      },
      {
        'Activity': 'Create a costume and minted as NFT on Settlus Blockchain',
      },
    ],
    details: {
      'Contract Address':'0x72f223423984723649823782374982392e9',
      'Token ID': '',
      'Token Standard': 'ERC-721',
      'Chain': 'Settlus',
      'Creator ID': '',
      'Owner ID': '',
    },
    revenue: {
      'Price': data.price,
      'Quantity': 7,
    },

  }
}