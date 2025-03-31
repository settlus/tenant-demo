import { useContext } from 'react'

import { DashboardContext } from '../../../../store/dashboard_context'
import { DetailKeys } from '../../../../types/type'
import GuidePointer from '../../../GuidePointer/GuidePointer'

const ENV = import.meta.env

const keys: DetailKeys[] = [
  'Contract Address',
  'Token ID',
  'Token Standard',
  'Chain',
  'Creator',
  'Owner',
]

export default function CardContent() {
  const { data, step, setStep } = useContext(DashboardContext)

  return (
    <div className='flex flex-col h-[373px] gap-[20px]'>
      <img className='w-[200px] h-[200px]' src={data.thumbnail} />
      <div className='h-[153px] font-manrope text-xs text-left'>
        <div>
          {keys.map((item, index) =>
            item === 'Contract Address' ? (
              <>
                <GuidePointer topPos='top-[1.5rem]' leftPos='left-[6rem]' doGuide={step === 0}>
                  <div key={index} className='text-bold overflow-hidden break-words'>
                    {item}:{' '}
                    <p className='text-[#10B981] text-[12px] underline'>
                      <a
                        href={`https://sepolia.settlus.network/token/${ENV.VITE_CONTRACT_ADDR}/instance/${BigInt(sessionStorage.getItem('tokenId') || '0x0')}`}
                        target='_blank'
                        onClick={() => {
                          setStep((prev) => (prev === 0 ? 1 : prev))
                        }}
                      >
                        {data.details[item]}
                      </a>
                    </p>
                  </div>
                </GuidePointer>
                <div className='w-full h-[1px] bg-transparent my-2'></div>
              </>
            ) : (
              <div key={index}>
                {item}: {data.details[item]}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}
