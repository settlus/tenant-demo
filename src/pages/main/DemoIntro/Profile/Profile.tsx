import userProfile from '../../../../public/svg/userProfile/userProfile.svg';
import styles from './Profile.module.scss';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

export default function Profile(){
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const saveNickName = (name: string)=>{
    sessionStorage.setItem('nickname',name);
  }

  const handleClick = ()=>{
    if(inputRef.current && inputRef.current.value.length > 0){
      saveNickName(inputRef.current.value);
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