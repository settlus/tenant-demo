import Modal from "../Modal/Modal";
import symbol from '../../public/svg/qna.svg';
import styles from './QnaModal.module.scss';
import closeBtn from '../../public/svg/Close.svg';

const QNA = [
  {
    question: 'What is the relationship between NFT and Item?',
    answer: 'Item is the copy of a digital asset. Simply, it’s the printmaking in arts. You can think of NFT as a proof of a digital asset’s ownership. In the NFT marketplace, you generate the revenue by giving out the ownership of your digital creation. To generate more revenue from NFT, sell the digital copy of your assets and earn profits without giving out the ownership of the creation.',
  },
  {
    question: 'Is item price different from NFT price?',
    answer: 'Yes! Item price is the price for the costume selling on the Avatar Costume Shop. NFT price is the price for the original digital asset selling on the NFT Marketplace.',
  },
  {
    question: 'What happens when you sell your NFT?',
    answer: 'The copyright still remains with the creator(you). Only the revenue from selling the NFT licensed costume will be vested to new NFT holder.',
  },
  {
    question: 'What happens when the user cancels the transactions of a purchased item?',
    answer: 'User can cancel the transaction within 7 days of the purchase day. Thus, Settlus records the transaction after the cancellation period.',
  },
]

type PropType= {
  open: boolean,
  handleClose: ()=>void,
}

export default function QnaModal({open, handleClose}: PropType): React.ReactElement{

  return <>
    <Modal open={open} style={styles.modal}>
      <div className={styles.main}>
        <img src={symbol} className={styles.symbol}/>
        <div className={styles.text}>
          <img src={closeBtn} className={styles.close} onClick={handleClose}/>
          {QNA.map((item)=><div key={item.question}>
            <h3>{'🙋🏼 '+item.question}</h3>
            <p>{'\u2003→ 💁🏼‍'+item.answer}</p>
          </div>)}
          <a href='https://settlus.org/docs/whitepaper.pdf' target="_blank">Click here to read Settlus Whitepaper</a>
        </div>
      </div>
    </Modal>
  </>
}