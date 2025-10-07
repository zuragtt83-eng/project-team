"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

import Has from "../../../public/images/picture1.jpg";
import Double from "../../../public/images/picture2.webp";
import Triple from "../../../public/images/picture3.webp";
import Maniac from "../../../public/images/picture4.webp";
import Savage from "../../../public/images/picture5.jpg";
const images = [
  { src: Has, align: "justify-center pr-20", xOffset: -200 },
  { src: Double, align: "justify-center", xOffset: 200 },
  { src: Triple, align: "justify-start", xOffset: -100 },
  { src: Maniac, align: "justify-end pr-20", xOffset: 100 },
  { src: Savage, align: "justify-center pl-4", xOffset: 0 },
];

export default function AboutCom() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  
  const blur = useTransform(scrollYProgress, [0.1, 0.3], [0, 15]);
  const blurStyle = useMotionTemplate`blur(${blur}px)`;

 
  const bgOpacity = 1;

  const scales = images.map((_, i) => {
    const start = 0.05 + i * 0.15;
    const mid = start + 0.15;
    const end = mid + 0.15;
    return useTransform(scrollYProgress, [start, mid, end], [0.5, 1, 0.5]);
  });

  const xs = images.map((img, i) => {
    const start = 0.05 + i * 0.15;
    const mid = start + 0.15;
    const end = mid + 0.15;
    return useTransform(scrollYProgress, [start, mid, end], [img.xOffset, img.xOffset, img.xOffset]);
  });

  return (
    <div className="relative w-screen min-h-[600vh]" ref={containerRef}>
 
      <motion.div
        className="sticky top-0 h-screen flex flex-col items-center justify-center bg-orange-200"
        style={{
          opacity: bgOpacity,
          filter: blurStyle,
        }}
      >
        <div className="text-center text-black">
          <div className="flex justify-center flex-row items-center gap-5">
            <div className="text-9xl font-bold">FUTURE<br /></div>
            <div className="text-4xl">dreams will</div>
          </div>
          <div className="flex justify-center flex-row items-center gap-5">
            <div className="text-4xl">guide to</div>
            <div className="text-9xl font-bold flex flex-row justify-center">STARS</div>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 flex flex-col gap-[80vh] py-[50vh]">
        {images.map((img, i) => (
          <motion.div
            key={i}
            style={{ scale: scales[i], x: xs[i] }}
            className={`w-full flex ${img.align}`}
          >
            <Image
              src={img.src}
              alt={`Picture-${i}`}
              className="rounded-2xl shadow-xl"
              width={500}
              height={350}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
