import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Joy from '../../../public/png/joy_avatar.png'
import { DashboardContext } from '../../../store/dashboard_context'
import { formatNum } from '../../../utils/util'
import Modal from '../../Modal/Modal'
import styles from './OfferModal.module.scss'

export default function OfferModal() {
  const { isOfferModal, setIsOfferModal, offer } = useContext(DashboardContext)
  const navigate = useNavigate()

  function handleClose() {
    setIsOfferModal(false)
  }

  function handleProceed() {
    handleClose()
    sessionStorage.setItem('mission', '4')
    navigate('/demo/transfer-nft')
  }

  return (
    <Modal open={isOfferModal} className='w-[18rem] h-[20rem]'>
      <div className='flex flex-col w-[632px] h-[306px]'>
        <p className='text-2xl font-[Manrope] font-bold'>Deal Offer</p>
        <img src={Joy} />
        <p className='text-xl font-[Manrope] font-normal'>
          Joy has just offered to buy your NFT for {formatNum(offer?.offerPrice || 1000)}. Want to
          accept the offer and transfer NFT?
          <br />
          <br />
          <p className='font-[Manrope] text-[16px]'>
            *Once transferred, revenue from selling this NFT costume will be vested to the new
            owner.
          </p>
        </p>
        <div className={styles.buttons}>
          <button className={styles.cancel} onClick={handleClose}>
            Cancel
          </button>
          <button className={styles.proceed} onClick={handleProceed}>
            Proceed
          </button>
        </div>
      </div>
    </Modal>
  )
}
