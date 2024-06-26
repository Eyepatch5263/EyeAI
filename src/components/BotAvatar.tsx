import React from 'react'
import { Avatar } from './ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'

const BotAvatar = () => {
    return (
        <Avatar className='h-8 w-10'>
            <AvatarImage className='p-1' src='/logo.png'/>
        </Avatar>
    )
}

export default BotAvatar
