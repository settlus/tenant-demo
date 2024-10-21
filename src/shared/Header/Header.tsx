import { useState } from 'react'
import { Link } from 'react-router-dom'

import settlusLogo from '../../public/png/settlus_symbol_dg.png'
import FaqModal from '../FaqModal/FaqModal.tsx'
import HeaderButton from './HeaderButton/HeaderButton.tsx'
import MissionModal from './MissionModal/MissionModal.tsx'

type PropType = {
  logoOnly?: boolean
}

export default function Header({ logoOnly }: PropType): React.ReactElement {
  const [qnaOpen, setQnaOpen] = useState(false)
  const [missionOpen, setMissionOpen] = useState(false)

  function handleQna() {
    setQnaOpen((prev) => !prev)
  }

  function handleMission() {
    setMissionOpen((prev) => !prev)
  }

  return (
    <div className='flex flex-row w-full bg-[#FFFFFF]'>
      <div className='w-full max-w-[1260px] h-[64px] mx-auto px-8 flex items-center'>
        {qnaOpen && <FaqModal open={qnaOpen} handleClose={handleQna} />}
        <Link to='/'>
          <img className='w-[40px] h-[40px]' src={settlusLogo}></img>
        </Link>
        {!logoOnly && (
          <div className='ml-auto flex flex-row gap-2 items-center'>
            <div className='relative inline-flex'>
              <HeaderButton name='Missions' handleClick={handleMission} />
              {missionOpen && <MissionModal handleClose={handleMission} />}
            </div>
            <HeaderButton name='FAQ' handleClick={handleQna} />
          </div>
        )}
      </div>
    </div>
  )
}
