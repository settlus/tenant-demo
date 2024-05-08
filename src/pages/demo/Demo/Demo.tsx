import Header from "../../../shared/Header/Header";
import { Outlet } from 'react-router-dom';
import styles from './Demo.module.scss';

export default function Demo(){
  return <div className={styles.main}>
    <Header />
    <Outlet />
  </div>
}