import CardContent from './CardContent/CardContent'
import OfferNoti from '../OfferNoti/OfferNoti'
import { useContext } from 'react'
import { DashboardContext } from '../../../store/dashboard_context'
import BaseCard from '../../Card/BaseCard'
import BaseTitle from '../../Card/Title'

export default function NFTInfo() {
  const { offer, step } = useContext(DashboardContext)

  return (
    <BaseCard className='bg-[#fff] w-[232px] px-[16px] py-[20px] rounded-[10px]'>
      <BaseTitle name='NFT Info' />
      {step == 2 && offer && offer.itemIndex >= 0 && (
        <div className='absolute top-[-0.5rem] left-[15rem]'>
          <OfferNoti />
        </div>
      )}
      <CardContent />
    </BaseCard>
  )
}
