import styles from './Card.module.scss';
import { useState } from 'react';

export default function Card(){
  const [state,setState] = useState({flipped: false});
  
  const flip = ()=>{
    setState((prev)=>
      {return {flipped: !prev.flipped}});
  }

  return <div className={`${styles.card} ${state.flipped ? styles.flipped : ""}`}>
    <Back />
    <Front />
    <button onClick={flip}>{'>'}</button>
  </div>
}

function Front(){
  return <div className={styles.front}>
    <p>front</p>
  </div>
}

function Back(){
  return <div className={styles.back}>
    <p>back</p>
  </div>
}