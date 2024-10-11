import { useContext } from 'react'
import { DashboardContext } from '../../../../store/dashboard_context'
import GuidePointer from '../../../GuidePointer/GuidePointer'
import { DetailKeys } from '../../../../types/type'

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
      <div className='h-[153px] font-[Manrope] text-xs text-left'>
        <div>
          {keys.map((item, index) =>
            item === 'Contract Address' ? (
              <>
                <GuidePointer topPos={5} leftPos={100} doGuide={step === 0}>
                  <div key={index} className='text-bold break-after-all'>
                    {item}:{' '}
                    <p className='text-[#10B981]'>
                      <a
                        href={`http://${ENV.VITE_CHAIN_TYPE}net.settlus.network/nft/${ENV.VITE_CONTRACT_ADDR}/${BigInt(sessionStorage.getItem('tokenId') || '0x0')}`}
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
