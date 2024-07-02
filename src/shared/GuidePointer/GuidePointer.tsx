import { useState, useEffect } from 'react';
import Pointer from '../../public/svg/pointer.svg';
import styles from './GuidePointer.module.scss';

type PropType = {
  children: React.ReactNode,
  doGuide: boolean,
  topPos?: number,
  leftPos?: number,
  margin?: number,
}

export default function GuidePointer({children, doGuide, topPos, leftPos, margin}:PropType): React.ReactElement{
  const [isVisible, setIsVisible] = useState(false); 

  useEffect(()=>{
    let timeout:NodeJS.Timeout | null = null;
    if(doGuide){
      setIsVisible(false);
      timeout = setTimeout(()=>{
        setIsVisible(true);
      }, 2000);
    }

    return ()=>{
      if(timeout) clearTimeout(timeout);
    }
  },[children, doGuide]);

  useEffect(()=>{
    let top = topPos || 40;
    document.documentElement.style.setProperty("--topPos",`${top}px`);
    document.documentElement.style.setProperty("--bottomPos",`${top+15}px`);

    let left = leftPos || 6;
    document.documentElement.style.setProperty("--leftPos",`${left}px`);
  },[topPos, leftPos]);
  
  return <div className={styles.main}>
    {children}
    {isVisible && doGuide && <img className={styles.pointer} src={Pointer} style={{marginTop: `${margin||0.5}rem`}}/>}
  </div>
}