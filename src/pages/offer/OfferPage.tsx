import Instruction from '../../shared/Instruction/Instruction'
import Layout from '../../shared/Layout/Layout'
import MissionUpdate from '../../shared/MissionUpdate/MissionUpdate'
import DealOfferCard from './DealOfferCard/DealOfferCard'

export default function OfferPage() {
  return (
    <MissionUpdate updatedMission={4}>
      <Layout>
        <Instruction
          title='🎉 You’ve received an offer from a NFT collector. '
          typeWriter='As more users buy your item, sales revenue increases and so does the value of your NFT.  Sell your NFT license to earn more profits!
        <br />Note that although you sell your NFT, the copyright remains with you.'
        />
        <DealOfferCard />
      </Layout>
    </MissionUpdate>
  )
}
