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
      <div className='bg-transparent min-w-0 h-[315px] items-center border-t border-t-[1px] absolute top-10 right-0 z-[3000]'>
        <MissionCard title='Missions' />
      </div>
    </>
  )
}
