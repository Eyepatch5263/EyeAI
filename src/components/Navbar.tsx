import { UserButton } from '@clerk/nextjs'
import React from 'react'

import MobileSidebar from './Mobile_sidebar'

const Navbar = () => {
    return (
        <div className='flex items-center p-4'>
            <MobileSidebar/>
            <div className='flex w-full justify-end'>
                <UserButton afterSignOutUrl='/'/>
            </div>
        </div>
    )
}

export default Navbar
