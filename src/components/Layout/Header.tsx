"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import ErxesLogo from "../../../public/images/ErxesLogo.png";

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-between w-full p-3 bg-gray-900/50 border border-gray-700/50 rounded-lg transition-all duration-300 ease-out hover:scale-80 hover:bg-gray-800/60 hover:border-gray-600/60 overflow-hidden"
    >
      {/* Bottom line animation */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>

      <div className="flex items-center gap-3">
        <div className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <span className="text-gray-300 group-hover:text-white font-medium text-sm transition-colors duration-300">
          {label}
        </span>
      </div>

      {/* Arrow with 45 degree rotation */}
      <div className="text-gray-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-2 group-hover:rotate-45">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  const socialButtons: SocialButtonProps[] = [
    {
      href: "https://facebook.com",
      label: "Facebook",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      href: "https://linkedin.com",
      label: "LinkedIn",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      href: "https://x.com",
      label: "Twitter/X",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      ),
    },
    {
      href: "https://instagram.com",
      label: "Instagram",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  return (
    <header className="w-full shadow-md bg-transparent">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Image
              className="w-[70px] h-[50px]"
              src={ErxesLogo}
              alt="Erxes Logo"
            />
          </div>

          <div>
            <p>bairshil ulaanbaatar</p>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="Erxes-Academy">
              <span className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="Academy-Suragchid-Delgerengui">
              <span className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 cursor-pointer">
                About
              </span>
            </Link>
            <Link href="Suragchdiin-Tosluud">
              <span className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 cursor-pointer">
                Projects
              </span>
            </Link>

            {/* Social Media Toggle Button */}
            <button
              onClick={() => setShowSocial(!showSocial)}
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 cursor-pointer relative"
            >
              Social
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2"
            >
              <Menu />
            </button>
          </div>
        </div>

        {/* Desktop Social Media Dropdown */}
        {showSocial && (
          <div className="hidden md:block absolute right-4 top-16 z-50 w-64 bg-gray-950 rounded-lg p-4 shadow-2xl space-y-3">
            {socialButtons.map((button, index) => (
              <SocialButton key={index} {...button} />
            ))}
          </div>
        )}

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-2 pb-4 space-y-1 border-gray-100 justify-end bg-amber-50 fixed w-full left-0 z-40">
            <span
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-base font-medium hover:bg-gray-50 cursor-pointer"
            >
              <Link href="Erxes-Academy">Home</Link>
            </span>
            <span
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-base font-medium hover:bg-gray-50 cursor-pointer"
            >
              <Link href="Academy-Suragchid-Delgerengui">About</Link>
            </span>
            <span
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-base font-medium hover:bg-gray-50 cursor-pointer"
            >
              <Link href="Suragchdiin-Tosluud">Projects</Link>
            </span>

            {/* Mobile Social Buttons */}
            <div className="px-4 py-2">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                Follow Us
              </p>
              <div className="space-y-2">
                {socialButtons.map((button, index) => (
                  <SocialButton key={index} {...button} />
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
