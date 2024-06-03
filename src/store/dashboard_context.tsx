import React, { useState } from "react";
import { DataType, OfferType } from "../types/type";

const INITIAL_DATA = {
  thumbnail: '',
  title: '',
  history: [],
  details: {
    'Contact Address':'0x72f223423984723649823782374982392e9',
    'Token ID': '',
    'Token Standard': 'ERC-721',
    'Chain': 'Settlus',
    'Creator ID': '',
    'Owner ID': '',
  },
  revenue: {
    'Price': 0,
    'Quantity': 0,
  },

}

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface DashboardState {
  isOfferModal: boolean; setIsOfferModal: SetState<boolean>;
  offer: OfferType, setOffer: SetState<OfferType>;
  data: DataType; setData: SetState<DataType>;
}

export const DashboardContext = React.createContext<DashboardState>({
  isOfferModal: false, setIsOfferModal: ()=>{},
  offer: null, setOffer: ()=>{},
  data: INITIAL_DATA, setData:()=>{},
});

interface GlobalProviderProps {
  children: React.ReactNode;
}

const DashboardProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isOfferModal, setIsOfferModal] = useState<boolean>(false);
  const [offer, setOffer] = useState<OfferType>({
    itemIndex: 0,
    offerAddress: 'xxxxxxx',
    offerPrice: 1000,
  }); //dummy initial state
  const [data, setData] = useState<DataType>(INITIAL_DATA);

  const state: DashboardState = {
    isOfferModal, setIsOfferModal,
    offer, setOffer,
    data, setData,
  };

  return (
    <DashboardContext.Provider value={state}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;