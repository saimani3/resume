import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Resume from '../Pages/Resume/Resume';
import Contact from '../Pages/Contacts/Contact';
const AllRouters = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/resume' element={<Resume/>} />
    <Route path='/contact' element={<Contact/>}/>
</Routes>
  )
}

export default AllRouters