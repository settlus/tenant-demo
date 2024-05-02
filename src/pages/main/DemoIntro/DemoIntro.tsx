import MissionCard from './MissionCard/MissionCard.tsx';
import Mission from '../../../shared/Mission/Mission.tsx';
import styles from './DemoIntro.module.scss';

export default function DemoIntro(){
  return <div className={styles.intro}>
    <p>On this Demo, you will experience as a creator and learn the value of NFT licensing on Settlus Blockchain.
       Follow the guides and complete the missions!</p>
    <Mission />
    <MissionCard />

  </div>
}