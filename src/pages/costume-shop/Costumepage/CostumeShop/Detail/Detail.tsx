import styles from './Detail.module.scss';
import Thumbnail from '../Thumbnail/Thumbnail';
import { useContext } from 'react';
import { ShopContext } from '../../../../../store/costumeshop_context';

export default function Detail(){
  const {selected, items} = useContext(ShopContext);
  const selectedItem = items[selected];

  return <div className={styles.main}>
  <h3>Detail</h3>
  <div className={styles.profile}>
    <Thumbnail thumbnail={selectedItem.thumbnailPng}/>
    <p>{selectedItem.title}<br />${selectedItem.price}</p>
    <span>
      <img src={selectedItem.creatorProfilePng}/>
      <p>{selectedItem.creator}, NFT holder</p>
    </span>
  </div>

  <p className={styles.detail}>
    This item is NFT-licensed.<br />
    Profit will be paid to the NFT holder.<br />
    <br />
    Total sales quantity: {selectedItem.quantity}<br />
    Total sold amount: ${selectedItem.quantity*selectedItem.price}
  </p>

  <button>Buy</button>
</div>
}