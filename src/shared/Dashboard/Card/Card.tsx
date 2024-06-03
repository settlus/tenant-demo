import styles from './Card.module.scss';
import CardContent from './CardContent/CardContent';
import OfferNoti from '../OfferNoti/OfferNoti';

export default function Card(){

  return <div className={`${styles.card}`}>
    <OfferNoti />
    <CardContent />
  </div>
}
