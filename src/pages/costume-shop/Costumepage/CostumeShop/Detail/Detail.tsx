import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import nftIcon from '../../../../../public/images/NftLicense.png'
import BasicButton from '../../../../../shared/Button/BasicButton'
import BaseCard from '../../../../../shared/Card/BaseCard'
import BaseTitle from '../../../../../shared/Card/Title'
import GuidePointer from '../../../../../shared/GuidePointer/GuidePointer'
import { ShopContext } from '../../../../../store/costumeshop_context'
import { formatNum } from '../../../../../utils/util'

export default function Detail() {
  const { selected, items, step } = useContext(ShopContext)
  const selectedItem = items[selected]
  const navigate = useNavigate()

  const handleClick = () => {
    sessionStorage.setItem('mission', '3')
    navigate('/demo/dashboard')
  }

  return (
    <BaseCard
      step={step}
      pageStep={step === 1 || step === 2 ? step : 10}
      className='flex flex-col px-[16px] py-[20px] rounded-[10px] bg-[#F9FAFB]  justify-between w-auto h-full'
    >
      <BaseTitle name='Detail' />
      <div className='flex flex-col p-2 my-2 gap-5'>
        <div className='w-[200px] h-[200px] relative'>
          <img className='h-[20%] w-[20%] absolute top-0 right-0 mr-2 mt-2' src={nftIcon} />
          <img className='h-[70%] w-[70%] mx-auto mt-3' src={selectedItem.thumbnailPng} />
        </div>
        <div>
          <p className='text-left font-manrope pl-1'>
            <span className='text-lg font-bold'>{selectedItem.title}</span>
            <br />
            <span className='text-base'>{formatNum(selectedItem.price)}</span>
          </p>
          <div className='flex flex-row items-center justify-start mt-[10px] gap-[10px]'>
            <img className='m-0 w-8' src={selectedItem.creatorProfilePng} />
            <p className='pt-2 font-manrope font-medium'>{selectedItem.creator}, NFT holder</p>
          </div>
        </div>

        <div>
          <p className='text-left text-xs text-[#4B5563]'>
            This item is NFT-licensed.
            <br />
            Profit will be paid to the NFT holder.
            <br />
            <br />
            <span className={`font-semibold ${step === 2 ? 'bg-[#21fae4fc]' : ''}`} translate='no'>
              Total sales quantity: {selectedItem.quantity}
              <br />
              Total sold amount: {formatNum(selectedItem.quantity * selectedItem.price)}
            </span>
          </p>
        </div>
      </div>

      <div id='sample' className='p-2'>
        {selectedItem.userCreated ? (
          <GuidePointer doGuide={true} topPos='top-[2.2rem]' leftPos='left-[5rem]'>
            <BasicButton filled={false} handleClick={handleClick} className='w-[200px]'>
              <span className='text-[#1ABF5D]'>Go to my dashboard</span>
            </BasicButton>
          </GuidePointer>
        ) : (
          <button className='w-[200px] h-[50px] p-[13px_28px] gap-[10px] rounded-[6px] bg-[#E5E7EB]'>
            Buy
          </button>
        )}
      </div>
    </BaseCard>
  )
}
