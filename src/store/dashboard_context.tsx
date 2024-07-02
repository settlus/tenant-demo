import React, { useState } from "react";
import { DataType, OfferType } from "../types/type";
import { INITIAL_NFT_INFO as INITIAL_DATA } from "../utils/constants";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface DashboardState {
  isGiftModal: boolean; setIsGiftModal: SetState<boolean>;
  isOfferModal: boolean; setIsOfferModal: SetState<boolean>;
  offer: OfferType; setOffer: SetState<OfferType>;
  data: DataType; setData: SetState<DataType>;
  step: number; setStep: SetState<number>;
  reset: ()=>void;
}

export const DashboardContext = React.createContext<DashboardState>({
  isGiftModal: false, setIsGiftModal: ()=>{},
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
  const [isGiftModal, setIsGiftModal] = useState<boolean>(false);
  const [isOfferModal, setIsOfferModal] = useState<boolean>(false);
  const [offer, setOffer] = useState<OfferType>({
    itemIndex: -1,
    offerAddress: import.meta.env.VITE_JOY_PB_KEY,
    offerPrice: 1000000,
  });
  const [data, setData] = useState<DataType>(INITIAL_DATA);
  const [step, setStep] = useState<number>(0);

  const reset = ()=>{
    setIsOfferModal(false);
    setOffer(null);
    setStep(0);
  }

  const state: DashboardState = {
    isGiftModal, setIsGiftModal,
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