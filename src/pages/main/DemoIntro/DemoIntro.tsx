import MissionCard from '../../../shared/MissionCard/MissionCard.tsx';
import HeaderButton from '../../../shared/HeaderButton/HeaderButton.tsx';
import Navigation from '../../../shared/Navigation/Navigation.tsx';
import styles from './DemoIntro.module.scss';
import missionSvg from '../../../public/svg/Mission.svg';

export default function DemoIntro(){
  return <div className={styles.pos}>
  <Navigation path='/intro' isBackwards={true}/>
  <div className={styles.intro}>
    <p>On this Demo, you will experience as a creator and learn the value of NFT licensing on Settlus Blockchain.
       Follow the guides and complete the missions!</p>
    <HeaderButton icon={missionSvg} name='Mission' />
    <MissionCard title={"Tutorial Mission"}/>
  </div>
  <Navigation path='/demo/create-nft'/>
  </div>
}