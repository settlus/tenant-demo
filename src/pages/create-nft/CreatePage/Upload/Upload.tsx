import styles from './Upload.module.scss';

export default function Upload(){
  return <div className={styles.main}>
    <div className={styles.avatar}>Avatar</div>
    <div className={styles.preview}>Preview</div>
    <div className={styles.select}>
      <h3>Upload File</h3>
      <p>
        Only 1:1 ration PNG files can be uploaded.
        <br />The image size cannot exceed 1024 x 1024 px(2MB)
      </p>
      <button>Select</button>
    </div>
    <button>Or use AI generated image</button>
  </div>
}