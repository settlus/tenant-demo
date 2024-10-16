import { ReactTyped } from 'react-typed'

import clsx from 'clsx'

type PropType = {
  title: string
  typeWriter: string
  mark?: string
  onComplete?: () => void
  className?: string
}

export default function Instruction({
  title,
  className,
  mark,
  typeWriter,
  onComplete,
}: PropType): React.ReactElement {
  return (
    <div
      className={clsx(
        'py-[1rem] text-left self-center w-[914px] min-h-[6rem] border-l-[6px] border-l-[#10B981]',
        className
      )}
    >
      <div className='ml-6'>
        <div className='flex flex-row'>
          <p className='text-2xl font-[Manrope] font-bold text-left leading-[33.6px]'>{title}</p>
          {!mark ? <></> : <img src={mark} className='w-[1.5rem] h-[1.5rem] m-1 ml-2 animate-shakeAndScaleUp' />}
        </div>
        <ReactTyped
          strings={[typeWriter]}
          className='text-base font-[Manrope] font-normal text-left leading-[19.2px]'
          typeSpeed={0.000000001}
          onComplete={onComplete || function () {}}
        />
      </div>
    </div>
  )
}
