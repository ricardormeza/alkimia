import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, Popover } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from '../../assets/alkimia-logo.webp';
import { PiPhoneCallLight } from "react-icons/pi";

const navigation = [
        { name: "Inicio", href: "/", current: true },
        { name: "Nosotros", href: "/nosotros", current: false },
        { name: "Servicios", href: "/servicios", current: false },
        { name: "Proyectos", href: "/proyectos", current: false },
        // { name: "Proyecto", href: "/cliente/cliente-acento-coffe-roasters", current: false },
        { name: "Contacto", href: "/contacto", current: false },
    ];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
     {/* REDES INICIO */}
     <div className=" bg-gray-300 px-0">
          <div className=" mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <div className="flex justify-center items-center place-content-center">
              <PiPhoneCallLight className="text-gray-500"/>
              <Link to="tel:9876543210" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"> +51 {'('}664{')'}-211-9491</Link>
            </div>
            {/* ICONOS */}
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              {/* FACEBOOK */}
              <a className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
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
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
        {/* REDES FIN */}
      <header className="bg-gray-200 px-8">
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
          <div className="flex 2xl:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden 2xl:flex 2xl:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </Link>
          ))}
          </Popover.Group>
        </nav>
        <Dialog
          as="div"
          className="2xl:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-3/5 overflow-y-auto bg-white px-6 py-6  sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Alkimia Agency</span>
                <img
                  className="h-8 w-auto"
                  src={logo}
                  alt=""
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                      <Link key={item.name} to={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-center font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          {item.name}
                      </Link>

                      ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        
      </header>
    </>
  );
}



