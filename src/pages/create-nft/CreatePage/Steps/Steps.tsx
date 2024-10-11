import BaseCard from '../../../../shared/Card/BaseCard'
import BaseTitle from '../../../../shared/Card/Title'
import MissionStep from '../../../../shared/MissionCard/MissionStep'

type PropType = {
  step: number
}

const STEP_TEXT = ['Step 1. Mint NFT', 'Step 2. List Item']

export default function StepsCard({ step }: PropType): React.ReactElement {
  return (
    <BaseCard className='w-[192px]'>
      <BaseTitle name='Steps' />
      <div className='list-none text-left text-[1rem] flex flex-col gap-5 py-3 w-auto min-w-0'>
        {STEP_TEXT.map((item, index) => (
          <div
            key={item}
            className={`whitespace-nowrap flex flex-row items-center w-full gap-3 font-semibold font-[Manrope]`}
          >
            <MissionStep filled={index == step} index={index + 1} />
            {item}
          </div>
        ))}
      </div>
    </BaseCard>
  )
}
