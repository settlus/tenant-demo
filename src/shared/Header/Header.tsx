import styles from './Header.module.scss';
import HeaderButton from './HeaderButton/HeaderButton.tsx';
import QnaModal from '../QnaModal/QnaModal.tsx';
import MissionModal from './MissionModal/MissionModal.tsx';
import missionSvg from '../../public/svg/Mission.svg';
import qnaSvg from '../../public/svg/qna.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type PropType = {
  logoOnly?: boolean, 
}

export default function Header({logoOnly}: PropType): React.ReactElement{
  const [qnaOpen, setQnaOpen] = useState(false);
  const [missionOpen, setMissionOpen] = useState(false);

  function handleQna(){
    setQnaOpen(prev=>!prev);
  }

  function handleMission(){
    setMissionOpen(prev=>!prev);
  }

  return <div className={styles.header}>
    {qnaOpen && <QnaModal open={qnaOpen} handleClose={handleQna}/> }
    <Link to='/' style={{ textDecoration: 'none' }}><h2>Demo</h2></Link>
    {!logoOnly && <div className={styles.menu}>
      <div className={styles.mission}>
        <HeaderButton icon={missionSvg} name='Mission' handleClick={handleMission}/>
        {missionOpen && <MissionModal handleClose={handleMission}/>}
      </div>
      <HeaderButton icon={qnaSvg} name='Q&A' handleClick={handleQna}/>
    </div>}
  </div>

}