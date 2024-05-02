import styles from './Card.module.scss';
import introImg from '../../../../public/images/intro.png';

export default function Card(){
  return <div className={styles.card}>
    <img src={introImg} alt='intro' />
    <div className={styles.container}>
      <p>
        Create 3D avatar costumes,
        <br />set up NFT license,
        <br />and sell your costumes here
      </p>
      <button>ENTER Avatar Costume Shop</button>
    </div>
  </div>
}