import {useState} from 'react';
import styles from './CreatePage.module.scss';
import Instruction from "../../../shared/Instruction/Instruction";
import ProgressBar from './ProgressBar/ProgressBar';
import Navigation from '../../../shared/Navigation/Navigation';
import Upload from './Upload/Upload';

const INSTRUCTION_TEXT = [{
  title: 'Now, let’ experience as a creator and make an awesome costume!',
  text: 'Upload 2D image or choose AI generated image.',
},{
  title: 'Whoa! Almost there',
  text: 'As you finish this step, we will mint your creation as NFT and also list the item on the off-chain Avatar Costume Shop. Be ready:)',
}];

export default function CreatePage(){
  const [step,setStep] = useState(1);
  const instruction = INSTRUCTION_TEXT[step-1];

  return <div className={styles.main}>
    <Instruction title={instruction.title}>{instruction.text}</Instruction>
    <ProgressBar step={step}/>
    <div className={styles.pos}>
      <Navigation path='/intro' isBackwards={true}/>
      {step===1 && <Upload />}
      <Navigation path='/intro'/>
    </div>
  </div>
  
}