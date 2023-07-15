import React, { useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail } from 'react-icons/hi'  
import {BSFillPersonLinesFill, BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assetts/logo3-white.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
      <img src={Logo} alt='Logo Image' style={{ width: '200px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
          <li>
          <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
          </li>
          <li>
          <Link to="about" smooth={true} duration={500}>
          About
        </Link>
          </li>
          <li>
          <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
          </li>
          <li>
          <Link to="work" smooth={true} duration={500}>
          Work
        </Link>
          </li>
          <li>
          <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
          </li>
        </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
      {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-gray-300 flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link>
          </li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link>
          </li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          Skills
        </Link>
          </li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
          Work
        </Link>
          </li>
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link>
          </li>
        </ul>
      {/* social icons will only display on anything on large*/}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duraction-300 bg-blue-600'>
            <a className='w-full flex justify-between items-center text-gray-300'href='https://www.linkedin.com/in/esther-brown-2018/' target='blank'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duraction-300 bg-[#333333]'>
            <a className='w-full flex justify-between items-center text-gray-300'href='https://www.github.com/esthergiles' target='blank'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duraction-300 bg-[#6fC2B0]'>
            <a className='w-full flex justify-between items-center text-gray-300'href='mailto:ebrown0727@gmail.com' target='blank'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duraction-300 bg-[#565f69]'>
            <a className='w-full flex justify-between items-center text-gray-300'href='https://github.com/esthergiles/my_resume/blob/main/esther_brown.pdf' target='blank'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>

      </div>
    </div>
  );
}

export default Navbar