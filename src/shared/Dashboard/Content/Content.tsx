import { useContext } from 'react'
import styles from './Content.module.scss'
import Card from '../Card/Card.tsx'
import { DashboardContext } from '../../../store/dashboard_context.tsx'
import OfferModal from '../OfferModal/OfferModal.tsx'
import { formatNum } from '../../../utils/util.ts'
import BaseCard from '../../Card/BaseCard.tsx'
import BaseTitle from '../../Card/Title.tsx'

export default function Content() {
  const { data, isOfferModal } = useContext(DashboardContext)

  return (
    <div className='flex flex-row w-[700px] h-[458px] gap-[10px]'>
      {isOfferModal && <OfferModal />}
      <Card />
      <div className='flex flex-col gap-[10px]'>
        <BaseCard className='flex flex-col bg-[#fff] w-[456px] h-[264px] gap-[20px]'>
          <BaseTitle name='Item' />
          <div>
            <div className='flex flex-row w-[424px] h-[60px]'>
              <img className='w-[60px] h-[60px] m-0' src={data.thumbnail} />
              <p>{data.title}</p>
            </div>
            <div className='flex flex-col text-sm text-left gap-[16px]'>
              <p>Item Price: {formatNum(data.revenue['Price'])}</p>
              <p>Total Quantity Sold: {data.revenue['Quantity']}</p>
              <div className='border-t border-[#DFE4EA] w-full'></div>
              <p className={styles.soldAmount}>
                Total Sold Amount: {formatNum(data.revenue['Price'] * data.revenue['Quantity'])}
              </p>
            </div>
          </div>
        </BaseCard>
        <BaseCard className='flex flex-col w-[456px] h-[182px] bg-[#fff] gap-[20px]'>
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
