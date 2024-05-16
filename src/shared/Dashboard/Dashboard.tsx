import {useState, useEffect, useContext} from 'react';
import styles from './Dashboard.module.scss';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Content from './Content/Content';
import { DashboardContext } from '../../store/dashboard_context';
import { getData } from '../../apis/api';

export default function Dashboard(){
  const [type,setType]=useState('on-chain');
  const { data, setData} = useContext(DashboardContext);

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
      <Header length={data['on-chain'].length}/>
      <Menu handleClick={handleClick}/>
      {type==='on-chain' && <Content type={'on-chain'} />}
      {type==='off-chain' && <Content type={'off-chain'} />}
      {/* <Content type={type} data={type==='on-chain' ? data['on-chain'] : data['off-chain']} /> */}
    </div>
}