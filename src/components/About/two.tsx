"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";

import Has from "../../../public/images/amgalansTest/picture3.webp";
import Double from "../../../public/images/amgalansTest/picture4.webp";

export default function CinematicScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* ---------------------- TEXT SCROLL ANIMATION ---------------------- */
  const leftX = useTransform(scrollYProgress, [0, 0.05, 0.25, 0.35], [-200, 0, 0, -200]);
  const leftOpacity = useTransform(scrollYProgress, [0, 0.05, 0.25, 0.35], [0, 1, 1, 0]);
  const leftScale = useTransform(scrollYProgress, [0, 0.05, 0.25, 0.35], [0.9, 1, 1, 0.9]);

  const rightX = useTransform(scrollYProgress, [0, 0.05, 0.25, 0.35], [200, 0, 0, 200]);
  const rightOpacity = useTransform(scrollYProgress, [0, 0.05, 0.25, 0.35], [0, 1, 1, 0]);
  const rightScale = useTransform(scrollYProgress, [0, 0.05, 0.25, 0.35], [0.9, 1, 1, 0.9]);

  /* ---------------------- IMAGE CLICK ANIMATION ---------------------- */
  const images = [
    { src: Has, boxText: "BIG BOX LEFT", side: "left" },
    { src: Double, boxText: "BIG BOX RIGHT", side: "right" },
  ];

  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const handleClick = (index: number) => {
    setActiveIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  /* ---------------------- WAVE TEXT ANIMATION ---------------------- */
  const waveText = "----------------------------------------------------------";
  const letters = waveText.split("");

  return (
    <div ref={containerRef} className="relative w-screen min-h-[300vh] bg-[#0d1b2a] overflow-hidden ">
      {/* ---------- Sticky cinematic text ---------- */}
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center pointer-events-none z-20">
        <div className="text-center text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
          {/* Top Row */}
          <div className="flex justify-center items-center gap-5">
            <motion.div
              style={{ x: leftX, opacity: leftOpacity, scale: leftScale }}
              className="text-9xl font-bold"
            >
              FUTURE
            </motion.div>
            <motion.div
              style={{ x: rightX, opacity: rightOpacity, scale: rightScale }}
              className="text-4xl font-light"
            >
              dreams will
            </motion.div>
          </div>

          {/* 🌊 Wave motion text */}
          <motion.div
            className="flex justify-center text-3xl font-semibold mt-10 text-white tracking-wide"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  repeat: Infinity,
                  repeatType: "mirror",
                },
              },
            }}
          >
            {letters.map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { y: 0 },
                  visible: {
                    y: [-10, 10, -10],
                    transition: {
                      duration: 1.6,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: i * 0.08,
                    },
                  },
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          {/* Bottom Row */}
          <div className="flex justify-center items-center gap-5 mt-4">
            <motion.div
              style={{ x: rightX, opacity: rightOpacity, scale: rightScale }}
              className="text-4xl font-light"
            >
              guide to
            </motion.div>
            <motion.div
              style={{ x: leftX, opacity: leftOpacity, scale: leftScale }}
              className="text-9xl font-bold"
            >
              STARS
            </motion.div>
          </div>
        </div>
      </div>

      {/* ---------- Floating Interactive Images ---------- */}
      <div className="relative  flex flex-col  gap-30">
        {images.map((img, i) => {
          const isActive = activeIndexes.includes(i);

          return (
            <div key={i} className="relative flex justify-center">
              <div onClick={() => handleClick(i)} className="relative cursor-pointer">
                {/* Image */}
                <motion.div
                  initial={{ x: 0 }}
                  animate={{
                    x: isActive ? (img.side === "left" ? "-25vw" : "25vw") : 0,
                  }}
                  transition={{
                    duration: 1.3,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={img.src}
                    alt={`Picture-${i}`}
                    width={350}
                    height={300}
                    className="rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                  />
                </motion.div>

                {/* Info Box */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="box"
                      initial={{
                        opacity: 0,
                        x: img.side === "left" ? 100 : -100,
                      }}
                      animate={{
                        opacity: 1,
                        x: img.side === "left" ? 190 : -190,
                      }}
                      exit={{
                        opacity: 0,
                        x: img.side === "left" ? 100 : -100,
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                      }}
                      className={`absolute top-1/2 -translate-y-1/2 bg-white text-black text-2xl p-10 rounded-3xl shadow-2xl w-[350px] h-[200px] flex items-center justify-center ${
                        img.side === "left" ? "left-1/2" : "right-1/2"
                      }`}
                    >
                      {img.boxText}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
