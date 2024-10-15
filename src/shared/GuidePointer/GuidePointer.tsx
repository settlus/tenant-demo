import { useState, useEffect } from 'react'
import Pointer from '../../public/svg/pointer.svg'
import clsx from 'clsx'

type PropType = {
  children: React.ReactNode
  doGuide: boolean
  topPos?: string
  leftPos?: string
  margin?: number
}

export default function GuidePointer({
  children,
  doGuide,
  topPos,
  leftPos,
  margin,
}: PropType): React.ReactElement {
  const [isVisible, setIsVisible] = useState(false)
  // topPos = topPos || 40
  // leftPos = leftPos || 6

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null
    if (doGuide) {
      setIsVisible(false)
      timeout = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
    }

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [children, doGuide])

  return (
    <div className='relative flex m-auto overflow-ellipsis'>
      {children}
      {isVisible && doGuide && (
        <img
          className={clsx(
            'mt-2 absolute z-[1000] animate-bounce',
            topPos || 'top-40',
            leftPos || 'left-6'
          )}
          src={Pointer}
          style={{ marginTop: `${margin || 0.5}rem` }}
        />
      )}
    </div>
  )
}
