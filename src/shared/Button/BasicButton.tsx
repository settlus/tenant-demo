import clsx from 'clsx'

type BasicButtonProps = {
  children: React.ReactNode
  handleClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  className?: string
}

export default function BasicButton({
  children,
  handleClick,
  onMouseEnter,
  onMouseLeave,
  className,
}: BasicButtonProps): React.ReactElement {
  return (
    <button
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      type='button'
      className={clsx(
        `rounded-lg text-sm px-5 py-2.5 focus:outline-none hover:cursor-pointer`,
        className
      )}
    >
      {children}
    </button>
  )
}
