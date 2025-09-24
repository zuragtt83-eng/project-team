"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import ErxesLogo from "../../../public/images/ErxesLogo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-transparent text-gray-300 shadow-md top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              src={ErxesLogo}
              alt="Erxes Logo"
              className="w-[70px] h-[50px]"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/Erxes-Academy"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition"
            >
              Home
            </Link>
            <Link
              href="/Academy-Suragchid-Delgerengui"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition"
            >
              About
            </Link>
            <Link
              href="/Suragchdiin-Tosluud"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition"
            >
              Projects
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-gray-900 mt-2 rounded-md shadow-lg overflow-hidden">
            <Link
              href="/Erxes-Academy"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm hover:bg-gray-800 transition"
            >
              Home
            </Link>
            <Link
              href="/Academy-Suragchid-Delgerengui"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm hover:bg-gray-800 transition"
            >
              About
            </Link>
            <Link
              href="/Suragchdiin-Tosluud"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm hover:bg-gray-800 transition"
            >
              Projects
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
