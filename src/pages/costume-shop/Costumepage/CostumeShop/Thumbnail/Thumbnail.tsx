import clsx from 'clsx'

import nftIcon from '../../../../../public/images/NftLicense.png'

type propType = {
  className?: string
  onClick?: () => void
  thumbnail: string
  selected?: boolean
  isNew?: boolean
}

export default function Thumbnail({
  className,
  thumbnail,
  onClick,
  selected,
  isNew,
}: propType) {
  return (
    <div
      className={clsx(
        'relative flex flex-col bg-white rounded-[24px] items-center justify-center',
        className,
        selected && 'border-2 border-[#6436EA]'
      )}
      onClick={onClick}
    >
        {isNew && (
          <div className='absolute top-0 left-0 m-1.5'>
            <div className='w-[30px] h-[14px] p-[2px_6px_3px_6px] rounded-[3px] bg-[#2CD673] text-[8px] text-white font-bold font-[Manrope] text-center'>
              New
            </div>
          </div>
        )}
        <img className='absolute top-0 right-0 m-1 h-[25%] w-[25%]' src={nftIcon} />
      <img className='h-[70%] w-[70%] object-contain' src={thumbnail} />
    </div>
  )
}
