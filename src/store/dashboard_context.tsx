import React, { useState } from "react";

export interface DashboardState {
  isModal: number; //0: closed, 1: collapsed, 2: open
  setIsModal: (value: number) => void;
}

export const DashboardContext = React.createContext<DashboardState>({
  isModal: 0,
  setIsModal: ()=>{},
});

interface GlobalProviderProps {
  children: React.ReactNode;
}

const DashboardProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isModal, setIsModal] = useState<number>(0);

  const state: DashboardState = {
    isModal, setIsModal
  };

  return (
    <DashboardContext.Provider value={state}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;