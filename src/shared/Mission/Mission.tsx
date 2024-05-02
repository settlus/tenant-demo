import styles from './Mission.module.scss';
import missionImg from '../../public/images/mission.png';

export default function Mission(){
  return <button className={styles.mission}>
    <img src={missionImg} />
    <p>Mission</p>
  </button>
}