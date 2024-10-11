// import styles from './DemoIntro.module.scss'
import Profile from './Profile/Profile.tsx'
import Modal from '../../../../../shared/Modal/Modal.tsx'
import BaseCard from '../../../../../shared/Card/BaseCard.tsx'

type IntroModalProps = {
  open: boolean
  handleClose: () => void
}

export default function IntroModal({ open, handleClose }: IntroModalProps) {
  return (
    <Modal open={open} handleClose={handleClose}>
      <BaseCard className='flex flex-col w-[700px] h-[504px] gap-[60px] p-[50px] font-[Manrope]'>
        <div className='flex flex-col w-[600px] h-[294px]'>
          <div className='flex flex-col w-[600px] h-[134px] gap-4 text-left'>
            <p className='text-2xl font-bold'>Tips before you start the journey</p>
            <p className='text-xl font-normal'>
              On this Demo, you will create a 3D costume and monetize your IP in a special way .
              Follow the tutorial and complete all the missions! Write your creator nickname.
            </p>
          </div>
          <Profile></Profile>
        </div>
        {/* <Header logoOnly={true} />
      <div className='h-full flex flex-col justify-center px-8 mx-12 '>
        <Instruction
          title='Tips before you start the journey'
          typeWriter='On this Demo, you will create a 3D costume and monetize your IP in a special way.
        Follow the tutorial and complete all the missions!
        Write your creator nickname and enter the Shop!'
        />
        <div className={styles.intro}>
          <div className={styles.card}>
            <MissionCard title={'Tutorial Mission'} beforeStart={true} />
          </div>
          <Profile />
        </div>
      </div> */}
      </BaseCard>
    </Modal>
  )
}
