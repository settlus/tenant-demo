import Modal from "../../../../shared/Modal/Modal";
import sendIcon from "../../../../public/images/send.png";
import styles from "./ConfirmModal.module.scss";
import { transferNFT } from "../../../../apis/api";
import {useNavigate} from "react-router-dom";

type PropType={
  handleClose: ()=>void,
  open: boolean, 
  offer: any,
  data: any,
}

export default function ConfirmModal({open, handleClose, offer, data}:PropType):React.ReactElement{
  const navigate = useNavigate();

  async function handleConfirm(){
    await transferNFT(offer);
    navigate('/demo/complete');
  }

  return <Modal open={open} handleClose={handleClose} style={styles.style}>
    <div className={styles.main}>
      <h2>Confirm</h2>
      <img src={sendIcon} />
      <p>
      Once transferred, profits from NFT-licensed item will be vested to the new owner.
      <br /><br />
      You will receive ${offer.offerPrice} to your account.<br />
      (In demo, no payment will be received.)
      </p>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  </Modal>
}