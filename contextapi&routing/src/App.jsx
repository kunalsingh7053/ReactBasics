import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service';
const App = () => {
  return (
    <div className='w-screen h-screen bg-black text-white'>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Service" element={<Service/>}/>
    <Route path="/Contact" element={<Contact/>}/>
   </Routes>
   </div>
  )
}

export default App
