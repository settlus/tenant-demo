import nftIcon from '../../../../../public/images/NftLicense.png'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../../../../../store/costumeshop_context'
import { formatNum } from '../../../../../utils/util'
import GuidePointer from '../../../../../shared/GuidePointer/GuidePointer'
import BaseCard from '../../../../../shared/Card/BaseCard'
import BaseTitle from '../../../../../shared/Card/Title'
import BasicButton from '../../../../../shared/Button/BasicButton'

export default function Detail() {
  const { selected, items, step } = useContext(ShopContext)
  const selectedItem = items[selected]
  const navigate = useNavigate()

  const detailStep = 1 || 2

  const handleClick = () => {
    sessionStorage.setItem('mission', '3')
    navigate('/demo/dashboard')
  }

  return (
    <BaseCard step={step} pageStep={detailStep} widthRatio='flex-[2]'>
      <div className='flex flex-col *:rounded-lg bg-[#F9FAFB] justify-between w-auto h-full'>
        <BaseTitle name='Detail' />
        <div className='flex flex-col p-2 my-2 gap-4'>
          <div className='w-[200px] h-[200px] relative'>
            <img className='h-[20%] w-[20%] absolute top-0 right-0 mr-2 mt-2' src={nftIcon} />
            <img className='h-[70%] w-[70%] mx-auto' src={selectedItem.thumbnailPng} />
          </div>
          {/* <Thumbnail thumbnail={selectedItem.thumbnailPng} /> */}
          <div className='gap-2'>
            <p className='text-left font-[Manrope] pl-1'>
              <span className='text-lg font-bold'>{selectedItem.title}</span>
              <br />
              <span className='text-base'>{formatNum(selectedItem.price)}</span>
            </p>
            <div className='flex flex-row items-center justify-start gap-[10px]'>
              <img className='m-0 p-0 block' src={selectedItem.creatorProfilePng} />
              <p className='pt-2 font-[Inter] font-medium'>{selectedItem.creator}, NFT holder</p>
            </div>
          </div>

          <div className='pl-1'>
            <p className='text-left text-xs text-[#4B5563]'>
              This item is NFT-licensed.
              {/* <img
              className="h-[12px] w-[12px] relative"
              src={nftIcon}
            />     */}
              <br />
              Profit will be paid to the NFT holder.
              <br />
              <br />
              <span
                className={`font-semibold ${step === 2 ? 'bg-[#21fae4fc]' : ''}`}
                translate='no'
              >
                Total sales quantity: {selectedItem.quantity}
                <br />
                Total sold amount: {formatNum(selectedItem.quantity * selectedItem.price)}
              </span>
            </p>
          </div>
        </div>

        <div id='sample' className='p-2'>
          {selectedItem.userCreated ? (
            <GuidePointer doGuide={true}>
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
      </div>
    </BaseCard>
  )
}
