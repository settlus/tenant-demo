import { useContext } from 'react';
import styles from '../Card.module.scss';
import { DashboardContext } from '../../../../store/dashboard_context';
import GuidePointer from '../../../GuidePointer/GuidePointer';
import { DetailKeys } from '../../../../types/type';

const ENV = import.meta.env;

const keys: DetailKeys[] = [
  'Contract Address',
  'Token ID',
  'Token Standard',
  'Chain',
  'Creator',
  'Owner'
]


export default function CardContent(){
  const {data, step, setStep} = useContext(DashboardContext)

  return <div className={styles.back}>
    <div className={styles.onChain}>
      <p>NFT Info</p>
      <ul>
        {keys.map((item,index)=>(
          item==='Contract Address' ? 
            <GuidePointer topPos={5} leftPos={100} doGuide={step===0}>
              <li key={index}>
                {item}:<a href={`http://${ENV.VITE_CHAIN_TYPE}net.settlus.network/nft/${ENV.VITE_CONTRACT_ADDR}/${BigInt(sessionStorage.getItem('tokenId') || '0x0')}`} target='_blank' onClick={()=>{setStep(prev=>prev===0 ? 1 : prev)}}>{data.details[item]}</a>
              </li>
            </GuidePointer>
        : <li key={index}>{item}:{data.details[item]}</li>
          
        ))}
      </ul>
      <img src={data.thumbnail}/>
    </div>
  </div>
}
