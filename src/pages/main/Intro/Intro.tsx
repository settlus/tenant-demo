import Card from './Card/Card.tsx';
import styles from './Intro.module.scss';
import { useContext, useEffect } from 'react';
import { ShopContext } from '../../../store/costumeshop_context.tsx';
import { DashboardContext } from '../../../store/dashboard_context.tsx';
import { MissionContext } from '../../../store/mission_context.tsx';

export default function Intro(){
  const {reset: resetShop} = useContext(ShopContext);
  const {reset: resetDashboard} = useContext(DashboardContext);
  const {reset: resetMission} = useContext(MissionContext);

  useEffect(()=>{
    sessionStorage.clear();
    sessionStorage.setItem('mission','0');
    resetShop();
    resetDashboard();
    resetMission();

    return ()=>{}
  },[]);

  return <div className={styles.intro}>
    <h2>Experience <b>NFT Licensing</b> in a minute!</h2>
    <p>
      Settlus is the upcoming standard of creator economy.
      <br />
      Experience as an avatar costume creator and learn the value of  NFT licensing on Settlus.
    </p>

    <Card />
  </div>
}