import {useEffect, useContext} from 'react';
import styles from './Dashboard.module.scss';
import Header from './Header/Header';
import Content from './Content/Content';
import { DashboardContext } from '../../store/dashboard_context';
import { getData } from '../../apis/api';

export default function Dashboard(){
  const { setData } = useContext(DashboardContext);

  useEffect(()=>{
    const setMainData = async ()=>{
      const info = await getData();
      setData(info);
    }

    setMainData();
  },[]);

 
  return <div className={styles.board}>
      <Header />
      <Content />
    </div>
}