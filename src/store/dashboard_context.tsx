import React, { useState } from "react";
import { DataType, OfferType } from "../types/type";

const INITIAL_DATA = {
  thumbnail: '',
  title: '',
  history: [],
  details: {
    'Contract Address':'0x72f223423984723649823782374982392e9',
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
  offer: OfferType; setOffer: SetState<OfferType>;
  data: DataType; setData: SetState<DataType>;
  step: number; setStep: SetState<number>;
  reset: ()=>void;
}

export const DashboardContext = React.createContext<DashboardState>({
  isOfferModal: false, setIsOfferModal: ()=>{},
  offer: null, setOffer: ()=>{},
  data: INITIAL_DATA, setData:()=>{},
  step:0, setStep:()=>{},
  reset:()=>{},
});

interface GlobalProviderProps {
  children: React.ReactNode;
}

const DashboardProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isOfferModal, setIsOfferModal] = useState<boolean>(false);
  const [offer, setOffer] = useState<OfferType>(null); //dummy initial state
  const [data, setData] = useState<DataType>(INITIAL_DATA);
  const [step, setStep] = useState<number>(0);

  const reset = ()=>{
    setIsOfferModal(false);
    setOffer(null);
    setStep(0);
  }

  const state: DashboardState = {
    isOfferModal, setIsOfferModal,
    offer, setOffer,
    data, setData,
    step, setStep,
    reset,
  };

  return (
    <DashboardContext.Provider value={state}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;