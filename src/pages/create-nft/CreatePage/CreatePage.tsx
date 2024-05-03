import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './CreatePage.module.scss';
import Instruction from "../../../shared/Instruction/Instruction";
import ProgressBar from './ProgressBar/ProgressBar';
import Navigation from '../../../shared/Navigation/Navigation';
import Upload from './Upload/Upload';
import Submit from './Submit/Submit';

const TEXT = [{
  title: 'Now, let’ experience as a creator and make an awesome costume!',
  text: 'Upload 2D image or choose AI generated image.',
},{
  title: 'Whoa! Almost there',
  text: 'As you finish this step, we will mint your creation as NFT and also list the item on the off-chain Avatar Costume Shop. Be ready:)',
}];

export default function CreatePage(){
  const [step,setStep] = useState(1);
  const navigate = useNavigate();
  const instruction = step<2 ? TEXT[0]: TEXT[1];

  if(step===0) navigate('intro/mission');

  function handleNavigate(dir: string) {
    if(dir==='next') setStep((prev)=>{
      return prev+1;
    });
    else setStep((prev)=>{
      return prev-1;
    })

  }

  return <div className={styles.main}>
    <Instruction title={instruction.title}>{instruction.text}</Instruction>
    <ProgressBar step={step}/>
    <div className={styles.pos}>
      <Navigation handleClick={()=>handleNavigate('back')} isBackwards={true}/>
      {step===1 && <Upload />}
      {step>1 && <Submit />}
      <Navigation handleClick={()=>handleNavigate('next')} path='/intro'/>
    </div>
  </div>
  
}