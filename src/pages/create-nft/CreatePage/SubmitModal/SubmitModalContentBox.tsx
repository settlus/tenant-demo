import clsx from 'clsx'

type SubmitModalContentBoxProp = {
  title: string
  className?: string
  children?: React.ReactNode
  titleDeco?: React.ReactNode
}

export const SubmitModalContentBox = ({
  title,
  className,
  children,
  titleDeco,
}: SubmitModalContentBoxProp): React.ReactElement => {
  return (
    <div className={clsx('flex flex-col w-[200px] h-[274px]', className)}>
      {titleDeco ? titleDeco : null}
      <p className='font-[Manrope] text-2xl font-bold'>{title}</p>
      {children}
    </div>
  )
}
