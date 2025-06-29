import { NavLink } from "react-router-dom"

const Navs = () => {
  return (
    <div className="Navbar flex justify-center items-center gap-x-5 mb-[30px]">
      <NavLink className={(e)=>e.isActive?"text-blue-500":""} to="/">
        Home
      </NavLink>
      <NavLink className={(e)=>e.isActive?"text-blue-500":""} to="/recipes">
        Recipes
      </NavLink>
      <NavLink className={(e)=>e.isActive?"text-blue-500":""} to="/about">
        About
      </NavLink>
      <NavLink className={(e)=>e.isActive?"text-blue-500":""} to="/create">
        Create
      </NavLink>
    </div>
  )
}

export default Navs
