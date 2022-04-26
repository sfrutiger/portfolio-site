import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-end md:justify-center items-center px-4'>
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={300}>Home</Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={300}>About</Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={300}>Skills</Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={300}>Projects</Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={300}>Contact</Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center'}>
                <li className='py-4 text-4xl'>
                    <Link to="home" smooth={true} duration={300} onClick={handleClick}>Home</Link>
                </li>
                <li className='py-4 text-4xl'>
                    <Link to="about" smooth={true} duration={300} onClick={handleClick}>About</Link>
                </li>
                <li className='py-4 text-4xl'>
                    <Link to="skills" smooth={true} duration={300} onClick={handleClick}>Skills</Link>
                </li>
                <li className='py-4 text-4xl'>
                    <Link to="projects" smooth={true} duration={300} onClick={handleClick}>Projects</Link>
                </li>
                <li className='py-4 text-4xl'>
                    <Link to="contact" smooth={true} duration={300} onClick={handleClick}>Contact</Link>
                </li>
                <li className='py-4 text-4xl flex'>
                    <a className='px-4' href='https://github.com/sfrutiger'><FaGithub size={30}/></a>
                    <a className='px-4' href='https://www.linkedin.com/in/seth-frutiger'><FaLinkedin size={30}/></a>
                </li>
            </ul>

            {/* Social icons */}
            <div className='hidden md:flex fixed flex-col bottom-[2%] left-0'>
                <ul>
                    <li className='social-icons'>
                        <a className='flex justify-between items-center w-full bg-blue-400 text-white' href='https://github.com/sfrutiger'>
                            Github <FaGithub className="bg-blue-400" size={30}/>
                        </a>
                    </li>
                    <li className='social-icons'>
                        <a className='flex justify-between items-center w-full bg-blue-400 text-white' href='https://www.linkedin.com/in/seth-frutiger'>
                            LinkedIn <FaLinkedin className="bg-blue-400" size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
