"use client";

import { Check } from "lucide-react";
import React, { useState } from "react";

const SurgaltHotolbor = () => {
  const [focusedIndex, setFocusedIndex] = useState(1);

  const programs = [
    {
      id: 1,
      number: "01",
      title: "Мобайл хөгжүүлэгч",
      subtitle: "learning",
      color: "bg-gradient-to-br from-orange-400 to-orange-500",
      content: {
        mainTitle: "Яагаад Мобайл хөгжүүлэгч гэж?",
        description:
          "Ухаалаг гар утасны хэрэглээ бидний амьдралын салшгүй хэсэг болсон. Тиймээс энэ зах зээл дээр түүнтэй адилтгах хэмжээний хэрэглэгч байгаа гэсэн үг.",
        features: [
          "React-н JSX, props, state, components талаар суурь ойлголт",
          "React Native core/community/custom component",
          "CSS ашиглан UI style загвар оруулах",
          "React hook ашиглах талаар суралцах",
          "Өгөгдлийн удирдлага хадгалах",
          "UI Interaction хөдөлгөөн оруулах",
        ],
      },
    },
    {
      id: 2,
      number: "02",
      title: "UI/UX дизайнер",
      subtitle: "architecture",
      color: "bg-gradient-to-br from-gray-700 to-gray-800",
      content: {
        mainTitle: "Зөвхөн танай байгууллагын хэрэгцээнд тохирсон сонголт",
        description:
          "Аливаа аппликэйшн болон веб хуудас ямар харагдах вэ гэдэг нь UI /User interface/, харин хэрхэн ажиллах вэ гэдэг нь UX /User experience/ юм.",
        features: [
          "Технологийн бүтээгдэхүүний шаардлага боловсруулах",
          "Figjam",
          "Figma",
          "Design Low-Fi",
          "High-Fi prototype",
          "Responsive web & app",
          "Design and develop",
          "Portfolio website",
        ],
      },
    },
    {
      id: 3,
      number: "03",
      title: "Front-End хөгжүүлэгч",
      subtitle: "protection",
      color: "bg-gradient-to-br from-gray-700 to-gray-800",
      content: {
        mainTitle: "Яагаад Front-End хөгжүүлэгч гэж?",
        description:
          "Front-End хөгжүүлэгч гэдэг нь вебсайт болон мобайл аппликэйшнийг ашиглах үед дэлгэц дээр харагдах бүх график дүрслэл, өнгө төрх, товчлуур, навигацийн цэс, текст зэргийг программчилдаг.",
        features: [
          "Web fundamentals (git, yarn, Visual studio)",
          "HTML",
          "CSS /sass, tailwind, responsive website/",
          "Figma",
          "JS /javascript, typescript, DOM/",
          "SEO /Google, GTM, metadata/",
          "React JS /jsx, Hooks, Context, HOC/",
          "Next JS /SSR, Image Optimization/",
          "API /graphql, rest api/",
        ],
      },
    },
    {
      id: 4,
      number: "04",
      title: "Back-End хөгжүүлэгч",
      subtitle: "growth",
      color: "bg-gradient-to-br from-gray-700 to-gray-800",
      content: {
        mainTitle: "Яагаад Back-End хөгжүүлэгч гэж?",
        description:
          "Back-End нь сервер талд байршиж буй веб болон аппликэйшний дотор хэсэг юм. Нэг талаараа том мөсөн уулын бидэнд ил харагддаггүй доод хэсэг гэж ойлгож болно.",
        features: [
          "Web fundamentals(HTML, CSS, JAVASCRIPT)",
          "System architecture",
          "NodeJS, Express.js, Graphql",
          "Database (SQL, nosql), MongoDB",
          "Testing (Unit testing, End to end test)",
          "Deployment (Docker, Nginx, Kubernetes,AWS)",
          "Third-party integration (AWS, Cloudflare)",
          "Monitoring",
        ],
      },
    },
    {
      id: 5,
      number: "05",
      title: "GAP хөтөлбөр",
      subtitle: "discovery",
      color: "bg-gradient-to-br from-gray-700 to-gray-800",
      content: {
        mainTitle: "Яагаад GAP хөтөлбөр гэж?",
        description:
          "ЕБС-ийн төгсөгчид ирээдүйд хэрхэх вэ гэдэг маш чухал шийдвэртэй нүүр тулдаг. Тиймээс GAP year буюу шийдвэр гаргах завсарлага авч буй залууст технологийн чиглэлийн сургалт.",
        features: [
          "Өөрийгөө таних аялал",
          "IELTS, SAT шалгалтын бэлтгэл",
          "Passion project хөгжүүлэх",
          "Эсээ бичих аргачлал",
          "Тодорхойлох захиа",
          "CSS & Idoc санхүүгийн төлөвлөгөө",
          "Life-Skill академик бэлтгэл",
        ],
      },
    },
    {
      id: 6,
      number: "06",
      title: "ICP хөтөлбөр",
      subtitle: "intensive",
      color: "bg-gradient-to-br from-gray-700 to-gray-800",
      content: {
        mainTitle: "Яагаад ICP (Intensive College prep) хөтөлбөр гэж?",
        description:
          "Ерөнхий боловсролын сургуулийн төгсөх ангийн сурагчдад зориулсан түргэвчилсэн сургалт, чиглүүлэг хөтөлбөр. Үргэлжлэх хугацаа 6 сар.",
        features: [
          "Өөрийгөө таних аялал",
          "Стандарт шалгалтуудад бэлтгэх",
          "Хичээлээс гадуурх ажлууд",
          "Эсээ чиглүүлэг",
          "Тодорхойлох захиа",
          "Санхүүгийн төлөвлөгөө",
          "Academic writing and reading",
        ],
      },
    },
    {
      id: 7,
      number: "07",
      title: "JCP хөтөлбөр",
      subtitle: "junior prep",
      color: "bg-gradient-to-br from-gray-700 to-gray-800",
      content: {
        mainTitle: "Яагаад JCP (Junior College prep) хөтөлбөр гэж",
        description:
          "Ерөнхий боловсролын ахлах ангийн сурагч, их дээд сургуулийн оюутан зэрэг гадаадад тэтгэлэгтэй суралцах сонирхолтой залууст зориулсан хөтөлбөр.",
        features: [
          "Амьдралын түүхээ дүгнэх",
          "Стандарт шалгалтын бэлтгэл",
          "Өсөлтийн сэтгэлгээ хөгжүүлэх",
          "Эсээ чиглүүлэг",
          "Communication skills",
          "Time management",
          "Financial literacy",
        ],
      },
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 p-4">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { 
            opacity: 0;
            transform: translateY(-20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from { 
            opacity: 0;
            transform: translateX(-20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out 0.2s both;
        }
      `}</style>
      <div className="w-full max-w-7xl">
        <h1 className="text-white text-3xl font-bold mb-8 text-center">
          Сургалтын хөтөлбөрүүд
        </h1>

        <div className="flex flex-col md:flex-row gap-4 h-[600px]">
          {programs.map((program) => (
            <div
              key={program.id}
              onClick={() => setFocusedIndex(program.id)}
              className={`
                relative rounded-3xl cursor-pointer overflow-hidden
                transition-all duration-1000 ease-out
                ${
                  focusedIndex === program.id
                    ? `${program.color} md:flex-[4] flex-1 shadow-2xl scale-105 z-10`
                    : `bg-gray-800 md:flex-[0.8] flex-1 opacity-70 hover:opacity-90 hover:bg-fuchsia-600 hover:scale-105`
                }
              `}
            >
              {/* Collapsed State */}
              {focusedIndex !== program.id && (
                <div className="h-full flex flex-col items-center justify-between p-6 transition-all duration-700 ease-out">
                  <div className="flex items-center justify-center w-full transform transition-transform duration-500 hover:rotate-180">
                    <svg
                      className="w-8 h-8 text-white rotate-45"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m7 7 10 10M7 17 17 7" />
                    </svg>
                  </div>

                  <div className="flex flex-col items-center gap-4 flex-1 justify-center transition-all duration-500">
                    <span className="text-white text-6xl md:text-8xl font-bold opacity-20 transition-all duration-500">
                      {program.number}
                    </span>
                    <h2 className="text-white text-lg md:text-xl font-semibold text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-full px-2 transition-all duration-500">
                      {program.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2 text-white opacity-60 transition-all duration-500">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M2 6c0-1.505.78-3.08 2.198-4.058C5.605.96 7.669.448 10 .448c2.33 0 4.394.512 5.802 1.494C17.22 2.92 18 4.495 18 6s-.78 3.08-2.198 4.058C14.394 11.04 12.33 11.552 10 11.552c-2.33 0-4.394-.512-5.802-1.494C2.78 9.08 2 7.505 2 6z" />
                      <path d="M2 12c0-1.505.78-3.08 2.198-4.058C5.605 6.96 7.669 6.448 10 6.448c2.33 0 4.394.512 5.802 1.494C17.22 8.92 18 10.495 18 12s-.78 3.08-2.198 4.058C14.394 17.04 12.33 17.552 10 17.552c-2.33 0-4.394-.512-5.802-1.494C2.78 15.08 2 13.505 2 12z" />
                    </svg>
                    <span className="text-sm">{program.subtitle}</span>
                  </div>
                </div>
              )}

              {/* Expanded State */}
              {focusedIndex === program.id && (
                <div className="h-full w-full p-8 overflow-y-auto animate-fadeIn">
                  <div className="flex items-start justify-between mb-6 animate-slideDown">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <svg
                          className="w-6 h-6 text-white transform transition-transform duration-500 rotate-45"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="m7 7 10 10M7 17 17 7" />
                        </svg>
                        <span className="text-white text-5xl font-bold">
                          {program.number}
                        </span>
                      </div>
                      <h2 className="text-white text-2xl font-bold mb-2">
                        {program.title}
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-4 text-white animate-slideUp">
                    <h3 className="text-xl font-bold">
                      {program.content.mainTitle}
                    </h3>

                    {program.content.description && (
                      <p className="text-sm text-white/80 leading-relaxed">
                        {program.content.description}
                      </p>
                    )}

                    <div className="mt-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M2 6c0-1.505.78-3.08 2.198-4.058C5.605.96 7.669.448 10 .448c2.33 0 4.394.512 5.802 1.494C17.22 2.92 18 4.495 18 6s-.78 3.08-2.198 4.058C14.394 11.04 12.33 11.552 10 11.552c-2.33 0-4.394-.512-5.802-1.494C2.78 9.08 2 7.505 2 6z" />
                        </svg>
                        {program.subtitle}
                      </h4>
                      <ul className="space-y-2">
                        {program.content.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2"
                            style={{
                              animation: `slideInLeft 0.5s ease-out ${
                                idx * 0.1
                              }s both`,
                            }}
                          >
                            <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span className="break-words">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurgaltHotolbor;
