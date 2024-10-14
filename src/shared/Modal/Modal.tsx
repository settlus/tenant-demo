import { useRef, useEffect } from 'react'
import clsx from 'clsx'

type PropType = {
  children: React.ReactNode
  open: boolean
  // handleClose?: () => void
  className?: string
}

export default function Modal({
  children,
  open,
  // handleClose,
  className,
}: PropType): React.ReactElement {
  const dialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (dialog.current) {
      if (open) dialog.current.showModal()
      else dialog.current.close()
    }
  }, [open])

  return (
    <dialog ref={dialog} className={clsx('animate-scale-up', className)}>
      <div className='animate-scale-up'>
        {children}
      </div>
    </dialog>
  )
}
