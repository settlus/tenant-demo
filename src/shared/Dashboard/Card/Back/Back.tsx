import styles from '../Card.module.scss';
import NFTLicenseMark from '../../../../public/images/NftLicense.png';
import CoinImg from '../../../../public/svg/coin.svg';
import HoverMessage from '../../HoverMessage/HoverMessage';
import { useContext, useState } from 'react';
import { DashboardContext } from '../../../../store/dashboard_context';

type BackType={
  content: any,
}


export default function Back({content}: BackType): React.ReactElement{
  const {type} = useContext(DashboardContext);
  const [isHover, setIsHover] = useState({mark: false, quantity: false});

  function handleEnter(value: string){
    setIsHover((prev)=>{
      const updated={...prev};
      if(value==='mark') updated.mark=true;
      else updated.quantity=true;
      return updated;
    });
  }

  function handleLeave(){
    setIsHover({mark: false, quantity: false});
  }

  return <div className={styles.back}>
    {type==='off-chain' ?
    //Off-Chain Card 
    <div className={styles.offChain}>
      <HoverMessage isVisible={isHover.mark} type='mark'>
        With transparent settlement system, final transactions are recorded on-chian.
      </HoverMessage>
      <HoverMessage isVisible={isHover.quantity} type='quantity'>
        Number of total quantity that users bought
      </HoverMessage>
      <img src={NFTLicenseMark} alt={'mark'} className={styles.mark} onMouseEnter={()=>handleEnter('mark')} onMouseLeave={handleLeave}/>
      {content && <div className={styles.stats}>
        <div className={styles.price}>
          <label>Price($)</label>
          <h2>{content.revenue['Price']}</h2>
        </div>
        <div className={styles.sold} onMouseEnter={()=>handleEnter('quantity')} onMouseLeave={handleLeave}>
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
      </div>}
    </div> : 
    
    //On-Chain Card
    <div className={styles.onChain}>
      <ul>
        {content && Object.keys(content.details).map((item,index)=>(
          <li key={index}>{item}: {content.details[item]}</li>
        ))}
      </ul>
      {content && <img src={content.thumbnail}/>}
    </div>
  }

    </div>
  }
