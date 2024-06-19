import { useContext } from 'react';
import styles from '../Card.module.scss';
import { DashboardContext } from '../../../../store/dashboard_context';
import GuidePointer from '../../../GuidePointer/GuidePointer';

const ENV = import.meta.env;


export default function CardContent(){
  const {data, step, setStep} = useContext(DashboardContext)

  return <div className={styles.back}>
    <div className={styles.onChain}>
      <p>NFT Info</p>
      <ul>
        {Object.keys(data.details).map((item: string,index)=>(
          item==='Contract Address' ? 
            <GuidePointer topPos={5} leftPos={100} doGuide={step===0}>
              <li key={index}>
                {item}:<a href={`https://${ENV.VITE_CHAIN_TYPE}net.settlus.network/nft/${import.meta.env.VITE_CONTRACT_ADDR}/inventory`} target='_blank' onClick={()=>{setStep(prev=>prev===0 ? 1 : prev)}}>{data.details[item]}</a>
              </li>
            </GuidePointer>
        : <li key={index}>{item}:{data.details[item]}</li>
          
        ))}
      </ul>
      <img src={data.thumbnail}/>
    </div>
  </div>
}
