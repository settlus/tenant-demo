import React, { useState } from "react";

export interface DashboardState {
  isModal: boolean;
  setIsModal: (value: boolean) => void;
}

export const DashboardContext = React.createContext<DashboardState>({
  isModal: false,
  setIsModal: ()=>{},
});

interface GlobalProviderProps {
  children: React.ReactNode;
}

const DashboardProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isModal, setIsModal] = useState<boolean>(false);

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