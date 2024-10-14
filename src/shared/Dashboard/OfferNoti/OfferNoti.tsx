import Letter from '../../../public/png/settlus_letter.png'
import { useContext } from 'react'
import { DashboardContext } from '../../../store/dashboard_context'

export default function OfferNoti() {
  const { setIsOfferModal } = useContext(DashboardContext)

  function handleClick() {
    setIsOfferModal(true)
  }

  return (
    <div className='relative z-3000'>
      <button className='max-h-[2rem] w-[7rem] animate-shakeAndScaleUp' onClick={handleClick} id='modal'>
        <img className='m-0 h-[2rem] w-[2rem] -ml-2 mr-[0.2rem]' src={Letter} />
      </button>
    </div>
  )
}
