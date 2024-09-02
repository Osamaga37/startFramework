// import React from 'react';
// import {  NavLink } from 'react-router-dom';

// export default function NavBar() {
//   return (
//     <div>
// <nav className=" border-gray-200 bg-gray-700 fixed w-full top-0 z-10">
//   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
//         <span className="self-center text-3xl font-semibold text-white uppercase">Start Framework</span>
//     <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
//         <span className="sr-only">Open main menu</span>
//         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//         </svg>
//     </button>
//     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//       <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
//         <li className='flex justify-center items-center'>
//           <NavLink to="about" className="block py-2 px-3  rounded md:border-0  md:p-0 text-white uppercase" aria-current="page">About</NavLink>
//         </li>
//         <li className='flex justify-center items-center'>
//           <NavLink to="portfolio" className="block py-2 px-3  rounded md:border-0  md:p-0 text-white uppercase">Portfolio</NavLink>
//         </li>
//         <li className='flex justify-center items-center'>
//           <NavLink to="contact" className="block py-2 px-3  rounded md:border-0  md:p-0 text-white uppercase">contact</NavLink>
//         </li>
        
//       </ul>
//     </div>
//   </div>
// </nav>

//     </div>
//   )
// }
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className="border-gray-200 bg-gray-700 fixed w-full top-0 z-10">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
                    <span className="self-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white uppercase">Start Framework</span>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={isOpen ? "true" : "false"}
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                            <li className='flex justify-start items-center ms-10'>
                                <NavLink to="about" className=" py-2 px-5 rounded md:border-0 md:p-0 text-white uppercase" aria-current="page">About</NavLink>
                            </li>
                            <li className='flex justify-start items-center ms-10'>
                                <NavLink to="portfolio" className=" py-2 px-5 rounded md:border-0 md:p-0 text-white uppercase">Portfolio</NavLink>
                            </li>
                            <li className='flex justify-start items-center ms-10'>
                                <NavLink to="contact" className=" py-2 px-5 rounded md:border-0 md:p-0 text-white uppercase">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
