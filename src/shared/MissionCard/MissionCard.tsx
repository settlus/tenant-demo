import styles from './MissionCard.module.scss';
import bulletIcon from '../../public/svg/bullet.svg';
import checkBulletIcon from '../../public/svg/checkBullet.svg';
import sparkleIcon from '../../public/svg/Sparkle.svg';
import { useRef } from 'react';

const STEPS = [
  '1. Browse Avatar Costume Shop',
  '2. Create 3D costume & mint as NFT',
  '3. Check your item on the Costume Shop',
  '4. Check the NFT info of your costume',
  '5. Sell the NFT',
]

type PropType={
  title: string,
  beforeStart?: boolean,
}

export default function MissionCard({title, beforeStart}: PropType): React.ReactElement{
  const missionRef = useRef(beforeStart ? '0' : sessionStorage.getItem('mission') || '0');
  const mission = Number(missionRef.current);

  return <div className={styles.mission}>
    <img src={sparkleIcon} className={styles.sparkle} />
    <h3>{title}</h3>
    <p>{mission} / 5</p>
    <ul>
      {STEPS.map((item, index)=><li key={item} className={index===mission && !beforeStart ? styles.current : ''}><img src={index<mission ? checkBulletIcon : bulletIcon}/>{item}</li>)}
    </ul>
    
  </div>
}