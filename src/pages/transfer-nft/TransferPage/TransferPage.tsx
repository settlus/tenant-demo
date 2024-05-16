import styles from './TransferPage.module.scss';
import docImg from '../../../public/images/doc.png';
import { useContext } from 'react';
import { DashboardContext } from '../../../store/dashboard_context';

export default function TransferPage(){
  const {offer, data} = useContext(DashboardContext);
  const index= offer ? offer.itemIndex : 0;

  const INFO = {
    thumbnail: data['off-chain'][index].image,
    title: data['on-chain'][index].title,
  }

  return <div className={styles.main}>
    <h2>Sell NFT</h2>
    <div className={styles.image}>
      <img src={docImg} className={styles.icon}/>
      <img src={INFO.thumbnail} className={styles.item}/>
    </div>
    <p>Transfer "{INFO.title}" To: </p>
    <p>{offer?.offerAddress}</p>
    <button>Transfer & Receive ${offer?.offerPrice}</button>
  </div>
}