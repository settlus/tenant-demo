import styles from './Card.module.scss';
import { useState } from 'react';

type PropType={
  content: any,
}

type FrontType={
  image: string,
  price?: number | null,
}

type BackType={
  content: any,
}

export default function Card({content}: PropType): React.ReactElement{
  const [state,setState] = useState({flipped: false});
  const isOffChain = content && content.revenue;
  
  const flip = ()=>{
    setState((prev)=>
      {return {flipped: !prev.flipped}});
  }

  return <div className={`${styles.card} ${state.flipped ? styles.flipped : ""}`}>
    <Back content={content}/>
    <Front image={content && content.image} price={isOffChain ? content.revenue['Price'] : null}/>
    <button onClick={flip}>{'>'}</button>
  </div>
}

function Front({image, price}: FrontType): React.ReactElement{
  return <div className={styles.front}>
    {price!==null ?
      //Off-Chain Card 
      <div className={styles.offChain}>
        <img src={''} alt={'icon'}/>
        <img src={image} />
        <h3>$ {price}</h3>
      </div> : 
      
      //On-Chain Card
      <div className={styles.onChain}>
        <img src={image} />
      </div>
    }
  
  </div>
}

function Back({content}: BackType): React.ReactElement{
  return <div className={styles.back}>
    {content && content.revenue ?
    //Off-Chain Card 
    <div className={styles.offChain}>
     Off-chain
    </div> : 
    
    //On-Chain Card
    <div className={styles.onChain}>
      On-chain
    </div>}
  </div>
}