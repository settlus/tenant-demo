import Modal from "../../../../shared/Modal/Modal";
import sendIcon from "../../../../public/svg/Send.svg";
import styles from "./ConfirmModal.module.scss";
import { transferNFT } from "../../../../apis/api";
import {useNavigate} from "react-router-dom";
import {useMutation} from 'react-query';
import { formatNum } from "../../../../utils/util";
import { useState } from "react";
import CheckImg from "../../../../public/svg/Check.svg";

type PropType={
  handleClose: ()=>void,
  open: boolean, 
  offer: any,
}

export default function ConfirmModal({open, handleClose, offer}:PropType):React.ReactElement{
  const navigate = useNavigate();
  const [isComplete, setIsComplete] = useState(false);
  const [hash, setHash] = useState(null);
  const {mutate, isLoading,} = useMutation(
    ()=>transferNFT(),
    {
      onSuccess: (hash)=>{
        sessionStorage.setItem('mission','5');
        setIsComplete(true);
        setHash(hash);
      },
    },
  )


  async function handleConfirm(){
    mutate();
  }

  return <Modal open={open} handleClose={!isComplete ? handleClose : undefined} style={styles.style}>
    <div className={styles.main}>
      {
        !isComplete && <>
        <h2>Confirm</h2>
          <img src={sendIcon} />
          <p>
          Once transferred, profits from NFT-licensed item will be vested to the new owner.
          <br /><br />
          You will receive {formatNum(offer.offerPrice)} to your account.<br />
          (In demo, no payment will be received.)
          </p>
          <button onClick={!isLoading ? handleConfirm: undefined} className={isLoading ? styles.loading : ''}>{isLoading ? 'Loading...' : 'Confirm'}</button>
        </>
      }
      {
        isComplete && <>
        <h2>Complete</h2>
        <img className={styles.complete} src={CheckImg} />
        <p>NFT has been successfully transferred to Joy.</p>
        <span>
          <button onClick={()=>{navigate('/complete');}}>Confirm</button>
          <button className={styles.scan}><a href={`https://${import.meta.env.VITE_CHAIN_TYPE}net.settlus.network/tx/${hash}`} target="_blank">View on Settlus Scan</a></button>
        </span>
        </>
      }

    </div>
  </Modal>
}