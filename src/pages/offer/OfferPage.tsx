import Instruction from '../../shared/Instruction/Instruction'
import OfferModal from './OfferModal/OfferModal'
import styles from './OfferPage.module.scss'
import MissionUpdate from '../../shared/MissionUpdate/MissionUpdate'

export default function OfferPage() {
  return (
    <MissionUpdate updatedMission={4}>
      <div className={styles.main}>
        <Instruction
          title='🎉 You’ve received an offer from a NFT collector. '
          typeWriter='As more users buy your item, sales revenue increases and so does the value of your NFT.  Sell your NFT license to earn more profits!
        <br />Note that although you sell your NFT, the copyright remains with you.'
        />
        <OfferModal />
      </div>
    </MissionUpdate>
  )
}
