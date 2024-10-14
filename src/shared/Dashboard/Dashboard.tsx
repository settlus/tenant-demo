import { useEffect, useContext } from 'react'
import Header from './Header/Header'
import Content from './Content/Content'
import { DashboardContext } from '../../store/dashboard_context'
import { getData } from '../../apis/api'

export default function Dashboard() {
  const { setData } = useContext(DashboardContext)

  useEffect(() => {
    const setMainData = async () => {
      const info = await getData()
      setData(info)
    }

    setMainData()
  }, [])

  return (
    <div className='flex flex-col m-auto w-[700px] gap-[10px]'>
      <Header />
      <Content />
    </div>
  )
}
