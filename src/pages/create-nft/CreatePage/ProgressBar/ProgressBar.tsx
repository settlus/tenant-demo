import styles from './ProgressBar.module.scss';
import CheckIcon from '../../../../public/svg/CheckMark.svg';
import ProgressIcon from '../../../../public/svg/ProgressMark.svg';

type PropType = {
  step: number,
}

export default function ProgressBar({step}: PropType): React.ReactElement{
  const isStep2 = step>=3;
  const step2 = isStep2 ? styles.active : styles.inactive;

  return <div className={styles.progress}>
    <div className={`${styles.step} ${styles.visual}`}>
      <div className={`${styles.circle} ${styles.active}`}>
        <img src={isStep2 ? CheckIcon : ProgressIcon} alt='check' />
      </div>
      <hr className={step2}/>
      <div className={`${styles.circle} ${step2}`}>
        {isStep2 && <img src={ProgressIcon} alt='check' />}
      </div>
    </div>
    <div className={`${styles.step} ${styles.labels}`}>
      <label className={styles.active}>Step 1. Mint NFT</label>
      <label className={`${step2} ${styles.second}`}>Step 2. List Item</label>
    </div>
  </div>
}