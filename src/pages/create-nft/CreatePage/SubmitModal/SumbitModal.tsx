import {useNavigate} from 'react-router-dom';
import Modal from "../../../../shared/Modal/Modal.tsx";
import checkImg from '../../../../public/images/check.png';
import docImg from '../../../../public/images/doc.png';
import styles from './SubmitModal.module.scss';


type PropType = {
  step: number,
  open: boolean,
  handleClose: ()=>void,
}

export default function SubmitModal({step, open, handleClose}: PropType): React.ReactElement{
  const navigate = useNavigate();
  
  function handleClick(){
    handleClose();
    navigate('/demo/dashboard');
  }

  return <>
    {step>2 && step<5 && <Modal open={open} handleClose={handleClick}>
      {step===3 && <h3>Processing</h3>}
      {step===4 && <>
        <h3>NFT Minted</h3>
        <img src={checkImg}/>
        <div className={styles.icon}>
          <img src={docImg} />
        </div>
      
      </>}
    </Modal>}
  </>
}