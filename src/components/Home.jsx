import React from 'react';
import {Link} from 'react-scroll';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen'>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='w-fit-content'>
                <h1 className='text-5xl md:text-7xl font-bold'>Seth Frutiger</h1>
                <h2 className='text-2xl md:text-4xl font-bold'>Web Developer</h2>
                <div>
                    <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:px-7 duration-200'>
                    <Link to="projects" smooth={true} duration={300}>View Projects</Link>
                        </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home
