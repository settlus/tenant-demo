import { ChangeEvent } from 'react';
import styles from './Field.module.scss';

type PropType = {
  label: string, 
  handleInfo: (field: string, value: string)=>void,
  value: string,
}

export default function Field({value, label, handleInfo}: PropType): React.ReactElement{

  function handleChange(e: ChangeEvent<HTMLInputElement>){
    if(label==='Item Title') handleInfo('name',e.target.value);
    else handleInfo('price',e.target.value);
    
  }

  return <div className={styles.field}>
    <label>{label}</label>
    <input type='text' required value={value} onChange={handleChange}/> 
  </div>
}