import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Navs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const navLinksRef = useRef([]);
  const mobileMenuRef = useRef();

  useEffect(() => {
    // Click outside to close mobile menu
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Animate desktop nav links on mount
  useEffect(() => {
    gsap.from(navLinksRef.current, {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      duration: 0.6,
      ease: "power3.out",
    });
  }, []);

  // Animate mobile nav on toggle
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  const navLinkStyle = ({ isActive }) =>
    `relative after:content-[''] after:absolute after:left-0 after:bottom-0 
     after:w-full after:h-[2px] after:bg-red-500 after:scale-x-0 after:origin-left 
     after:transition-transform after:duration-300 hover:after:scale-x-100 
     ${isActive ? "text-red-400 font-bold" : "text-white"} px-3 py-2`;

  return (
    <nav
      ref={menuRef}
      className="bg-[#133538] text-white w-full px-4 py-3 relative z-50 h-[60px] flex items-center justify-between mb-5"
    >
      {/* Logo + Hamburger */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <img className="w-[50px]" src={logo} alt="Logo" />

        <button
          className="md:hidden text-3xl"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6 items-center ml-auto">
        {["/", "/recipes", "/about", "/create", "/fav"].map((path, index) => (
          <NavLink
            key={path}
            to={path}
            className={navLinkStyle}
            ref={(el) => (navLinksRef.current[index] = el)}
          >
            {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
          </NavLink>
        ))}
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-[60px] left-0 w-full flex flex-col gap-3 bg-[#0F172B] px-4 py-4 md:hidden"
        >
          {["/", "/recipes", "/about", "/create", "/fav"].map((path) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={navLinkStyle}
            >
              {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navs;
