import { useState, useContext } from 'react';
import styles from './UserModal.module.scss';
import { DashboardContext } from '../../../store/dashboard_context';
import Draggable, {DraggableData} from 'react-draggable';

type PropType={
  collapsed: boolean,
  content: any,
}

export default function UserModal({collapsed, content}: PropType): React.ReactElement{
  const {setIsModal, selected, setSelected, data, setData} = useContext(DashboardContext);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const len = data['on-chain'].length;

  const handleOnDrag = (data: DraggableData) => {
    setPosition({ x: data.x, y: data.y }); 
  };


  function handleClick(value: number){
    setIsModal(value);
  }

  function handleNavigate(type: string){
    if(type==='left'){
      setSelected((prev:number)=>{
        const updated = prev-1;
        if(updated<0) return len-1; else return updated;
      })
    }

    if(type==='right'){
      setSelected((prev:number)=>{
        const updated = prev+1;
        if(updated>=len) return 0; else return updated;
      })
    }

  }

  function handleBuy(){
    setData((prev: any)=>{
      let updated={...prev,}
      const selectedItem = {...updated['off-chain'][selected]};
      
      selectedItem.revenue['Quantity'] += 1;
      selectedItem.revenue['Total Sales Revenue'] += selectedItem.revenue['Price'];

      updated['off-chain'][selected] = selectedItem;
      return updated;
    })
  } 

  return <>
  {!collapsed && <Draggable
    position={{ x: position.x, y: position.y }}
    onDrag={(_, data) => handleOnDrag(data)}
    bounds={{left: -280, top: -40, right: 270, bottom: 55}}
  >
    <div className={`${styles.modal}`}>
        <button className={styles.close} onClick={()=>{handleClick(1)}}>-</button>
        <h3>USER MODE</h3>
        <div className={styles.main}>
          <button onClick={()=>handleNavigate('left')}>{'<'}</button>
          <div className={styles.card}>
            <img src={content.image}/>
            <button onClick={handleBuy}>BUY</button>
          </div>
          <button onClick={()=>handleNavigate('right')}>{'>'}</button>
        </div>
        <p>On the Avatar Costume Shop, your NFT-licensed item is listed as shown above. 
          Click to buy the item.</p>
    </div>
  </Draggable>
  }

  {collapsed && <div className={styles.collapsed}>
      <button onClick={()=>{handleClick(2)}}>+</button>
      <p className={styles.usermode}>USER MODE</p>
    
    </div>}
    
  
  </>
}