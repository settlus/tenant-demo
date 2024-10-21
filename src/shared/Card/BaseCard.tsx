import React from 'react'

import clsx from 'clsx'

type BaseCardProps = {
  step?: number
  pageStep?: number
  className?: string
  children: React.ReactNode
}

const BaseCard: React.FC<BaseCardProps> = ({ step, pageStep, className, children }) => {
  return step === pageStep && step !== undefined ? (
    <div className='relative rounded-lg max-h-[580px] bg-gradient-to-b from-[rgba(200,255,202,0.64)] via-[rgba(83,184,87,0.64)] to-[rgba(101,246,255,0.48)] p-[3px]'>
      <div className='h-full bg-[#F9FAFB] rounded-lg p-4'>{children}</div>
    </div>
  ) : (
    <div className={clsx('relative max-h-[580px]', className)}>{children}</div>
  )
}

export default BaseCard
