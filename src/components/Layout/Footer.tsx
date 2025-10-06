import { Phone, Mail, Home } from "lucide-react";

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const ModernSocialButton: React.FC<SocialButtonProps> = ({
  href,
  icon,
  label,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-between min-w-[140px] p-3 bg-gradient-to-r from-gray-800/90 to-gray-700/90 backdrop-blur-lg border border-gray-600/50 rounded-xl transition-all duration-500 ease-out hover:scale-95 hover:from-purple-600/80 hover:to-blue-600/80 hover:border-purple-400/70 hover:shadow-lg hover:shadow-purple-500/25 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-blue-600/0 to-purple-600/0 group-hover:from-purple-600/20 group-hover:via-blue-600/20 group-hover:to-purple-600/20 transition-all duration-500"></div>

      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>

      <div className="flex items-center gap-3 relative z-10">
        <div className="w-5 h-5 text-gray-300 group-hover:text-white group-hover:scale-110 transition-all duration-300">
          {icon}
        </div>
        <span className="text-gray-300 group-hover:text-white font-medium text-sm transition-all duration-300 group-hover:translate-x-1">
          {label}
        </span>
      </div>

      <div className="relative z-10 text-gray-500 group-hover:text-white transition-all duration-400 group-hover:translate-x-2 group-hover:-rotate-45 group-hover:scale-110">
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

export default function Footer() {
  const socialButtons: SocialButtonProps[] = [
    {
      href: "https://www.facebook.com/erxesacademy/",
      label: "Facebook",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      href: "https://www.instagram.com/erxesacademy/",
      label: "Instagram",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      href: "https://www.youtube.com/@erxesAcademy",
      
      label: "YouTube",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      href: "https://x.com/erxesacademy",
      label: "Twitter/X",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      ),
    },
    {
      href: "mailto:Academy@erxes.io",
      label: "Gmail",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
      ),
    },
  ];

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
              className="px-4 py-2 rounded-lg bg-[#373737] border border-[#393C40] focus:outline-none focus:border-[#5629B6] transition-all duration-300 focus:shadow-lg focus:shadow-purple-500/20"
            />
            <input
              type="tel"
              placeholder="Утас"
              className="px-4 py-2 rounded-lg bg-[#373737] border border-[#393C40] focus:outline-none focus:border-[#5629B6] transition-all duration-300 focus:shadow-lg focus:shadow-purple-500/20"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-[#5629B6] to-[#4F33AF] rounded-lg hover:from-[#4F33AF] hover:to-[#5629B6] transition-all duration-300 text-white hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
              Илгээх
            </button>
          </div>
        </div>

        <div className="flex flex-1 flex-col md:flex-row justify-between gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-xl font-semibold text-[#5629B6] flex items-center gap-2">
              <Home size={20} /> Дугаар
            </h3>

            <div className="flex flex-col gap-2 w-full md:w-auto">
              <a
                href="tel:+97685003673"
                className="flex flex-row gap-2 justify-center md:justify-start items-center hover:text-[#6569DF] transition relative group"
              >
                <Phone size={16} />
                976 8500-3673
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>

              <a
                href="tel:+97680906405"
                className="flex flex-row gap-2 justify-center md:justify-start items-center hover:text-[#6569DF] transition relative group"
              >
                <Phone size={16} />
                976 8090-6405
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>

              <a
                href="mailto:Academy@erxes.io"
                className="flex flex-row gap-2 justify-center md:justify-start items-center hover:text-[#6569DF] transition relative group"
              >
                <Mail size={16} />
                Academy@erxes.io
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-[#5629B6] flex items-center gap-2">
              Main Links
            </h3>
            <p className="hover:text-[#6569DF] transition cursor-pointer">
              Home
            </p>
            <p className="hover:text-[#6569DF] transition cursor-pointer">
              About Us
            </p>
            <p className="flex items-center gap-2 hover:text-[#6569DF] transition cursor-pointer">
              Projects
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-[#393C40] pt-6 flex flex-col md:flex-row items-center justify-between px-4 md:px-0 max-w-6xl mx-auto gap-6">
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {socialButtons.map((button, index) => (
            <ModernSocialButton key={index} {...button} />
          ))}
        </div>

        <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-center md:text-right leading-none text-[#5629B6]">
          <div className="text-white hover:scale-105 transition-transform duration-300 cursor-default">
            ERXES
          </div>
          <div className="hover:scale-105 transition-transform duration-300 cursor-default">
            Academy
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-6 px-4 md:px-0 max-w-6xl mx-auto text-sm text-[#888888] gap-4">
        <div className="flex gap-4 flex-col md:flex-row">
          <p className="hover:text-[#6569DF] transition cursor-pointer">
            Designed by Pada-1-1
          </p>
          <p className="hover:text-[#6569DF] transition cursor-pointer">
            Powered by Erxes
          </p>
        </div>
        <div>
          <p>@{new Date().getFullYear()} Erxes rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
