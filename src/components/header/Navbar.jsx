import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fotAwwsomeIcon } from '@fortawesome/fontawesome-free'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center text-white font-bold text-xl">
            <img src="logo.png" alt="Logo" className="h-8 mr-2" />
            MySite
          </a>
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>
        <div className={`lg:flex lg:items-center lg:w-auto ${isMenuOpen ? '' : 'hidden'}`}>
          <div className="text-sm lg:flex-grow">
            <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
              Inicio
            </a>
            <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
              Servicios
            </a>
            <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
              Nosotros
            </a>
            <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
