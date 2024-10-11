import { useRef, useEffect } from 'react'
import styles from './Modal.module.scss'
import closeSvg from '../../public/svg/Close.svg'

type PropType = {
  children: React.ReactNode
  open: boolean
  handleClose?: () => void
  style?: string
}

export default function Modal({
  children,
  open,
  handleClose,
  style,
}: PropType): React.ReactElement {
  const dialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (dialog.current) {
      if (open) dialog.current.showModal()
      else dialog.current.close()
    }
  }, [open])

  return (
    <dialog ref={dialog} className={`animate-scale-up ${style}`}>
      <div className='animate-scale-up'>
        {handleClose && <img className={styles.close} onClick={handleClose} src={closeSvg} />}
        {children}
      </div>
    </dialog>
  )
}
