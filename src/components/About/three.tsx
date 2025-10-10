"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function AboutTwo() {
  const router = useRouter();

  const members = [
    { id: 1, name: "Member 1", role: "Creative Role 1", img: "/member1.jpg", link: "/About/page1" },
    { id: 2, name: "Member 2", role: "Creative Role 2", img: "/member2.jpg", link: "/About/page2" },
    { id: 3, name: "Member 3", role: "Creative Role 3", img: "/member3.jpg", link: "/About/page3" },
    { id: 4, name: "Member 4", role: "Creative Role 4", img: "/member4.jpg", link: "/About/page4" },
    { id: 5, name: "Member 5", role: "Creative Role 5", img: "/member5.jpg", link: "/About/page5" },
    { id: 6, name: "Member 6", role: "Creative Role 6", img: "/member6.jpg", link: "/About/page6" },
    { id: 7, name: "Member 7", role: "Creative Role 7", img: "/member7.jpg", link: "/About/page7" },
    { id: 8, name: "Member 8", role: "Creative Role 8", img: "/member8.jpg", link: "/About/page8" },
    { id: 9, name: "Member 9", role: "Creative Role 9", img: "/member9.jpg", link: "/About/page9" },
    { id: 10, name: "Member 10", role: "Creative Role 10", img: "/member10.jpg", link: "/About/page10" },
    { id: 11, name: "Member 11", role: "Creative Role 11", img: "/member11.jpg", link: "/About/page11" },
    { id: 12, name: "Member 12", role: "Creative Role 12", img: "/member12.jpg", link: "/About/page12" },
    { id: 13, name: "Member 13", role: "Creative Role 13", img: "/member13.jpg", link: "/About/page13" },
    { id: 14, name: "Member 14", role: "Creative Role 14", img: "/member14.jpg", link: "/About/page14" },
    { id: 15, name: "Member 15", role: "Creative Role 15", img: "/member15.jpg", link: "/About/page15" },
    { id: 16, name: "Member 16", role: "Creative Role 16", img: "/member16.jpg", link: "/About/page16" },
  ];

  const chunkSize = 8;
  const itemWidth = 200;
  const gap = 40;
  const totalWidth = chunkSize * (itemWidth + gap);

  return (
    <div className="w-screen min-h-screen flex flex-col items-center p-10 overflow-hidden
                    bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 relative">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-10 bg-clip-text text-transparent
                     bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        OUR TEAM MEMBERS
      </h1>

      {/* Дээд мөр */}
      <div className="relative w-full overflow-hidden mb-10">
        <motion.div
          className="flex gap-10"
          animate={{ x: ["0%", `-${totalWidth}px`] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
        >
          {members.slice(0, 8).concat(members.slice(0, 8)).map((m, i) => (
            <div
              key={i}
              onClick={() => router.push(m.link)}
              className="flex flex-col items-center rounded-xl shadow-lg p-4 min-w-[200px]
                         cursor-pointer transition transform hover:scale-105 hover:shadow-2xl
                         bg-gradient-to-br from-blue-200 via-blue-100 to-white"
            >
              <img src={m.img} alt={m.name} className="w-40 h-40 object-cover rounded-full shadow-md" />
              <p className="mt-4 text-xl font-bold text-gray-800">{m.name}</p>
              <p className="text-sm text-gray-600">{m.role}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Доод мөр */}
      <div className="relative w-full overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl text-blue-300"
            style={{ left: `${Math.random() * 90}%`, top: `${Math.random() * 60}%` }}
            animate={{ y: [0, -15, 0], x: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut", delay: Math.random() * 2 }}
          >
            ☁︎
          </motion.div>
        ))}

        <motion.div
          className="flex gap-10 relative"
          animate={{ x: [`-${totalWidth}px`, "0%"] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
        >
          {members.slice(8, 16).concat(members.slice(8, 16)).map((m, i) => (
            <div
              key={i}
              onClick={() => router.push(m.link)}
              className="flex flex-col items-center rounded-xl shadow-lg p-4 min-w-[200px]
                         cursor-pointer transition transform hover:scale-105 hover:shadow-2xl
                         bg-gradient-to-br from-blue-100 via-blue-50 to-white"
            >
              <img src={m.img} alt={m.name} className="w-40 h-40 object-cover rounded-full shadow-md" />
              <p className="mt-4 text-xl font-bold text-gray-800">{m.name}</p>
              <p className="text-sm text-gray-600">{m.role}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
