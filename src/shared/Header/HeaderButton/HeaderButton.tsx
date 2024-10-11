type PropType = {
  name: string
  handleClick?: () => void
}

export default function HeaderButton({ name, handleClick }: PropType): React.ReactElement {
  return (
    <button
      className='flex items-center justify-center font-bold px-4 py-2 bg-white border border-[#D9D9D9]'
      onClick={handleClick ? handleClick : () => {}}
    >
      <p className='text-lg font-[Manrope] font-bold tracking-[0.04em]'>{name}</p>
    </button>
  )
}
