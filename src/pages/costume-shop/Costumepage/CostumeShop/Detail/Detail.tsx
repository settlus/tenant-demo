import styles from './Detail.module.scss';
import Thumbnail from '../Thumbnail/Thumbnail';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../../../../store/costumeshop_context';
import { formatNum } from '../../../../../utils/util';
import GuidePointer from '../../../../../shared/GuidePointer/GuidePointer';

export default function Detail(){
  const {selected, items, step} = useContext(ShopContext);
  const selectedItem = items[selected];
  const navigate = useNavigate();

  const handleClick = ()=>{
    sessionStorage.setItem('mission','3');
    navigate('/demo/dashboard');
  }

  return <div className={`${styles.main} ${step===1 || step===2 ? styles.active : ''}`}>
  <h3>Detail</h3>
  <div className={styles.profile}>
    <Thumbnail thumbnail={selectedItem.thumbnailPng}/>
    <p>{selectedItem.title}<br />{formatNum(selectedItem.price)}</p>
    <span>
      <img src={selectedItem.creatorProfilePng}/>
      <p>{selectedItem.creator}, NFT holder</p>
    </span>
  </div>

  <p className={styles.detail}>
    This item is NFT-licensed.<br />
    Profit will be paid to the NFT holder.<br />
    <br />
    <span className={step===2 ? styles.active : ''} translate='no'>
      Total sales quantity: {selectedItem.quantity}<br />
      Total sold amount: {formatNum(selectedItem.quantity*selectedItem.price)}
    </span>
  </p>

  {selectedItem.userCreated ? 
    <GuidePointer doGuide={true}>
      <button className={styles.dashboardButton} onClick={handleClick}>Go to my dashboard</button> 
    </GuidePointer> 
    : <button>Buy</button>}
 
</div>
}