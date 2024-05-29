import styles from './Card.module.scss';
import introSvg from '../../../../public/svg/Intro.svg';
import { useNavigate } from 'react-router-dom';


export default function Card(){
  const navigate = useNavigate();
  
  return <div className={styles.card}>
    <img src={introSvg} alt='intro' />
    <button onClick={()=>navigate('/intro/mission')}>Start !!</button>
  </div>
}