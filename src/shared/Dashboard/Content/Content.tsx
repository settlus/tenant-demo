import { useContext } from 'react';
import styles from './Content.module.scss';
import Card from '../Card/Card.tsx';
import { DashboardContext } from '../../../store/dashboard_context.tsx';
import OfferModal from '../OfferModal/OfferModal.tsx';
import { formatNum } from '../../../utils/util.ts';

export default function Content(){
  const {data, isOfferModal} = useContext(DashboardContext);

  return  <div className={styles.main}>
    {isOfferModal && <OfferModal />}
    <div className={styles.table1}>
      <span>
        <img src={data.thumbnail} />
        <ul>
          <li>{data.title}</li>
          <li>Item Price: {formatNum(data.revenue['Price'])}</li>
          <li>Total Quantity Sold: {data.revenue['Quantity']}</li>
          <li className={styles.soldAmount}>Total Sold Amount: {formatNum(data.revenue['Price']*data.revenue['Quantity'])}</li>
        </ul>
      </span>
    </div>
    <div className={styles.table2}>
      <label>Activity History</label>
      <span>
        <table>
          <thead>  
          <tr>
            <th>Activity</th>
            <th>Timestamp</th>
          </tr>
          </thead>
          <tbody>
            {data.history.map((item,index) => (
              <tr key={index}>
                <td>
                  {item['Profile'] && <img src={item['Profile']}/>}
                  {item['Activity']}
                </td>
                <td>2024-06-10 9:52 AM</td>
              </tr>
            ))}
          </tbody>
          
        </table>
      </span>
    </div>
    <Card />
  </div> 
  
}