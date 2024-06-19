import Modal from "../../../../shared/Modal/Modal";
import sendIcon from "../../../../public/svg/Send.svg";
import styles from "./ConfirmModal.module.scss";
import { transferNFT } from "../../../../apis/api";
import {useNavigate} from "react-router-dom";
import {useMutation} from 'react-query';
import { formatNum } from "../../../../utils/util";

type PropType={
  handleClose: ()=>void,
  open: boolean, 
  offer: any,
}

export default function ConfirmModal({open, handleClose, offer}:PropType):React.ReactElement{
  const navigate = useNavigate();
  const {mutate, isLoading,} = useMutation(
    ()=>transferNFT(),
    {
      onSuccess: ()=>{
        sessionStorage.setItem('mission','5');
        navigate('/complete');
      },
    },
  )


  async function handleConfirm(){
    mutate();
  }

  return <Modal open={open} handleClose={handleClose} style={styles.style}>
    <div className={styles.main}>
      <h2>Confirm</h2>
      <img src={sendIcon} />
      <p>
      Once transferred, profits from NFT-licensed item will be vested to the new owner.
      <br /><br />
      You will receive {formatNum(offer.offerPrice)} to your account.<br />
      (In demo, no payment will be received.)
      </p>
      <button onClick={handleConfirm} className={isLoading ? styles.loading : ''}>{isLoading ? 'Loading...' : 'Confirm'}</button>
    </div>
  </Modal>
}