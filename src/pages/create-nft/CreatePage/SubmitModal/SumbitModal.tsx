import Modal from "../../../../shared/Modal/Modal.tsx";
import checkSvg from '../../../../public/svg/Check.svg';
import docSvg from '../../../../public/svg/Doc.svg';
import styles from './SubmitModal.module.scss';


type PropType = {
  step: number,
  open: boolean,
  handleClose: ()=>void,
  handleStep: ()=>void, 
}

export default function SubmitModal({step, open, handleClose, handleStep}: PropType): React.ReactElement{
  
  function handleClick(){
    handleClose();
    handleStep();
  }

  return <>
    {step>0 && step<3 && <Modal open={open} handleClose={step===2 ? handleClick : undefined}>
      {step===1 && <h3>Processing</h3>}
      {step===2 && <>
        <h3>NFT Minted</h3>
        <img src={checkSvg}/>
        <div className={styles.icon}>
          <img src={docSvg} />
        </div>
      </>}
    </Modal>}
  </>
}