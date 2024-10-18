import { useState } from 'react'

import introLeft from '../../../../public/png/intro_left.png'
import introMain from '../../../../public/png/intro_main.png'
import introRight from '../../../../public/png/intro_right.png'
import BasicButton from '../../../../shared/Button/BasicButton'
import IntroModal from './IntroModal/IntroModal'

export default function IntroCard() {
  const [introModalOpen, setIntroModalOpen] = useState(false)

  function handleIntroModal() {
    setIntroModalOpen((prev) => !prev)
  }

  return (
    <div className='w-full h-full relative flex flex-col items-center'>
      {introModalOpen && <IntroModal open={introModalOpen} handleClose={handleIntroModal} />}
      <div className='w-[730px] h-[566px] relative'>
        <BasicButton
          className='absolute w-[230px] top-[10px] left-1/2 transform -translate-x-1/2 bg-[#2CD673] rounded-lg px-20 py-[13px] text-[1.7rem] shadow-md font-manrope z-10'
          handleClick={() => handleIntroModal()}
        >
          <p className='text-white text-[16px]'>Start</p>
        </BasicButton>
        <img
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
          src={introMain}
          alt='intro_main'
        />
        <img
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          src={introRight}
          alt='intro_right'
        />
        <img
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          src={introLeft}
          alt='intro_left'
        />
      </div>
    </div>
  )
}
