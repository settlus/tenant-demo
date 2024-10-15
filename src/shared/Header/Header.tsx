import HeaderButton from './HeaderButton/HeaderButton.tsx'
import QnaModal from '../QnaModal/QnaModal.tsx'
import MissionModal from './MissionModal/MissionModal.tsx'
import settlusLogo from '../../public/png/settlus_symbol_dg.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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
      <div className='w-full max-w-[1200px] mx-auto px-16 flex items-center'>
        {qnaOpen && <QnaModal open={qnaOpen} handleClose={handleQna} />}
        <Link to='/'>
          <img src={settlusLogo}></img>
        </Link>
        {!logoOnly && (
          <div className='ml-auto flex flex-row gap-2 items-center'>
            <div className='relative inline-flex'>
              <HeaderButton name='Mission' handleClick={handleMission} />
              {missionOpen && <MissionModal handleClose={handleMission} />}
            </div>
            <HeaderButton name='FAQ' handleClick={handleQna} />
          </div>
        )}
      </div>
    </div>
  )
}
