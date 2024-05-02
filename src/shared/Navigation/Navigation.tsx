import styles from './Navigation.module.scss';
import navSvg from '../../public/svg/navigation.svg';
import {Link} from 'react-router-dom';

type PathType = {
  path: string,
  isBackwards?: boolean,
}

export default function Navigation({path, isBackwards}: PathType): React.ReactElement{
  return <Link to={path} className={styles.navigation}>
    <img src={navSvg} alt='navigation' className={isBackwards ? styles.backwards : ''}/>
  </Link>
}