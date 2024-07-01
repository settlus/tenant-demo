import styles from './DashboardPage.module.scss';
import Dashboard from '../../../shared/Dashboard/Dashboard';
import Instruction from '../../../shared/Instruction/Instruction';
import GiftModal from '../../../shared/Dashboard/GiftModal/GiftModal';
import { useContext, useEffect } from 'react';
import { DashboardContext } from '../../../store/dashboard_context';

export default function Main(){
  const {step, setStep, setOffer, isGiftModal, setIsGiftModal} = useContext(DashboardContext);

  const handleStep = ()=>{
    setStep(prev=>prev+1);
  }

  useEffect(()=>{
    if(step===1){
      setOffer({
        itemIndex: 0,
        offerAddress: import.meta.env.VITE_JOY_PB_KEY,
        offerPrice: 1000000,
      });
      setIsGiftModal(true);
    }
  },[step]);

  return <div className={styles.main}>
    { isGiftModal && <GiftModal open={isGiftModal} />}
    <div className={styles.instruction}>
      <Instruction title='🎉 Congratulations on your first revenue!' 
       typeWriter='On the creator’s dashboard, you can see your NFT info, Item listing, and activity history. Click the contract address to see your minting on Settlus Scan.' />
      {/* {step===1 && <GuidePointer doGuide={step===1}>
        <Navigation handleClick={handleStep}/>
      </GuidePointer>} */}
    </div>
    <Dashboard />
  </div>
}