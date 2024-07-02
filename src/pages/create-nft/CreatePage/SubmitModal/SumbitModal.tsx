import Modal from "../../../../shared/Modal/Modal.tsx";
import checkSvg from '../../../../public/svg/Check.svg';
import docSvg from '../../../../public/svg/Doc.svg';
import styles from './SubmitModal.module.scss';
import loadingSpinner from '../../../../public/svg/loading.svg';
import errorSvg from '../../../../public/svg/error.svg';
import retrySvg from '../../../../public/svg/retry.svg';


type PropType = {
  step: number,
  open: boolean,
  handleClose: ()=>void,
  handleStep: (step?:number)=>void, 
}

export default function SubmitModal({step, open, handleClose, handleStep}: PropType): React.ReactElement{
  const isLoaded = typeof window !=='undefined' && typeof window.Module !=='undefined';
  
  function handleClick(){
    handleClose();
    if(step===2.5){
      handleStep(0);
    }
    else handleStep();
  }

  return <>
    {step>0 && step<3 && <Modal open={open} handleClose={step>=2 ? handleClick : undefined} style={styles.style}>
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
        <div className={styles.icon} onClick={()=>window.open(`http://${import.meta.env.VITE_CHAIN_TYPE}net.settlus.network/nft/${import.meta.env.VITE_CONTRACT_ADDR}/${BigInt(sessionStorage.getItem('tokenId') || '0x0')}`,'_blank')}>
          <img className={styles.doc} src={docSvg} />
          <img className={styles.thumbnail} src={isLoaded ? Module.OVDR_Thumbnails?.main.url : ''} />
        </div>
      </>}
      {step===2.5 && <div className={styles.error}>
        <h3>ERROR</h3>
        <img className={styles.errorImg} src={errorSvg}/>
        <p>Error has occurred while minting NFT. Please retry.</p>
        <button onClick={()=>handleStep(1)}><img src={retrySvg} /><p>Retry</p></button>
      </div>}
    </Modal>}
  </>
}