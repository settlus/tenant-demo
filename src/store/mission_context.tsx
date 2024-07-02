import React, { useState } from "react";

export interface MissionState {
  mission: number, handleMission: (mission:number)=>void;
  reset: ()=>void;
}

export const MissionContext = React.createContext<MissionState>({
  mission: 1, handleMission: ()=>{},
  reset: ()=>{},
});

interface GlobalProviderProps {
  children: React.ReactNode;
}

const MissionProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [mission, setMission] = useState<number>(parseInt(sessionStorage.getItem('mission') || '0',10));

  const handleMission = (mission:number)=>{
    sessionStorage.setItem('mission',`${mission}`);
    setMission(mission);
  }

  const reset = ()=>{
    setMission(0);
  }

  const state: MissionState = {
    mission, handleMission,
    reset
  };

  return (
    <MissionContext.Provider value={state}>
      {children}
    </MissionContext.Provider>
  );
};

export default MissionProvider;