"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AboutTwo from "@/components/About/three";
import AboutCom from "@/components/About/two";

import Image from "next/image";
import People from "../../../public/images/amgalansTest/people.jpg";
import ImageGallery from "@/components/About/SurgaltVibe/page";

type Star = {
  size: number;
  x: number;
  y: number;
  driftX: number;
  driftY: number;
  duration: number;
  delay: number;
  color: string;
};

export default function AboutBeg() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const colors = ["#ffffff", "#a0c4ff", "#d0bfff"];
      const tempStars: Star[] = Array.from({ length: 150 }).map(() => ({
        size: Math.random() * 2 + 1,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        driftX: Math.random() * 20 - 10,
        driftY: Math.random() * 10 - 5,
        duration: 5 + Math.random() * 10,
        delay: Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
      setStars(tempStars);
    }
  }, []);

  const waveText = "STUDENTS";
  const letters = waveText.split("");

  return (
    <div className="flex flex-col relative w-screen overflow-hidden">

      {/* HERO SECTION */}
      <div className="w-screen h-screen relative flex items-center justify-center
                      bg-gradient-to-br from-purple-900 via-blue-800 to-black overflow-hidden">

        {/* STAR BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {stars.map((star, i) => {
            const glowColor = star.color === "#ffffff" ? "rgba(255,255,255,0.8)" :
                              star.color === "#a0c4ff" ? "rgba(160,196,255,0.7)" :
                              "rgba(208,191,255,0.7)";
            return (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: star.size,
                  height: star.size,
                  top: 0,
                  left: 0,
                  backgroundColor: star.color,
                  boxShadow: `0 0 ${star.size * 2}px ${glowColor}`,
                }}
                animate={{
                  x: [star.x, star.x + star.driftX, star.x],
                  y: [star.y, star.y + star.driftY, star.y],
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.2, 1],
                }}
                whileHover={{
                  scale: 2,
                  opacity: 1,
                  boxShadow: `0 0 ${star.size * 8}px ${glowColor}, 0 0 ${star.size * 12}px ${glowColor}`,
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: star.duration,
                  ease: "easeInOut",
                  delay: star.delay,
                }}
              />
            );
          })}
        </div>

        {/* MAIN HERO CONTENT */}
        <div className="flex flex-row justify-around w-full px-10 z-10 items-center">

          {/* LEFT TEXT */}
          <div className="flex flex-col gap-5 items-start">
            <div className="text-[8rem] font-extrabold uppercase bg-clip-text text-transparent
                            bg-gradient-to-r from-purple-400 via-blue-400 to-white
                            drop-shadow-[0_0_35px_rgba(128,0,255,0.8)]">
              HELLO! <br /> HERE IS <br /> PADA1
            </div>

        {/* 🌊 Wave motion text - STUDENTS */}
<div className="flex justify-center mt-10">
  {letters.map((char, i) => (
    <motion.span
      key={i}
      initial={{ y: 0 }}
      animate={{ y: [-15, 15, -15] }} // долгионы өндөр
      transition={{
        duration: 3,               // 3 секунд тутамд нэг wave
        ease: "easeInOut",
        repeat: Infinity,           // үргэлжлүүлэн долгиолох
        delay: i * 0.1,             // stagger effect
      }}
      className="inline-block text-white text-6xl font-bold mx-[2px] drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]"
    >
      {char}
    </motion.span>
  ))}
</div>
          </div>

          {/* CENTER: People image */}
          <div className="flex flex-col justify-center items-center relative">
            <Image
              src={People}
              alt="People"
              width={600}
              height={700}
              className="rounded-2xl shadow-2xl"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="flex flex-col text-[6rem] font-extrabold gap-2 text-white
                          drop-shadow-[0_0_25px_rgba(0,128,255,0.5)]">
            {["E", "R", "X", "E", "S"].map((char, i) => (
              <div key={i}>{char}</div>
            ))}
          </div>

        </div>

      </div>

      {/* ABOUT COMPONENTS */}
      <div>
        <AboutCom />
        <AboutTwo />
        <ImageGallery/>
      </div>

     
    </div>
  );
}
