
import { Link } from 'react-router-dom'
const Navbar = () => {
  return ( 
    <nav className="w-screen bg-gray-600 flex justify-center gap-20">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Service">Service</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  )
}

export default Navbar
