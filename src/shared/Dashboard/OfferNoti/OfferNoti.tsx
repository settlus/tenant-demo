import styles from './OfferNoti.module.scss'
import Letter from '../../../public/png/settlus_letter.png'
import { useContext } from 'react'
import { DashboardContext } from '../../../store/dashboard_context'

export default function OfferNoti() {
  const { setIsOfferModal } = useContext(DashboardContext)

  function handleClick() {
    setIsOfferModal(true)
  }

  return (
    <div className={styles.main}>
      <button onClick={handleClick} id='modal'>
        <img src={Letter} />
        <p>Offer Arrived!</p>
      </button>
    </div>
  )
}
