import giftImg from '../public/svg/Present.svg';
import user1 from '../public/svg/userProfile/user1.svg';
import user2 from '../public/svg/userProfile/user2.svg';
import user3 from '../public/svg/userProfile/user3.svg';
import user4 from '../public/svg/userProfile/user4.svg';
import user5 from '../public/svg/userProfile/user5.svg';
import user6 from '../public/svg/userProfile/user6.svg';
import userProfile from '../public/svg/userProfile/userProfile.svg';

import { InfoType, DataType } from '../types/type';


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
        'Profile': giftImg,
        'Activity': 'NFT Offer Arrived',
      },
      {
        'Profile': user5,
        'Activity': 'User 5 bought an item',
      },
      {
        'Profile': user1,
        'Activity': 'User 9 bought an item',
      },
      {
        'Profile': user2,
        'Activity': 'User 6 bought an item',
      },
      {
        'Profile': user3,
        'Activity': 'User 2 bought an item',
      },
      {
        'Profile': user4,
        'Activity': 'User 4 bought an item',
      },
      {
        'Profile': user5,
        'Activity': 'User 5 bought an item',
      },
      {
        'Profile': user6,
        'Activity': 'User 1 bought an item',
      },
      {
        'Profile': userProfile,
        'Activity': 'created an item',
      },
      {
        'Profile': userProfile,
        'Activity': 'minted NFT',
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