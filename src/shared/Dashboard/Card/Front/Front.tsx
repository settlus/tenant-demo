import styles from '../Card.module.scss';
import NFTLicenseMark from '../../../../public/images/NftLicense.png';

type FrontType={
  image: string,
  price?: number | null,
}


export default function Front({image, price}: FrontType): React.ReactElement{
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