import styles from './Mission.module.scss';
import missionSvg from '../../public/svg/Mission.svg';

export default function Mission(){
  return <button className={styles.mission}>
    <img src={missionSvg} />
    <p>Mission</p>
  </button>
}