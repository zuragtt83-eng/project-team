"use client";
import { useState, useEffect } from "react";
import { Code2 } from "lucide-react";
import Header from "../Layout/Header";

export default function HeroSection() {
  const [showIntro, setShowIntro] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      setTimeout(() => setIsVisible(true), 200);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-black text-white">
      {/* Intro transition screen */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-transform duration-700 ${
          showIntro ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="text-center">
          <Code2 className="w-16 h-16 mx-auto text-gray-400 mb-6 animate-pulse" />
          <h1 className="text-5xl sm:text-6xl font-bold">erxes Academy</h1>
          <p className="text-gray-400 mt-2 text-lg">
            Харьяа компани — erxes inc
          </p>
        </div>
      </div>

      {/* Header */}
      <Header />

      {/* Hero Content */}
      <div
        className="min-h-screen flex flex-col justify-center items-center px-6 text-center"
        style={{
          backgroundImage: `url("/images/erxesBack.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Title */}
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6">
            Master Code. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Transform Your Future.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10">
            Learn coding from industry professionals and become a modern
            developer with real-world skills.
          </p>

          {/* Button */}
          <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
            Explore Courses →
          </button>
        </div>
      </div>
    </div>
  );
}
