import { useState } from 'react';
import styles from './Content.module.scss';
import Card from '../Card/Card.tsx';

type PropType={
  type: string,
  data: any[] | null,
}


export default function Content({type,data}: PropType): React.ReactElement{
  const DATA = data || [];
  const [selected,setSelected] = useState(0);



  function handleSelected(key: number){
    setSelected(key);
  }

  return  <div className={styles.main}>
    <div className={styles.table1}>
      <label>{type==='on-chain' ? 'NFTs' : 'Items'}</label>
      <span>
        {DATA.map((item: any,index: number)=>(
          <img key={index}
          src={item.image}
          onClick={()=>handleSelected(index)}
          className={selected===index ? styles.selected : ''}/>
        ))}
      </span>
    </div>
    <div className={styles.table2}>
      <label>{type==='on-chain' ? 'Activity History' : 'Revenue Table'}</label>
      <span>
        <table>
          <thead>  
          <tr>
            <th>Thumbnail</th>
            {type==='on-chain' && <>
              <th>Title</th>
              <th>Activity</th>
              <th>Txn Hash</th>
            </>}
            {type==='off-chain' && <>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Sales Revenue</th>
            </>}
          </tr>
          </thead>
          <tbody>
            {DATA.map((item: any,index: any) => (<>
              {type==='on-chain' && item.history.map((item1: any)=>(
                <tr key={index}>
                  <td><img src={item.image}/></td>
                  <td>{item.title}</td>
                  <td>{item1['Activity']}</td>
                  <td><a href={`https://scan.migaloo.io/tx/${item1['Txn Hash']}`}>{item1['Txn Hash']}</a></td>
                </tr>
              ))}
              {type==='off-chain' && <tr key={index}>
                <td><img src={item.image}/></td>
                <td>{item.title}</td>
                <td>$ {item.revenue['Price']}</td>
                <td>{item.revenue['Quantity']}</td>
                <td>$ {item.revenue['Total Sales Revenue']}</td>
              </tr>}
            </>
            ))}

          </tbody>
          
        </table>
      </span>
    </div>
    <Card content={DATA[selected]}/>
  </div> 
  
}