import React from 'react'
import { Outlet} from "react-router-dom"
import Navbar from './Navbar/Navbar'
import Container from '../ui/Container'


const Layout = () => {
  return (

    <>
    <Container>
    <Navbar />
    <div>
        <Outlet />
    </div>
    </Container>
    </>
  )
}

export default Layout