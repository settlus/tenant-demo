import styles from './MissionCard.module.scss';
import bulletIcon from '../../public/images/bullet.png';

type PropType={
  title: string,
}

export default function MissionCard({title}: PropType): React.ReactElement{
  return <div className={styles.mission}>
    <h3>{title}</h3>
    <p>0 / 5</p>
    <ul>
      <li><img src={bulletIcon}/>Browse Avatar Costume Shop</li>
      <li><img src={bulletIcon}/>Create 3D costume</li>
      <li><img src={bulletIcon}/>Check NFT info of your costume</li>
      <li><img src={bulletIcon}/>Try user mode and buy your costume off-chain</li>
      <li><img src={bulletIcon}/>Transfer NFT</li>
    </ul>
    
  </div>
}