import Thumbnail from '../Thumbnail/Thumbnail'
import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ShopContext } from '../../../../../store/costumeshop_context'
import { LIVE_LIST as LIST, USER_NAMES } from '../../../../../utils/constants'
import BaseCard from '../../../../../shared/Card/BaseCard'
import BaseTitle from '../../../../../shared/Card/Title'

export default function Live() {
  const { items, setItems, step } = useContext(ShopContext)
  const [liveList, setLiveList] = useState(LIST)
  const location = useLocation()

  const liveStep = 0

  const addToList = async (user: number, thumbnail: number) => {
    const delay = Math.random() * 1000 + 500
    await new Promise((resolve) => setTimeout(resolve, delay))
    setItems((prevList) => {
      const updated = [...prevList]
      updated[thumbnail].quantity = prevList[thumbnail].quantity + 1

      return updated
    })
    setLiveList((prevList) => [{ user: user, thumbnail: thumbnail }, ...prevList])
  }

  useEffect(() => {
    const addLive = async () => {
      await addToList(2, 2)
      await addToList(3, 2)
      await addToList(4, 10)
      await addToList(2, 7)
      await addToList(6, 7)
      await addToList(7, 8)
      await addToList(9, 1)
      await addToList(1, 11)
      await addToList(7, 4)
      await addToList(8, 5)
    }

    const addUserLive = async () => {
      await addToList(1, 0)
      await addToList(5, 0)
      await addToList(4, 0)
      await addToList(2, 0)
      await addToList(6, 0)
      await addToList(9, 0)
      await addToList(5, 0)
    }

    const path = location.pathname.split('/')
    if (path[path.length - 1] === 'new-item') addUserLive()
    else addLive()
  }, [])

  return (
    <BaseCard
      step={step}
      pageStep={liveStep}
      widthRatio='flex-[2]'
      className='backdrop-blur-[23.7px]'
    >
      <div className='rounded-lg bg-[#F9FAFB] gap-2 w-auto'>
        <BaseTitle name='Live' />
        <ul className=' m-0 overflow-auto w-full h-[512px] gap-[28px]'>
          {liveList.map((item, index) => (
            <li
              className={`flex flex-row items-center justify-center m-auto p-[2px_6px] gap-2 rounded-tl-[5px] rounded-tr-none rounded-br-none rounded-bl-none rounded-md text-sm ${
                index === 0
                  ? 'animate-listComponentChangeBg animate-listComponentSlideIn'
                  : 'animate-listComponentSlideIn'
              }`}
            >
              <Thumbnail
                style='w-[44px] h-[44px] top-[2px] left-[6px] gap-0'
                thumbnail={items[item.thumbnail].thumbnailPng}
              />
              <p className='text-xs'>
                <em>{USER_NAMES[item.user - 1]}</em> bought
              </p>
            </li>
          ))}
        </ul>
      </div>
    </BaseCard>
  )
}
