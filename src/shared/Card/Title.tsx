type TitleProp = {
  name: string
}

export default function BaseTitle({ name }: TitleProp): React.ReactElement {
  return (
    <div className='flex flex-row font-bold text-lg font-[Manrope]'>
      <h3>{name}</h3>
    </div>
  )
}
