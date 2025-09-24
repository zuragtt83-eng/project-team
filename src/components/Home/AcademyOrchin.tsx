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
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["35px", "0px"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-gray-900">
      <section className="sticky w-full top-0 h-screen flex items-center justify-center">
        <div className="relative h-screen w-full bg-black text-white text-5xl font-bold flex items-center justify-center overflow-hidden">
          <div className="grid grid-cols-3 grid-rows-3 gap-1 w-full h-full p-4">
            <Image
              className="rounded-3xl w-full h-full object-cover"
              src={workShopRoom4}
              alt="erxes zurag"
            />
            <Image
              className="rounded-3xl w-full h-full object-cover"
              src={erxesZurag}
              alt="erxes zurag"
            />
            <Image
              className="rounded-3xl w-full h-full object-cover"
              src={erxesZurag}
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
              src={erxesZurag}
              alt="erxes zurag"
            />
          </div>
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
