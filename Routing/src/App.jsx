import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"; 
import Product from "./components/Product"; 
import Service from "./components/Service"; 
import About from "./components/About"; 
import Nav from "./components/Nav";


const App = () => {
  return (
    <div className="h-screen w-screen bg-black text-white">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>

    </div>
  )
}

export default App
