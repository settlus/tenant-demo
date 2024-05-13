import {useRef, useEffect} from 'react';
import styles from './Modal.module.scss';

type PropType={
  children: React.ReactNode,
  open: boolean,
  handleClose?: ()=>void,
}

export default function Modal({children, open, handleClose}: PropType): React.ReactElement{
  const dialog=useRef<HTMLDialogElement>(null);
  
  useEffect(()=>{
    if(dialog.current){
      if(open) dialog.current.showModal();
      else dialog.current.close();
    }
  },[open]);

  return <dialog ref={dialog} className={styles.dialog}>
    <div className={styles.content}>
    {handleClose && <button className={styles.close} onClick={handleClose}>x</button>}
    {children}
    </div>
  </dialog>
}