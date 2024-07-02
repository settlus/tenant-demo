import styles from './Card.module.scss';
import CardContent from './CardContent/CardContent';
import OfferNoti from '../OfferNoti/OfferNoti';
import { useContext } from 'react';
import { DashboardContext } from '../../../store/dashboard_context';
import GuidePointer from '../../GuidePointer/GuidePointer';

export default function Card(){
  const {offer, step, isOfferModal} = useContext(DashboardContext);

  return <div className={`${styles.card}`}>
    {step==2 && offer && offer.itemIndex>=0 && <div className={styles.offerNoti}>
      <GuidePointer  topPos={100} leftPos={20} doGuide={step===2 && !isOfferModal}>
        <OfferNoti />
      </GuidePointer>  
    </div>}
    <CardContent />
  </div>
}
