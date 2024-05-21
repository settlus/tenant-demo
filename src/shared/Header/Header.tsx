import styles from './Header.module.scss';
import HeaderButton from '../HeaderButton/HeaderButton.tsx';
import QnaModal from '../QnaModal/QnaModal.tsx';
import missionSvg from '../../public/svg/Mission.svg';
import qnaSvg from '../../public/svg/qna.svg';
import { useState } from 'react';

export default function Header(){
  const [qnaOpen, setQnaOpen] = useState(false);

  function handleQna(){
    setQnaOpen(prev=>!prev);
  }

  return <div className={styles.header}>
    {qnaOpen && <QnaModal open={qnaOpen} handleClose={handleQna}/> }
    <h2>Demo</h2>
    <div className={styles.mission}>
      <HeaderButton icon={missionSvg} name='Mission' />
      <HeaderButton icon={qnaSvg} name='Q&A' handleClick={handleQna}/>
    </div>
  </div>

}