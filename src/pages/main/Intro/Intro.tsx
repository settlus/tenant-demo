import Card from './Card/Card.tsx';
import styles from './Intro.module.scss';

export default function Intro(){
  return <div className={styles.intro}>
    <h2>Experience <b>NFT Licensing</b> in a minute!</h2>
    <p>
      Settlus is the upcoming standard of creator economy.
      <br />
      Experience as an avatar costume creator and learn the value of  NFT licensing on Settlus.
    </p>

    <Card />
  </div>
}