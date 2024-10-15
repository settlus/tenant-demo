import { useContext } from 'react'
import { MissionContext } from '../../store/mission_context'
import MissionStep from './MissionStep'
import clsx from 'clsx'

const STEPS = [
  'Browse Avatar Costume Shop',
  'Create 3D costume & mint as NFT',
  'Check your item on the Costume Shop',
  'Check the NFT info of your costume',
  'Sell the NFT',
]

type PropType = {
  title: string
  beforeStart?: boolean
  done?: boolean
}

export default function MissionCard({ title, beforeStart, done }: PropType): React.ReactElement {
  const { mission } = useContext(MissionContext)

  return (
    <div
      className={clsx(
        'w-auto border-[1.5px] border-[#DFE4EA] rounded-[10px] m-0 flex flex-col relative bg-white z-[10000]'
      )}
    >
      <div
        className={clsx(
          'flex flex-row items-center justify-between w-full h-[60px] gap-0 rounded-t-[9px] rounded-b-none px-6',
          done ? 'bg-white' : 'bg-[#F9F9F9]'
        )}
      >
        <h3 className='text-[1.2rem]'>{title}</h3>
        <p>{mission} / 5</p>
      </div>
      <div className='px-6'>
        <div className='text-left text-[1rem] m-auto flex flex-col gap-[2rem] py-5 w-auto min-w-0'>
          {STEPS.map((item, index) => (
            <div
              key={item}
              className={`whitespace-nowrap flex flex-row items-center w-full gap-3 ${
                index === mission && !beforeStart ? 'font-bold italic' : ''
              }`}
            >
              <MissionStep filled={index < mission} index={index + 1} />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
