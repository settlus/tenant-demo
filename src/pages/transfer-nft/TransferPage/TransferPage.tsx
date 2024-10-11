import ConfirmModal from './ConfirmModal/ConfirmModal'
import { useContext, useState, useEffect } from 'react'
import { DashboardContext } from '../../../store/dashboard_context'
import Joy from '../../../public/png/joy_avatar.png'
import { getItem } from '../../../apis/api'
import { formatNum } from '../../../utils/util'
import BaseCard from '../../../shared/Card/BaseCard'
import BasicButton from '../../../shared/Button/BasicButton'
import BaseTitle from '../../../shared/Card/Title'
import Layout from '../../../shared/Layout/Layout'
import Instruction from '../../../shared/Instruction/Instruction'

export default function TransferPage() {
  const [isModal, setIsModal] = useState(false)
  const [data, setData] = useState({ thumbnail: '', name: '' })
  const { offer } = useContext(DashboardContext)

  function handleOpen() {
    setIsModal(true)
  }

  function handleClose() {
    setIsModal(false)
  }

  useEffect(() => {
    const loadData = async () => {
      const temp = await getItem()
      setData(temp)
    }

    loadData()
  }, [])

  return (
    <Layout>
      <div className='flex flex-col items-center gap-10'>
        <Instruction
          title='🎉 You’ve received an offer from a NFT collector. '
          typeWriter='As more users buy your item, sales revenue increases and so does the value of your NFT.  Sell your NFT license to earn more profits!
      <br />Note that although you sell your NFT, the copyright remains with you.'
        />
        <BaseCard className='flex flex-col bg-[#fff] w-[700px] px-12 py-12 gap-[40px] rounded-[20px] shadow-lg font-[Manrope]'>
          {isModal && <ConfirmModal open={isModal} handleClose={handleClose} offer={offer} />}
          <BaseTitle name='Sell NFT' />
          <div className='flex flex-col gap-[20px] items-center'>
            <div className='flex flex-col gap-[24px]'>
              <img src={data.thumbnail} className='w-[160px] h-[160px]' />
              <p className='flex items-end gap-2 text-xl'>
                Transfer "{data.name}" To <img className='m-0' src={Joy} />
              </p>
            </div>
            <p className='w-[600px] h-[57px] rounded-[10px] p-[20px] bg-[#F9FAFB] text-xs font-bold text-left'>
              {offer?.offerAddress}
            </p>
            <BasicButton className='w-[299px] h-[50px] font-bold' handleClick={handleOpen}>
              Transfer & Receive {formatNum(offer?.offerPrice || 1000)}
            </BasicButton>
          </div>
        </BaseCard>
      </div>
    </Layout>
  )
}
