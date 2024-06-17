"use client"

import { cn } from '@/lib/utils'
import { Braces, ImageIcon, LayoutDashboard, MessageSquare, Music, Music2, Music3, Music4, Settings, VideoIcon } from 'lucide-react'
import { Noto_Serif_Georgian } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const georgia = Noto_Serif_Georgian({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--georgia',
})

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: '/dashboard',
        color: "text-blue-400"

    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: '/conversation',
        color: "text-pink-400"

    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: '/image',
        color: "text-red-400"

    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: '/video',
        color: "text-orange-400"

    },
    {
        label: "Music Generation",
        icon: Music,
        href: '/music',
        color: "text-emerald-300"

    },
    {
        label: "Code Generation",
        icon: Braces,
        href: '/code',
        color: "text-purple-300"

    },
    {
        label: "Settings",
        icon: Settings,
        href: '/settings',
        color: "text-white/60"

    },

]
const Sidebar = () => {
    const pathName=usePathname()
    return (
        <div className='space-y-4 py-5 flex flex-col h-full bg-[#111827] text-white'>
            <div className='px-3 py-2 flex-1'>
                <Link className='flex items-center pl-3 mb-14' href={'/dashboard'}>
                    <div className='relative w-12 h-8 mr-4'>
                        <Image sizes='24px' fill src={'/logo.png'} alt='logo' />
                    </div>
                    <h1 className={cn('text-2xl font-medium', georgia.className)}>EyeAI</h1>
                </Link>
                <div className='space-y-1'>
                    {routes.map((route) => (
                        <Link className={cn('group flex px-2 py-3 p-2 justify-start my-2 cursor-pointer hover:bg-white/20 rounded-xl',
                            pathName===route.href?"text-grey/80 bg-white/10":"text-white/80"
                        )} key={route.href} href={route.href}>
                            <div className={'flex items-center mr-3 my-2 gap-1 px-1'}>
                                <route.icon className={cn('w-6 h-6',route.color)} />
                                <span className={cn('ml-2',georgia.className)}>{route.label}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
