import styles from './OfferModal.module.scss';
import Modal from "../../Modal/Modal";
import GiftSvg from "../../../public/svg/Present.svg";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom';
import { DashboardContext } from "../../../store/dashboard_context";
import profile1 from '../../../public/svg/userProfile/profile1.svg';

export default function OfferModal(){
  const {isOfferModal, setIsOfferModal, offer} = useContext(DashboardContext);
  const navigate = useNavigate();

  function handleClose(){
    setIsOfferModal(false);
  }

  function handleProceed(){
    handleClose();
    sessionStorage.setItem('mission','4')
    navigate('/demo/transfer-nft');
  }

  return <Modal open={isOfferModal} style={styles.style}>
    <div className={styles.main}>
      <h3>Deal Offer</h3>
      <img src={GiftSvg}/>
      <p>
      <img src={profile1} />Joy has just offered to buy your NFT for ${offer?.offerPrice}. 
      Want to accept the offer 
      and transfer NFT?
      <br /><br />
      *Once transferred, revenue from selling this NFT costume will be vested to the new owner.
      </p>
      <div className={styles.buttons}>
        <button onClick={handleClose}>Cancel</button>
        <button className={styles.proceed} onClick={handleProceed}>Proceed</button>
      </div>
    </div>
  </Modal>
}