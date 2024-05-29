import React, { useState } from "react";

import item1thumbnail from '../public/images/clothTemplate/Item1/Top_DefaultWear001F.png';
import item1template from '../public/images/clothTemplate/Item1/T_UGC_Top_DefaultWear001F_D.png';
import item2thumbnail from '../public/images/clothTemplate/Item2/Back_Backpack001_thumbnail.png';
import item2template from '../public/images/clothTemplate/Item2/T_UGC_Back_Backpack001_D.png';
import item3thumbnail from '../public/images/clothTemplate/Item3/Back_Backpack006.png';
import item3template from '../public/images/clothTemplate/Item3/T_UGC_Back_Backpack006_D.png';
import item4thumbnail from '../public/images/clothTemplate/Item4/Back_Shoe001.png';
import item4template from '../public/images/clothTemplate/Item4/T_UGC_Back_Shoe001_D.png';
import item5thumbnail from '../public/images/clothTemplate/Item5/Top_Crop010F.png';
import item5template from '../public/images/clothTemplate/Item5/T_UGC_Top_Crop010F_D.png';
import item6thumbnail from '../public/images/clothTemplate/Item6/Top_MTM003M.png';
import item6template from '../public/images/clothTemplate/Item6/T_UGC_Top_MTM003M_D.png';
import item7thumbnail from '../public/images/clothTemplate/Item7/Skirt_HalfSkirt001.png';
import item7template from '../public/images/clothTemplate/Item7/T_UGC_Skirt_HalfSkirt001_D.png';
import item8thumbnail from '../public/images/clothTemplate/Item8/Skirt_Longskirt001.png';
import item8template from '../public/images/clothTemplate/Item8/T_UGC_Skirt_Longskirt001_D.png';
import item9thumbnail from '../public/images/clothTemplate/Item9/Pants_Jean006.png';
import item9template from '../public/images/clothTemplate/Item9/T_UGC_Pants_Jean006_D.png';
import item10thumbnail from '../public/images/clothTemplate/Item10/Pants_DefaultShorts001.png';
import item10template from '../public/images/clothTemplate/Item10/T_UGC_Pants_DefaultShorts001_D.png';
import item11thumbnail from '../public/images/clothTemplate/Item11/Outer_Blouson001.png';
import item11template from '../public/images/clothTemplate/Item11/T_UGC_Outer_Blouson001_D.png';
import item12thumbnail from '../public/images/clothTemplate/Item12/Socks_Default005.png';
import item12template from '../public/images/clothTemplate/Item12/T_UGC_Socks_Default005_D.png';

import profile1 from '../public/svg/userProfile/profile1.svg';
import profile2 from '../public/svg/userProfile/profile2.svg';
import profile3 from '../public/svg/userProfile/profile3.svg';
import profile4 from '../public/svg/userProfile/profile4.svg';


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
}

const ITEM_ARR: itemType[] = [{
  thumbnailPng: item1thumbnail,
  meshName: 'DefaultWear001F',
  templatePng: item1template,
  title: 'Top Default 001',
  price: 3,
  creator: 'Creator 1',
  creatorProfilePng: profile1,
  quantity: 200000,
  offerValue: 100000,
},{
  thumbnailPng: item2thumbnail,
  meshName: 'Backpack001',
  templatePng: item2template,
  title: 'Backpack 001',
  price: 5,
  creator: 'Creator 3',
  creatorProfilePng: profile3,
  quantity: 100000,
  offerValue: 120000,
},{
  thumbnailPng: item3thumbnail,
  meshName: 'Backpack006',
  templatePng: item3template,
  title: 'Backpack 006',
  price: 6,
  creator: 'Creator 3',
  creatorProfilePng: profile3,
  quantity: 300000,
  offerValue: 130000,
},{
  thumbnailPng: item4thumbnail,
  meshName: 'Shoe001',
  templatePng: item4template,
  title: 'Shoe 001',
  price: 6,
  creator: 'Creator 2',
  creatorProfilePng: profile2,
  quantity: 50000,
  offerValue: 140000,
},{
  thumbnailPng: item5thumbnail,
  meshName: 'Crop010F',
  templatePng: item5template,
  title: 'Crop shirt 010',
  price: 4,
  creator: 'Creator 4',
  creatorProfilePng: profile4,
  quantity: 600000,
  offerValue: 170000,
},{
  thumbnailPng: item6thumbnail,
  meshName: 'MTM003M',
  templatePng: item6template,
  title: 'Top MTM',
  price: 7,
  creator: 'Creator 1',
  creatorProfilePng: profile1,
  quantity: 30000,
  offerValue: 180000,
},{
  thumbnailPng: item7thumbnail,
  meshName: 'HalfSkirt001',
  templatePng: item7template,
  title: 'Half Skirt 001',
  price: 5,
  creator: 'Creator 2',
  creatorProfilePng: profile2,
  quantity: 1000000,
  offerValue: 130000,
},{
  thumbnailPng: item8thumbnail,
  meshName: 'Longskirt001',
  templatePng: item8template,
  title: 'Longskirt 001',
  price: 7,
  creator: 'Creator 3',
  creatorProfilePng: profile3,
  quantity: 80000,
  offerValue: 180000,
},{
  thumbnailPng: item9thumbnail,
  meshName: 'Jean006',
  templatePng: item9template,
  title: 'Jean 006',
  price: 7,
  creator: 'Creator 1',
  creatorProfilePng: profile1,
  quantity: 300000,
  offerValue: 180000,
},{
  thumbnailPng: item10thumbnail,
  meshName: 'DefaultShorts001',
  templatePng: item10template,
  title: 'Shorts 001',
  price: 4,
  creator: 'Creator 1',
  creatorProfilePng: profile1,
  quantity: 150000,
  offerValue: 140000,
},{
  thumbnailPng: item11thumbnail,
  meshName: 'Blouson001',
  templatePng: item11template,
  title: 'Blouson 001',
  price: 10,
  creator: 'Creator 3',
  creatorProfilePng: profile3,
  quantity: 270000,
  offerValue: 200000,
},{
  thumbnailPng: item12thumbnail,
  meshName: 'Default005',
  templatePng: item12template,
  title: 'Socks 005',
  price: 3,
  creator: 'Creator 4',
  creatorProfilePng: profile4,
  quantity: 180000,
  offerValue: 125000,
},];

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface shopState {
  items: itemType[], setItems: SetState<itemType[]>;
  selected: number, setSelected: SetState<number>;
  step: number, setStep: SetState<number>;
}

export const ShopContext = React.createContext<shopState>({
  items: [], setItems: ()=>{},
  selected: 0, setSelected: ()=>{},
  step: 0, setStep: ()=>{},
});

interface GlobalProviderProps {
  children: React.ReactNode;
}

const ShopProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [items, setItems] = useState<itemType[]>(ITEM_ARR);
  const [selected, setSelected] = useState<number>(0);
  const [step, setStep] = useState<number>(0);

  const state: shopState = {
    items, setItems,
    selected, setSelected,
    step, setStep,
  };

  return (
    <ShopContext.Provider value={state}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;