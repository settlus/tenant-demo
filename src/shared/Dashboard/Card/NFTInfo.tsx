import CardContent from './CardContent/CardContent'
import OfferNoti from '../OfferNoti/OfferNoti'
import { useContext } from 'react'
import { DashboardContext } from '../../../store/dashboard_context'
import GuidePointer from '../../GuidePointer/GuidePointer'
import BaseCard from '../../Card/BaseCard'
import BaseTitle from '../../Card/Title'

export default function NFTInfo() {
  const { offer, step, isOfferModal } = useContext(DashboardContext)

  return (
    <BaseCard className='bg-[#fff] w-[232px] px-[16px] py-[20px] rounded-[10px]'>
      <BaseTitle name='NFT Info' />
      {step == 2 && offer && offer.itemIndex >= 0 && (
        <div className='absolute top-[-1rem] left-[4rem]'>
          <GuidePointer margin={2} topPos='top-80' leftPos='left-1/2' doGuide={step === 2 && !isOfferModal}>
            <OfferNoti />
          </GuidePointer>
        </div>
      )}
      <CardContent />
    </BaseCard>
  )
}
