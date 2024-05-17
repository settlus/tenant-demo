import { useContext, useEffect } from 'react';
import styles from './Content.module.scss';
import Card from '../Card/Card.tsx';
import UserModal from '../UserModal/UserModal.tsx';
import { DashboardContext } from '../../../store/dashboard_context.tsx';
import OfferModal from '../OfferModal/OfferModal.tsx';

export default function Content(){
  const {selected,setSelected, data, isModal, setIsModal, isOfferModal, type} = useContext(DashboardContext);
  const DATA = data || [];

  useEffect(()=>{
    if(type==='on-chain' && isModal===2) setIsModal(1);
  });


  function handleSelected(key: number){
    setSelected(key);
  }

  return  <div className={styles.main}>
    {isModal===2 && type==='off-chain' && <UserModal collapsed={false} content={DATA[selected]}/>}
    {isOfferModal && type==='on-chain' && <OfferModal />}
    <div className={styles.table1}>
      <label>{type==='on-chain' ? 'NFTs' : 'Items'}</label>
      <span>
        {DATA && DATA.map((item: any,index: number)=>(
          <img key={item.thumbnail}
          src={item.thumbnail}
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
                  <td><img src={item.thumbnail}/></td>
                  <td>{item.title}</td>
                  <td>{item1['Activity']}</td>
                  <td><a href={`https://scan.migaloo.io/tx/${item1['Txn Hash']}`}>{item1['Txn Hash']}</a></td>
                </tr>
              ))}
              {type==='off-chain' && <tr key={index}>
                <td><img src={item.thumbnail}/></td>
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