"use client";

import { motion } from "framer-motion";
import { useThemeContext } from "@/components/context/ThemeLanguage";
import {
  AlertTriangle,
  Brain,
  Rocket,
  Users,
  Code,
  ShieldCheck,
} from "lucide-react";

export default function ProblemSolutionBento() {
  const { theme, languege } = useThemeContext();

  const content = {
    subtext: {
      en: "Automation and AI are changing jobs faster than ever. But with the right skills and mentorship, you can future-proof your career.",
      mn: "AI ба автоматжуулалт ажлын байрыг урьд өмнөхөөс хурдан өөрчилж байна. Гэхдээ зөв ур чадвар, зөв ментортой байвал та ирээдүйгээ хамгаалж чадна.",
    },
    items: [
      {
        icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
        title: {
          en: "Fear of Replacement",
          mn: "Орлуулах вий гэсэн айдас",
        },
        desc: {
          en: "52% of workers worry about losing jobs to AI. Learn to work *with* technology — not against it.",
          mn: "Ажилчдын 52% нь AI тэднийг орлуулна гэж айж байна. AI-г эсэргүүцэх бус, хамтран ажиллахыг сур.",
        },
        type: "problem",
      },
      {
        icon: <Brain className="w-8 h-8 text-yellow-500" />,
        title: {
          en: "Outdated Skills",
          mn: "Хуучирсан ур чадвар",
        },
        desc: {
          en: "Most schools still teach theory, not real-world problem solving. That gap creates fear and stagnation.",
          mn: "Ихэнх сургалтууд онол заадаг, бодит асуудал шийдэх чадвар хөгжүүлдэггүй. Энэ нь айдас, зогсонги байдлыг бий болгодог.",
        },
        type: "problem",
      },
      {
        icon: <Users className="w-8 h-8 text-purple-500" />,
        title: {
          en: "Lack of Mentorship",
          mn: "Менторын дэмжлэггүй",
        },
        desc: {
          en: "Learning alone leads to burnout. Without guidance, most learners quit before they build something real.",
          mn: "Ганцаараа суралцах нь ядаргаа, шантралыг бий болгодог. Менторгүй бол олон хүн бодит төсөл бүтээхээс өмнө шантарддаг.",
        },
        type: "problem",
      },
      {
        icon: <Rocket className="w-8 h-8 text-emerald-500" />,
        title: {
          en: "Real Project Experience",
          mn: "Бодит төслөөр суралцах",
        },
        desc: {
          en: "At our academy, you build real SaaS products with guidance from engineers at a $23M tech company.",
          mn: "Манай академид та $23M үнэлгээтэй компанийн инженерүүдийн заавраар бодит SaaS бүтээгдэхүүн бүтээнэ.",
        },
        type: "solution",
      },
      {
        icon: <Code className="w-8 h-8 text-blue-500" />,
        title: {
          en: "AI + Automation Fluency",
          mn: "AI ба автоматжуулалтыг эзэмших",
        },
        desc: {
          en: "We teach you how to use AI tools like a pro — turning fear into power.",
          mn: "AI-г мэргэжлийн түвшинд ашиглахыг зааж өгнө — айдсыг хүч болго.",
        },
        type: "solution",
      },
      {
        icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
        title: {
          en: "Career Confidence",
          mn: "Ажил мэргэжлийн итгэлцэл",
        },
        desc: {
          en: "With a real portfolio and mentorship, you become future-proof — not replaceable.",
          mn: "Бодит портфолио ба ментортой бол та орлуулах бус, ирээдүйдээ итгэлтэй болно.",
        },
        type: "solution",
      },
    ],
  };

  return (
    <section
      className={`py-24 transition-colors duration-500 ${
        theme ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        ></motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`max-w-2xl mx-auto text-lg ${
            theme ? "text-gray-300" : "text-gray-600"
          } mb-16`}
        >
          {languege ? content.subtext.mn : content.subtext.en}
        </motion.p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className={`rounded-2xl p-6 text-left shadow-lg border ${
                theme
                  ? item.type === "problem"
                    ? "bg-white border-gray-800"
                    : "bg-white border-gray-700"
                  : item.type === "problem"
                  ? "bg-white border-gray-100"
                  : "bg-indigo-50 border-indigo-100"
              } hover:shadow-xl transition-all duration-500`}
            >
              <div className="flex items-start gap-4">
                {item.icon}
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {languege ? item.title.mn : item.title.en}
                  </h3>
                  <p
                    className={`text-sm ${
                      theme ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    {languege ? item.desc.mn : item.desc.en}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        ></motion.div>
      </div>
    </section>
  );
}
