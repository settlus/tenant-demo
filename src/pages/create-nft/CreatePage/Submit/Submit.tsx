import styles from './Submit.module.scss';
import QnaBanner from './QnaBanner/QnaBanner';
import Field from './Field/Field';

export default function Submit (){
  return <div className={styles.main}>
    <form>
      <Field label='Item Title' />
      <Field label='Item Price($)' />
    </form>

    <QnaBanner />
  </div>
}