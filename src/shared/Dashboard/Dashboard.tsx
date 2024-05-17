import {useEffect, useContext} from 'react';
import styles from './Dashboard.module.scss';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Content from './Content/Content';
import { DashboardContext } from '../../store/dashboard_context';
import { getData } from '../../apis/api';

export default function Dashboard(){
  const { data, setData, type, setType } = useContext(DashboardContext);

  useEffect(()=>{
    const setMainData = async ()=>{
      const info = await getData();
      setData(info);
    }

    setMainData();
  },[]);

  function handleClick(type: string){
    if(type==='on') setType('on-chain');
    else setType('off-chain');
  }
 
  return <div className={styles.board}>
      <Header length={data.length}/>
      <Menu handleClick={handleClick}/>
      {/* {type==='on-chain' && <Content />}
      {type==='off-chain' && <Content />} */}
      <Content />
    </div>
}