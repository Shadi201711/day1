import React from 'react'
import MyNav from '../Components/MyNav';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';



export default function SharedLayouts() {
  return (
    <>
    <MyNav/>
    <Outlet/>

    <Footer></Footer>
    </>
  )
}
