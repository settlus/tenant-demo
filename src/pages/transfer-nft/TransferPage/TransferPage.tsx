import styles from './TransferPage.module.scss';
import docSvg from '../../../public/svg/Doc.svg';
import ConfirmModal from './ConfirmModal/ConfirmModal';
import { useContext, useState } from 'react';
import { DashboardContext } from '../../../store/dashboard_context';

export default function TransferPage(){
  const [isModal, setIsModal] = useState(false);
  const {offer, data} = useContext(DashboardContext);
  const index= offer ? offer.itemIndex : 0;

  const INFO = {
    thumbnail: data[index].thumbnail,
    title: data[index].title,
  }

  function handleOpen(){
    setIsModal(true);
  }

  function handleClose(){
    setIsModal(false);
  }

  return <div className={styles.main}>
    {isModal && <ConfirmModal open={isModal} handleClose={handleClose} offer={offer}/>}
    <h2>Sell NFT</h2>
    <div className={styles.image}>
      <img src={docSvg} className={styles.icon}/>
      <img src={INFO.thumbnail} className={styles.item}/>
    </div>
    <p>Transfer "{INFO.title}" To: </p>
    <p>{offer?.offerAddress}</p>
    <button className={styles.button} onClick={handleOpen}>Transfer & Receive ${offer?.offerPrice}</button>
  </div>
}