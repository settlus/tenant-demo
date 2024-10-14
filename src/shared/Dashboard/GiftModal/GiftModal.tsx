import Modal from '../../Modal/Modal'
import Letter from '../../../public/png/settlus_letter.png'
import styles from './GiftModal.module.scss'
import { useNavigate } from 'react-router-dom'

type PropType = {
  open: boolean
}

export default function GiftModal({ open }: PropType): React.ReactElement {
  const navigate = useNavigate()

  return (
    <Modal open={open} className={styles.modal}>
      <img src={Letter} alt='letter' onClick={() => navigate('/demo/offer')} />
    </Modal>
  )
}
