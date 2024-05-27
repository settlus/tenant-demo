import styles from './Detail.module.scss';
import Thumbnail from '../Thumbnail/Thumbnail';

export default function Detail(){
  return <div className={styles.main}>
  <h3>Detail</h3>
  <div className={styles.profile}>
    <Thumbnail />
    <p>Overdare Tshirt<br />$3</p>
    <span>
      <img src='https://s3-alpha-sig.figma.com/img/ca18/6811/db6278741f8ba7ccac3202f50cfbc7ec?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MV7OwQZY7hLSFIWbGbo8xD9O7ElT39jM9zDuaPOT4MPF~KgRGM~~nH-Su73DQzutuD9p~BrQuOUmAwxOrcH9Cz89aUAyDUKSL~qHxdSGD9WgGkG0d-RoueBRCxtPnucWzU12d~LagEwEW5lCGHwgKmchbdUdIBjxVwJheWhjqyTnqhVq8SHjWjIjSMg0QPpsoy3rU5gGu5UY-0L-nlvlFF4~lsizyxlaKlpRBSgdyJBXWOvKCAH0VRhy3viuuyra5mGhY5yWhI73ZRjJWQp19PIWbg8lJ1g0qBwbZtxYLJ86cCPesZ9FaMOi-x96tDJEDl46mHKUmGokx5VcJRiraw__'/>
      <p>Creator, NFT holder</p>
    </span>
  </div>

  <p className={styles.detail}>
    This item is NFT-licensed.<br />
    Profit will be paid to the NFT holder.<br />
    <br />
    Total sales quantity: 200,000<br />
    Total sold amount: $600,000
  </p>

  <button>Buy</button>
</div>
}