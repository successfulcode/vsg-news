'use client'

import Link from 'next/link';
import { useState } from 'react';

interface INavLink {
  name: string;
  href: string;
}

function NavDrawer({navLinks}: {navLinks: INavLink[]}) {

  const [isVsible, setIsVisible] = useState(false),
    onToggleMenu = (isVsible: boolean = false) => setIsVisible(isVsible);

  return (
    <>
      <button data-collapse-toggle="navbar-user" type="button" onClick={() => onToggleMenu(true)}
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>

      <section className={`md:hidden ${!isVsible && 'hidden'}`}>
        <div className="bg-black inset-0 fixed top-0 bottom-0 right-0 left-0 bg-opacity-50 z-30" onClick={() => onToggleMenu(false)}></div>
        <div id="drawer-disable-body-scrolling" className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-64 dark:bg-gray-800" tabIndex={-1} aria-labelledby='drawer-disable-body-scrolling-label'>
            <h5 id="drawer-disable-body-scrolling-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">LOGO</h5>
            <button type="button" data-drawer-hide="drawer-disable-body-scrolling" aria-controls="drawer-disable-body-scrolling"  onClick={() => onToggleMenu(false)}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
              <svg className="w-3 h-3"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span className="sr-only">Close menu</span>
           </button>
          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              {navLinks.length > 0 && navLinks.map(
                navLink => <li key={navLink.name}>
                  <Link href={navLink.href} onClick={() => onToggleMenu(false)} 
                   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <span className="ms-3">{navLink.name}</span>
                  </Link>
              </li>)}
            </ul>
           </div>
        </div>
      </section>
    </>
  )
}

export default NavDrawer;