import {useState, useEffect, useContext} from 'react';
import styles from './Dashboard.module.scss';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Content from './Content/Content';
import DashboardProvider, { DashboardContext } from '../../store/dashboard_context';
import UserModal from './UserModal/UserModal';
import { getData } from '../../apis/api';

export default function DashboardPage(){
  return <DashboardProvider>
    <Dashboard />
  </DashboardProvider>
}

function Dashboard(){
  const [type,setType]=useState('on-chain');
  const [data,setData]=useState({'on-chain': [], 'off-chain': []});
  const {isModal} = useContext(DashboardContext);
  console.log(isModal);

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
      {isModal && type==='off-chain' && <UserModal />}
      <Header length={data['on-chain'].length}/>
      <Menu handleClick={handleClick}/>
      {type==='on-chain' && <Content type={'on-chain'} data={data['on-chain']} />}
      {type==='off-chain' && <Content type={'off-chain'} data={data['off-chain']} />}
      {/* <Content type={type} data={type==='on-chain' ? data['on-chain'] : data['off-chain']} /> */}
    </div>
}