type SubmitModalContentBoxProp = {
  title: string
  isLoaded?: boolean
  thumbnail?: string
  titleDeco?: string
}

export const SubmitModalContentBox = ({
  title,
  isLoaded,
  thumbnail,
  titleDeco,
}: SubmitModalContentBoxProp): React.ReactElement => {
  return (
    <div className='flex flex-col w-[200px] h-[274px] gap-[40px] items-center'>
      <div className='flex flex-row h-[34px] gap-[16px] items-center'>
        <img src={titleDeco ? titleDeco : 'null'} className='w-[24px] h-[24px]' />
        <p className='font-[Manrope] text-2xl font-bold'>{title}</p>
      </div>
      <img className='w-[200px] h-[200px]' src={isLoaded ? thumbnail : ''} />
    </div>
  )
}
