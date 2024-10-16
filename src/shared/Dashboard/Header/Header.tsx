import { useRef } from 'react'

import { getNickName } from '../../../apis/api'
import userProfile from '../../../public/svg/userProfile/userProfile.svg'
import BaseCard from '../../Card/BaseCard'

export default function Header() {
  const nickname = useRef(getNickName())

  return (
    <BaseCard className='flex flex-col w-[700px] h-[120px] bg-[#fff] p-[20px] gap-[20px] rounded-[10px]'>
      <div className='flex flex-row gap-[8px] items-center'>
        <img className='m-0 w-8' src={userProfile} />
        <p className='text-lg font-bold font-[Manrope]'>{nickname.current}’s Dashboard</p>
      </div>
      <span className='text-left text-base font-[Manrope]'>
        NFT is the royalty right of your creation. You can also sell your NFT and earn more profits.
      </span>
    </BaseCard>
  )
}
