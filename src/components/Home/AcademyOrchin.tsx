"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import erxesZurag from "../../../public/images/surgaltiinOrchin/erxes.jpeg";
import podRoomZurag from "../../../public/images/surgaltiinOrchin/podRoom.jpeg";
import GalTogooTennisZurga from "../../../public/images/surgaltiinOrchin/tennisShiree.jpeg";
import uudniiZurag from "../../../public/images/surgaltiinOrchin/uudniiHeseg.jpeg";
import SurgaltiinOroo2 from "../../../public/images/surgaltiinOrchin/surgaltiinOroo2.jpeg";
import MongolBichigteiHeseg from "../../../public/images/surgaltiinOrchin/mongolBichig.jpeg";
import workShopRoom4 from "../../../public/images/surgaltiinOrchin/workshopRoom4.jpeg";

export default function OrchingiinZurag() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Zoom effect for grid during first half of scroll
  const gridScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const gridY = useTransform(scrollYProgress, [0, 0.5], ["0px", "-50px"]);

  // Slide move effect during second half of scroll
  const slideY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-gray-900">
      {/* Grid Section */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden  ">
        <div className="scale-200 origin-center transition-all duration-500">
          <motion.div
            style={{ y: gridY, scale: gridScale }}
            className="relative h-screen w-full bg-black text-white text-5xl font-bold flex items-center justify-center overflow-hidden"
          >
            <div className="grid grid-cols-3 grid-rows-3 gap-3 w-full h-full p-4">
              <Image
                className="rounded-3xl w-full h-full object-cover"
                src={workShopRoom4}
                alt="erxes zurag"
              />
              <Image
                className="rounded-3xl w-full h-full object-cover"
                src={SurgaltiinOroo2}
                alt="erxes zurag"
              />
              <Image
                className="rounded-3xl w-full h-full object-cover"
                src={GalTogooTennisZurga}
                alt="erxes zurag"
              />

              <Image
                className="rounded-3xl w-full h-full object-cover"
                src={uudniiZurag}
                alt="erxes zurag"
              />
              <Image
                className="rounded-3xl w-full h-full object-cover"
                src={erxesZurag}
                alt="erxes zurag"
              />
              <Image
                className="rounded-3xl w-full h-full object-cover"
                src={MongolBichigteiHeseg}
                alt="erxes zurag"
              />

              <Image
                className="rounded-3xl w-full h-full object-cover"
                src={erxesZurag}
                alt="erxes zurag"
              />
              <Image
                className="rounded-3xl w-full h-full object-cover"
                src={MongolBichigteiHeseg}
                alt="erxes zurag"
              />
              <Image
                className="rounded-3xl w-full h-full object-cover"
                src={podRoomZurag}
                alt="erxes zurag"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide Section */}
      <section className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: slideY }}
          className="relative h-screen w-full bg-amber-50 text-white text-5xl font-bold flex items-center justify-center"
        >
          Slide 2
        </motion.div>
      </section>
    </div>
  );
}
