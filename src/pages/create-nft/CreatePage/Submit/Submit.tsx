import styles from './Submit.module.scss';
import QnaBanner from './QnaBanner/QnaBanner';
import Field from './Field/Field';
import { useEffect } from 'react';
import { getNFT } from '../../../../apis/api';

type PropType = {
  info: {
    price: string | null,
    name: string | null,
  },
  handleInfo: (field: string, value: string )=>void,
}

export default function Submit ({info, handleInfo}: PropType): React.ReactElement{

  const isLoaded = typeof window !=='undefined' && typeof window.Module !=='undefined';
  
  useEffect(()=>{
    return ()=>{
      handleInfo('name','');
      handleInfo('price','');
    }
  },[]);


  return <div className={styles.main}>
    <div className={styles.itemInfo}>
      <img src={isLoaded ? Module.OVDR_Thumbnails?.main.url : ''} />
      <form>
        <Field label='Item Title' value={info.name || ''} handleInfo={handleInfo}/>
        <Field label='Item Price($)' value={info.price || ''} handleInfo={handleInfo}/>
      </form>
    </div>

    <QnaBanner />
  </div>
}