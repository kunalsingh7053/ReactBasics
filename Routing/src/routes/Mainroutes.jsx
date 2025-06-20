
import React from 'react'
import Home from "../pages/Home";
import Product from "../pages/Product";
import Service from "../pages/Service";
import About from "../pages/About";
import { Routes, Route } from "react-router-dom";
import ProductDetails from '../pages/ProductDetails';
import ServiceDetails from '../pages/ServiceDetails';
import ServiceUpdate from '../pages/ServiceUpdate';

const Mainroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/Product/detail/:name" element={<ProductDetails/>}/>
        <Route path="/Service" element={<Service/>}>
        <Route path="/Service/detail" element={<ServiceDetails/>}/> 
        <Route path="/Service/update" element={<ServiceUpdate/>}/> 
        </Route>
        <Route path="/About" element={<About/>}/>
      </Routes>
  )
}

export default Mainroutes;

