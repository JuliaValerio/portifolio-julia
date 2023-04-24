import React from 'react'
import { Link } from 'react-scroll';
import Logo from '../assets/logo.png'
import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Footer = () => {

  return (
      <footer className="w-full bg-[#0a192f] p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-[#0a192f] text-center md:justify-between">
        <img src={Logo} alt="logo-ct" className="w-10 mt-1" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <a
                className='text-sm flex justify-between items-center w-full text-gray-300 transition ease-in-out delay-150 hover:-translate-y-1 duration-300'
                href='https://drive.google.com/file/d/1BYYYAM0P9fc6Nh_o_KNaWpEqlY583qtu/view?usp=sharing'
                target="_blank" 
                rel="noopener noreferrer"
                style={{marginLeft: '1em'}}
              >
                <BsFillPersonLinesFill size={30} />
              </a>
          </li>
          <li>
          <a
              className='flex justify-between items-center w-full text-gray-300 transition ease-in-out delay-150 hover:-translate-y-1 duration-300'
              href='/'
              onClick={() => window.location = 'mailto:juliav286@gmail.com'}
            >
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li>
          <a
              className='flex justify-between items-center w-full text-gray-300 transition ease-in-out delay-150 hover:-translate-y-1 duration-300'
              href='https://github.com/JuliaValerio'
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li>
          <a
              className='flex justify-between items-center w-full text-gray-300 transition ease-in-out delay-150 hover:-translate-y-1 duration-300'
              href='https://www.linkedin.com/in/julia-val%C3%A9rio-331195101/'
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-white" />
      <Link color="white" className="text-center font-normal text-gray-300 ">
        &copy; 2023 
      </Link>
    </footer>
  )
}

export default Footer;