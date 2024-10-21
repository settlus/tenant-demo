import { useNavigate } from 'react-router-dom'

import errorImg from '../../public/svg/404Error.svg'

export default function ErrorPage() {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col m-auto gap-4'>
      <img src={errorImg} alt='404 Error' />
      <h1>Oops..</h1>
      <p>
        There was an error loading the page.
        <br />
        Please refresh the page or return to the first page.
      </p>
      <div className='flex gap-8'>
        <button onClick={() => window.location.reload()}>Refresh</button>
        <button onClick={() => navigate('/')}>Return to start page</button>
      </div>
    </div>
  )
}
