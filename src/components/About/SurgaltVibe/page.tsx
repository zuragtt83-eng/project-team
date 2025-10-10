"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

import Tennis from "../../../../public/images/surgaltiinOrchin/tennisShiree.jpeg";
import Work from "../../../../public/images/surgaltiinOrchin/workshopRoom4.jpeg";
import Erxes from "../../../../public/images/surgaltiinOrchin/erxes.jpeg";
import Bicig from "../../../../public/images/surgaltiinOrchin/mongolBichig.jpeg";
import Srglt from "../../../../public/images/surgaltiinOrchin/surgaltiinOroo2.jpeg";
import PodRoom from "../../../../public/images/surgaltiinOrchin/podRoom.jpeg";
import Uud from "../../../../public/images/surgaltiinOrchin/uudniiHeseg.jpeg";

export default function RollingGallery7() {
  const [index, setIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  const allImages: { src: StaticImageData; title: string; description: string }[] = [
    { src: Tennis, title: "Tennis Shiree", description: "Манай Erxes олон жилийн туршлагатай байгууллага юм." },
    { src: Work, title: "Workshop Room", description: "Инче манай ажилчид идэвхтэй ажилладаг орчин." },
    { src: Erxes, title: "Erxes", description: "Инче манай хичээл ордог өрөө байрладаг." },
    { src: Bicig, title: "Mongol Bichig", description: "Монгол бичгийн сургалтын орчин." },
    { src: Srglt, title: "Surgaltiin Oroo", description: "Сургалт явагддаг тав тухтай өрөө." },
    { src: PodRoom, title: "Pod Room", description: "Оюутнуудын подкаст хичээл явагддаг танхим." },
    { src: Uud, title: "Uudnii Heseg", description: "Сургалтын төвийн үүдний хэсэг." },
  ];

  const total = allImages.length;
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);
  const next = () => setIndex((prev) => (prev + 1) % total);

  const bottomImages = allImages.slice(0, 2);

  // PADA1 circle text
  const circleText = "PADA1★★★★";
  const letters = circleText.split("");
  const radius = 45; // Circle-ийн radius

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-500 ${
        darkMode ? "bg-black" : "bg-gradient-to-br from-gray-100 via-gray-50 to-white"
      }`}
    >
      {/* --- Home/About/Project Buttons (Right Top) --- */}
      <div className="absolute top-20 right-60 flex gap-4 z-20">
        <button
          className={`px-4 py-2 rounded-lg text-white transition ${
            darkMode ? "bg-gray-600 hover:bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
          }`}
          onClick={() => router.push("/home")}
        >
          Home
        </button>
        <button
          className={`px-4 py-2 rounded-lg text-white transition ${
            darkMode ? "bg-gray-600 hover:bg-gray-500" : "bg-purple-500 hover:bg-purple-600"
          }`}
          onClick={() => router.push("/about")}
        >
          About
        </button>
        <button
          className={`px-4 py-2 rounded-lg text-white transition ${
            darkMode ? "bg-gray-600 hover:bg-gray-500" : "bg-pink-500 hover:bg-pink-600"
          }`}
          onClick={() => router.push("/project")}
        >
          Project
        </button>
      </div>

      {/* --- Dark Mode Switch (Left Top) --- */}
      <div className="absolute top-20 left-60 z-20">
        <div
          className={`w-20 h-10 rounded-full cursor-pointer flex items-center px-1 transition-colors duration-300 ${
            darkMode ? "bg-gray-700" : "bg-yellow-300"
          }`}
          onClick={() => setDarkMode(!darkMode)}
        >
          <motion.div
            className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-lg"
            layout
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
            style={{ x: darkMode ? 40 : 0 }}
          >
            {darkMode ? "🌙" : "☀️"}
          </motion.div>
        </div>
      </div>

      {/* --- Main Container --- */}
      <div className="relative flex flex-col items-center border-4 border-gray-300 rounded-lg p-5 w-full max-w-6xl transition-colors duration-500">
        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-[30%] -translate-y-1/2 bg-white border border-gray-400 rounded-full w-12 h-12 flex items-center justify-center z-20 shadow-md hover:scale-110 transition"
          onClick={prev}
        >
          &#60;
        </button>
        <button
          className="absolute right-4 top-[30%] -translate-y-1/2 bg-white border border-gray-400 rounded-full w-12 h-12 flex items-center justify-center z-20 shadow-md hover:scale-110 transition"
          onClick={next}
        >
          &#62;
        </button>

        {/* Top main image */}
        <motion.div className="relative rounded-lg shadow-lg mb-8 z-10" style={{ width: 1100, height: 350 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full h-full rounded-lg"
            >
              <Image src={allImages[index].src} alt={allImages[index].title} className="object-cover w-full h-full rounded-lg" />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Bottom section */}
        <div className="flex w-full justify-start items-start gap-4">
          {/* Bottom small images */}
          <div className="flex gap-4">
            {bottomImages.map((img, i) => (
              <motion.div key={i} className="relative rounded-lg shadow-md" style={{ width: 220, height: 250 }}>
                <Image src={img.src} alt={img.title} className="object-cover w-full h-full rounded-lg opacity-90" />
              </motion.div>
            ))}
          </div>

          {/* Info box */}
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col border rounded-lg p-5 shadow-lg w-[400px] min-h-[250px] transition-colors duration-500 ${
              darkMode ? "bg-gray-900 text-white border-gray-700" : "bg-white text-gray-800 border-gray-300"
            }`}
          >
            <h2 className="text-2xl font-semibold mb-2 flex justify-center">{allImages[index].title}</h2>
            <p className="leading-relaxed mb-2">{allImages[index].description}</p>
          </motion.div>
        </div>

        {/* --- PADA1 Circle Logo (Bottom Right) --- */}
        <div className="absolute bottom-6 right-10 w-32 h-32">
          {/* Circle-ийн дээр байрлах contact info */}
          <div className="absolute -top-28 left-1/2 -translate-x-1/2 text-center leading-tight transition-colors duration-500">
            <p className={`text-lg ${darkMode ? "text-white" : "text-black"}`}>976 8500-3673</p>
            <p className={`text-lg ${darkMode ? "text-white" : "text-black"}`}>976 8090-6405</p>
            <p className={`text-lg ${darkMode ? "text-white" : "text-black"}`}>Academy@erxes.io</p>
          </div>

          {/* Circle */}
          <motion.div
            className="absolute w-32 h-32 flex items-center justify-center rounded-full shadow-lg"
            style={{
              background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899)",
            }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {letters.map((letter, i) => {
              const angle = (i / letters.length) * 2 * Math.PI;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              const rotationDeg = (angle * 180) / Math.PI + 90;
              return (
                <div
                  key={i}
                  className="absolute text-white font-bold text-xs"
                  style={{
                    transform: `translate(${x}px, ${y}px) rotate(${rotationDeg}deg)`,
                    transformOrigin: "center",
                  }}
                >
                  {letter}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
