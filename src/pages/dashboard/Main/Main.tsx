import styles from './Main.module.scss';
import Dashboard from '../../../shared/Dashboard/Dashboard';

export default function Main(){
  return <div className={styles.main}>
    <h2>Creator's Dashboard</h2>
    <hr />
    <Dashboard />
  </div>
}