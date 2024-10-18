import BaseCard from '../../../../../shared/Card/BaseCard.tsx'
import Modal from '../../../../../shared/Modal/Modal.tsx'
import Profile from './Profile/Profile.tsx'

type IntroModalProps = {
  open: boolean
  handleClose: () => void
}

export default function IntroModal({ open }: IntroModalProps) {
  return (
    <Modal open={open}>
      <BaseCard className='flex flex-col w-[700px] px-12 py-12 font-manrope gap-[40px] rounded-[20px]'>
        <div className='flex flex-col gap-4 text-left'>
          <p className='text-2xl font-bold'>Tips before you start the journey</p>
          <p className='text-xl font-normal'>
            On this Demo, you will create a 3D costume and monetize your IP in a special way. Follow
            the tutorial and complete all the missions! Write your creator nickname.
          </p>
        </div>
        <Profile></Profile>
      </BaseCard>
    </Modal>
  )
}
