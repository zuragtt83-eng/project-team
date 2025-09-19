import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Phone,
  Mail,
  Home,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-[#AAAEB3] w-full py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 px-4 md:px-0">
        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-xl font-semibold text-[#5629B6]">Холбоо барих</h3>
          <p>HUD 15 хороо, ITC Tower, 5 давхар</p>
          <div className="flex flex-col gap-2 mt-2">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 rounded bg-[#373737] border border-[#393C40] focus:outline-none focus:border-[#5629B6]"
            />
            <input
              type="tel"
              placeholder="Утас"
              className="px-4 py-2 rounded bg-[#373737] border border-[#393C40] focus:outline-none focus:border-[#5629B6]"
            />
            <button className="px-4 py-2 bg-[#5629B6] rounded hover:bg-[#4F33AF] transition text-white">
              Илгээх
            </button>
          </div>
        </div>

        <div className="flex flex-1 flex-col md:flex-row justify-between gap-12">
          {/* Дугаар */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-[#5629B6] flex items-center gap-2">
              <Phone size={20} /> Дугаар
            </h3>
            <p className="hover:text-[#6569DF] transition">+976 8500-3673</p>
            <p className="hover:text-[#6569DF] transition">+976 8090-6405</p>
            <p className="flex items-center gap-2 hover:text-[#6569DF] transition">
              <Mail size={16} /> Academy@erxes.io
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-start">
            <h3 className="text-xl font-semibold text-[#5629B6] flex items-center gap-2">
              <Home size={20} /> Main Links
            </h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:text-[#6569DF] transition">
                Home
              </a>
              <a href="#" className="hover:text-[#6569DF] transition">
                About Us
              </a>
              <a href="#" className="hover:text-[#6569DF] transition">
                Projects
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-[#393C40] pt-6 flex flex-col md:flex-row items-center justify-between px-4 md:px-0 max-w-6xl mx-auto gap-6">
        <div className="flex flex-wrap gap-4 md:gap-4">
          <a
            href="#"
            className="flex items-center gap-2 bg-[#373737] px-4 py-2 rounded hover:bg-[#4F33AF] transition text-white"
          >
            <Facebook size={24} /> Facebook
          </a>
          <a
            href="#"
            className="flex items-center gap-2 bg-[#373737] px-4 py-2 rounded hover:bg-[#4F33AF] transition text-white"
          >
            <Instagram size={24} /> Instagram
          </a>
          <a
            href="#"
            className="flex items-center gap-2 bg-[#373737] px-4 py-2 rounded hover:bg-[#4F33AF] transition text-white"
          >
            <Youtube size={24} /> YouTube
          </a>
          <a
            href="#"
            className="flex items-center gap-2 bg-[#373737] px-4 py-2 rounded hover:bg-[#4F33AF] transition text-white"
          >
            <Twitter size={24} /> Twitter
          </a>
        </div>

        <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-center md:text-right leading-none text-[#5629B6]">
          <div className="text-white">ERXES</div>
          <div>Academy</div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-6 px-4 md:px-0 max-w-6xl mx-auto text-sm text-[#888888] gap-4">
        <div className="flex gap-4 flex-col md:flex-row">
          <p>Designed by Pada-1-1</p>
          <p>Powered by Erxes</p>
        </div>
        <div>
          <p>@{new Date().getFullYear()} Erxes rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
