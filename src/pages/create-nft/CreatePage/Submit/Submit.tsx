import styles from './Submit.module.scss';
import QnaBanner from './QnaBanner/QnaBanner';
import Field from './Field/Field';

type PropType = {
  info: {
    price: string | null,
    name: string | null,
  },
  handleInfo: (field: string, value: string )=>void,
}

export default function Submit ({info, handleInfo}: PropType): React.ReactElement{
  return <div className={styles.main}>
    <form>
      <Field label='Item Title' value={info.name || ''} handleInfo={handleInfo}/>
      <Field label='Item Price($)' value={info.price || ''} handleInfo={handleInfo}/>
    </form>

    <QnaBanner />
  </div>
}