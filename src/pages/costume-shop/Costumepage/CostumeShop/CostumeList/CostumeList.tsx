import { useContext } from 'react'

import BaseCard from '../../../../../shared/Card/BaseCard'
import BaseTitle from '../../../../../shared/Card/Title'
import { ShopContext } from '../../../../../store/costumeshop_context'
import Thumbnail from '../Thumbnail/Thumbnail'

export default function CostumeList() {
  const { items, setSelected, selected } = useContext(ShopContext)

  function handleClick(value: number) {
    setSelected(value)
  }

  return (
    <BaseCard className='bg-white h-full flex flex-col px-[16px] py-[20px] gap-[20px] w-[340px] rounded-[10px]'>
      <BaseTitle name='Costumes' />
      <div className='grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-[5px] overflow-y-auto h-full pb-[0.1rem]'>
        {items.map((item, index) => (
            <Thumbnail
              thumbnail={item.thumbnailPng}
              className='w-[85px] h-[85px]'
              isNew={item.userCreated ? true : false}
              onClick={() => {
                handleClick(index)
              }}
              key={item.title}
              selected={selected === index ? true : false}
            />
        ))}
      </div>
    </BaseCard>
  )
}
