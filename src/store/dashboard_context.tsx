import React, { useState } from "react";

type offerType = {
  itemIndex: number,
  offerAddress: string,
  offerPrice: number,
} | null;

export interface DashboardState {
  isModal: number; setIsModal: (value: number) => void; //0: closed, 1: collapsed, 2: open
  isOfferModal: boolean; setIsOfferModal: (value: boolean)=>void;
  offer: offerType, setOffer: (value: offerType)=>void;
  selected: number; setSelected: (value:any) =>void;
  data: any; setData: (value:any)=>void;
  type: string; setType: (value:string)=>void;
}

export const DashboardContext = React.createContext<DashboardState>({
  isModal: 0, setIsModal: ()=>{},
  isOfferModal: false, setIsOfferModal: ()=>{},
  offer: null, setOffer: ()=>{},
  selected:0, setSelected: ()=>{},
  data: [], setData:()=>{},
  type: 'on-chain', setType:()=>{},
});

interface GlobalProviderProps {
  children: React.ReactNode;
}

const DashboardProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isModal, setIsModal] = useState<number>(0);
  const [isOfferModal, setIsOfferModal] = useState<boolean>(false);
  const [offer, setOffer] = useState<offerType>({
    itemIndex: 0,
    offerAddress: 'xxxxxxx',
    offerPrice: 1000,
  }); //dummy initial state
  const [selected, setSelected] = useState<number>(0);
  const [data, setData] = useState<any[]>([]);
  const [type, setType] = useState<string>('on-chain');

  const state: DashboardState = {
    isModal, setIsModal,
    isOfferModal, setIsOfferModal,
    offer, setOffer,
    selected, setSelected,
    data, setData,
    type, setType,
  };

  return (
    <DashboardContext.Provider value={state}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;