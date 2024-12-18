import { useRef, useEffect } from 'react'

import clsx from 'clsx'

type PropType = {
  children: React.ReactNode
  open: boolean
  className?: string
}

export default function Modal({ children, open, className }: PropType): React.ReactElement {
  const dialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
      }
    }

    if (dialog.current) {
      if (open) {
        dialog.current.showModal()
        document.addEventListener('keydown', handleEsc)
      } else dialog.current.close()
    }

    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [open])

  return (
    <dialog ref={dialog} className={clsx('animate-scaleUp', className)}>
      <div>{children}</div>
    </dialog>
  )
}
