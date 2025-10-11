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
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-7xl">
        <h1 className="text-gray-900 text-3xl font-light mb-12 text-center tracking-wide">
          Сургалтын хөтөлбөрүүд
        </h1>

        <div className="flex flex-col md:flex-row gap-3 h-[600px]">
          {programs.map((program) => (
            <div
              key={program.id}
              onClick={() => setFocusedIndex(program.id)}
              className={`
                relative border cursor-pointer overflow-hidden
                transition-all duration-500
                ${
                  focusedIndex === program.id
                    ? "bg-gray-900 md:flex-[4] flex-1 border-gray-900"
                    : "bg-white md:flex-[0.8] flex-1 border-gray-200 hover:border-gray-400"
                }
              `}
            >
              {/* Collapsed State */}
              {focusedIndex !== program.id && (
                <div className="h-full flex flex-col items-center justify-center p-6">
                  <div className="flex flex-col items-center gap-4">
                    <span className="text-gray-300 text-5xl md:text-6xl font-light">
                      {program.number}
                    </span>
                    <h2 className="text-gray-900 text-base md:text-lg font-normal text-center">
                      {program.title}
                    </h2>
                  </div>
                </div>
              )}

              {/* Expanded State */}
              {focusedIndex === program.id && (
                <div className="h-full w-full p-8 overflow-y-auto">
                  <div className="mb-8">
                    <span className="text-white text-4xl font-light block mb-4">
                      {program.number}
                    </span>
                    <h2 className="text-white text-2xl font-light mb-2">
                      {program.title}
                    </h2>
                  </div>

                  <div className="space-y-6 text-white">
                    <h3 className="text-lg font-normal">
                      {program.content.mainTitle}
                    </h3>

                    {program.content.description && (
                      <p className="text-sm text-white/70 leading-relaxed font-light">
                        {program.content.description}
                      </p>
                    )}

                    <div className="mt-8">
                      <ul className="space-y-3">
                        {program.content.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-white/60"
                          >
                            <span className="text-white/40 mt-0.5">—</span>
                            <span className="font-light">{feature}</span>
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
