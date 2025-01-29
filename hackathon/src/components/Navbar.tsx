"use client"
import React, { useState } from "react"
import Topbar from "./mini/Topbar"
import Link from "next/link"
import SearchBar from "./SearchBar"
import { Button } from "./ui/button"

const Navbar = () => {
  const [open, setOpen] = useState(false); // Removed duplicate declaration

  return (
    <div className="w-full">
      {/* Topbar */}
      <Topbar />

      {/* Navbar */}
      <nav className="w-full bg-white px-2 lg:px-40 py-4 grid grid-cols-2 lg:grid-cols-5 gap-4 justify-between items-center">
        
        {/* Menu */}
        <div className="hidden lg:flex col-span-2 justify-start gap-4 items-center">
          <Link href={"/"} className="font-lato text-offBlue hover:underline hover:text-[#fb2e86]">
            Home
          </Link>
          <Link href={"/product/page"} className="font-lato text-offBlue hover:underline hover:text-[#fb2e86]">
            Products
          </Link>
          <Link href={"/blog"} className="font-lato text-offBlue hover:underline hover:text-[#fb2e86]">
            Blog
          </Link>
          <Link href={"/shop"} className="font-lato text-offBlue hover:underline hover:text-[#fb2e86]">
            Shop
          </Link>
          <Link href={"/about"} className="font-lato text-offBlue hover:underline hover:text-[#fb2e86]">
            About
          </Link>
          <Link href={"/faq"} className="font-lato text-offBlue hover:underline hover:text-[#fb2e86]">
            FAQ
          </Link>
          <Link href={"/contact"} className="font-lato text-offBlue hover:underline hover:text-[#fb2e86]">
            Contact
          </Link>
        </div>

        {/* Mobile navigator icon */}
        <button
          className="flex md:hidden justify-end items-center px-5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle mobile menu"
        >
          <div className={`w-8 flex flex-col justify-center gap-1 ${open ? "cross" : ""}`}>
            <div className="w-full h-1 bg-gray-700 transition-transform duration-500 ease-in-out"></div>
            <div className="w-full h-1 bg-gray-700 transition-transform duration-500 ease-in-out"></div>
            <div className="w-full h-1 bg-gray-700 transition-transform duration-500 ease-in-out"></div>
          </div>
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="z-10 absolute top-40 right-0 bg-[#070722] backdrop:blur-md w-full h-auto flex flex-col items-center justify-start p-10 gap-3">
            <SearchBar />
            <Link href={"/"} className="font-lato text-white hover:underline hover:text-[#fb2e86]">
              Home
            </Link>
            <Link href={"/product/page"} className="font-lato text-white hover:underline hover:text-[#fb2e86]">
              Products
            </Link>
            <Link href={"/blog"} className="font-lato text-white hover:underline hover:text-[#fb2e86]">
              Blog
            </Link>
            <Link href={"/shop"} className="font-lato text-white hover:underline hover:text-[#fb2e86]">
              Shop
            </Link>
            <Link href={"/about"} className="font-lato text-white hover:underline hover:text-[#fb2e86]">
              About
            </Link>
            <Link href={"/faq"} className="font-lato text-white hover:underline hover:text-[#fb2e86]">
              FAQ
            </Link>
            <Link href={"/contact"} className="font-lato text-white hover:underline hover:text-[#fb2e86]">
              Contact
            </Link>
          </div>
        )}

        {/* Search Bar */}
        <div className="hidden md:flex justify-end items-center">
          <SearchBar />
        </div>
      </nav>
    </div>
  )
}

export default Navbar

