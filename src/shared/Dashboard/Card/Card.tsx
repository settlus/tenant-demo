import styles from './Card.module.scss'
import CardContent from './CardContent/CardContent'
import OfferNoti from '../OfferNoti/OfferNoti'
import { useContext } from 'react'
import { DashboardContext } from '../../../store/dashboard_context'
import GuidePointer from '../../GuidePointer/GuidePointer'
import BaseCard from '../../Card/BaseCard'
import BaseTitle from '../../Card/Title'

export default function Card() {
  const { offer, step, isOfferModal } = useContext(DashboardContext)

  return (
    <BaseCard className='bg-[#fff] w-[232px]'>
      <BaseTitle name='NFT Info' />
      {step == 2 && offer && offer.itemIndex >= 0 && (
        <div className={styles.offerNoti}>
          <GuidePointer margin={2} topPos={100} leftPos={20} doGuide={step === 2 && !isOfferModal}>
            <OfferNoti />
          </GuidePointer>
        </div>
      )}
      <CardContent />
    </BaseCard>
  )
}
