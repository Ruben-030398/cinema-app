import { cn } from '@/shared/lib/utils'
import React from 'react'

export type LoadingIndicatorProps = {
  className?: string
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ className }) => {
  return (
    <div className='w-full h-[calc(100vh-theme(space.24))] flex justify-center items-center'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("animate-spin", className)}
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    </div>
  )
}

export default LoadingIndicator