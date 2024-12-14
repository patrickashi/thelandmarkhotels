import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import landmark_logo_transp from "../images/landmark_logo_transp.png";

function Navbar({ isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full h-[70px] z-50 transition-all duration-300 ${isScrolled ? 'bg-[#991b1b] bg-opacity-90' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* <span className=" font-bold text-white">The Landmark Hotel</span> */}
            <Link to="/" className='flex align-middle items-center'>
              <img src={landmark_logo_transp} className='w-16' alt="logo" />
              <p className='text-white text-xs'>LANDMARK <br/> HOTELS </p>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" label="Home" />
              <NavLink to="/rooms" label="Rooms" />
              <NavLink to="/dining" label="Dining" />
              <NavLink to="/facilities" label="Facilities" />
              <NavLink to="/contact" label="Contact" />
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden fixed top-0 right-0 bottom-0 w-[200px] bg-[#991b1b] text-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-20 px-4">
          <MobileNavLink to="/" label="Home" onClick={toggleMenu} />
          <MobileNavLink to="/rooms" label="Rooms" onClick={toggleMenu} />
          <MobileNavLink to="/dining" label="Dining" onClick={toggleMenu} />
          <MobileNavLink to="/facilities" label="Facilities" onClick={toggleMenu} />
          <MobileNavLink to="/contact" label="Contact" onClick={toggleMenu} />
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, label }) {
  return (
    <Link
      to={to}
      className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
    >
      {label}
    </Link>
  );
}

function MobileNavLink({ to, label, onClick }) {
  return (
    <Link
      to={to}
      className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-600 hover:bg-gray-100"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

export default Navbar;

