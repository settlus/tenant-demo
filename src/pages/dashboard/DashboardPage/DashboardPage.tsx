import { useContext, useEffect } from 'react'

import Dashboard from '../../../shared/Dashboard/Dashboard'
import GiftModal from '../../../shared/Dashboard/GiftModal/GiftModal'
import Instruction from '../../../shared/Instruction/Instruction'
import Layout from '../../../shared/Layout/Layout'
import MissionUpdate from '../../../shared/MissionUpdate/MissionUpdate'
import { DashboardContext } from '../../../store/dashboard_context'

export default function Main() {
  const { step, setOffer, isGiftModal, setIsGiftModal } = useContext(DashboardContext)

  useEffect(() => {
    if (step === 1) {
      setOffer({
        itemIndex: 0,
        offerAddress: import.meta.env.VITE_JOY_PB_KEY,
        offerPrice: 1000000,
      })
      setIsGiftModal(true)
    }
  }, [step])

  return (
    <MissionUpdate updatedMission={3}>
      <Layout>
        {isGiftModal && <GiftModal open={isGiftModal} />}
        <div className='w-[1124px]'>
          <Instruction
            className='w-full'
            title='🎉 Congratulations on your first revenue!'
            typeWriter='On the creator’s dashboard, you can see your NFT info, Item listing, and activity history. Click the contract address to see your minting on Settlus Scan.'
          />
        </div>
        <Dashboard />
      </Layout>
    </MissionUpdate>
  )
}
