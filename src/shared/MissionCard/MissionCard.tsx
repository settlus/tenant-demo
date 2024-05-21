import styles from './MissionCard.module.scss';
import bulletIcon from '../../public/images/bullet.png';
import sparkleIcon from '../../public/svg/Sparkle.svg';

const STEPS = [
  'Browse Avatar Costume Shop',
  'Create 3D costume & mint as NFT',
  'Check your item on the Costume Shop',
  'Check the NFT info of your costume',
  'Sell the NFT',
]

type PropType={
  title: string,
}

export default function MissionCard({title}: PropType): React.ReactElement{
  return <div className={styles.mission}>
    <img src={sparkleIcon} className={styles.sparkle} />
    <h3>{title}</h3>
    <p>0 / 5</p>
    <ul>
      {STEPS.map((item)=><li key={item}><img src={bulletIcon}/>{item}</li>)}
    </ul>
    
  </div>
}