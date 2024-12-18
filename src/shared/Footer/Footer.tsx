import { Link } from 'react-router-dom'

import settlusLogo from '../../public/png/settlus_symbol_dg.png'

export default function Footer(): React.ReactElement {
  return (
    <div className='flex flex-row w-full bg-[#FFFFFF]'>
      <div className='w-full max-w-[1260px] h-[64px] mx-auto px-8 flex items-center'>
        <Link to='/'>
          <img className='w-[40px] h-[40px]' src={settlusLogo}></img>
        </Link>
      </div>
    </div>
  )
}
