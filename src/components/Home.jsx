import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
    return (
        <div className='bg-[darkblue] w-full h-screen flex justify-center'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <h1 className='text-white text-4xl md:text-7xl font-bold'>Seth Frutiger</h1>
                <h2 className='text-white text-xl md:text-4xl font-bold'>Web Developer</h2>
                <div>
                    <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:px-7 duration-200'>View Projects <HiArrowNarrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default Home
