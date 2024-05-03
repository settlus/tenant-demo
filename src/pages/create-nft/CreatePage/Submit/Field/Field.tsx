import styles from './Field.module.scss';

type PropType = {
  label: string, 
}

export default function Field({label}: PropType): React.ReactElement{
  return <div className={styles.field}>
    <label>{label}</label>
    <input type='text' required/> 
  </div>
}