import styles from './OfferModal.module.scss'
import Joy from '../../../public/png/joy_avatar.png'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardContext } from '../../../store/dashboard_context'
import { formatNum } from '../../../utils/util'
import BaseCard from '../../../shared/Card/BaseCard'
import BaseTitle from '../../../shared/Card/Title'
import BasicButton from '../../../shared/Button/BasicButton'

export default function OfferModal() {
  const { offer, setIsGiftModal, setStep } = useContext(DashboardContext)
  const navigate = useNavigate()

  function handleClose() {
    setStep(2)
    setIsGiftModal(false)
    navigate('/demo/dashboard')
  }

  function handleProceed() {
    handleClose()
    sessionStorage.setItem('mission', '4')
    navigate('/demo/transfer-nft')
  }

  return (
    <BaseCard className='w-[732px] h-[496px] bg-[#fff] p-[50px] shadow-lg'>
      <BaseTitle name='Deal Offer' />
      <div className='flex flex-col gap-[24px] overflow-visible items-center'>
        <img className='w-[100px] h-auto m-0' src={Joy} />
        <p className='text-xl font-[Manrope] font-normal text-left'>
          Joy has just offered to buy your NFT for {formatNum(offer?.offerPrice || 1000)}. Want to
          accept the offer and transfer NFT?
          <br />
          <br />
          <p className='font-[Manrope] text-[16px] text-[#4B5563]'>
            *Once transferred, revenue from selling this NFT costume will be vested to the new
            owner.
          </p>
        </p>
        <div className='flex flex-row gap-[18px] justify-center'>
          <BasicButton className="w-[190px] h-[50px]" filled={false} handleClick={handleClose}>
            Cancel
          </BasicButton>
          <BasicButton className="w-[190px] h-[50px]" filled={true} handleClick={handleProceed}>
            Proceed
          </BasicButton>
        </div>
      </div>
    </BaseCard>
  )
}
