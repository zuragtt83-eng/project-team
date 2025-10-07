"use client";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useState } from "react";

export default function AboutTwo() {
  const members = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    name: `Member ${i + 1}`,
    role: `Creative Role ${i + 1}`, // Hover хийхэд гарч ирэх текст
    description: `Description for member ${i + 1}`,
    img: `/member${i + 1}.jpg`,
  }));

  const itemWidth = 200;
  const gap = 40;
  const totalWidth = members.length * itemWidth + (members.length - 1) * gap;

  const controls = useAnimation();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="w-screen min-h-screen flex flex-col items-center p-10 bg-blue-800 overflow-hidden relative">
      {/* Title */}
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-center tracking-wide 
               bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 
               bg-clip-text text-transparent drop-shadow-lg mb-10">
        OUR <span className="text-7xl md:text-8xl lg:text-9xl">TEAM</span> MEMBERS
      </h1>

      {/* Moving Members */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-10"
          animate={controls}
          initial={{ x: 0 }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" },
          }}
        >
          {members.concat(members).map((m, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4 min-w-[200px] relative overflow-visible"
              whileHover={{ scale: 1.08 }}
              onMouseEnter={() => {
                setHovered(i);
                controls.stop(); // Хөдөлгөөн зогсооно
              }}
              onMouseLeave={() => {
                setHovered(null);
                controls.start({ x: [0, -totalWidth] }); // Дахин хөдөлгөөн эхлүүлнэ
              }}
            >
              <img
                src={m.img}
                alt={m.name}
                className="w-40 h-40 object-cover rounded-full shadow-md"
              />
              <p className="mt-4 text-xl font-bold text-gray-800">{m.name}</p>

              {/* Hover box - Доороос гарч ирэх */}
              <AnimatePresence>
                {hovered === i && (
                  <motion.div
                    className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-96 p-6 bg-white rounded-3xl shadow-2xl z-20 flex flex-col gap-2"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="text-lg font-semibold text-gray-800">{m.role}</p>
                    <p className="text-sm text-gray-600">{m.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating symbols ✦ */}
      <div className="relative w-full h-40 mt-10 overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl text-blue-300"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      {/* Scrolling ER✗ES at bottom */}
      <div className="absolute bottom-4 left-0  overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap text-6xl md:text-7xl font-extrabold tracking-wide 
                     bg-gradient-to-r from-black via-blue-900 via-indigo-600 via-purple-500 via-pink-400 to-yellow-400
                     bg-clip-text text-transparent drop-shadow-lg"
          animate={{ x: ["-120%", "120%"] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
          }}
        >
          ER✗ES &nbsp; ER✗ES &nbsp; ER✗ES &nbsp; ER✗ES &nbsp; ER✗ES &nbsp;
          ER✗ES &nbsp; ER✗ES &nbsp; ER✗ES &nbsp; ER✗ES &nbsp;
        </motion.div>
      </div>
    </div>
  );
}
