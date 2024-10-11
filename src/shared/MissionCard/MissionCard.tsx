import { useContext } from 'react'
import { MissionContext } from '../../store/mission_context'
import MissionStep from './MissionStep'

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
}

export default function MissionCard({ title, beforeStart }: PropType): React.ReactElement {
  const { mission } = useContext(MissionContext)

  //TODO: align the text center and extend the mission card
  return (
    <div className='w-auto border-[1.5px] border-[#DFE4EA] rounded-[10px] m-0 flex flex-col relative bg-white z-[10000]'>
      {/* <img
        src={sparkleIcon}
        className="absolute top-[-2.5rem] left-[-2rem] h-[4rem] w-auto object-cover transform -rotate-30"
      /> */}
      <div className='flex flex-row items-center justify-between w-full h-[60px] gap-0 rounded-t-[9px] rounded-b-none px-6 bg-[#F9F9F9]'>
        <h3 className='text-[1.2rem]'>{title}</h3>
        <p>{mission} / 5</p>
      </div>
      <div className='px-6'>
        <ul className='list-none text-left text-[1rem] m-auto flex flex-col gap-[2rem] py-5 w-auto min-w-0'>
          {STEPS.map((item, index) => (
            <li
              key={item}
              className={`whitespace-nowrap flex flex-row items-center w-full gap-3 ${
                index === mission && !beforeStart ? 'font-bold italic' : ''
              }`}
            >
              <MissionStep filled={index < mission} index={index + 1} />
              {/* <img
              className="m-0 h-4 w-4 align-middle mr-2 scale-125"
              src={index < mission ? checkBulletIcon : bulletIcon}
            /> */}
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
