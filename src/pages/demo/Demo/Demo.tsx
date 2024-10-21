import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Header from '../../../shared/Header/Header'

export default function Demo() {
  return (
    <div className='flex flex-col h-full w-full gap-3'>
      <Header />
      <Outlet />
      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
    </div>
  )
}
