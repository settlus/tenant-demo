import styles from './Card.module.scss';
import NFTLicenseMark from '../../../public/images/NftLicense.png';
import CoinImg from '../../../public/images/coin.png';
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
        <img src={NFTLicenseMark} alt={'mark'} className={styles.mark}/>
        <img src={image} className={styles.thumbnail}/>
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
      <img src={NFTLicenseMark} alt={'mark'} className={styles.mark}/>
      <div className={styles.stats}>
        <div className={styles.price}>
          <label>Price($)</label>
          <h2>{content.revenue['Price']}</h2>
        </div>
        <div className={styles.sold}>
          <label>Sold</label>
          <h2>{content.revenue['Quantity']}</h2>
        </div>
        <div className={styles.usdc}>
          <label>Total Earned USDC</label>
          <div>
            <img src={CoinImg}/>
            <h2>{content.revenue['Total Sales Revenue']}</h2>
          </div>
        </div>
      </div>
    </div> : 
    
    //On-Chain Card
    <div className={styles.onChain}>
      <ul>
        {content && content.details && Object.keys(content.details).map((item,index)=>(
          <li key={index}>{item}: {content.details[item]}</li>
        ))}
      </ul>
      <img src={content.itemImage}/>
    </div>
  }

    </div>
  }
