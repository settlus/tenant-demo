import styles from './Navigation.module.scss';
import navSymbol from '../../public/svg/nav.svg';
import navBackSymbol from '../../public/svg/navBack.svg';
import { useNavigate } from 'react-router-dom';

type PropType = {
  path?: string,
  handleClick?: (...args: any[]) => any,
  isBackwards?: boolean,
  hide?: boolean,
}

export default function Navigation({path, handleClick, isBackwards, hide}: PropType): React.ReactElement{
  const navigate = useNavigate();
  const handleNavigate = handleClick || function(){
    if(path) navigate(path);
  }

  return <div onClick={handleNavigate} className={`${styles.button} ${hide ? styles.hide : ''} ${isBackwards ? styles.backwards : ''}`}>
    <img src={isBackwards ? navBackSymbol : navSymbol} alt='nav' />
  </div> 

}