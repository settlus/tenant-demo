import MissionCard from '../../../shared/MissionCard/MissionCard.tsx';
import styles from './DemoIntro.module.scss';
import Instruction from '../../../shared/Instruction/Instruction.tsx';
import Profile from './Profile/Profile.tsx';
import Header from '../../../shared/Header/Header.tsx';
import { useContext, useEffect } from 'react';
import { ShopContext } from '../../../store/costumeshop_context.tsx';
import { DashboardContext } from '../../../store/dashboard_context.tsx';

export default function DemoIntro(){
  const {reset: resetShop} = useContext(ShopContext);
  const {reset: resetDashboard} = useContext(DashboardContext);

  useEffect(()=>{
    sessionStorage.clear();
    sessionStorage.setItem('mission','0');
    resetShop();
    resetDashboard();

    return ()=>{}
  },[]);

  return <>
    <Header logoOnly={true} />
    <div className={styles.pos}>
      <Instruction title='Tips before you start the journey'
        typeWriter='On this Demo, you will create a 3D costume and monetize your IP in a special way.
        Follow the tutorial and complete all the missions!
        Write your creator nickname and enter the Shop!' />
      <div className={styles.intro}>
        <div className={styles.card}>
          <MissionCard title={"Tutorial Mission"} beforeStart={true} />
        </div>
        <Profile />
      </div>
  </div>
  </>
}