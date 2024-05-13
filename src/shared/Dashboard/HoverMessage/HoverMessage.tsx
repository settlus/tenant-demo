import styles from "./HoverMessage.module.scss";

type PropType={
  isVisible: boolean,
}

export default function HoverMessage({isVisible}: PropType): React.ReactElement{

  return <div className={`${styles.main} ${isVisible ? styles.visible : ''}`}>
    <p>With transparent settlement system, final transactions are recorded on-chian.</p>
    <div className={styles.line} />
    <div className={styles.circle}/>
  </div>
}