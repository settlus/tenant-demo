import Instruction from '../../shared/Instruction/Instruction'
import DealOfferCard from './DealOfferCard/DealOfferCard'
import MissionUpdate from '../../shared/MissionUpdate/MissionUpdate'
import Layout from '../../shared/Layout/Layout'

export default function OfferPage() {
  return (
    <MissionUpdate updatedMission={4}>
      <Layout>
      <div className='flex flex-col items-center gap-10'>
        <Instruction
          title='🎉 You’ve received an offer from a NFT collector. '
          typeWriter='As more users buy your item, sales revenue increases and so does the value of your NFT.  Sell your NFT license to earn more profits!
        <br />Note that although you sell your NFT, the copyright remains with you.'
        />
        <DealOfferCard />
      </div>
      </Layout>
    </MissionUpdate>
  )
}
