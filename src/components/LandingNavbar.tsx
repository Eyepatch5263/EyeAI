"use client"
import { cn } from '@/lib/utils'
import { useAuth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const LandingNavbar = () => {
    const {isSignedIn}=useAuth()

    return (
        <nav className='p-4 bg-transparent flex items-center justify-between'>
            <Link href={'/'} className='flex items-center'>
            <div className='relative h-8 w-12 mr-4'>
                <Image fill alt='Logo' src={'/logo.png'}/>
            </div>
            <h1 style={{fontFamily:"-moz-initial"}} className={cn("text-3xl font-bold text-white")}>
                EyeAI
            </h1>
            </Link>
            <div className='flex items-center gap-x-2'>
                <Link href={isSignedIn?"/dashboard":"/sign-up"}>
                <Button style={{fontFamily:"georgia"}} variant={"outline"} className='rounded-full'>
                    Get Started
                </Button>
                </Link>
            </div>
        </nav>
    )
}

export default LandingNavbar
