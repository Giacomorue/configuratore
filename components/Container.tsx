import React from 'react'

function Container({
  children, className
} : {
  children: React.ReactNode, className?: string
}) {
  return (
    <div className={`max-w-[1440px] h-full mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container