import styles from './Navigation.module.scss';
import navSvg from '../../public/svg/navigation.svg';
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

  return <img src={navSvg} 
      alt='navigation'
      onClick={handleNavigate}
      className={isBackwards ? styles.backwards : ''}
      />

}