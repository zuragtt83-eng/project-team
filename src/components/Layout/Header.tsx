"use client";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useThemeContext } from "@/components/context/ThemeLanguage";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const { theme, setTheme, languege, setLanguege } = useThemeContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleTheme = () => setTheme(!theme);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-1/2 -translate-x-1/2 w-[65%] z-50 transition-all duration-500 
  ${
    scrolled
      ? theme
        ? "bg-gray-900/70 backdrop-blur-md h-16 rounded-3xl text-white shadow-2xl shadow-fuchsia-600/20"
        : "bg-white/30 backdrop-blur-xl h-16 rounded-3xl text-black shadow-md shadow-fuchsia-600/20"
      : theme
      ? "bg-transparent h-20 text-white"
      : "bg-transparent h-20 text-black"
  }
`}
    >
      <div className="w-[90%] max-w-7xl mx-auto px-6 h-full flex items-center justify-between ">
        <Link href="/" className="relative w-12 h-12 overflow-hidden group">
          {/* <Image
            src={}
            alt="Logo"
            className="absolute w-12 h-12 object-contain transition-transform duration-500 group-hover:-translate-y-full rounded-2xl bg-white"
          />
          <Image
            src={theme ? LogoBgBlack : Logo}
            alt="Logo Hover"
            className="absolute w-12 h-12 object-contain translate-y-full transition-transform duration-500 group-hover:translate-y-0"
          /> */}
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <Link
            href="/About-Us"
            className={`hover:text-gray-500 transition ${
              theme ? "text-white" : "text-black"
            }`}
          >
            {languege ? "Бидний тухай" : "About"}
          </Link>
          <Link
            href="/Contact-Us"
            className={`hover:text-gray-500 transition ${
              theme ? "text-white" : "text-black"
            }`}
          >
            {languege ? "Холбоо барих" : "Contact"}
          </Link>

          <div className="flex items-center gap-4">
            <div
              className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-300 ${
                theme ? "bg-gray-700/60" : "bg-gray-200"
              }`}
              onClick={toggleTheme}
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300 ${
                  theme ? "translate-x-7" : "translate-x-0"
                }`}
              >
                {theme ? (
                  <Moon className="w-3.5 h-3.5 text-gray-800" />
                ) : (
                  <Sun className="w-3.5 h-3.5 text-yellow-500" />
                )}
              </div>
            </div>

            <div
              className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-300 ${
                languege ? "bg-indigo-200" : "bg-gray-200"
              }`}
              onClick={() => setLanguege(!languege)}
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 rounded-full shadow-md flex items-center justify-center transition-transform duration-300 ${
                  languege ? "translate-x-7" : "translate-x-0"
                }`}
              >
                {languege ? "🇲🇳" : "🇺🇸"}
              </div>
            </div>
          </div>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-amber-50 shadow-lg">
          <Link href="/About-Us" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/Contact-Us" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          <div className="flex gap-6">
            <div
              className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-300 ${
                theme ? "bg-gray-700" : "bg-yellow-300"
              }`}
              onClick={toggleTheme}
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300 ${
                  theme ? "translate-x-7" : "translate-x-0"
                }`}
              >
                {theme ? (
                  <Moon className="w-3.5 h-3.5 text-gray-800" />
                ) : (
                  <Sun className="w-3.5 h-3.5 text-yellow-500" />
                )}
              </div>
            </div>

            <div
              className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-300 ${
                languege ? "bg-blue-500" : "bg-green-500"
              }`}
              onClick={() => setLanguege(!languege)}
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300 ${
                  languege ? "translate-x-7" : "translate-x-0"
                }`}
              >
                {languege ? "🇲🇳" : "🇺🇸"}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
