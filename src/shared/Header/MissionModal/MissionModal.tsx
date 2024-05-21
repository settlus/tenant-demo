import styles from './MissionModal.module.scss';
import MissionCard from '../../MissionCard/MissionCard';

type PropType = {
  handleClose: ()=>void,
}


export default function MissionModal({handleClose}: PropType): React.ReactElement{
  return <>
    <div className={styles.backdrop} onClick={handleClose}></div>
    <div className={styles.modal}>
      <MissionCard title='Mission Completed' /> 
    </div>
  </>
}