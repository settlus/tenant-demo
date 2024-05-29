import styles from './Instruction.module.scss';

type PropType = {
  title: string,
  children: React.ReactNode,
  style?: string,
}

export default function Instruction({title, children, style}: PropType): React.ReactElement{
    return <div className={`${styles.instruction} ${style}`}>
      <h2>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
}