type MintModalContentBoxProp = {
  title: string
  isLoaded?: boolean
  thumbnail?: string
  titleDeco?: string
}

export const MintModalContentBox = ({
  title,
  isLoaded,
  thumbnail,
  titleDeco,
}: MintModalContentBoxProp): React.ReactElement => {
  return (
    <div className='flex flex-col w-[200px] h-[274px] gap-[40px] items-center'>
      <div className='flex flex-row h-[34px] gap-[16px] items-center'>
        <img src={titleDeco ? titleDeco : 'null'} className='w-[24px] h-[24px]' />
        <p className='font-manrope text-2xl font-bold'>{title}</p>
      </div>
      <img className='w-[200px] h-[200px]' src={isLoaded ? thumbnail : ''} />
    </div>
  )
}
