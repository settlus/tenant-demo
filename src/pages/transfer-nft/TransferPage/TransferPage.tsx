import styles from './TransferPage.module.scss';
import docSvg from '../../../public/svg/Doc.svg';
import ConfirmModal from './ConfirmModal/ConfirmModal';
import { useContext, useState, useEffect } from 'react';
import { DashboardContext } from '../../../store/dashboard_context';
import profile1 from '../../../public/svg/userProfile/profile1.svg';
import { getItem } from '../../../apis/api';

export default function TransferPage(){
  const [isModal, setIsModal] = useState(false);
  const [data, setData] = useState({thumbnail: '', name: ''});
  const {offer} = useContext(DashboardContext);

  function handleOpen(){
    setIsModal(true);
  }

  function handleClose(){
    setIsModal(false);
  }

  useEffect(()=>{
    const loadData = async()=>{
      const temp = await getItem();
      setData(temp);
    }
    
    loadData();
  },[]);

  return <div className={styles.main}>
    {isModal && <ConfirmModal open={isModal} handleClose={handleClose} offer={offer}/>}
    <h2>Sell NFT</h2>
    <div className={styles.image}>
      <img src={docSvg} className={styles.icon}/>
      <img src={data.thumbnail} className={styles.item}/>
    </div>
    <p>Transfer "{data.name}" To <img src={profile1}/>Joy: </p>
    <p>{offer?.offerAddress}</p>
    <button className={styles.button} onClick={handleOpen}>Transfer & Receive ${offer?.offerPrice}</button>
  </div>
}