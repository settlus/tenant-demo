import { ChangeEvent } from 'react'

type PropType = {
  label: string
  handleInfo: (field: string, value: string) => void
  value: string
}

export default function Field({ value, label, handleInfo }: PropType): React.ReactElement {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (label === 'Item Title') handleInfo('name', e.target.value)
    else handleInfo('price', e.target.value)
  }

  return (
    <div className='flex flex-col w-[400px] justify-start text-base font-manrope'>
      <label className='text-left'>{label}</label>
      <input
        type='text'
        className='border border-[#DFE4EA] rounded-[6px] px-[0.8rem] h-[48px] w-full'
        required
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}
