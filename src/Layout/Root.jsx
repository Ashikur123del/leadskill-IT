import React from 'react'
import Navber from './Navber'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'


const Root = () => {
  return (
    <>
    <Navber />
    <Outlet />
    <Footer />
    </>
  )
}

export default Root