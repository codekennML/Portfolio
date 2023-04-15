import React from 'react'
import {Link } from "react-router-dom"
import { BiMenu} from "react-icons/bi"
import Container from '../../ui/Container'
import   {AiOutlineClose, AiOutlineFile, AiOutlineFilePdf} from "react-icons/ai"
import { useState } from "react"


const Navbar = () => {
    const [showNav, setShowNav] = useState(false)

  return (
    <>
    <header className='border-b border-slate-700'>

        <Container>
<div className='flex flex-row  justify-between min-h-[70px] py-[1rem] items-center '>
     {/* Logo */}
     <Link to =  "/" className='text-primary text-[1.5rem] font-secondary font-bold' >
        codekennML
        </Link>

        {/* Large screen nav */}


        {/* Small screen navs */}
        <nav className='hidden sm:block' >
           
            <ul className=' hidden font-primary  font-bold text-[.8rem] text-bright list-none md:flex flex-col md:flex-row gap-x-12'>
                <li className=' text-[1rem]'>
                    Home
                </li>
                <li className='text-[1rem]'>
                <a href="#about">
                    About
                    </a>
                </li>
                <li className='text-[1rem]'>
                    <a href="#projects">
                    Projects
                    </a>
                </li>
              

            </ul>

        </nav>
        <button className='text-primary filter brightness-80' onClick={() => setShowNav(prev => !prev)}>
                <span>
                    <AiOutlineFilePdf size =  {40} />
                </span>
            </button>
</div>
 
        </Container>
    </header>

    </>
  )
}

export default Navbar