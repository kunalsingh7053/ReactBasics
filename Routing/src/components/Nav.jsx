import { NavLink } from "react-router-dom";


const Nav = () => {
  return (
    <div className="flex justify-center gap-10 p-5">
      <NavLink className={(e)=>e.isActive?"text-blue-400":""} to="/">Home</NavLink>
      <NavLink className={(e)=>e.isActive?"text-blue-400":""} to="/About">About</NavLink>
      <NavLink className={(e)=>e.isActive?"text-blue-400":""} to="/Product">Product</NavLink>
      <NavLink className={(e)=>e.isActive?"text-blue-400":""} to="/Service">Service</NavLink>
    </div>
  )
}

export default Nav;
