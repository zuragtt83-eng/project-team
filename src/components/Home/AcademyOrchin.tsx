"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function OrchingiinZurag() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["35px", "0px"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-gray-900">
      <section className="sticky w-full top-0 h-screen flex items-center justify-center">
        <div className="relative h-screen w-full  bg-gray-700 text-white text-5xl font-bold flex items-center justify-center">
          Slide 1
        </div>
      </section>

      <section className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          style={{ y, scale }}
          className="relative h-screen w-full  bg-amber-50 text-white text-5xl font-bold flex items-center justify-center"
        >
          Slide 2
        </motion.div>
      </section>
    </div>
  );
}
