import IntroCard from './IntroCard/IntroCard.tsx'
import { useContext, useEffect } from 'react'
import { ShopContext } from '../../../store/costumeshop_context.tsx'
import { DashboardContext } from '../../../store/dashboard_context.tsx'
import { MissionContext } from '../../../store/mission_context.tsx'

export default function Intro() {
  const { reset: resetShop } = useContext(ShopContext)
  const { reset: resetDashboard } = useContext(DashboardContext)
  const { reset: resetMission } = useContext(MissionContext)

  useEffect(() => {
    sessionStorage.clear()
    sessionStorage.setItem('mission', '0')
    resetShop()
    resetDashboard()
    resetMission()

    return () => {}
  }, [])

  return (
    <div className='h-[70vh] max-h-full w-[60%] flex items-center flex-col justify-center gap-[1rem] m-auto'>
      <div className='text-center text-5xl font-extrabold'>
        Experience <span className='text-[#2CD673]'>NFT Licensing</span> in a minute!
      </div>
      <p className='text-2xl mb-2'>
        Settlus is the upcoming standard of creator economy.
        <br />
        Experience as an avatar costume creator and learn the value of NFT licensing on Settlus.
      </p>
      <IntroCard />
    </div>
  )
}
