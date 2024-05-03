import styles from './Instruction.module.scss';

type PropType = {
  title: string,
  children: React.ReactNode,
}

export default function Instruction({title, children}: PropType): React.ReactElement{
    return <div className={styles.instruction}>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
}