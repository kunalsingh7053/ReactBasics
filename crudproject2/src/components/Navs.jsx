import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png";

const Navs = () => {
  return (
    <div className="Navbar w-full  flex justify-between items-center   mb-[30px] bg-[#0F172B]">
      <div className="w-[30%]">
        <img className="w-[50px]" src={logo} alt="" />
      </div>
     <div className="flex justify-around w-[70%]">
       <NavLink className={(e)=>e.isActive?"text-red-400":""} to="/">
        Home
      </NavLink>
      <NavLink className={(e)=>e.isActive?"text-red-400":""} to="/recipes">
        Recipes
      </NavLink>
      <NavLink className={(e)=>e.isActive?"text-red-400":""} to="/about">
        About
      </NavLink>
      <NavLink className={(e)=>e.isActive?"text-red-400":""} to="/create">
        Create
      </NavLink>
      <NavLink className={(e)=>e.isActive?"text-red-400":""} to="/fav">
        Favourite
      </NavLink>
     </div>
    </div>
  )
}

export default Navs
