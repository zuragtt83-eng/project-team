"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import ErxesLogo from "../../../public/images/ErxesLogo.png"

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
         
          <div className="flex-shrink-0 flex items-center">
            <Image className="w-[70px] h-[50px]" src={ErxesLogo} alt="Erxes Logo"></Image>
          </div>
          <div>
            <p>bairshil ulaanbaatar</p>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
       <Link href="erxes">     <span className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 cursor-pointer">Home</span></Link>
            <Link href={"about"}><span className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 cursor-pointer">About</span></Link>
          <Link href="project"><span className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 cursor-pointer">projects</span></Link>
            <span className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 cursor-pointer">Contact</span>
          </div>
          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2"
            >
        <Menu/>
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden mt-2 pb-4 space-y-1  border-gray-100 justify-end bg-amber-50 fixed">
            <span onClick={() => setOpen(false)} className="block px-4 py-2 text-base font-medium hover:bg-gray-50 cursor-pointer"><Link href="erxes">Home</Link></span>
            <span onClick={() => setOpen(false)} className="block px-4 py-2 text-base font-medium hover:bg-gray-50 cursor-pointer"><Link href="about">About</Link></span>
            <span onClick={() => setOpen(false)} className="block px-4 py-2 text-base font-medium hover:bg-gray-50 cursor-pointer"><Link href="project">Projects</Link></span>
            <span onClick={() => setOpen(false)} className="block px-4 py-2 text-base font-medium hover:bg-gray-50 cursor-pointer"><Link href="erxes">Contact</Link></span>
          
          </div>
        )}
      </nav>
    </header>
  );
}