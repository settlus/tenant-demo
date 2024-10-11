import clsx from 'clsx'

type MissionStepProp = {
  index: number
  filled?: boolean
}

export default function MissionStep({
  index,
  filled = false,
}: MissionStepProp): React.ReactElement {
  return (
    <div
      className={clsx(
        'flex items-center justify-center w-[30px] h-[30px] rounded-full',
        filled ? 'bg-green-500 text-white' : 'border-2 border-green-500 text-green-500'
      )}
    >
      <span className='font-bold'>{index}</span>
    </div>
  )
}
