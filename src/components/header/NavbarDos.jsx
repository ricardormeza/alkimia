import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, Popover } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from '../../assets/alkimia-logo.webp';

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
    <header className="bg-gray-200">
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
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6  sm:ring-1 sm:ring-gray-900/10">
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
  );
}


