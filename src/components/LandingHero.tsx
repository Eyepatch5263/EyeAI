"use client"
import { useAuth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

import TypeWriterComponent from 'typewriter-effect'
import { Button } from './ui/button'
const LandingHero = () => {
    const {isSignedIn}=useAuth()
    return (
        <div className='text-white font-bold py-36 text-center space-y-5'>
            <div className='text-4xl sm:text-5xl md:text-6x lg:text-7xl space-y-5'>
                <h1>
                    The Best AI Tool For
                </h1>
                <div className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600'>
                    <TypeWriterComponent
                    options={{
                        strings:[
                            'Chatbot.',
                            'Photo Generation.',
                            'Image Generation',
                            'Video Generation',
                            'Code Generation',
                            'Music Generation',
                        ],
                        autoStart:true,
                        loop:true
                    }}
                    />
                </div>
            </div>
            <div style={{fontFamily:"georgia"}} className=' text-sm md:text-xl text-zinc-400'>
                Create Content Using Ai 10x Faster
            </div>
            <div>
                <Link href={isSignedIn?"/dashboard":"/sign-up"}>
                <Button style={{fontFamily:"georgia"}} variant={"outline"} className='md:text-lg bg-slate-300 font-medium text-black p-4 md:p-6 rounded-full' >
                    Starting Generating For Free
                    </Button>
                </Link>
            </div>
            
        </div>
    )
}

export default LandingHero
