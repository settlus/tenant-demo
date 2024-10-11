import { useContext } from 'react'
import Thumbnail from '../Thumbnail/Thumbnail'
import { ShopContext } from '../../../../../store/costumeshop_context'
import BaseCard from '../../../../../shared/Card/BaseCard'
import BaseTitle from '../../../../../shared/Card/Title'

export default function CostumeList() {
  const { items, setSelected, selected } = useContext(ShopContext)

  function handleClick(value: number) {
    setSelected(value)
  }

  return (
    <BaseCard className='bg-white h-full flex flex-col w-[340px] gap-[20px]'>
      <BaseTitle name='Costume List' />
      <div className='grid grid-cols-[repeat(auto-fill,minmax(5rem,1fr))] gap-2 overflow-y-auto h-full pb-[0.1rem]'>
        {items.map((item, index) => (
          <li className='flex m-auto pb-[0.03rem]' key={item.title}>
            <Thumbnail
              thumbnail={item.thumbnailPng}
              isNew={item.userCreated ? true : false}
              onClick={() => {
                handleClick(index)
              }}
              selected={selected === index ? true : false}
            />
          </li>
        ))}
      </div>
    </BaseCard>
  )
}
