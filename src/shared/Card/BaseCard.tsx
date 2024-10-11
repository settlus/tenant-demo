import React from 'react'
import clsx from 'clsx'

type BaseCardProps = {
  step?: number
  pageStep?: number
  className?: string
  widthRatio?: string
  children: React.ReactNode
}

const BaseCard: React.FC<BaseCardProps> = ({ step, pageStep, className, widthRatio, children }) => {
  return (
    <div
      className={clsx(
        'relative p-[20px] rounded-lg max-h-[580px]',
        step === pageStep && step !== undefined
          ? 'bg-gradient-to-b from-[rgba(200,255,202,0.64)] via-[rgba(83,184,87,0.64)] to-[rgba(101,246,255,0.48)]'
          : step
            ? 'border border-[#F9FAFB]'
            : '',
        widthRatio,
        className
      )}
    >
      {children}
    </div>
  )
}

export default BaseCard
