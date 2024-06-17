import styles from './DashboardPage.module.scss';
import Dashboard from '../../../shared/Dashboard/Dashboard';
import Instruction from '../../../shared/Instruction/Instruction';
import Navigation from '../../../shared/Navigation/Navigation';
import { useContext, useEffect } from 'react';
import { DashboardContext } from '../../../store/dashboard_context';

export default function Main(){
  const {step, setStep, setOffer} = useContext(DashboardContext);

  const handleStep = ()=>{
    setStep(prev=>prev+1);
  }

  useEffect(()=>{
    if(step===2){
      setOffer({
        itemIndex: 0,
        offerAddress: import.meta.env.VITE_JOY_PB_KEY,
        offerPrice: 1000,
      });
    }
  },[step]);

  return <div className={styles.main}>
    <div className={styles.instruction}>
      <Instruction title={step===0 ? '🎉 Congratulations on your first revenue!' : '🎉 Sell your NFT license to earn more profits'}>
      {step<2 ? 'On the creator’s dashboard, you can see your NFT info, Item listing, and activity history. Click the contract address to see your minting on Settlus Scan.'
      : ' As more users buy your item, sales revenue increases and so does the value of your NFT. Look! You’ve received an offer from a NFT collector. '}
      </Instruction>
      {step===1 && <Navigation handleClick={handleStep}/>}
    </div>
    <Dashboard />
  </div>
}