import styles from './Upload.module.scss';

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
  file: File | null,
  handleFile: (file: File)=>void,
}

export default function Upload({file, handleFile}: PropType):React.ReactElement{

  let fileUrl = null;
  if (file) {
    fileUrl = URL.createObjectURL(file);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    if (e.target.files && e.target.files.length > 0) {
      const currFile = e.target.files[0];
      let error = validateFile(currFile);

      if (!error.error) {
        handleFile(currFile);
      } else alert(error.error);
    }
  }

  return <div className={styles.main}>
    <div className={styles.avatar}>Avatar</div>
    <div className={styles.preview}>
      {fileUrl && <img src={fileUrl}/>}
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
    <button>Or use AI generated image</button>
  </div>
}