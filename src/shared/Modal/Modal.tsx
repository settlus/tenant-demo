import { useRef, useEffect } from 'react'

import clsx from 'clsx'

type PropType = {
  children: React.ReactNode
  open: boolean
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
    <dialog ref={dialog} className={clsx('animate-scaleUp', className)}>
      <div>{children}</div>
    </dialog>
  )
}
