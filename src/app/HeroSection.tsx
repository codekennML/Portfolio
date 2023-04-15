import React from 'react'
import Container from '../ui/Container'
import { Link } from "react-router-dom"

import {AiFillGithub, AiOutlineTwitter}  from "react-icons/ai"
import {FaEnvelope}  from "react-icons/fa"
import {BsLinkedin } from "react-icons/bs"
import  avatar from "../assets/kenn.jpg"

const HeroSection = () => {
  return (
    <section className='min-h-[200px]    '>


        
        <div className='flex flex-col items-center gap-y-5  pt-12'>
                  <div className='flex justify-center items-center  rounded-full'>
    <img src = {avatar}  alt='hero-banner'  className='rounded-full w-[180px] h-[180px] object-cover object-center '/>

  </div>
 
  <p className="text-[1.5rem] md:text-[2rem] font-bold text-white py-2">
            Udemeobong Akpan
            </p>
      <button>
            <span className=' pr-3  bg-green-200 px-3 py-1 text-gray-800 font-bold font-primary rounded-full '>
            Fullstack Web Developer.
            </span>
            <br/>
            
   
        </button>

        
        <div className='flex flex-row md:flex-row gap-x-8 text-white w-full  my-2 justify-center  '>
           <a href="https://github.com/codekennML" className='flex flex-row items-center gap-x-2'>
            <p className='flex flex-row text-primary'>
   
                        <AiFillGithub size = {25}/>
            </p>
  
  <div className='hidden sm:block text-primary'>

                <p>Github</p>
  </div>
           </a>
       
         
           <a href="https://twitter.com/code_kenn" className='flex flex-row items-center gap-x-2 text-primary'>
   
<p>

                        <AiOutlineTwitter size = {25}/>
</p>
          
          <div className='hidden sm:block'>

                <p>Twitter</p>
          </div>
   
           </a>
       
           <a href="https://www.linkedin.com/in/codekennml" className='flex flex-row items-center gap-x-2 text-primary' >
            <p>
            <BsLinkedin size = {25}/>
            </p>
            <div className='hidden sm:block'>
            <p>LinkedIn</p>
            </div>
        
           </a>

           <a href="mailto:codekennml@gmail.com" className='flex flex-row items-center gap-x-2 text-primary'>
         
            <p>

                     <FaEnvelope size = {25}/>
            </p>
         <div className='hidden sm:block'>

                <p>Email</p>
         </div>
         
           </a>
       
       
          
          
        </div>

        
          </div>

    </section>
  )
}

export default HeroSection