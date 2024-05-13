import styles from './Card.module.scss';
import Front from './Front/Front';
import Back from './Back/Back';
import { useState, useContext } from 'react';
import { DashboardContext } from '../../../store/dashboard_context';

type PropType={
  content: any,
}

export default function Card({content}: PropType): React.ReactElement{
  const [state,setState] = useState({flipped: false});
  const {setIsModal} = useContext(DashboardContext);
  const isOffChain = content && content.revenue;

  const handleClick=()=>{
    flip();
    if(isOffChain) setIsModal(true);
  }
  
  const flip = ()=>{
    setState((prev)=>
      {return {flipped: !prev.flipped}});
  }

  return <div className={`${styles.card} ${state.flipped ? styles.flipped : ""}`}>
    <Back content={content}/>
    <Front image={content && content.image} price={isOffChain ? content.revenue['Price'] : null}/>
    <button onClick={handleClick}>{'>'}</button>
  </div>
}
