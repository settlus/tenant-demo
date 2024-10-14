import Instruction from '../../../shared/Instruction/Instruction'
import MissionCard from '../../../shared/MissionCard/MissionCard'
import Header from '../../../shared/Header/Header'
import QnaModal from '../../../shared/QnaModal/QnaModal'
import QnaImage from '../../../public/png/complete_demo_qna.png'
import ReturnImage from '../../../public/png/complete_return_beginning.png'
import ReadImage from '../../../public/png/complete_read_wp.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import MissionUpdate from '../../../shared/MissionUpdate/MissionUpdate'
import Layout from '../../../shared/Layout/Layout'

export default function CompletePage() {
  const [qnaOpen, setQnaOpen] = useState(false)

  const handleQna = () => {
    setQnaOpen((prev) => !prev)
  }

  return (
    <div className='flex flex-col h-full w-full gap-3'>
      <MissionUpdate updatedMission={5}>
        {qnaOpen && <QnaModal open={qnaOpen} handleClose={handleQna} />}
        <Header logoOnly={true} />
        <Layout>
          <Instruction
            title='🎉 Congratulations! You’ve completed all the missions. '
            typeWriter='Using NFT for royalty right, You’ve earned revenue from the costume sales and the NFT sales. 
          Settlus blockchain is designed to help monetize creator’s IP in the web3. era. 
          Read Settlus Whitepaper for details!'
          />
          <div className='flex flex-row gap-[10px]'>
              <MissionCard title='Mission Completed' />
            <div className='flex flex-row items-center justify-between gap-[10px]'>
              <button onClick={handleQna}>
                <img src={QnaImage} className='w-[244.65px] h-[307.28px] cursor-pointer' />
              </button>
              <a href='https://settlus.org/docs/whitepaper.pdf' target='_blank'>
                <button>
                  <img src={ReadImage} className='w-[244.65px] h-[307.28px]  cursor-pointer' />
                </button>
              </a>
              <Link to={'/intro'}>
                <button>
                  <img
                    src={ReturnImage}
                    className=' w-[244.65px] h-[307.28px]  cursor-pointer'
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
