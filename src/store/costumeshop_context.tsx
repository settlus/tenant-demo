import React, { useState } from 'react'

import { itemType } from '../types/type'
import { ITEM_ARR } from '../utils/constants'

type SetState<T> = React.Dispatch<React.SetStateAction<T>>

export interface shopState {
  items: itemType[]
  setItems: SetState<itemType[]>
  selected: number
  setSelected: SetState<number>
  step: number
  setStep: SetState<number>
  reset: () => void
}

export const ShopContext = React.createContext<shopState>({
  items: [],
  setItems: () => {},
  selected: 0,
  setSelected: () => {},
  step: 0,
  setStep: () => {},
  reset: () => {},
})

interface GlobalProviderProps {
  children: React.ReactNode
}

const ShopProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [items, setItems] = useState<itemType[]>(ITEM_ARR)
  const [selected, setSelected] = useState<number>(0)
  const [step, setStep] = useState<number>(0)

  const reset = () => {
    setItems(ITEM_ARR)
    setSelected(0)
    setStep(0)
  }

  const state: shopState = {
    items,
    setItems,
    selected,
    setSelected,
    step,
    setStep,
    reset,
  }

  return <ShopContext.Provider value={state}>{children}</ShopContext.Provider>
}

export default ShopProvider
