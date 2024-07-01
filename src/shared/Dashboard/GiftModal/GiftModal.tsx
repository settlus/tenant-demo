import Modal from "../../Modal/Modal";
import GiftImg from '../../../public/svg/Present.svg';
import styles from './GiftModal.module.scss';
import { useNavigate } from "react-router-dom";

type PropType = {
  open: boolean,
}

export default function GiftModal({open}: PropType): React.ReactElement{
  const navigate = useNavigate();

  return <Modal open={open} style={styles.modal}>
        <img src={GiftImg} alt='gift' onClick={()=>navigate('/demo/offer')}/>
    </Modal>
}