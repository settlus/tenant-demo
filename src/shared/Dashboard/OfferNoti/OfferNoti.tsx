import styles from './OfferNoti.module.scss';
import GiftboxSvg from '../../../public/svg/Present.svg';
import { useContext } from 'react';
import { DashboardContext } from '../../../store/dashboard_context';


export default function OfferNoti(){
  const {setIsOfferModal} = useContext(DashboardContext);

  function handleClick(){
    setIsOfferModal(true);
  }

  return <div className={styles.main}>
    <button onClick={handleClick}>
      <img src={GiftboxSvg}/>
      <p>Offer Arrived!</p>
    </button>
  </div> 
}