type TitleProp = {
  name: string
  isLive?: boolean
}

export default function BaseTitle({ name, isLive }: TitleProp): React.ReactElement {
  return (
    <div className='flex flex-row font-bold text-lg font-[Manrope]'>
      <p>{name}</p>
      {isLive ? (<div className='ml-1 w-1.5 h-1.5 bg-[#22AD5C] rounded-full'></div>) : <></>}
    </div>
  )
}
