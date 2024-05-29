import userProfile from '../../../../public/svg/userProfile/userProfile.svg';
import styles from './Profile.module.scss';
import { useNavigate } from 'react-router-dom';
import { useContext, useRef } from 'react';
import { GlobalContext } from '../../../../store/global_context';

export default function Profile(){
  const {setNickName} = useContext(GlobalContext);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = ()=>{
    if(inputRef.current && inputRef.current.value.length > 0){
      setNickName(inputRef.current.value);
      navigate('/demo/costume-shop');
    }
    else{
      alert('You must set a nickname!');
    }
  }

  return <div className={styles.main}>
    <img src={userProfile} alt='profile' />
    <input type='text' ref={inputRef} placeholder='Nickname'/>
    <button onClick={handleClick}>Enter Now</button>
  </div>
}