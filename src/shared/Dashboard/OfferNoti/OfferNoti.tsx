import styles from './OfferNoti.module.scss';
import GiftboxImg from '../../../public/images/Giftbox.png';
import { useContext } from 'react';
import { DashboardContext } from '../../../store/dashboard_context';


export default function OfferNoti(){
  const {setIsOfferModal} = useContext(DashboardContext);

  function handleClick(){
    setIsOfferModal(true);
  }

  return <div className={styles.main}>
    <button onClick={handleClick}>
      <img src={GiftboxImg}/>
      <p>Offer Arrived!</p>
    </button>
  </div> 
}