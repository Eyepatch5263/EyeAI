import Image from 'next/image'
import React from 'react'

const Loader = () => {
    return (
        <div className='h-full flex flex-col gap-y-4 items-center justify-center'>
            <div className='w-14 h-12 relative animate-ping'>
                <Image  src='/logo.png' alt="logo" fill/>
            </div>
            <p style={{fontFamily:"georgia"}} className='text-md text-muted-foreground'>
                EyeAI Is Thinking...
            </p>
        </div>
    )
}

export default Loader
