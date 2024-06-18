import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './CreatePage.module.scss';
import Instruction from "../../../shared/Instruction/Instruction";
import ProgressBar from './ProgressBar/ProgressBar';
import Navigation from '../../../shared/Navigation/Navigation';
import Upload from './Upload/Upload';
import Submit from './Submit/Submit';
import SubmitModal from './SubmitModal/SumbitModal';
import { mintNFT, createItem } from '../../../apis/api';

const TEXT = [{
  title: 'Now, let’ experience as a creator and make an awesome t-shirt!',
  text: 'Upload 2D image or choose AI generated image.',
},{
  title: 'Whoa! Almost there',
  text: 'As you finish this step, we will mint your creation as NFT and also list the item on the off-chain Avatar Costume Shop. Be ready:)',
}];

type Info = {
  price: string | null,
  name: string | null,
}

function validateFile(file: string ){
  if(file.length==0) return {error: 'Please upload an NFT image file or select a sample costume!'};

  return {};
}

function validateFields(info: Info){
  if(!info.name) return {error: 'Please enter a valid NFT name!'};
  if(!info.price || !Number(info.price)) return {error: 'Please enter a valid price!'};

  return {};
}

export default function CreatePage(){
  const isLoaded = typeof window !=='undefined' && typeof window.Module !=='undefined';

  const [open, setOpen] = useState(false);
  const [step,setStep] = useState(0);
  const [navOnHover, setNavOnHover] = useState(false);

  const [file,setFile] = useState<string>('');
  const [info, setInfo] = useState<Info>({
    price: null,
    name: null,
  })

  const [useSample, setUseSample] = useState(false);
  const [sample, setSample] = useState(2);

  const navigate = useNavigate();
  const instruction = step<3 ? TEXT[0]: TEXT[1];

  function handleUseSample(value:boolean){
    setUseSample(value);
  }

  function handleSample(value?:number){
    if(value) setSample(value);
    else setSample(prev=>(prev+1)%3);
  }


  function handleFile(file:string){
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

  function handleStep(){
    setStep(prev=>{
      return prev+1;
    });
  }


  function handleNavigate(dir: string) {
    if(dir==='next') setStep((prev)=>{
      return prev+1;
    });
    else {
      if(step===3) setStep(0);
      else setStep((prev)=>{
        return prev-1
      });
    } 

  }

  function handleClose(){
    setOpen(false);
  }

  function handleNavHover(value: boolean){
    setNavOnHover(value);
  }

  useEffect(()=>{
    if(step<0) navigate(-1);
    if(step===0) {
      setFile('');
    }
    if(step===1) {
      const errorMsg = validateFile(file).error;
      if(errorMsg){
        alert(errorMsg);
        setStep(0);
        // setOpen(false);
      }else{
        const mint = async()=>{
          const thumbnail = isLoaded ? Module.OVDR_Thumbnails?.main.url : file;
          await mintNFT(thumbnail, useSample ? sample : undefined);
          setStep(2);    
        }
        setOpen(true);
        mint();
      }
    }
    if(step===4){
      const errorMsg = validateFields(info).error;
      if(errorMsg){
        alert(errorMsg);
        setStep(3);
      }
      else {
        const create = async()=>{
          const final= {
            name: info.name,
            price: parseInt(info.price ||'',10),
          }
          const thumbnail = isLoaded ? Module.OVDR_Thumbnails?.main.url : file;
          await createItem(final, thumbnail, file);
          sessionStorage.setItem('mission','2');
          navigate('/demo/costume-shop/new-item');
        };

        create();
      }
    }
  },[step]);

  return <div className={styles.main}>
    <SubmitModal step={step} open={open} handleClose={handleClose} handleStep={handleStep}/>

    <Instruction title={instruction.title}>{instruction.text}</Instruction>
    <ProgressBar step={step}/>
    <div className={styles.pos}>
      <Navigation handleClick={()=>handleNavigate('back')} isBackwards={true}/>
      {step<3 && <Upload file={file} handleFile={handleFile} sample={sample} handleSample={handleSample} useSample={useSample} handleUseSample={handleUseSample}/>}
      {step>2 && <Submit info={info} handleInfo={handleInfo}/>}
      <div className={styles.proceed} onClick={()=>handleNavigate('next')} onMouseEnter={()=>{handleNavHover(true)}} onMouseLeave={()=>{handleNavHover(false)}}>
        {navOnHover && <h3>{step===0 && 'Mint'}{step===3 && 'Save'} &gt;&gt;</h3>}
        {!navOnHover && <Navigation />}
      </div>
    </div>
  </div>
  
}