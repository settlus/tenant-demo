import MissionCard from '../../MissionCard/MissionCard'

type PropType = {
  handleClose: () => void
}

export default function MissionModal({ handleClose }: PropType): React.ReactElement {
  return (
    <>
      <div
        className='fixed w-[100vw] h-[100vh] top-0 left-0 bg-[rgba(0,0,0,0.1)] z-[1000]'
        onClick={handleClose}
      ></div>
      <div className='absolute bg-transparent h-[315px] items-center top-12 right-0 z-[3000]'>
        <MissionCard title='Missions' />
      </div>
    </>
  )
}
