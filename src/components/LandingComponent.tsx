import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const testimonials = [
    {
        name: "Bruce walker",
        avatar: "BW",
        title: "Software Engineer",
        description: "This is the best AI application I've ever used"
    },
    {
        name: "Wice Hamper",
        avatar: "WH",
        title: "Software Engineer",
        description: "This is the best AI application I've ever used"
    }, {
        name: "Wice Hamper",
        avatar: "WH",
        title: "Software Engineer",
        description: "This is the best AI application I've ever used"
    },
    {
        name: "Bruce walker",
        avatar: "BW",
        title: "Software Engineer",
        description: "This is the best AI application I've ever used"
    }
]
const LandingComponent = () => {
    return (
        <div className='px-10 pb-20'>
            <h2 style={{fontFamily:"-moz-initial"}} className='text-center text-4xl text-white font-bold mb-10'>
                Testimonials
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    testimonials.map((testimonial) => (
                        <Card key={testimonial.description} className='bg-[#192339] border-none text-white'>
                            <CardHeader>
                                <CardTitle className='flex items-center gap-x-2'>
                                    <div className='w-full'>
                                        <div className='flex justify-between w-full gap-4'>
                                        <p style={{fontFamily:"georgia"}} className='text-xl '>
                                            {testimonial.name}
                                        </p>
                                        <p style={{fontFamily:"georgia"}}  className='text-white-400 bg-white/10 p-1.5 rounded-xl text-lg'>
                                            {testimonial.avatar}
                                        </p>
                                        </div>
                                        
                                        <p style={{fontFamily:"georgia"}}  className='text-zinc-400 text-sm'>
                                            {testimonial.title}
                                        </p>
                                    </div>
                                </CardTitle>
                                <CardContent style={{fontFamily:"georgia"}}  className='pt-4 px-0'>
                                    {testimonial.description}
                                </CardContent>
                            </CardHeader>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default LandingComponent
