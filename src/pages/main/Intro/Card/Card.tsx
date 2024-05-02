import styles from './Card.module.scss';
import introImg from '../../../../public/images/intro.png';
import { useNavigate } from 'react-router-dom';


export default function Card(){
  const navigate = useNavigate();

  return <div className={styles.card}>
    <img src={introImg} alt='intro' />
    <div className={styles.container}>
      <p>
        Create 3D avatar costumes,
        <br />set up NFT license,
        <br />and sell your costumes here
      </p>
      <button onClick={()=>navigate('/demo/intro')}>ENTER Avatar Costume Shop</button>
    </div>
  </div>
}