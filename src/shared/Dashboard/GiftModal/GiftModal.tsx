import { useNavigate } from 'react-router-dom'

import Letter from '../../../public/png/settlus_letter.png'
import Modal from '../../Modal/Modal'

type PropType = {
  open: boolean
}

export default function GiftModal({ open }: PropType): React.ReactElement {
  const navigate = useNavigate()

  return (
    <Modal open={open} className='bg-transparent overflow-hidden'>
      <img
        className='h-[60vh] w-auto animate-shakeAndScaleUp'
        src={Letter}
        alt='letter'
        onClick={() => navigate('/demo/offer')}
      />
    </Modal>
  )
}
