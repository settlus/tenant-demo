import styles from './Content.module.scss';
import Card from '../Card/Card.tsx';

type PropType={
  type: string,
  data: {
    image: string,
    table: any,
    card: any,
  } | null,
}


export default function Content({type,data}: PropType): React.ReactElement{
  const DATA = data || {
    image: '',
    table:  [{}],
    card: '',
  }

  const KEYS = Object.keys(DATA.table[0]);

  return  <div className={styles.main}>
    <div className={styles.table1}>
      <label>{type==='on-chain' ? 'NFTs' : 'Items'}</label>
      <span>
        <img src={DATA.image} />
      </span>
    </div>
    <div className={styles.table2}>
      <label>{type==='on-chain' ? 'Activity History' : 'Revenue Table'}</label>
      <span>
        <table>
          <thead>  
          <tr>
            <th>Thumbnail</th>
            {KEYS.map((item,index)=>(
              <th key={index}>{item}</th>
            ))}
          </tr>
          </thead>
          <tbody>
            {DATA.table.map((item: any,index: any) => (
              <tr key={index}>
                <td><img src={DATA.image}/></td>
                {KEYS.map((item1,index1)=>(
                  <td key={index1}>
                    {item1==='Txn Hash' ? <a href={`https://scan.migaloo.io/tx/${item[item1]}`}>{item[item1]}</a> : item[item1]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          
        </table>
      </span>
    </div>
    <Card image={DATA.image} content={type==='on-chain' ? DATA.card : DATA.table}/>
  </div> 
  
}