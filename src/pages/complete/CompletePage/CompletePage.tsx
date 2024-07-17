import Instruction from "../../../shared/Instruction/Instruction";
import MissionCard from "../../../shared/MissionCard/MissionCard";
import Header from "../../../shared/Header/Header";
import QnaModal from "../../../shared/QnaModal/QnaModal";
import { useState } from "react";
import styles from './CompletePage.module.scss';
import {Link} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MissionUpdate from "../../../shared/MissionUpdate/MissionUpdate";

export default function CompletePage(){
  const [qnaOpen, setQnaOpen] = useState(false);

  const handleQna = ()=>{
    setQnaOpen(prev=>!prev);
  }

  return <MissionUpdate updatedMission={5}>
    {qnaOpen && <QnaModal open={qnaOpen} handleClose={handleQna} />}
    <Header logoOnly={true} />
    <div className={styles.main}>
      <div className={styles.instruction}>
        <Instruction title='🎉 Congratulations! You’ve completed all the missions. '
          typeWriter="Using NFT for royalty right, You’ve earned revenue from the costume sales and the NFT sales. 
          Settlus blockchain is designed to help monetize creator’s IP in the web3. era. 
          Read Settlus Whitepaper for details!" />
      </div>
      <div className={styles.mission}>
        <MissionCard title='Mission Completed'/>
      </div>
      <div className={styles.buttons}>
        <button onClick={handleQna}>Demo Questions & Answers</button>
        <a href='https://settlus.org/docs/whitepaper.pdf' target="_blank">
          <button>Read Settlus Whitepaper</button>
        </a>
        <Link to={'/intro'}>
          <button>Return to Beginning</button>
        </Link> 
      </div>
    </div>
    <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
  </MissionUpdate>
}