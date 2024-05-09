import styles from './Header.module.scss';
import {Link} from 'react-router-dom';
import smileSvg from '../../../public/svg/smile.svg';

export default function Header(){
  return <header className={styles.header}>
    <img src={smileSvg} />
    <h3>Creator Dashboard</h3>
    <Link to={'/demo/create-nft'} className={styles.link}>+ Create costume</Link>
  </header>
}