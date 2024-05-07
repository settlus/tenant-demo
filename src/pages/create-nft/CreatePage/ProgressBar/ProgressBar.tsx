import styles from './ProgressBar.module.scss';

type PropType = {
  step: number,
}

export default function ProgressBar({step}: PropType): React.ReactElement{
  const step2 = step>1 ? styles.active : styles.inactive;

  return <div className={styles.progress}>
    <div className={styles.step}>
      <div className={`${styles.circle} ${styles.active}`}>

      </div>
      <label className={styles.active}>Step 1</label>
    </div>
    <hr className={step2}/>
    <div className={`${styles.step} ${styles.inactive}`}>
      <div className={`${styles.circle} ${step2}`}>

      </div>
      <label className={step2}>Step 2</label>
    </div>
  </div>
}