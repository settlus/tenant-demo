import styles from './Header.module.scss';
import {Link} from 'react-router-dom';
import smileSvg from '../../../public/svg/smile.svg';

type PropType = {
  length: number,
}

export default function Header({length}: PropType): React.ReactElement{
  return <header className={styles.header}>
    <img src={smileSvg} />
    <h3>Creator Dashboard</h3>
    <Link to={'/demo/create-nft'} className={`${styles.link} ${length>2 ? styles.disabled : ''}`} >+ Create costume</Link>
  </header>
}