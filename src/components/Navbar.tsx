import React from 'react'
import { useState } from 'react';
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
import { FaLaptopCode } from "react-icons/fa";
import { TiCodeOutline } from "react-icons/ti";



const Navbar = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false)

  const toggleMenu = ()=> {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-ceter'>
            <div className='text-xl font medium'>MHK</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'> 
                  <li className='menuLink'><a href='#hero'>HOME</a></li>
                  <li className='menuLink'><a href='#projects'>PROJECTS</a></li>
                  <li className='menuLink'><a href='#skills'>SKILLS</a></li>
                  <li className='menuLink'><a href='#contact'>CONTACT</a></li>
                  <li className='menuLink'><a href='#about'>ABOUT</a></li>
            </ul>

            <div className='md:hidden' onClick={toggleMenu}>
              {isMenuOpen ? <AiOutlineClose size={30} />:
               <AiOutlineMenu size={30}/>
               }
            </div>
        </div>
        {
          isMenuOpen && (
            <ul className='flex flex-col gap-4 md:hidden'>
              <li className='menuLink'>
                <a href="#Hero" onClick={toggleMenu}>Home</a>
              </li>
              <li className='menuLink'>
                <a href="#projects" onClick={toggleMenu}>Projects</a>
              </li>
              <li className='menuLink'>
                <a href="#about" onClick={toggleMenu}>About</a>
              </li>
              <li className='menuLink'>
                <a href="#skills" onClick={toggleMenu}>Skills</a>
              </li>
              <li className='menuLink'>
                <a href="#contact" onClick={toggleMenu}>Contact</a>
              </li>
            </ul>
          )
        }
    </div>
  )
}

export default Navbar
