import { useContext } from 'react'

import AvatarPreview from '../../../../shared/AvatarPreview/AvatarPreview'
import { ShopContext } from '../../../../store/costumeshop_context'
import CostumeList from './CostumeList/CostumeList'
import Detail from './Detail/Detail'
import Live from './Live/Live'

export default function CostumeShop() {
  const { selected, items } = useContext(ShopContext)

  return (
    <div className='inline-flex flex-col w-auto min-w-[750px] rounded-lg p-2'>
      <div className='flex flex-row gap-2 w-[1124px]'>
        <Live />
        <CostumeList />
        <AvatarPreview
          uploadedFile={items[selected].templatePng}
          selectedTemplateMeshName={items[selected].meshName}
        />
        <Detail />
      </div>
    </div>
  )
}
