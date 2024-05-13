import styles from '../Card.module.scss';
import NFTLicenseMark from '../../../../public/images/NftLicense.png';
import CoinImg from '../../../../public/images/coin.png';
type BackType={
  content: any,
}


export default function Back({content}: BackType): React.ReactElement{
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
        {content && Object.keys(content.details).map((item,index)=>(
          <li key={index}>{item}: {content.details[item]}</li>
        ))}
      </ul>
      {content && <img src={content.itemImage}/>}
    </div>
  }

    </div>
  }
