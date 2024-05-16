import styles from "./HoverMessage.module.scss";

type PropType={
  isVisible: boolean,
  type: string,
  children?: React.ReactNode,
}

export default function HoverMessage({isVisible, children, type}: PropType): React.ReactElement{

  return <div className={`${styles.main} ${type==='mark' ? styles.mark : styles.quantity} ${isVisible ? styles.visible : ''}`}>
    <p>{children}</p>
    <div className={styles.line} />
    <div className={styles.circle}/>
  </div>
}