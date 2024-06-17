import LandingComponent from '@/components/LandingComponent'
import LandingHero from '@/components/LandingHero'
import LandingNavbar from '@/components/LandingNavbar'
import Link from 'next/link'
import React from 'react'

const LandingPage = () => {
    return (
        <div>
            <LandingNavbar/>
            <LandingHero/>
            <LandingComponent/>
        </div>


    )
}

export default LandingPage
