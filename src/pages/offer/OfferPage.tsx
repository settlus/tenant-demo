import Instruction from "../../shared/Instruction/Instruction";
import OfferModal from "./OfferModal/OfferModal";
import styles from './OfferPage.module.scss';

export default function OfferPage(){
  return <div className={styles.main}>
    <Instruction title='🎉 You’ve received an offer from a NFT collector. '
      typeWriter='As more users buy your item, sales revenue increases and so does the value of your NFT.  Sell your NFT license to earn more profits!'/>
    <OfferModal />
  </div>
}