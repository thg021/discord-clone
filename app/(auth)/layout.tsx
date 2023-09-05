import React, { ReactNode } from 'react'

interface AuthLayoutProps {
    children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className='h-full flex justify-center items-center'>{children}</div>
  )
}
