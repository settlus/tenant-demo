import React, { useState } from "react";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface GlobalState {
  nickName: string, setNickName: SetState<string>;
  missionState: number, setMissionState: SetState<number>;
}

export const GlobalContext = React.createContext<GlobalState>({
  nickName: '', setNickName: ()=>{},
  missionState: 0, setMissionState: ()=>{},
});

interface GlobalProviderProps {
  children: React.ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [nickName, setNickName] = useState('');
  const [missionState, setMissionState] = useState(0);

  const state: GlobalState = {
    nickName, setNickName,
    missionState, setMissionState,
  };

  return (
    <GlobalContext.Provider value={state}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;