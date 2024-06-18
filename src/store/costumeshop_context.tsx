import React, { useState } from "react";
import { item1thumbnail, item1template,
  item2thumbnail, item2template,
  item3thumbnail, item3template,
  item4thumbnail, item4template,
  item5thumbnail, item5template,
  item6thumbnail, item6template,
  item7thumbnail, item7template,
  item8thumbnail, item8template,
  item9thumbnail, item9template,
  item10thumbnail, item10template,
  item11thumbnail, item11template,
  item12thumbnail, item12template,
 } from "../public/images/clothTemplate";
import { profile1, profile2, profile3, profile4 } from '../public/svg/userProfile';


export type itemType = {
  thumbnailPng: string,
  meshName: string,
  templatePng: string,
  title: string, 
  price: number, 
  creator: string, 
  creatorProfilePng: string, 
  quantity: number,
  offerValue: number,
  userCreated?: boolean,
}

export const ITEM_ARR: itemType[] = [{
  thumbnailPng: item1thumbnail,
  meshName: 'DefaultWear001F',
  templatePng: item1template,
  title: 'Top Default 001',
  price: 3,
  creator: 'Joy',
  creatorProfilePng: profile1,
  quantity: 200000,
  offerValue: 100000,
},{
  thumbnailPng: item2thumbnail,
  meshName: 'Backpack001',
  templatePng: item2template,
  title: 'Backpack 001',
  price: 5,
  creator: 'Jay',
  creatorProfilePng: profile3,
  quantity: 100000,
  offerValue: 120000,
},{
  thumbnailPng: item3thumbnail,
  meshName: 'Backpack006',
  templatePng: item3template,
  title: 'Backpack 006',
  price: 6,
  creator: 'Jay',
  creatorProfilePng: profile3,
  quantity: 300000,
  offerValue: 130000,
},{
  thumbnailPng: item4thumbnail,
  meshName: 'Shoe001',
  templatePng: item4template,
  title: 'Shoe 001',
  price: 6,
  creator: 'Ann',
  creatorProfilePng: profile2,
  quantity: 50000,
  offerValue: 140000,
},{
  thumbnailPng: item5thumbnail,
  meshName: 'Crop010F',
  templatePng: item5template,
  title: 'Crop shirt 010',
  price: 4,
  creator: 'Chloe',
  creatorProfilePng: profile4,
  quantity: 600000,
  offerValue: 170000,
},{
  thumbnailPng: item6thumbnail,
  meshName: 'MTM003M',
  templatePng: item6template,
  title: 'Top MTM',
  price: 7,
  creator: 'Joy',
  creatorProfilePng: profile1,
  quantity: 30000,
  offerValue: 180000,
},{
  thumbnailPng: item7thumbnail,
  meshName: 'HalfSkirt001',
  templatePng: item7template,
  title: 'Half Skirt 001',
  price: 5,
  creator: 'Ann',
  creatorProfilePng: profile2,
  quantity: 1000000,
  offerValue: 130000,
},{
  thumbnailPng: item8thumbnail,
  meshName: 'Longskirt001',
  templatePng: item8template,
  title: 'Longskirt 001',
  price: 7,
  creator: 'Jay',
  creatorProfilePng: profile3,
  quantity: 80000,
  offerValue: 180000,
},{
  thumbnailPng: item9thumbnail,
  meshName: 'Jean006',
  templatePng: item9template,
  title: 'Jean 006',
  price: 7,
  creator: 'Joy',
  creatorProfilePng: profile1,
  quantity: 300000,
  offerValue: 180000,
},{
  thumbnailPng: item10thumbnail,
  meshName: 'DefaultShorts001',
  templatePng: item10template,
  title: 'Shorts 001',
  price: 4,
  creator: 'Joy',
  creatorProfilePng: profile1,
  quantity: 150000,
  offerValue: 140000,
},{
  thumbnailPng: item11thumbnail,
  meshName: 'Blouson001',
  templatePng: item11template,
  title: 'Blouson 001',
  price: 10,
  creator: 'Jay',
  creatorProfilePng: profile3,
  quantity: 270000,
  offerValue: 200000,
},{
  thumbnailPng: item12thumbnail,
  meshName: 'Default005',
  templatePng: item12template,
  title: 'Socks 005',
  price: 3,
  creator: 'Chloe',
  creatorProfilePng: profile4,
  quantity: 180000,
  offerValue: 125000,
},];

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface shopState {
  items: itemType[], setItems: SetState<itemType[]>;
  selected: number, setSelected: SetState<number>;
  step: number, setStep: SetState<number>;
  reset: ()=>void;
}

export const ShopContext = React.createContext<shopState>({
  items: [], setItems: ()=>{},
  selected: 0, setSelected: ()=>{},
  step: 0, setStep: ()=>{},
  reset: ()=>{},
});

interface GlobalProviderProps {
  children: React.ReactNode;
}

const ShopProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [items, setItems] = useState<itemType[]>(ITEM_ARR);
  const [selected, setSelected] = useState<number>(0);
  const [step, setStep] = useState<number>(0);

  const reset = ()=>{
    setItems(ITEM_ARR);
    setSelected(0);
    setStep(0);
  }

  const state: shopState = {
    items, setItems,
    selected, setSelected,
    step, setStep,
    reset,
  };

  return (
    <ShopContext.Provider value={state}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;