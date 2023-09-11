'use client'

import React, { ReactNode } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

interface ActionTooltipProps {
    label: string 
    children: ReactNode
    side?: "top" | "bottom" | "left" | "right", 
    align?: 'start' | 'center' | 'end'
}

export default function ActionTooltip({ label, children, side = 'top', align }: ActionTooltipProps) {
  return (
    <TooltipProvider>
        <Tooltip delayDuration={50}>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent side={side} align={align}>
                <p className='font-semibold text-sm capitalize'>
                    {label.toLowerCase()}
                </p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}
