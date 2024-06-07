import styles from './Header.module.scss';
import userProfile from '../../../public/svg/userProfile/userProfile.svg';
import infoSvg from '../../../public/svg/Info.svg';
import { getNickName } from '../../../apis/api';
import { useRef } from 'react';

export default function Header(){
  const nickname = useRef(getNickName());

  return <header className={styles.header}>
    <span>
      <img src={userProfile} />
      <h3>{nickname.current}’s Dashboard</h3>
    </span>
    <span>
      <img src={infoSvg} className={styles.info}/>
      <p>NFT is the royalty right of your creation. You can also sell your NFT and earn more profits.</p>
    </span>
  </header>
}