import styles from './OfferModal.module.scss';
import GiftSvg from "../../../public/svg/Present.svg";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom';
import { DashboardContext } from "../../../store/dashboard_context";
import profile1 from '../../../public/svg/userProfile/profile1.svg';
import { formatNum } from '../../../utils/util';

export default function OfferModal(){
  const { offer, setIsGiftModal, setStep} = useContext(DashboardContext);
  const navigate = useNavigate();

  function handleClose(){
    setStep(2);
    setIsGiftModal(false);
    navigate('/demo/dashboard')

  }

  function handleProceed(){
    handleClose();
    sessionStorage.setItem('mission','4')
    navigate('/demo/transfer-nft');
  }

  return <div className={styles.main}>
      <h3>Deal Offer</h3>
      <img src={GiftSvg}/>
      <p>
      <img src={profile1} />Joy has just offered to buy your NFT for {formatNum(offer?.offerPrice || 1000)}. 
      Want to accept the offer 
      and transfer NFT?
      <br /><br />
      *Once transferred, revenue from selling this NFT costume will be vested to the new owner.
      </p>
      <div className={styles.buttons}>
        <button className={styles.cancel} onClick={handleClose}>Cancel</button>
        <button className={styles.proceed} onClick={handleProceed}>Proceed</button>
      </div>
    </div>
}