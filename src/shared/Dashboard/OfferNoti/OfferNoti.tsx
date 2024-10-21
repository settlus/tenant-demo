import { useNavigate } from 'react-router-dom'

import Letter from '../../../public/png/settlus_letter.png'

export default function OfferNoti() {
  const navigate = useNavigate()

  return (
    <div className='relative'>
      <button
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[2rem] w-[7rem]'
        onClick={() => navigate('/demo/offer')}
      >
        <img className='h-[4rem] w-[4rem] -ml-2 animate-shakeAndScaleUp' src={Letter} />
      </button>
    </div>
  )
}
