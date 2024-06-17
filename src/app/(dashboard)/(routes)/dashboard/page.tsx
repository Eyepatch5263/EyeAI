"use client"

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {  ArrowRight, Braces, ImageIcon, MessageSquare, Music, Settings, VideoIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const tools=[
    {
        label:"Conversation",
        icon:MessageSquare,
        bgColor:"bg-pink-400/10",
        href:"/conversation",
        color:"text-pink-400"
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: '/image',
        color: "text-red-400",
        bgColor:"bg-red-400/10"

    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: '/video',
        color: "text-orange-400",
        bgColor:"bg-orange-400/10"

    },
    {
        label: "Music Generation",
        icon: Music,
        href: '/music',
        color: "text-emerald-300",
        bgColor:"bg-emerald-300/10"

    },
    {
        label: "Code Generation",
        icon: Braces,
        href: '/code',
        color: "text-purple-300",
        bgColor:"bg-purple-300/10"

    },
    {
        label: "Settings",
        icon: Settings,
        href: '/settings',
        color: "text-black/90",
        bgColor:"bg-blue-400/10"

    },
]
const DashboardPage = () => {
    const router=useRouter()
    return (
        <div>
            <div className='mb-8 space-y-4'>
                <h2 style={{fontFamily:"-moz-initial"}} className=' px-2 text-2xl md:text-4xl font-bold text-center'>
                    Explore The Power Of AI
                </h2>
                <p style={{fontFamily:"georgia"}} className='text-muted-foreground font-light text-md md:text-xl text-center'>
                    Chat with the smartest AI - Experience the power of AI
                    </p>
            </div>
            <div className='px-4 md:px-20 lg:px-32 space-y-4'>
                {
                    tools.map((tool)=>(
                        <Card key={tool.href}
                        onClick={()=>router.push(tool.href)}
                        className='p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer'
                        >
                            <div className='flex items-center gap-x-4'>
                                <div className={cn("p-2 w-fit rounded-md",tool.bgColor)}>
                                    <tool.icon className={cn("w-8 h-8",tool.color)}/>
                                </div>
                                <div style={{fontFamily:"georgia"}} className='font-medium'>
                                    {tool.label}
                                </div>
                            </div>
                            <ArrowRight className='w-5 h-5'/>
                            </Card>
                    ))
                }

            </div>
        </div>
    )
}

export default DashboardPage
