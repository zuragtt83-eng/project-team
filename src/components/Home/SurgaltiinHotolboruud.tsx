"use client";

import { Check } from "lucide-react";
import React, { useState } from "react";

const SurgaltHotolbor = () => {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const baseClasses =
    "rounded-2xl cursor-pointer transition-all duration-500 ease-in-out relative flex items-center justify-center h-full";

  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-gray-900 ">
      <h1 className="text-white">Сургалтын хөтөлбөрүүд</h1>
      <div className="flex flex-col w-[90vw] h-[70vh] md:flex-row  gap-2 ">
        {/* 1 */}
        <div
          className={`${baseClasses} ${
            focusedIndex === 1
              ? "bg-black w-[35%] shadow-xl z-10"
              : focusedIndex !== null
              ? "bg-gray-500 w-[10%] opacity-50"
              : "bg-gray-700 w-[14.28%]"
          } md:w-auto `}
          onClick={() => setFocusedIndex(focusedIndex === 1 ? null : 1)}
        >
          <div
            className={`${
              focusedIndex ? "inline-flex" : "inline-flex"
            } h-[90%] w-[90%] items-center gap-2 group`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 rotate-90 group-hover:rotate-180"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <p>Мобайл хөгжүүлэгч</p>
          </div>

          {focusedIndex === 1 && (
            <div className="h-[90%] w-[90%] absolute top-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-4 rounded-3xl shadow-2xl flex flex-col justify-between gap-4 overflow-auto transition-all duration-500 ease-in-out">
              <div className="flex flex-col gap-4">
                <p className="font-bold text-lg hover:text-indigo-400 transition-colors duration-300">
                  Яагаад Мобайл хөгжүүлэгч гэж?
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Ухаалаг гар утасны хэрэглээ бидний амьдралын салшгүй хэсэг
                  болсон. Тиймээс энэ зах зээл дээр түүнтэй адилтгах хэмжээний
                  хэрэглэгч байгаа гэсэн үг. Тэгвэл та хэрэглэгчийн хэрэгцээнд
                  төгс нийцсэн гар утасны бүтээгдэхүүн хөгжүүлж зах зээлд
                  таниулмаар байна уу? Хоббигоо бүтээл болгож iOS, Android
                  үйлдлийн системд зориулагдсан төрөл бүрийн аппликэйшн хийж
                  сурахыг хүсвэл манай Мобайл хөгжүүлэгчийн ангид суралцаарай.
                </p>

                <p className="font-semibold text-md hover:text-indigo-400 transition-colors duration-300">
                  Мобайл хөгжүүлэгчийн сургалт хэрхэн явагдах вэ?
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Энэхүү сургалтаар ‘React Native’ технологи ашиглан өөрийн
                  хүссэн мобайл аппликэйшнийг iOS болон Android 2 үйлдлийн
                  систем дээр гаргахаас гадна, дизайн системийн дагуу кодын
                  бүтэц, архитектур, компонент бэлтгэх, өгөгдөл, дататай
                  ажиллаж, өгөгдлийг хэрхэн удирдах практикт суурилсан чадварыг
                  олж авна.
                </p>

                <p className="font-semibold text-md hover:text-indigo-400 transition-colors duration-300">
                  Сургалтын хөтөлбөрийн агуулга:
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    <Check />
                    React-н JSX, props, state, components талаар суурь ойлголтыг
                    олж авах
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    React Native core/community/custom component ашиглаж болон
                    бичиж сурах
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    CSS ашиглан өөрийн босгосон компонентууддаа UI style/өнгө,
                    хэмжээ г.м/ загваруудыг оруулах
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    React hook гэж юу вэ? тэдгээрийг хэрхэн ашиглах талаар
                    суралцах
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Өгөгдлийг хэрхэн удирдах тухайн өгөгдлөө хэрхэн хадгалах
                    талаарх ойлголт авах
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    UI Interaction ашиглах болон компонентдоо хөдөлгөөн оруулж
                    хөдөлгөөнтэй болгох
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div
          className={`${baseClasses} ${
            focusedIndex === 2
              ? "bg-black w-[35%] shadow-xl z-10"
              : focusedIndex !== null
              ? "bg-gray-500 w-[10%] opacity-50"
              : "bg-gray-700 w-[14.28%]"
          }`}
          onClick={() => setFocusedIndex(focusedIndex === 2 ? null : 2)}
        >
          <div
            className={`${
              focusedIndex ? "inline-flex" : "inline-flex"
            } h-[90%] w-[90%] items-center gap-2 group`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 rotate-90 group-hover:rotate-180"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <p>UI/UX дизайнер</p>
          </div>
          {focusedIndex === 2 && (
            <div className="h-[90%] w-[90%] absolute top-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-4 rounded-3xl shadow-2xl flex flex-col justify-between gap-4 overflow-auto transition-all duration-500 ease-in-out">
              <div className="flex flex-col gap-4">
                <p className="font-bold text-lg hover:text-indigo-400 transition-colors duration-300">
                  Зөвхөн танай байгууллагын хэрэгцээнд тохирсон сонголт
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Аливаа аппликэйшн болон веб хуудас ямар харагдах вэ гэдэг нь
                  UI /User interface/, харин хэрхэн ажиллах вэ гэдэг нь UX /User
                  experience/ юм. Хэрэглэгчийн асуудлыг цогцоор нь шийдсэн,
                  хэрэглэхэд хялбар, оновчтой шийдэл бүхий технологийн
                  бүтээгдэхүүн бий болгох үндэс нь UI/UX дизайнаас шууд
                  хамааралтай. Тиймээс технологийн эринд хамгийн эрэлттэй,
                  ирээдүйтэй, өндөр үнэлгээтэй мэргэжил эзэмшиж үнэ цэнээ
                  нэмэгдүүлэхийг хүсвэл манай UI/UX дизайнерын ангид элсэн
                  суралцаарай.
                </p>

                <p className="font-semibold text-md hover:text-indigo-400 transition-colors duration-300">
                  UI/UX дизайнерын сургалт хэрхэн явагдах вэ?
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  UI/UX-н хамгийн анхан шатны суурийг системтэйгээр суралцаж,
                  хэмжигдэхүйц ур чадварыг эзэмшин бодит төслүүд дээр ажиллаж
                  туршлага хуримтлуулна.
                </p>

                <p className="font-semibold text-md hover:text-indigo-400 transition-colors duration-300">
                  Сургалтын хөтөлбөрийн агуулга:
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Технологийн бүтээгдэхүүний шаардлага боловсруулах
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Figjam
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Figma
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Design Low-Fi
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    High-Fi prototype
                  </li>

                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Responsive web & app
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Design and develop,
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Portfolio website
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* 3 */}
        <div
          className={`${baseClasses} ${
            focusedIndex === 3
              ? "bg-black w-[35%] shadow-xl z-10"
              : focusedIndex !== null
              ? "bg-gray-500 w-[10%] opacity-50"
              : "bg-gray-700 w-[14.28%]"
          }`}
          onClick={() => setFocusedIndex(focusedIndex === 3 ? null : 3)}
        >
          {" "}
          <div
            className={`${
              focusedIndex ? "inline-flex" : "inline-flex"
            } h-[90%] w-[90%] items-center gap-2 group`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 rotate-90 group-hover:rotate-180"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <p>Front-End хөгжүүлэгч</p>
          </div>
          {focusedIndex === 3 && (
            <div className="h-[90%] w-[90%] absolute top-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-4 rounded-3xl shadow-2xl flex flex-col justify-between gap-4 overflow-auto transition-all duration-500 ease-in-out">
              <div className="flex flex-col gap-4">
                <p className="font-bold text-lg hover:text-indigo-400 transition-colors duration-300">
                  Яагаад Front-End хөгжүүлэгч гэж?
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Front-End хөгжүүлэгч гэдэг нь вебсайт болон мобайл
                  аппликэйшнийг ашиглах үед дэлгэц дээр харагдах бүх график
                  дүрслэл, өнгө төрх, товчлуур, навигацийн цэс, текст зэргийг
                  хэрэглэгчдэд шууд харагдах болон харьцах хэсгүүдийг
                  программчилдаг хүнийг хэлнэ.
                </p>

                <p className="font-semibold text-md hover:text-indigo-400 transition-colors duration-300">
                  Front-End хөгжүүлэгчийн сургалт хэрхэн явагдах вэ?
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Уг сургалтын явцад бид ‘responsive’ вебсайт болон системийг
                  хамгийн анхны суурь ойлголтоос эхлэн алхам алхмаар суралцан
                  хамгийн сүүлийн үеийн Front-End framework, technology болон
                  github, visual studio, webpack зэргийг ахисан түвшинд суралцах
                  болно.
                </p>

                <p className="font-semibold text-md hover:text-indigo-400 transition-colors duration-300">
                  Сургалтын хөтөлбөрийн агуулга:
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Web fundamentals (git, yarn, Visual studio, Command lines)
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    HTML
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    CSS /css, sass, tailwind, styled-components, responsive
                    website/
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Figma
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    JS /javascript fundamentals, logics, typescript, DOM/
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    SEO /Google, Bing ,GTM, metadata, open graph/
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    React JS /jsx, Structure, Routing, Component, Hooks,
                    Context, HOC/
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Next JS /Structure, Routing, Image Optimization, Server Side
                    Rendering /
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Understanding of Micro frontend /Webpack/
                  </li>{" "}
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    API /graphql, rest api/
                  </li>{" "}
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Testing (Unit testing, System testing)
                  </li>{" "}
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Deployment (Cloudflare, Vercel)
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div
          className={`${baseClasses} ${
            focusedIndex === 4
              ? "bg-black w-[35%] shadow-xl z-10"
              : focusedIndex !== null
              ? "bg-gray-500 w-[10%] opacity-50"
              : "bg-gray-700 w-[14.28%]"
          }`}
          onClick={() => setFocusedIndex(focusedIndex === 4 ? null : 4)}
        >
          {" "}
          <div
            className={`${
              focusedIndex ? "inline-flex" : "inline-flex"
            } h-[90%] w-[90%] items-center gap-2 group`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 rotate-90 group-hover:rotate-180"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <p>Back-End хөгжүүлэгч</p>
          </div>
          {focusedIndex === 4 && (
            <div className="h-[90%] w-[90%] absolute top-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-4 rounded-3xl shadow-2xl flex flex-col justify-between gap-4 overflow-auto transition-all duration-500 ease-in-out">
              <div className="flex flex-col gap-4">
                <p className="font-bold text-lg hover:text-indigo-400 transition-colors duration-300">
                  Яагаад Back-End хөгжүүлэгч гэж?
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Back-End нь сервер талд байршиж буй веб болон аппликэйшний
                  дотор хэсэг юм. Нэг талаараа том мөсөн уулын бидэнд ил
                  харагддаггүй доод хэсэг гэж ойлгож болно. Нөгөө талаараа
                  Front-End дээр дүрслэгдэх өгөгдлүүдийг боловсруулан дамжуулдаг
                  чухал хэсэг юм.
                </p>

                <p className="font-semibold text-md hover:text-indigo-400 transition-colors duration-300">
                  Back-End хөгжүүлэгчийн сургалт хэрхэн явагдах вэ?
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Back-End хөгжүүлэгч нь сервер талын программчлалын бүх төрлийн
                  хэлийг сурахаас гадна MySQL, Oracle, SQL Server, MongoDB зэрэг
                  өгөгдлийн сангуудыг удирдаж сурна. Түүнчлэн орчин цагийн
                  хамгийн чухалд тооцогдох ‘Cloud Server’, ‘Version Control’,
                  SVN, CVS болон Git гэх мэт зайлшгүй шаардлагатай программуудыг
                  суралцах болно.
                </p>

                <p className="font-semibold text-md hover:text-indigo-400 transition-colors duration-300">
                  Сургалтын хөтөлбөрийн агуулга:
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Web fundamentals(HTML, CSS, JAVASCRIPT..)
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    System architecture
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    NodeJS, Express.js, Graphql
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Database (SQL, nosql), MongoDB
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Testing (Unit testing, End to end test)
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Deployment (Docker, Nginx, Kubernetes,AWS)
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Third-party integration process(AWS, Cloudflare, Sendgrid)
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Monitoring
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div
          className={`${baseClasses} ${
            focusedIndex === 5
              ? "bg-black w-[35%] shadow-xl z-10"
              : focusedIndex !== null
              ? "bg-gray-500 w-[10%] opacity-50"
              : "bg-gray-700 w-[14.28%]"
          }`}
          onClick={() => setFocusedIndex(focusedIndex === 5 ? null : 5)}
        >
          {" "}
          <div
            className={`${
              focusedIndex ? "inline-flex" : "inline-flex"
            } h-[90%] w-[90%] items-center gap-2 group`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 rotate-90 group-hover:rotate-180"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <p>GAP хөтөлбөр</p>
          </div>
          {focusedIndex === 5 && (
            <div className="h-[90%] w-[90%] absolute top-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-4 rounded-3xl shadow-2xl flex flex-col justify-between gap-4 overflow-auto transition-all duration-500 ease-in-out">
              <div className="flex flex-col gap-4">
                <p className="font-bold text-lg hover:text-indigo-400 transition-colors duration-300">
                  Яагаад GAP хөтөлбөр гэж?
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  ЕБС-ийн төгсөгчид ирээдүйд хэрхэх вэ гэдэг маш чухал
                  шийдвэртэй нүүр тулдаг. Тиймээс “GAP year” буюу шийдвэр гаргах
                  завсарлага авч буй залууст технологийн чиглэлийн сургалт
                  орохоос гадна өөрийгөө танин мэдэх, гадаадын их дээд сургууль
                  болон коллежид тэтгэлэгтэй суралцахад чиглүүлэн сургах,
                  бэлтгэх хөтөлбөрийг бид боловсруулаад байна. Үргэлжлэх хугацаа
                  1 жил.
                </p>

                <p className="font-semibold text-md hover:text-indigo-400 transition-colors duration-300">
                  GAP хөтөлбөр хэрхэн явагдах вэ?
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Зан төлөв болон мэргэжил сонголтын тестүүд авч зорилго,
                  мөрөөдөл, хүсэл, сонирхол, чадварыг нь тодорхойлж мэргэжил
                  сонголтод чиглүүлнэ. IELTS, SAT шалгалтын түвшин тогтоож,
                  англи хэл, математикийн оноо нэмэгдүүлэхэд дэмжлэг үзүүлнэ.
                  Хөтөлбөрийн хүрээнд өөрийн ‘passion project’-оо судалгаа, ном,
                  хөтөлбөр, дадлага ажлаар баяжуулж бодитойгоор хэрэгжүүлнэ.
                  Чиглүүлэгч багшийн удирдлага дор эсээ бичих аргачлалд
                  суралцахаас гадна коллежийн аппликэйшний 30-50 эсээндээ
                  хувьчилсан чиглүүлэг авна. Тодорхойлох захиа авах стратеги
                  болон тодорхойлох захиа авахад чиглүүлнэ. Санхүүгийн тооцоолол
                  хийх, коллежийн аппликэйшний санхүүгийн баталгаа, баримтууд
                  бэлтгэхэд дэмжлэг үзүүлдэг.
                </p>

                <p className="font-semibold text-md hover:text-indigo-400 transition-colors duration-300">
                  Сургалтын хөтөлбөрийн агуулга:
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Өөрийгөө таних аялал: Амьдралын түүхээ дүгнэж, ирээдүйгээ
                    тодорхойлох
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Оноогоо авах: Стандарт шалгалтуудад бэлтгэх
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Өсөлтийн сэтгэлгээгээ хөгжүүлэх: Хичээлээс гадуурх ажлууд
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Өөрийн түүхээ бичих: Эсээ чиглүүлэг
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Бусдад өөрийгөө таниулах: Тодорхойлох захиа
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    СSS & Idoc: Санхүүгийн төлөвлөгөө болон бичиг баримтууд
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Life-Skill буюу Амьдрах ур чадвар олгох, академик бэлтгэл
                    хичээлүүд
                  </li>{" "}
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Academic writing and reading
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Communication
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Time management
                  </li>{" "}
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Interviewing
                  </li>{" "}
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Email writing
                  </li>{" "}
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Leadership
                  </li>{" "}
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Financial literacy
                  </li>{" "}
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Passion Project /IT сургалт/
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div
          className={`${baseClasses} ${
            focusedIndex === 6
              ? "bg-black w-[35%] shadow-xl z-10"
              : focusedIndex !== null
              ? "bg-gray-500 w-[10%] opacity-50"
              : "bg-gray-700 w-[14.28%]"
          }`}
          onClick={() => setFocusedIndex(focusedIndex === 6 ? null : 6)}
        >
          {" "}
          <div
            className={`${
              focusedIndex ? "inline-flex" : "inline-flex"
            } h-[90%] w-[90%] items-center gap-2 group`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 rotate-90 group-hover:rotate-180"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <p>ICP xөтөлбөр</p>
          </div>
          {focusedIndex === 6 && (
            <div className="h-[90%] w-[90%] absolute top-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-4 rounded-3xl shadow-2xl flex flex-col justify-between gap-4 overflow-auto transition-all duration-500 ease-in-out">
              <div className="flex flex-col gap-4">
                <p className="font-bold text-lg hover:text-indigo-400 transition-colors duration-300">
                  Яагаад ICP (Intensive College prep) хөтөлбөр гэж?
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Ерөнхий боловсролын сургуулийн төгсөх ангийн сурагчдад
                  зориулсан түргэвчилсэн сургалт, чиглүүлэг хөтөлбөр. Үргэлжлэх
                  хугацаа 6 сар.
                </p>

                <p className="font-semibold text-md hover:text-indigo-400 transition-colors duration-300">
                  ICP хөтөлбөр хэрхэн явагдах вэ?
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Зан төлөв болон мэргэжил сонголтын тестүүд авч зорилго,
                  мөрөөдөл, хүсэл, сонирхол, чадварыг нь тодорхойлж мэргэжил
                  сонголтод чиглүүлнэ. IELTS, SAT шалгалтын түвшин тогтоож,
                  англи хэл, математикийн оноо нэмэгдүүлэхэд дэмжлэг үзүүлнэ.
                  Хөтөлбөрийн хүрээнд өөрийн ‘passion project’-оо судалгаа, ном,
                  хөтөлбөр, дадлага ажлаар баяжуулж бодитойгоор хэрэгжүүлнэ.
                  Чиглүүлэгч багшийн удирдлага дор эсээ бичих аргачлалд
                  суралцахаас гадна коллежийн аппликэйшний 30-50 эсээндээ
                  хувьчилсан чиглүүлэг авна. Тодорхойлох захиа авах стратеги
                  болон тодорхойлох захиа авахад чиглүүлнэ. Санхүүгийн тооцоолол
                  хийх, коллежийн аппликэйшний санхүүгийн баталгаа, баримтууд
                  бэлтгэхэд дэмжлэг үзүүлэх
                </p>

                <p className="font-semibold text-md hover:text-indigo-400 transition-colors duration-300">
                  Сургалтын хөтөлбөрийн агуулга:
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Өөрийгөө таних аялал: Амьдралын түүхээ дүгнэж, ирээдүйгээ
                    тодорхойлох
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Оноогоо авах: Стандарт шалгалтуудад бэлтгэх
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Өсөлтийн сэтгэлгээгээ хөгжүүлэх: Хичээлээс гадуурх ажлууд
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Өөрийн түүхээ бичих: Эсээ чиглүүлэг
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Бусдад өөрийгөө таниулах: Тодорхойлох захиа
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    СSS & Idoc: Санхүүгийн төлөвлөгөө болон бичиг баримтууд
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Life-Skill буюу Амьдрах ур чадвар олгох, академик бэлтгэл
                    хичээлүүд
                  </li>{" "}
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Academic writing and reading
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Communication
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Time management
                  </li>{" "}
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Interviewing
                  </li>{" "}
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Email writing
                  </li>{" "}
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Leadership
                  </li>{" "}
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Financial literacy
                  </li>{" "}
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Passion Project /IT сургалт/
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div
          className={`${baseClasses} ${
            focusedIndex === 7
              ? "bg-black w-[35%] shadow-xl z-10"
              : focusedIndex !== null
              ? "bg-gray-500 w-[10%] opacity-50"
              : "bg-gray-700 w-[14.28%]"
          }`}
          onClick={() => setFocusedIndex(focusedIndex === 7 ? null : 7)}
        >
          {" "}
          <div
            className={`${
              focusedIndex ? "inline-flex" : "inline-flex"
            } h-[90%] w-[90%] items-center gap-2 group`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 rotate-90 group-hover:rotate-180"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <p>JCP xөтөлбөр</p>
          </div>
          {focusedIndex === 7 && (
            <div className="h-[90%] w-[90%] absolute top-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-4 rounded-3xl shadow-2xl flex flex-col justify-between gap-4 overflow-auto transition-all duration-500 ease-in-out">
              <div className="flex flex-col gap-4">
                <p className="font-bold text-lg hover:text-indigo-400 transition-colors duration-300">
                  Яагаад JCP (Junior College prep) хөтөлбөр гэж
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Ерөнхий боловсролын ахлах ангийн сурагч, их дээд сургуулийн
                  оюутан зэрэг гадаадад тэтгэлэгтэй суралцах сонирхолтой залууст
                  зориулсан хөтөлбөр. Үргэлжлэх хугацаа 1 жил.
                </p>

                <p className="font-semibold text-md hover:text-indigo-400 transition-colors duration-300">
                  GAP хөтөлбөр хэрхэн явагдах вэ?
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Зан төлөв болон мэргэжил сонголтын тестүүд авч зорилго,
                  мөрөөдөл, хүсэл, сонирхол, чадварыг нь тодорхойлж мэргэжил
                  сонголтод чиглүүлнэ. IELTS, SAT шалгалтын түвшин тогтоож,
                  англи хэл, математикийн оноо нэмэгдүүлэхэд дэмжлэг үзүүлнэ.
                  Хөтөлбөрийн хүрээнд өөрийн ‘passion project’-оо судалгаа, ном,
                  хөтөлбөр, дадлага ажлаар баяжуулж бодитойгоор хэрэгжүүлнэ.
                  Чиглүүлэгч багшийн удирдлага дор эсээ бичих аргачлалд
                  суралцахаас гадна коллежийн аппликэйшний 30-50 эсээндээ
                  хувьчилсан чиглүүлэг авна. Тодорхойлох захиа авах стратеги
                  болон тодорхойлох захиа авахад чиглүүлнэ. Санхүүгийн тооцоолол
                  хийх, коллежийн аппликэйшний санхүүгийн баталгаа, баримтууд
                  бэлтгэхэд дэмжлэг үзүүлдэг.
                </p>

                <p className="font-semibold text-md hover:text-indigo-400 transition-colors duration-300">
                  Сургалтын хөтөлбөрийн агуулга:
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Өөрийгөө таних аялал: Амьдралын түүхээ дүгнэж, ирээдүйгээ
                    тодорхойлох
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Оноогоо авах: Стандарт шалгалтуудад бэлтгэх
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Өсөлтийн сэтгэлгээгээ хөгжүүлэх: Хичээлээс гадуурх ажлууд
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Өөрийн түүхээ бичих: Эсээ чиглүүлэг
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Бусдад өөрийгөө таниулах: Тодорхойлох захиа
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    СSS & Idoc: Санхүүгийн төлөвлөгөө болон бичиг баримтууд
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Life-Skill буюу Амьдрах ур чадвар олгох, академик бэлтгэл
                    хичээлүүд
                  </li>{" "}
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Academic writing and reading
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Communication
                  </li>
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Time management
                  </li>{" "}
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Interviewing
                  </li>{" "}
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Email writing
                  </li>{" "}
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Leadership
                  </li>{" "}
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Financial literacy
                  </li>{" "}
                  <li className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-300 cursor-pointer">
                    Passion Project /IT сургалт/
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurgaltHotolbor;
