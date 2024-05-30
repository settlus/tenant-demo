import styles from './Upload.module.scss';
import AvatarPreview from '../../../../shared/AvatarPreview/AvatarPreview';
import templateImg from '../../../../public/images/clothTemplate/Item1/T_UGC_Top_DefaultWear001F_D.png';
import downloadIcon from '../../../../public/svg/Download.svg';
import sample1 from '../../../../public/images/clothTemplate/sampleTexture/sample1.png';
import sample2 from '../../../../public/images/clothTemplate/sampleTexture/sample2.png';
import sample3 from '../../../../public/images/clothTemplate/sampleTexture/sample3.png';
import { useState, useEffect } from 'react';

const SAMPLES = [sample1, sample2, sample3]

export function validateFile(imgFile: File){
    const extension=imgFile.name.split('.').pop() || 'none';
    if('png'!==extension.toLowerCase()) return {error: 'The file must have png extension!'};
    
    // let url = URL.createObjectURL(imgFile);
    // let img = new Image();
    // img.src=url;

    // let width = img.width;
    // let height = img.height;
    // console.log(width, height, url, img.src);
    // if(width!==height) return {error:'Image ratio should be 1:1 !'};
    // if(width>1024) return {error:'Image size should be smaller than 1024px!'};
    return {};
}

type PropType={
  file: string,
  handleFile: (file: string)=>void,
}

export default function Upload({file, handleFile}: PropType):React.ReactElement{
  const [useSample, setUseSample] = useState(false);
  const [sample, setSample] = useState(0);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    if (e.target.files && e.target.files.length > 0) {
      const currFile = e.target.files[0];
      const url = URL.createObjectURL(currFile);
      let error = validateFile(currFile);

      if (!error.error) {
        handleFile(url);
      } else alert(error.error);
    }
  }

  useEffect(()=>{
    return ()=>{
      handleFile('');
    }
  },[]);

  function handleClick(){
    if(useSample==false) setUseSample(true);
    if(useSample){
      setSample(prev=>(prev+1)%3);
    }
    handleFile(SAMPLES[sample]);

  }

  return <div className={styles.main}>
    <div className={styles.avatar}>
      <AvatarPreview uploadedFile={file} selectedTemplateMeshName='DefaultWear001F'/>
    </div>
    <div className={styles.preview}>
      <img src={templateImg}/>
      <a href={templateImg} download={'template.png'}>
        <img src={downloadIcon} alt='download'/>
      </a>
    </div>
    <div className={styles.select}>
      <h3>Upload File</h3>
      <p>
        Only 1:1 ration PNG files can be uploaded.
        <br />The image size cannot exceed 1024 x 1024 px(2MB)
      </p>
      <span className={styles.upload}>
        <input className={styles.hidden} type="file" onChange={handleChange}/>
        <p>Select</p>
      </span>
    </div>
    <button onClick={handleClick}>Or use AI generated image</button>
  </div>
}