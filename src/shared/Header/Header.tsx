import styles from './Header.module.scss';
import Mission from "../Mission/Mission.tsx";

export default function Header(){
  return <div className={styles.header}>
    <h2>Demo</h2>
    <div className={styles.mission}><Mission /></div>
  </div>

}