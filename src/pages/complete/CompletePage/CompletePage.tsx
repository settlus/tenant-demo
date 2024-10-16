import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import QnaImage from '../../../public/png/complete_demo_qna.png'
import ReadImage from '../../../public/png/complete_read_wp.png'
import ReturnImage from '../../../public/png/complete_return_beginning.png'
import FaqModal from '../../../shared/FaqModal/FaqModal'
import Header from '../../../shared/Header/Header'
import Instruction from '../../../shared/Instruction/Instruction'
import Layout from '../../../shared/Layout/Layout'
import MissionCard from '../../../shared/MissionCard/MissionCard'
import MissionUpdate from '../../../shared/MissionUpdate/MissionUpdate'

export default function CompletePage() {
  const [qnaOpen, setQnaOpen] = useState(false)

  const handleQna = () => {
    setQnaOpen((prev) => !prev)
  }

  return (
    <div className='flex flex-col h-full w-full gap-3'>
      <MissionUpdate updatedMission={5}>
        {qnaOpen && <FaqModal open={qnaOpen} handleClose={handleQna} />}
        <Header logoOnly={true} />
        <Layout>
          <div className='w-[1124px]'>
            <Instruction
              title='🎉 Congratulations! You’ve completed all the missions. '
              typeWriter='Using NFT for royalty right, You’ve earned revenue from the costume sales and the NFT sales. 
          Settlus blockchain is designed to help monetize creator’s IP in the web3. era. 
          Read Settlus Whitepaper for details!'
              className='w-full'
            />
          </div>
          <div className='flex flex-row w-[1100px] gap-[10px]'>
            <MissionCard title='Mission Completed' done={true} />
            <div className='flex flex-row items-start justify-between gap-[10px]'>
              <button onClick={handleQna}>
                <img src={QnaImage} className='w-[244.65px] h-[307.28px] cursor-pointer' />
              </button>
              <a href='https://settlus.org/docs/whitepaper.pdf' target='_blank'>
                <button>
                  <img src={ReadImage} className='w-[244.65px] h-[307.28px] cursor-pointer' />
                </button>
              </a>
              <Link to={'/intro'}>
                <button>
                  <img
                    src={ReturnImage}
                    className=' w-[244.65px] h-[307.28px] cursor-pointer'
                  ></img>
                </button>
              </Link>
            </div>
          </div>
        </Layout>
        <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
      </MissionUpdate>
    </div>
  )
}
