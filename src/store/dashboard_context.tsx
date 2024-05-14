import React, { useState } from "react";

export interface DashboardState {
  isModal: number; setIsModal: (value: number) => void; //0: closed, 1: collapsed, 2: open
  selected: number; setSelected: (value:any) =>void;
  data: any; setData: (value:any)=>void;
}

export const DashboardContext = React.createContext<DashboardState>({
  isModal: 0, setIsModal: ()=>{},
  selected:0, setSelected: ()=>{},
  data: {'on-chain': [], 'off-chain': []}, setData:()=>{},
});

interface GlobalProviderProps {
  children: React.ReactNode;
}

const DashboardProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isModal, setIsModal] = useState<number>(0);
  const [selected, setSelected] = useState<number>(0);
  const [data, setData] = useState<any>({'on-chain': [], 'off-chain': []});

  const state: DashboardState = {
    isModal, setIsModal,
    selected, setSelected,
    data, setData,
  };

  return (
    <DashboardContext.Provider value={state}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;