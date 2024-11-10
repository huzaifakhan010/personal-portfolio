import React from 'react'
import { SiTypescript } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap 20 items-center'>

      <div data-aos="zoom-in-down"><h2 className='text-4xl md:text-4xl'>Technologies I work with</h2>
      <p className='text-gray-500 pt-4'>I bring expertise in HTML, CSS, JavaScript, TypeScript, React JS, and Next JS. Crafting seamless user experiences, I bridge the gap between innovation and functionality.
        With a passion for modern web development, I build scalable and efficient applications. Transforming visions into reality, one line of code at a time.</p>
      
    </div>
         <div>
          <div className='grid grid-cols-3 text-acccent text-3xl sm:text-6xl'>
             <div className='space-y-2'>
              <h2 data-aos="zoom-in-down"><SiTypescript /></h2>
              <h2 data-aos="zoom-in-down"><RiReactjsLine /></h2>
              <h2 data-aos="zoom-in-down"><SiNextdotjs /></h2>
             </div>
             <div className='grid grid-cols-1 text-acccent text-3xl sm:text-6xl'>
             <div className='space-y-2'>
              <h2 data-aos="zoom-in-down"><FaCss3Alt /></h2>
              <h2 data-aos="zoom-in-down"><SiTailwindcss /></h2>
              <h2 data-aos="zoom-in-down"><FaNodeJs /></h2>
             </div>
          </div>
         </div>
    </div>
    </div>
    </div>
  )
}

export default Skills
