import styles from './MissionCard.module.scss';

export default function MissionCard(){
  return <div className={styles.mission}>
    <h3>Tutorial Mission</h3>
    <p>0 / 5</p>
    <ul>
      <li>Browse Avatar Costume Shop</li>
      <li>Create 3D costume</li>
      <li>Check NFT info of your costume</li>
      <li>Try user mode and buy your costume off-chain</li>
      <li>Transfer NFT</li>
    </ul>
    
  </div>
}