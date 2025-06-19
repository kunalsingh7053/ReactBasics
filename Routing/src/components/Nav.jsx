import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className="flex justify-center gap-10 p-5">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Product">Product</Link>
      <Link to="/Service">Service</Link>
    </div>
  )
}

export default Nav;
