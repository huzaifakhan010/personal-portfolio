import React from 'react'
import { BsMailboxFlag } from "react-icons/bs";


const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
          <div className='space-y-8'> 
            <h2 className='text-5xl' data-aos="zoom-in-down">Contact info.</h2>
            <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-down">
                Kindly,submit the from.
            </p>
            <div className='flex gap-3 items-center' data-aos="zoom-in-down">
            <BsMailboxFlag size={30}/> huzefakhancorp@gmail.com
            </div>
              </div>
          <div className='space-y-8'>
            <div className='flex flex-col gap-1'>
              <label htmlFor="name">Name</label>
              <input type="text" className='h-[40px] bg-transparent border border-accent'
               id='name'/></div>
               <div className='flex flex-col gap-1'>
              <label htmlFor="email">Email</label>
              <input type="text" className='h-[40px] bg-transparent border border-accent'
               id='email'/>
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="msg">Message</label>
              <textarea className='h-[40px] bg-transparent border border-accent'
               id='msg' rows={8}> 
               </textarea>

            </div>
            <button className='bg-gray-600 p-2 px-6' data-aos="zoom-in-down">SEND</button>
          </div>
      
        </div>
      </div>
  )
}

export default Contact
