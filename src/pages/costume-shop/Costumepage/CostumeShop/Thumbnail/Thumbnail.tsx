import nftIcon from '../../../../../public/images/NftLicense.png'
import clsx from 'clsx'

type propType = {
  className?: string
  onClick?: () => void
  thumbnail: string
  selected?: boolean
  isNew?: boolean
}

export default function Thumbnail({
  className: style,
  thumbnail,
  onClick,
  selected,
  isNew,
}: propType) {
  return (
    <div
      className={clsx(
        'relative flex flex-col max-h-[90px] max-w-[90px] bg-white rounded-[24px]',
        style,
        selected && 'border-2 border-[#6436EA]'
      )}
      onClick={onClick}
    >
      <div className='flex flex-row'>
        {isNew && (
          <div className='absolute top-0 left-0 m-2'>
            <div className='w-[30px] h-[14px] p-[2px_6px_3px_6px] rounded-[3px] bg-[#2CD673] text-[8px] text-white font-bold font-[Manrope] text-center'>
              New
            </div>
          </div>
        )}
        <img className='absolute top-0 right-0 m-2 h-[20%] w-[20%]' src={nftIcon} />
      </div>
      <img className='h-[70%] w-[70%] object-contain' src={thumbnail} />
    </div>
  )
}
