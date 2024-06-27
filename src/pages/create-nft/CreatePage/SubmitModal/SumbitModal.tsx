import Modal from "../../../../shared/Modal/Modal.tsx";
import checkSvg from '../../../../public/svg/Check.svg';
import docSvg from '../../../../public/svg/Doc.svg';
import styles from './SubmitModal.module.scss';
import loadingSpinner from '../../../../public/svg/loading.svg';


type PropType = {
  step: number,
  open: boolean,
  handleClose: ()=>void,
  handleStep: ()=>void, 
}

export default function SubmitModal({step, open, handleClose, handleStep}: PropType): React.ReactElement{
  const isLoaded = typeof window !=='undefined' && typeof window.Module !=='undefined';
  
  function handleClick(){
    handleClose();
    handleStep();
  }

  return <>
    {step>0 && step<3 && <Modal open={open} handleClose={step===2 ? handleClick : undefined} style={styles.style}>
      {step===1 && <>
        <h3>Processing</h3>
        <div className={styles.loading}>
          <img className={styles.thumbnail} src={isLoaded ? Module.OVDR_Thumbnails?.main.url : ''} />
          <img src={loadingSpinner} />
          <div className={styles.nftDoc}>
            <img src={docSvg} />
            <h3>NFT</h3>
          </div>
        </div>
      </>}
      {step===2 && <>
        <h3>NFT Minted</h3>
        <img src={checkSvg}/>
        <div className={styles.icon}>
          <img className={styles.doc} src={docSvg} />
          <img className={styles.thumbnail} src={isLoaded ? Module.OVDR_Thumbnails?.main.url : ''} />
        </div>
      </>}
    </Modal>}
  </>
}