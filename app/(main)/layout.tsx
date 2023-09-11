import {NavigationSidebar} from '@/components/navigation/navigation-sidebar'
import React, { ReactNode } from 'react'

interface MainLayoutProps {
    children: ReactNode
}
export default async function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className='h-full'>
        <div className='hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0'>
             {/* @ts-expect-error Server Component */}
            <NavigationSidebar />
        </div>
        <main className='md:pl-[72px] h-full'>{children}</main>
        
    </div>
  )
}
