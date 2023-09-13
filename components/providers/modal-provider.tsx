'use client'

import { CreateServerModal } from "@/components/modals/create-server-modal"
import { useEffect, useState } from "react"

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted){
        console.log('modal provider is false. Waiting ...')
        return null
    }
    
    return (
        <>
            <CreateServerModal />
        </>
    )
}