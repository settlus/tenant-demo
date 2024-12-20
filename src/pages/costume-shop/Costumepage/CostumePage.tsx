import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import nftIcon from '../../../public/images/NftLicense.png'
import GuidePointer from '../../../shared/GuidePointer/GuidePointer'
import Instruction from '../../../shared/Instruction/Instruction'
import Layout from '../../../shared/Layout/Layout'
import Navigation from '../../../shared/Navigation/Navigation'
import { ShopContext } from '../../../store/costumeshop_context'
import { ITEM_ARR } from '../../../utils/constants'
import { formatNum } from '../../../utils/util'
import CostumeShop from './CostumeShop/CostumeShop'

const TITLES = [
  'Welcome to the Avatar Costume Shop!',
  'What’s so special? These costumes are NFT licensed!',
  'Take a peak at the creator’s revenue!',
]

type PropType = {
  isAfterItemCreated?: boolean
}

export default function CostumePage({ isAfterItemCreated }: PropType): React.ReactElement {
  const { step, setStep, items, setItems, selected, setSelected } = useContext(ShopContext)
  const [navIsVisible, setNavIsVisible] = useState(false)
  const selectedItem = items[selected]
  const navigate = useNavigate()

  const showNav = () => {
    setNavIsVisible(true)
  }

  const handleNav = () => {
    setNavIsVisible(false)
    if (step === 2) {
      sessionStorage.setItem('mission', '1')
      navigate('/demo/create-nft')
    } else setStep((prev) => prev + 1)
  }

  const getInstructionDetail = () => {
    if (!isAfterItemCreated) {
      switch (step) {
        case 0:
          return 'People who want to decorate avatars in the metaverse buy avatar costumes created by our creators. You can see the online users’ real-time shopping activities on the “Live” section.'
        case 1:
          return `License mark shows that the costumes are minted as NFTs. The NFT guarantees the ownership of a creator\'s costumes, and copies of costumes can be sold as items without quantity limit on the off-chain Avatar Costume Shop. Click your favorite costume to see the detail!`
        case 2:
          return `This costume’s creator earned ${formatNum(
            selectedItem.price * selectedItem.quantity
          )} for item sales and now consider selling NFT for ${formatNum(
            selectedItem.offerValue
          )} on the NFT Marketplace. Once the NFT is sold, the new owner will earn profits from the item sales. However, the <b>copyright remains</b> with the creator! That’s why NFT licensing is attractive.`
        default:
          return ''
      }
    } else {
      return 'Now, you are one of the creators in the Avatar Costume Shop. Look at the “Live” section. Users are buying your item. Click the “Go to my dashboard” button to manage your sales.'
    }
  }

  useEffect(() => {
    return () => {
      setStep(0)
      setSelected(0)
      setItems(ITEM_ARR)
    }
  }, [])

  return (
    <Layout>
      <div className='flex flex-row w-[1124px] justify-between items-center gap-[8px] min-h-[7rem]'>
        <Instruction
          title={
            !isAfterItemCreated ? TITLES[step] : 'Congratulations! Your item is listed for sale.'
          }
          className={`${isAfterItemCreated ? 'w-full' : ''}`}
          typeWriter={getInstructionDetail()}
          onComplete={showNav}
          mark={step === 1 ? nftIcon : undefined}
        />
        <span>
          {!isAfterItemCreated && navIsVisible && (
            <GuidePointer doGuide={true} topPos='top-[1.8rem]' leftPos='left-[2rem]'>
              <Navigation handleClick={handleNav} className='w-[200px]' />
            </GuidePointer>
          )}
        </span>
      </div>

      <CostumeShop />
    </Layout>
  )
}
