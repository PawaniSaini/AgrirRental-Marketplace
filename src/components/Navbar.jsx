'use client'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
<>
      {/* ========== HEADER ========== */}
      <header className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-blue-900 md:mx-auto md:flex-row md:items-center">
    <a
      href="#"
      className="flex items-center whitespace-nowrap text-2xl font-black"
    >
      <span className="mr-2 text-4xl text-blue-500">
      </span>
     FarmRent Hub
    </a>
    <input type="checkbox" className="peer hidden" id="navbar-open" />
    <label
      className="absolute top-5 right-7 cursor-pointer md:hidden"
      htmlFor="navbar-open"
    >
      <span className="sr-only">Toggle Navigation</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </label>
    <nav
      aria-label="Header Navigation"
      className="flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all peer-checked:mt-8 peer-checked:max-h-56 md:ml-24 md:max-h-full md:flex-row md:items-start"
    >
      <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
        <li className="font-bold md:mr-12">
          <a href="http://localhost:3000">Home</a>
        </li>
        <li className="md:mr-12 font-bold">
          <a href="product">Product</a>
        </li>
        <li className="md:mr-12 font-bold">
          <a href="about">About</a>
        </li>
        <li className="md:mr-12 font-bold">
          <a href="contact">Contact</a>
        </li>
        
        <Link className="rounded-full border-2 bg-green-700 border-blue-900 px-6 py-1 text-white transition-colors hover:bg-blue-900 hover:text-white"
          href='http://localhost:3000/login'>
            Login
        </Link>
      </ul>
    </nav>
  </header>
      {/* ========== END HEADER ========== */}
    </>

    
  )
}
export default Navbar