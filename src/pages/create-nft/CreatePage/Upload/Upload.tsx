import styles from './Upload.module.scss';
import AvatarPreview from '../../../../shared/AvatarPreview/AvatarPreview';
import templateImg from '../../../../public/images/clothTemplate/Item1/T_UGC_Top_DefaultWear001F_D.png';
import downloadIcon from '../../../../public/svg/Download.svg';
import sample1 from '../../../../public/images/clothTemplate/sampleTexture/sample1.png';
import sample2 from '../../../../public/images/clothTemplate/sampleTexture/sample2.png';
import sample3 from '../../../../public/images/clothTemplate/sampleTexture/sample3.png';

const SAMPLES = [sample1, sample2, sample3]

export function validateFile(imgFile: File): Promise<{ error?: string }>{
  return new Promise((resolve, reject) => {
    const extension = imgFile.name.split('.').pop() || 'none';
    if ('png' !== extension.toLowerCase()) {
      resolve({ error: 'The file must have a png extension!' });
      return;
    }

    const img = new Image();
    
    img.onload = function () {
      if (img.width !== img.height) {
        resolve({ error: 'The image should be of 1:1 ratio!' });
      } else if(img.width>1024){
        resolve({ error: 'The file size is too large!' });
      }
      else {
        resolve({});
      }
      URL.revokeObjectURL(img.src);
    };

    img.onerror = function (e) {
      reject({ error: 'Failed to load the image. Please select a valid image file.' });
    };

    img.src = URL.createObjectURL(imgFile);
  });
}

type PropType={
  file: string,
  handleFile: (file: string)=>void,
  sample: number,
  handleSample: (value?:number)=>void,
  useSample: boolean,
  handleUseSample: (value:boolean)=>void,
}

export default function Upload({file, handleFile, sample, handleSample, useSample, handleUseSample}: PropType):React.ReactElement{

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    if (e.target.files && e.target.files.length > 0) {
      const currFile = e.target.files[0];
      const url = URL.createObjectURL(currFile);

      validateFile(currFile)
        .then(result=>{
          if(result.error){
            alert(result.error);
          }else{
            handleUseSample(false);
            handleSample(2);
            handleFile(url);
            
            const doc = document.getElementById('fileInput') as HTMLInputElement
            if(doc) doc.value = '';
          }
        })
        .catch(e=>{
          console.log(e);
        })
    }
  }

  function handleClick(){
    if(useSample==false) handleUseSample(true);
    // if(useSample){
    //   handleSample();
    // }
    handleSample();
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
        <input className={styles.hidden} type="file" id="fileInput" onChange={handleChange}/>
        <p>Select</p>
      </span>
    </div>
    <button onClick={handleClick} className={useSample ? styles.active : ''}>Or use Sample Costume {useSample ? sample+1 : ' '}</button>
  </div>
}