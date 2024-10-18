import { useContext } from 'react'

import { DashboardContext } from '../../../store/dashboard_context.tsx'
import { formatNum } from '../../../utils/util.ts'
import BaseCard from '../../Card/BaseCard.tsx'
import BaseTitle from '../../Card/Title.tsx'
import NFTInfo from '../Card/NFTInfo.tsx'

export default function Content() {
  const { data } = useContext(DashboardContext)

  return (
    <div className='flex flex-row w-[700px] h-[458px] gap-[10px]'>
      <NFTInfo />
      <div className='flex flex-col gap-[10px]'>
        <BaseCard className='flex flex-col bg-[#fff] w-[456px] h-[264px] gap-[20px] font-manrope px-[16px] py-[20px] rounded-[10px]'>
          <BaseTitle name='Item' />
          <div>
            <div className='flex flex-row w-[424px] h-[60px] gap-[8px] items-center'>
              <img className='w-[60px] h-[60px] m-0' src={data.thumbnail} />
              <p className='font-bold'>{data.title}</p>
            </div>
            <div className='flex flex-col text-sm text-left gap-[16px] pt-[16px]'>
              <div className='flex flex-row justify-between'>
                <p>Item Price:</p>
                <p className='font-bold'>{formatNum(data.revenue['Price'])}</p>
              </div>
              <div className='flex flex-row justify-between'>
                <p>Total Quantity Sold:</p>
                <p className='font-bold'>{data.revenue['Quantity']}</p>
              </div>
              <div className='border-t border-[#DFE4EA] w-full'></div>
              <div className='flex flew-row justify-between'>
                <p>Total Sold Amount:</p>
                <p className='font-bold'>
                  {formatNum(data.revenue['Price'] * data.revenue['Quantity'])}
                </p>
              </div>
            </div>
          </div>
        </BaseCard>
        <BaseCard className='flex flex-col w-[456px] h-[182px] bg-[#fff] gap-[20px] px-[16px] py-[20px] rounded-[10px]'>
          <BaseTitle name='Activity history' />
          <span className='flex flex-col gap-[12px] overflow-y-auto'>
            {data.history.map((item, index) => (
              <div key={index} className='flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-[8px]'>
                  {item['Profile'] && (
                    <img className='w-[24px] h-[24px] m-0' src={item['Profile']} />
                  )}
                  <p className='text-sm font-bold pt-1'>{item['Activity']}</p>
                </div>
                <p className='text-sm font-normal'>{item['Time']}</p>
              </div>
            ))}
          </span>
        </BaseCard>
      </div>
    </div>
  )
}
