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
      className='backdrop-blur-[23.7px] px-[16px] py-[20px] w-[186px] gap-[20px]'
    >
      <BaseTitle name='Live' />
      <div className='flex flex-col overflow-auto w-[160px] h-[512px] pt-[20px] gap-[10px]'>
        {liveList.map((item, index) => (
          <div
            className={`flex flex-row items-center justify-start gap-[10px] rounded-md text-sm ${
              index === 0 ? 'animate-listComponentSlideIn' : 'animate-listComponentSlideIn'
            }`}
          >
            <Thumbnail
              className='w-[44px] h-[44px]'
              thumbnail={items[item.thumbnail].thumbnailPng}
            />
            <p className='text-xs font-bold'>
              <em>{USER_NAMES[item.user - 1]}</em> bought
            </p>
          </div>
        ))}
      </div>
    </BaseCard>
  )
}
