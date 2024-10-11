import AvatarPreview from '../../../../shared/AvatarPreview/AvatarPreview'
import Live from './Live/Live'
import CostumeList from './CostumeList/CostumeList'
import Detail from './Detail/Detail'

import { useContext } from 'react'
import { ShopContext } from '../../../../store/costumeshop_context'

export default function CostumeShop() {
  const { selected, items } = useContext(ShopContext)

  return (
    <div className='inline-flex flex-col w-auto min-w-[750px] rounded-lg p-2 gap-2 mb-2'>
      <div className='flex flex-row gap-3 justify-between'>
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
