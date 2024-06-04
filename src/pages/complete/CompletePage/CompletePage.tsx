import Instruction from "../../../shared/Instruction/Instruction";
import MissionCard from "../../../shared/MissionCard/MissionCard";
import Header from "../../../shared/Header/Header";
import QnaModal from "../../../shared/QnaModal/QnaModal";
import { useState } from "react";
import styles from './CompletePage.module.scss';

export default function CompletePage(){
  const [qnaOpen, setQnaOpen] = useState(false);

  const handleQna = ()=>{
    setQnaOpen(prev=>!prev);
  }

  return <>
    {qnaOpen && <QnaModal open={qnaOpen} handleClose={handleQna} />}
    <Header logoOnly={true} />
    <div className={styles.main}>
      <div className={styles.instruction}>
        <Instruction title='🎉 Congratulations! You’ve completed all the missions. '>
          Using NFT for royalty right, You’ve earned revenue from the costume sales and the NFT sales. 
          Settlus blockchain is designed to help monetize creator’s IP in the web3. era. 
          Read Settlus Whitepaper for details!
        </Instruction>
      </div>
      <div className={styles.mission}>
        <MissionCard title='Mission Completed'/>
      </div>
      <div className={styles.buttons}>
        <button onClick={handleQna}>Demo Questions & Answers</button>
        <a href='https://blueholestudio.sharepoint.com/:w:/r/sites/ProjectMigaloo/_layouts/15/doc2.aspx?sourcedoc=%7B92B4DFB1-C0D8-4A65-860D-97624C9585EE%7D&file=Whitepaper_240201.docx&action=default&mobileredirect=true'>
          <button>Read Settlus White paper</button>
        </a>
      </div>
    </div>
  </>
}