import styles from './Card.module.scss';
import CardContent from './CardContent/CardContent';
import OfferNoti from '../OfferNoti/OfferNoti';
import { useContext } from 'react';
import { DashboardContext } from '../../../store/dashboard_context';

export default function Card(){
  const {offer} = useContext(DashboardContext);

  return <div className={`${styles.card}`}>
    {offer && <OfferNoti />}
    <CardContent />
  </div>
}
