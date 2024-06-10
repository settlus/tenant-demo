import profile1 from '../public/svg/userProfile/profile1.svg';
import { InfoType, DataType } from '../types/type';
import { ethers } from 'ethers';
import { abi as TenantDemoAssetAbi } from './data/TenantDemoAsset.json'


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

export async function mintNFT(){

  await delay(2000);
  return;
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

export async function transferNFT(offer: any){
  // const prev = sessionStorage.getItem('nftArr') || '[]';
  // const arr = JSON.parse(prev);

  // if(offer.itemIndex<arr.length) arr.splice(offer.itemIndex, 1);
  // sessionStorage.setItem('nftArr',JSON.stringify(arr));

  await delay(2000);
  return;
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
      'Contact Address':'0x72f223423984723649823782374982392e9',
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

const provider = new ethers.JsonRpcProvider('https://settlus-dev-eth.migaloo.io', {
  name: 'settlus',
  chainId: 5371,
})

const pvKey = '0x42ae27fcc79a3c2df01918a38c90a397ae371f064026ae6efdd2663143593a2b'

async function mintNft(to: string, tokenUri: string) {
  const contract = new ethers.Contract(
    "0x96d97F921582A8df31c06dda16e6d4E41Ff02ED1",
    TenantDemoAssetAbi,
    new ethers.Wallet(pvKey, provider)
  )

  const tx = await contract.mintNft(to, tokenUri)
  return tx
}
