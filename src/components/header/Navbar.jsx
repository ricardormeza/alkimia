// import { Fragment, useState } from "react";
// import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
// import {
//   ArrowPathIcon,
//   Bars3Icon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";
// import {
//   ChevronDownIcon,
//   PhoneIcon,
//   PlayCircleIcon,
// } from "@heroicons/react/20/solid";



// import { FiMenu } from "react-icons/fi";
// import Logo from "../../assets/logo-alkimia.png";

// import { Collapse } from 'flowbite';

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navbar() {

//   const navigation = [
//     { name: "Inicio", href: "/", current: true },
//     { name: "Servicios", href: "/servicios", current: false },
//     { name: "Contacto", href: "/contacto", current: false },
//   ];
  
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <img
//             src="https://flowbite.com/docs/images/logo.svg"
//             className="h-8"
//             alt="Flowbite Logo"
//           />
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//             Flowbite
//           </span>
//         </a>
//         <button
          
//           data-collapse-toggle="navbar-hamburger"
//           type="button"
//           className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-hamburger"
//           aria-expanded="false"
//           onClick={() => setMobileMenuOpen(true)}
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//           {/* <FiMenu /> */}
//         </button>
//         {/* <div className="hidden w-full" id="navbar-hamburger"></div> */}
//         <Popover.Group className="hidden lg:flex lg:gap-x-12">
//         <Popover className="relative">
//         <Transition
//               as={Fragment}
//               enter="transition ease-out duration-200"
//               enterFrom="opacity-0 translate-y-1"
//               enterTo="opacity-100 translate-y-0"
//               leave="transition ease-in duration-150"
//               leaveFrom="opacity-100 translate-y-0"
//               leaveTo="opacity-0 translate-y-1"
//             >
//         </Popover>
//         </Popover.Group>

//         <div className="hidden w-full" id="navbar-hamburger">
//               {navigation.map((item) => (

//                 <ul key={item.name} className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
//             <li>
//               <a
//                 href={item.href}
//                 className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600"
//                 aria-current="page"
//                 >
//                 {item.name}
//               </a>
//             </li>
            
//           </ul>
//                 ))}
//         </div>
//       </div>
//     </nav>
//   )
// }