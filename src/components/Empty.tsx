import { LucideIcon, MessageSquare } from 'lucide-react';
import React from 'react'

interface EmptyProps{
    title:string;
    icon:LucideIcon
}
const Empty = ({title,icon:Icon}:EmptyProps) => {
    return (
        <div className='h-full p-20 flex flex-col items-center justify-center'>
            <div className='relative h-72 flex flex-row w-full justify-center gap-4'>
                <h1 style={{fontFamily:"impact"}} className='text-4xl text-center'>{title}</h1>
                <Icon className='w-12 h-12'/>
            </div>
        </div>
    )
}

export default Empty
