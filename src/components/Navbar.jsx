import React, { useState } from 'react'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 shadow-xl'>
      <div>
        <img src={Logo} alt='logo' style={{width: '90px'}}/>
      </div>

      {/* Menu */}
      <ul className='hidden md:flex'>
        <li className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300'>Home</li>
        <li className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300'>Sobre</li>
        <li className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300'>Skills</li>
        <li className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300'>Projetos</li>
        <li className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300'>Contato</li>
      </ul>

      {/* Hamburguer */}
      <div onClick = {() => setNav(!nav)} className='md:hidden z-10'>
        {!nav ? <FaBars className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300' size={25}/> : <FaTimes className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300' size={25}/>}
      </div>

      {/* Menu Mobile */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a192f] text-gray-300 shadow-xl'}> 
          <li className='py-6 text-4xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300'>Home</li>
          <li className='py-6 text-4xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300'>Sobre</li>
          <li className='py-6 text-4xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300'>Skills</li>
          <li className='py-6 text-4xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300'>Projetos</li>
          <li className='py-6 text-4xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-zinc-50 duration-300'>Contato</li>        
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Download CV <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar