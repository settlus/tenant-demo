import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './CreatePage.module.scss';
import Instruction from "../../../shared/Instruction/Instruction";
import ProgressBar from './ProgressBar/ProgressBar';
import Navigation from '../../../shared/Navigation/Navigation';
import Upload from './Upload/Upload';
import Submit from './Submit/Submit';
import SubmitModal from './SubmitModal/SumbitModal';
import { mintNFT } from '../../../apis/api';

const TEXT = [{
  title: 'Now, let’ experience as a creator and make an awesome costume!',
  text: 'Upload 2D image or choose AI generated image.',
},{
  title: 'Whoa! Almost there',
  text: 'As you finish this step, we will mint your creation as NFT and also list the item on the off-chain Avatar Costume Shop. Be ready:)',
}];

type Info = {
  price: string | null,
  name: string | null,
}

function validate(file: File | null, info: Info){
  if(!file) return {error: 'Please upload an NFT image file!'};
  if(!info.name) return {error: 'Please enter a valid NFT name!'};
  if(!info.price || !Number(info.price)) return {error: 'Please enter a valid price!'};

  return {};
}

export default function CreatePage(){
  const [open, setOpen] = useState(false);
  const [step,setStep] = useState(1);

  const [file,setFile] = useState<File | null>(null);
  const [info, setInfo] = useState<Info>({
    price: null,
    name: null,
  })
  const navigate = useNavigate();
  const instruction = step<2 ? TEXT[0]: TEXT[1];

  useEffect(()=>{
    if(step===0) navigate('intro/mission');
    if(step===3) {
      const mint = async()=>{
        await mintNFT(file, info);
        setStep(4);    
      }
      setOpen(true);

      const errorMsg = validate(file,info).error;
      if(errorMsg){
        alert(errorMsg);
        setStep(2);
        // setOpen(false);
      }
      else mint();
    
    }
  },[step]);

  function handleFile(file:File){
    setFile(file);
  }

  function handleInfo(field: string, value: string){
    setInfo((prev)=>{
      let updated= {...prev};
      if(field==='name') updated.name=value;
      else if(field==='price') updated.price=value;

      return updated;
    })
    
  }


  function handleNavigate(dir: string) {
    if(dir==='next') setStep((prev)=>{
      return prev+1;
    });
    else setStep((prev)=>{
      return prev-1;
    })

  }

  function handleClose(){
    setOpen(false);
    setStep(5);
  }

  return <div className={styles.main}>
    <SubmitModal step={step} open={open} handleClose={handleClose}/>

    <Instruction title={instruction.title}>{instruction.text}</Instruction>
    <ProgressBar step={step}/>
    <div className={styles.pos}>
      <Navigation handleClick={()=>handleNavigate('back')} isBackwards={true}/>
      {step===1 && <Upload file={file} handleFile={handleFile}/>}
      {step>1 && <Submit info={info} handleInfo={handleInfo}/>}
      <Navigation handleClick={()=>handleNavigate('next')} path='/intro'/>
    </div>
  </div>
  
}