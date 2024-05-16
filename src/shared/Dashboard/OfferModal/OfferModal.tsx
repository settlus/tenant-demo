import styles from './OfferModal.module.scss';
import Modal from "../../Modal/Modal";
import GiftImg from "../../../public/images/Giftbox.png";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom';
import { DashboardContext } from "../../../store/dashboard_context";

export default function OfferModal(){
  const {isOfferModal, setIsOfferModal} = useContext(DashboardContext);
  const navigate = useNavigate();

  function handleClose(){
    setIsOfferModal(false);
  }

  // function handleProceed(){
  //   navigate();
  // }

  return <Modal open={isOfferModal} style={styles.style}>
    <div className={styles.main}>
      <h3>Deal Offer</h3>
      <img src={GiftImg}/>
      <p>
      Someone has just offered to buy your NFT for $1,000,000. 
      Want to accept the offer 
      and transfer NFT?
      <br /><br />
      *Once transferred, revenue from selling this NFT costume will be vested to the new owner.
      </p>
      <div className={styles.buttons}>
        <button onClick={handleClose}>Cancel</button>
        <button className={styles.proceed}>Proceed</button>
      </div>
    </div>
  </Modal>
}