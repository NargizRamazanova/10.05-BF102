import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <>
        <Navbar/>
            <Outlet/>
        <Footer/>
    </>
  )
}

export default Main