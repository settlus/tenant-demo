import styles from './Navigation.module.scss';
import navImg from '../../public/images/navigation.png';
import { useNavigate} from 'react-router-dom';

type PropType = {
  path?: string,
  handleClick?: (...args: any[]) => any,
  isBackwards?: boolean,
}

export default function Navigation({path, handleClick, isBackwards}: PropType): React.ReactElement{
  const navigate = useNavigate();
  const handleNavigate = handleClick || function(){
    if(path) navigate(path);
  }

  return <img src={navImg} 
      alt='navigation'
      onClick={handleNavigate}
      className={`${styles.image} ${isBackwards ? styles.backwards : ''}`}
      />

}