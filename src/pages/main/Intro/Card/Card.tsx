import styles from './Card.module.scss';
import introSvg from '../../../../public/svg/Intro.svg';
import { useNavigate } from 'react-router-dom';


export default function Card(){
  const navigate = useNavigate();
  
  return <div className={styles.card}>
    <img src={introSvg} alt='intro' />
    <div className={styles.container}>
      <p>
        Create 3D avatar costumes,
        <br />set up NFT license,
        <br />and sell your costumes here
      </p>
      <button onClick={()=>navigate('/intro/mission')}>ENTER Avatar Costume Shop</button>
    </div>
  </div>
}