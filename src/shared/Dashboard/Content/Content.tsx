import styles from './Content.module.scss';
import Card from '../Card/Card.tsx';

export default function Content(){
  return  <div className={styles.main}>
    <div className={styles.table1}>
      <label>NFTs</label>
      <span></span>
    </div>
    <div className={styles.table2}>
      <label>History</label>
      <span></span>
    </div>
    <Card />
  </div> 
  
}