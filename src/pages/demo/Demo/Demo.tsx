import Header from "../../../shared/Header/Header";
import { Outlet } from 'react-router-dom';
import styles from './Demo.module.scss';
import { ToastContainer } from 'react-toastify';

export default function Demo(){
  return <div className={styles.main}>
    <Header />
    <Outlet />
    <ToastContainer />
  </div>
}