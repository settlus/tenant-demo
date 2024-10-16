import { useEffect, useState } from 'react'

import BaseCard from '../../../../shared/Card/BaseCard'
import BaseTitle from '../../../../shared/Card/Title'
import MissionUpdate from '../../../../shared/MissionUpdate/MissionUpdate'
import Field from './Field/Field'
import QnaModal from './QnaModal/QnaModal'

type PropType = {
  info: {
    price: string | null
    name: string | null
  }
  handleInfo: (field: string, value: string) => void
}

export default function Submit({ info, handleInfo }: PropType): React.ReactElement {
  const isLoaded = typeof window !== 'undefined' && typeof window.Module !== 'undefined'
  const [qnaModalOpen, setQnaModalOpen] = useState(false)
  const [errorModalOpen, setErrorModalOpen] = useState(false)

  useEffect(() => {
    return () => {
      handleInfo('name', '')
      handleInfo('price', '')
    }
  }, [])

  function handleQnaModal() {
    setQnaModalOpen((prev: boolean) => !prev)
  }

  function handleErrorModal() {
    setErrorModalOpen((prev: boolean) => !prev)
  }

  return (
    <MissionUpdate updatedMission={2}>
      <BaseCard className='flex flex-col bg-white w-[772px] items-center px-[16px] py-[20px] rounded-lg'>
        <div className='flex items-center w-full justify-between relative'>
          <BaseTitle name='Item' />
          <div className='mr-4' id='buttonarea'>
            <button
              className='flex w-max text-[0.8rem] p-[5px_10px] gap-1 rounded-md bg-[#fff] text-[#637381] border border-[#DFE4EA] font-[Manrope]'
              onClick={() => handleQnaModal()}
            >
              {'What is NFT?'}
            </button>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center mb-4 gap-12 w-[400px] h-[440px]'>
          <img
            className='m-0 h-[8rem] w-auto'
            src={isLoaded ? Module.OVDR_Thumbnails?.main.url : ''}
          />
          <form className='flex flex-col gap-4'>
            <Field label='Item Title' value={info.name || ''} handleInfo={handleInfo} />
            <Field label='Item Price($)' value={info.price || ''} handleInfo={handleInfo} />
          </form>
        </div>
      </BaseCard>
      {qnaModalOpen && <QnaModal open={qnaModalOpen} handleClose={handleQnaModal} />}
      {errorModalOpen && <QnaModal open={errorModalOpen} handleClose={handleErrorModal} />}
    </MissionUpdate>
  )
}
