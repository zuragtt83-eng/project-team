"use client";

import AboutTwo from "@/components/About/three";
import AboutCom from "@/components/About/two";
import Peple from "../../../public/images/people.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutBeg() {
  const text = "PADA1★★★★";
  const letters = text.split("");
  const radius = 100;

  return (
    <div className="flex flex-col">
      <div className="w-screen h-screen relative flex items-center justify-center bg-blue-800 z-10">
        <div className="flex flex-row justify-around w-full pt-20 px-10">
          <div className="flex flex-col gap-5">
            <div className="text-9xl font-bold flex-col">
              <div></div>
              <div>
                HELLO! <br /> HERE IS <br /> PADA1
              </div>
            </div>
            <div className="font-serif text-6xl">Students</div>
          </div>

          <div className="flex flex-col justify-around items-center">
            <div>
              <Image
                src={Peple}
                alt="People"
                className="rounded-2xl shadow-lg"
                width={600}
                height={600}
              />
            </div>

            <div className="w-96 h-96 flex items-center justify-center relative pt-60">
              <motion.div
                className="absolute w-full h-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                {letters.map((letter, index) => {
                  const angle = (index / letters.length) * 2 * Math.PI;
                  const x = radius * Math.cos(angle);
                  const y = radius * Math.sin(angle);
                  const rotationDeg = (angle * 180) / Math.PI + 90;

                  return (
                    <div
                      key={index}
                      className="absolute text-4xl font-bold text-white"
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

          <div className="flex flex-col text-9xl font-bold gap-2 text-white">
            <div>E</div>
            <div>R</div>
            <div>X</div>
            <div>E</div>
            <div>S</div>
          </div>
        </div>
      </div>
      <div>
        <AboutCom />
        <AboutTwo />
      </div>
    </div>
  );
  //atsa nehed bga
}
