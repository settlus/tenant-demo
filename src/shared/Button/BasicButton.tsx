import clsx from 'clsx'

type BasicButtonProps = {
  children: React.ReactNode
  filled?: boolean
  handleClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  className?: string
}

export default function BasicButton({
  children,
  filled = true,
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
        `rounded-lg text-sm px-5 py-2.5 focus:outline-none hover:cursor-pointer ${
          filled
            ? 'text-white bg-[#1ABF5D]'
            : 'text-[#1ABF5D] border border-[#1ABF5D] bg-transparent'
        }`,
        className
      )}
    >
      {children}
    </button>
  )
}
