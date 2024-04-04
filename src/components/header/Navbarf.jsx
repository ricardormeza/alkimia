import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosMenu } from "react-icons/io";
import logo from "../../assets/alkimia-logo.webp";
import LogoBco from '../../assets/Alkimia-logo-blanco.webp'
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { PiPhoneCallLight } from "react-icons/pi";

const navigation = [
  { name: "Inicio", href: "/", current: true },
  { name: "Nosotros", href: "/nosotros", current: false },
  { name: "Servicios", href: "/servicios", current: false },
  { name: "Proyectos", href: "/proyectos", current: false },
  // { name: "Proyecto", href: "/cliente/cliente-acento-coffe-roasters", current: false },
  { name: "Contacto", href: "/contacto", current: false },
];

export default function Navbarf() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.15,
        delay: 0.7,
      },
    },
  };

  return (
    <>
    {/* REDES INICIO */}
    <div className="bg-gray-300 ">
      <div className="contenedor  px-0 ">
            <div className=" mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <div className="flex justify-center items-center place-content-center">
                <PiPhoneCallLight className="text-gray-500" />
                <Link
                  to="tel:9876543210"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  {" "}
                  +51 {"("}664{")"}-211-9491
                </Link>
              </div>
              {/* ICONOS */}
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                {/* FACEBOOK */}
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                {/* TWITER */}
                {/* <a className="ml-3 text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a> */}
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
        {/* REDES FIN */}
    
      <div className="containerr ">
        <header>
          <nav
            className="mx-auto flex max-w-7xl pt-5 items-center justify-between p-1 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Alkimia Agency</span>
                <img
                  className="h-8 w-auto"
                  src={logo}
                  alt="logo de alkimia agency"
                />
              </Link>
            </div>
            <div className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <div className="" onClick={toggleMenu}>
                {/* <i className="fa fa-bars"></i> */}
                <IoIosMenu className="h-8 w-8 text-[#425cc7] cursor-pointer" />
              </div>

            </div>
          </nav>
        </header>
        <AnimatePresence>
          {open && (
            <motion.div
              className="menu_container"
              variants={item}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100vh", opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit="exit"
              onClick={(event) => {
                event.preventDefault();
                closeMenu();
              }}
            >
              <div className="btn_close" onClick={closeMenu}>
                X
              </div>
              <div className="flex lg:flex-1 mt-10 border-b-2 border-gray-200 justify-center items-center w-2/3">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Alkimia Agency</span>
                <img
                  className="h-8 w-auto"
                  src={LogoBco}
                  alt="logo de alkimia agency"
                />
              </Link>
            </div>
              {navigation.map((item) => (
                <motion.a
                  key={item.name}
                  to={item.href}
                  href=""
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 1,
                    },
                  }}
                >
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-sm font-semibold leading-6 text-gray-900 mt-4"
                  >
                    {item.name}
                  </Link>
                </motion.a>
              ))}
              <span className=" content-center  sm:mt-0 mt-2 justify-center sm:justify-start">
              {/* FACEBOOK */}
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              {/* TWITER */}
              {/* <a className="ml-3 text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a> */}
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
              {/* Add the remaining menu items here */}
            </motion.div>
          )}
        </AnimatePresence>
        {/* <div className="content_wrapper">
                  <p>Animated Navigation</p>
              </div> */}
      </div>
    </>
  );
}
