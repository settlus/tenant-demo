import { useContext } from 'react';
import styles from './UserModal.module.scss';
import { DashboardContext } from '../../../store/dashboard_context';

type PropType={
  collapsed: boolean,
}

export default function UserModal({collapsed}: PropType): React.ReactElement{
  const {setIsModal} = useContext(DashboardContext);

  function handleClick(value: number){
    setIsModal(value);
  }

  return <>
  {!collapsed && <div className={`${styles.modal}`}>
        <button className={styles.close} onClick={()=>{handleClick(1)}}>-</button>
        <h3>USER MODE</h3>
        <div className={styles.main}>
          <button>{'<'}</button>
          <div className={styles.card}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Lake_mapourika_NZ.jpeg/1280px-Lake_mapourika_NZ.jpeg'/>
            <button>BUY</button>
          </div>
          <button>{'>'}</button>
        </div>
        <p>On the Avatar Costume Shop, your NFT-licensed item is listed as shown above. 
          Click to buy the item.</p>
    </div>
  }

  {collapsed && <div className={styles.collapsed}>
      <button onClick={()=>{handleClick(2)}}>+</button>
      <p className={styles.usermode}>USER MODE</p>
    
    </div>}
    
  
  </>
}