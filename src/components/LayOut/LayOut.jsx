import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Home from '../Home/Home'

export default function LayOut() {
  return <>
    <NavBar />
        <Outlet></Outlet>
    <Footer />
  </>
}
