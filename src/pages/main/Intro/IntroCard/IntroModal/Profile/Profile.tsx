import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import userProfile from '../../../../../../public/svg/userProfile/userProfile.svg'
import BasicButton from '../../../../../../shared/Button/BasicButton'

export default function Profile() {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  const saveNickName = (name: string) => {
    sessionStorage.setItem('nickname', name)
  }

  const handleClick = () => {
    if (inputRef.current && inputRef.current.value.length > 0) {
      saveNickName(inputRef.current.value)
      navigate('/demo/costume-shop')
    } else {
      alert('You must set a nickname!')
    }
  }

  return (
    <div className='flex flex-col gap-[20px] items-center'>
      <div className='flex flex-row items-center'>
        <img className='w-[100px] h-[100px]' src={userProfile} alt='profile' />
        <div className='text-base text-left'>
          <p>Nickname</p>
          <input
            type='text'
            ref={inputRef}
            className='w-[400px] h-[48px] mt-[10px] p-[16px] gap-[10px] rounded-[6px] border'
          />
        </div>
      </div>
      <BasicButton className='w-[190px] font-bold' handleClick={handleClick}>
        Explore as a Creator
      </BasicButton>
    </div>
  )
}
