import React from 'react'

const Projects = () => {
    return (
        <div name='projects' className='w-full h-screen'>
            <div className='section'>
                <div>
                    <h1 className='section-header'>Projects</h1>
                    <ul className='py-4 grid grid-cols-1 sm:grid-cols-2'>
                        <li>
                            <h2 className="text-2xl">Easy SOAP</h2>
                            <p className="my-2">A simple web-based electronic medical records system built on the MERN stack.</p>
                            <div className="flex flex-col sm:flex-row items-left">
                            <button className='text-white w-[100px] border-2 px-6 py-3 my-2'><a href='https://easy-soap.herokuapp.com/'>Site</a></button>
                            <button className='text-white w-[100px] border-2 px-6 py-3 my-2 sm:ml-2'><a href='https://github.com/sfrutiger/easy-soap'>Code</a></button>
                            </div>
                        </li>
                    </ul>
                    <p className='py-4'>For more projects visit <a className='underline' href='https://github.com/sfrutiger'>Github</a> profile.</p>
                </div>
            </div>
        </div>
    )
}

export default Projects
