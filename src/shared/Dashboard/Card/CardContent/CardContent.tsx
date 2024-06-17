import { useContext } from 'react';
import styles from '../Card.module.scss';
import { DashboardContext } from '../../../../store/dashboard_context';


export default function CardContent(){
  const {data, setStep} = useContext(DashboardContext)

  return <div className={styles.back}>
    <div className={styles.onChain}>
      <p>NFT Info</p>
      <ul>
        {Object.keys(data.details).map((item: string,index)=>(
          <li key={index}>{item}: {item==='Contract Address' ? <a href={`https://devnet.settlus.network/nft/${import.meta.env.VITE_CONTRACT_ADDR}/inventory`} target='_blank' onClick={()=>{setStep(1)}}>{data.details[item]}</a>
          : data.details[item]}</li>
        ))}
      </ul>
      <img src={data.thumbnail}/>
    </div>
  </div>
}
