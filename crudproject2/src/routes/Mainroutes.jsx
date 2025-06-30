
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes  from '../pages/Recipes'
import About from '../pages/About'
import Create from '../pages/Create'
import Singlerecipe from '../pages/Singlerecipe'
const Mainroutes = () => {
  return (
  <>
  <Routes>
    <Route  path="/"  element={<Home/>}/>
    <Route  path="/recipes"  element={<Recipes/>}/>
    <Route  path="/recipes/detail/:id"  element={<Singlerecipe/>}/>
    <Route  path="/about"  element={<About/>}/>
    <Route  path="/create"  element={<Create/>}/>
  </Routes>
  </>
  )
}

export default Mainroutes
