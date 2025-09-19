"use client";
import Image from "next/image";
import { useState } from "react";
import surgaltUISidePhoto from "../../../public/images/surgaltMedeelel/surgaltUISidePhoto.png";
import surgaltGapSidePhoto from "../../../public/images/surgaltMedeelel/surgaltGapSidePhoto.png";
import surgaltMobileSidePhoto from "../../../public/images/surgaltMedeelel/surgaltMobileSidePhoto.png";
import surgaltFrontSidePhoto from "../../../public/images/surgaltMedeelel/surgaltFrontSidePhoto.png";
import surgaltBackSidePhoto from "../../../public/images/surgaltMedeelel/surgaltBackSidePhoto.png";

// Хүссэн сургалтын төрөлүүд
type SurgaltKey = "mobile" | "ui" | "front" | "back" | "gap" | "icp" | "jcp";

// Мэдээллийн бүтэц
interface MedeelelItem {
  ehlel: string;
  text: string;
  ehlel1: string;
  text1: string;
  aguulga: string;
}

// Сургалтын мэдээлэл
const medeelel: Record<SurgaltKey, MedeelelItem> = {
  mobile: {
    ehlel: "Яагаад Мобайл хөгжүүлэгч гэж?",
    text: "Ухаалаг гар утасны хэрэглээ бидний амьдралын салшгүй хэсэг болсон. Тиймээс энэ зах зээл дээр түүнтэй адилтгах хэмжээний хэрэглэгч байгаа гэсэн үг. Тэгвэл та хэрэглэгчийн хэрэгцээнд төгс нийцсэн гар утасны бүтээгдэхүүн хөгжүүлж зах зээлд таниулмаар байна уу? Хоббигоо бүтээл болгож iOS, Android үйлдлийн системд зориулагдсан төрөл бүрийн аппликэйшн хийж сурахыг хүсвэл манай Мобайл хөгжүүлэгчийн ангид суралцаарай.",
    ehlel1: "Мобайл хөгжүүлэгчийн сургалт хэрхэн явагдах вэ?",
    text1:
      "Энэхүү сургалтаар ‘React Native’ технологи ашиглан өөрийн хүссэн мобайл аппликэйшнийг iOS болон Android 2 үйлдлийн систем дээр гаргахаас гадна, дизайн системийн дагуу кодын бүтэц, архитектур, компонент бэлтгэх, өгөгдөл, дататай ажиллаж, өгөгдлийг хэрхэн удирдах практикт суурилсан чадварыг олж авна. Сургалтын туршид долоо хоног бүр сурсан мэдлэгээ бататгаж жижиг төслүүд дээр ажиллана.",
    aguulga: "Сургалтын хөтөлбөрийн агуулга:",
  },
  ui: {
    ehlel: "Зөвхөн танай байгууллагын хэрэгцээнд тохирсон сонголт",
    text: "Аливаа аппликэйшн болон веб хуудас ямар харагдах вэ гэдэг нь UI (User Interface), харин хэрхэн ажиллах вэ гэдэг нь UX (User Experience) юм. Хэрэглэгчийн асуудлыг цогцоор нь шийдсэн, хэрэглэхэд хялбар, оновчтой шийдэл бүхий технологийн бүтээгдэхүүн бий болгох үндэс нь UI/UX дизайнаас шууд хамааралтай. Тиймээс технологийн эринд хамгийн эрэлттэй, ирээдүйтэй, өндөр үнэлгээтэй мэргэжил эзэмшиж үнэ цэнээ нэмэгдүүлэхийг хүсвэл манай UI/UX дизайнерын ангид элсэн суралцаарай.",
    ehlel1: "UI/UX дизайнерын сургалт хэрхэн явагдах вэ?",
    text1:
      "UI/UX-н хамгийн анхан шатны суурийг системтэйгээр суралцаж, хэмжигдэхүйц ур чадварыг эзэмшин бодит төслүүд дээр ажиллаж туршлага хуримтлуулна. Суралцагчид хэрэглэгчийн судалгаа, persona бүтээх, wireframe/ прототип боловсруулах, визуал дизайн, интерактив дизайн, usability тест хийх зэрэг дараалсан практик үйл явцуудаар дамжина.",
    aguulga:
      "Сургалтын хөтөлбөрийн агуулга: Хэрэглэгч судлал & persona, Информацийн архитектур, Wireframing & Prototyping, Visual Design (типографи, өнгө, сетка), Интерактив элементүүд & motion basics, Design systems & component libraries, Usability testing & feedback, Бодит төслөөр практик дасгал, Портфолио бэлдэх.",
  },
  front: {
    ehlel: "Яагаад Front-End хөгжүүлэгч гэж?",
    text: "Front-End хөгжүүлэгч гэдэг нь вебсайт болон мобайл аппликэйшнийг ашиглах үед дэлгэц дээр харагдах бүх график дүрслэл, өнгө төрх, товчлуур, навигацийн цэс, текст зэргийг хэрэглэгчдэд шууд харагдах болон харьцах хэсгүүдийг программчилдаг хүнийг хэлнэ.",
    ehlel1: "Front-End хөгжүүлэгчийн сургалт хэрхэн явагдах вэ?",
    text1:
      "Уг сургалтын явцад бид ‘responsive’ вебсайт болон системийг хамгийн анхны суурь ойлголтоос эхлэн алхам алхмаар суралцан хамгийн сүүлийн үеийн Front-End framework, technology болон GitHub, Visual Studio, Webpack зэргийг ахисан түвшинд суралцах болно.",
    aguulga:
      "Сургалтын хөтөлбөрийн агуулга: HTML, CSS, JavaScript үндэс, Responsive design ба CSS framework (Tailwind, Bootstrap), Git & GitHub version control, Modern JavaScript (ES6+), React.js framework, State management (Redux эсвэл Context API), API integration (REST & GraphQL), Webpack & build tools, Deployment (Vercel, Netlify), Бодит төслийн практик ажил.",
  },
  back: {
    ehlel: "Яагаад Back-End хөгжүүлэгч гэж?",
    text: "Back-End нь сервер талд байршиж буй веб болон аппликэйшний дотор хэсэг юм. Нэг талаараа том мөсөн уулын бидэнд ил харагддаггүй доод хэсэг гэж ойлгож болно. Нөгөө талаараа Front-End дээр дүрслэгдэх өгөгдлүүдийг боловсруулан дамжуулдаг чухал хэсэг юм.",
    ehlel1: "Back-End хөгжүүлэгчийн сургалт хэрхэн явагдах вэ?",
    text1:
      "Back-End хөгжүүлэгч нь сервер талын программчлалын бүх төрлийн хэлийг сурахаас гадна MySQL, Oracle, SQL Server, MongoDB зэрэг өгөгдлийн сангуудыг удирдаж сурна. Түүнчлэн орчин цагийн хамгийн чухалд тооцогдох ‘Cloud Server’, ‘Version Control’, SVN, CVS болон Git гэх мэт зайлшгүй шаардлагатай программуудыг суралцах болно.",
    aguulga:
      "Сургалтын хөтөлбөрийн агуулга: Сервер талын програмчлалын хэлүүд (Node.js, Python, Java, PHP), REST API & GraphQL, Authentication & Authorization, Database (MySQL, PostgreSQL, MongoDB), ORM & Query builders, Server deployment (Linux, Nginx, Apache), Cloud services (AWS, Azure, GCP), Containerization (Docker, Kubernetes), Git & Version Control (Git, SVN, CVS), Security best practices, Бодит төслийн туршлага.",
  },
  gap: {
    ehlel: "Яагаад GAP хөтөлбөр гэж?",
    text: "ЕБС-ийн төгсөгчид ирээдүйд хэрхэх вэ гэдэг маш чухал шийдвэртэй нүүр тулдаг. Тиймээс “GAP year” буюу шийдвэр гаргах завсарлага авч буй залууст технологийн чиглэлийн сургалт орохоос гадна өөрийгөө танин мэдэх, гадаадын их дээд сургууль болон коллежид тэтгэлэгтэй суралцахад чиглүүлэн сургах, бэлтгэх хөтөлбөрийг бид боловсруулаад байна. Үргэлжлэх хугацаа 1 жил.",
    ehlel1: "GAP хөтөлбөр хэрхэн явагдах вэ?",
    text1:
      "Зан төлөв болон мэргэжил сонголтын тестүүд авч зорилго, мөрөөдөл, хүсэл, сонирхол, чадварыг нь тодорхойж мэргэжил сонголтод чиглүүлнэ. IELTS, SAT шалгалтын түвшин тогтоож, англи хэл, математикийн оноо нэмэгдүүлэхэд дэмжлэг үзүүлнэ. Хөтөлбөрийн хүрээнд өөрийн ‘passion project’-оо судалгаа, ном, хөтөлбөр, дадлага ажлаар баяжуулж бодитойгоор хэрэгжүүлнэ. Чиглүүлэгч багшийн удирдлага дор эсээ бичих аргачлалд суралцахаас гадна коллежийн аппликэйшний 30-50 эсээндээ хувьчилсан чиглүүлэг авна. Тодорхойлох захиа авах стратеги болон тодорхойлох захиа авахад чиглүүлнэ. Санхүүгийн тооцоолол хийх, коллежийн аппликэйшний санхүүгийн баталгаа, баримтууд бэлтгэхэд дэмжлэг үзүүлдэг.",
    aguulga:
      "Сургалтын хөтөлбөрийн агуулга: Зан төлөв ба мэргэжил сонголтын тестүүд, IELTS & SAT оноо ахиулах сургалт, Англи хэл ба математикийн гүнзгийрүүлсэн сургалт, Passion project хэрэгжүүлэх, Судалгаа & номын ажил, Дадлага туршлага хуримтлуулах, Эсээ бичих аргачлал ба хувьчилсан зөвлөгөө, Коллежийн аппликэйшний стратеги, Тодорхойлох захиа авах стратеги, Санхүүгийн тооцоолол ба баримт бичгийн бэлтгэл.",
  },
  icp: {
    ehlel: "Яагаад ICP (Intensive College Prep) хөтөлбөр гэж?",
    text: "Ерөнхий боловсролын сургуулийн төгсөх ангийн сурагчдад зориулсан түргэвчилсэн сургалт, чиглүүлэг хөтөлбөр. Үргэлжлэх хугацаа 6 сар.",
    ehlel1: "ICP хөтөлбөр хэрхэн явагдах вэ?",
    text1:
      "Зан төлөв болон мэргэжил сонголтын тестүүд авч зорилго, мөрөөдөл, хүсэл, сонирхол, чадварыг нь тодорхойж мэргэжил сонголтод чиглүүлнэ. IELTS, SAT шалгалтын түвшин тогтоож, англи хэл, математикийн оноо нэмэгдүүлэхэд дэмжлэг үзүүлнэ. Хөтөлбөрийн хүрээнд өөрийн ‘passion project’-оо судалгаа, ном, хөтөлбөр, дадлага ажлаар баяжуулж бодитойгоор хэрэгжүүлнэ. Чиглүүлэгч багшийн удирдлага дор эсээ бичих аргачлалд суралцахаас гадна коллежийн аппликэйшний 30-50 эсээндээ хувьчилсан чиглүүлэг авна. Тодорхойлох захиа авах стратеги болон тодорхойлох захиа авахад чиглүүлнэ. Санхүүгийн тооцоолол хийх, коллежийн аппликэйшний санхүүгийн баталгаа, баримтууд бэлтгэхэд дэмжлэг үзүүлэх.",
    aguulga:
      "Сургалтын хөтөлбөрийн агуулга: Зан төлөв ба мэргэжил сонголтын тестүүд, IELTS & SAT түвшин тогтоолт ба оноо ахиулах сургалт, Англи хэл ба математикийн гүнзгийрүүлсэн сургалт, Passion project хэрэгжүүлэх (судалгаа, ном, дадлага), Эсээ бичих аргачлал ба хувьчилсан зөвлөгөө, Коллежийн аппликэйшний стратеги, Тодорхойлох захиа авах стратеги, Санхүүгийн тооцоолол ба баримт бичгийн бэлтгэл.",
  },
  jcp: {
    ehlel: "Яагаад JCP (Junior College Prep) хөтөлбөр гэж?",
    text: "Ерөнхий боловсролын ахлах ангийн сурагч, их дээд сургуулийн оюутан зэрэг гадаадад тэтгэлэгтэй суралцах сонирхолтой залууст зориулсан хөтөлбөр. Үргэлжлэх хугацаа 1 жил.",
    ehlel1: "JCP хөтөлбөр хэрхэн явагдах вэ?",
    text1:
      "Зан төлөв болон мэргэжил сонголтын тестүүд авч зорилго, мөрөөдөл, хүсэл, сонирхол, чадварыг нь тодорхойж мэргэжил сонголтод чиглүүлнэ. IELTS, SAT шалгалтын түвшин тогтоож, англи хэл, математикийн оноо нэмэгдүүлэхэд дэмжлэг үзүлнэ. Хөтөлбөрийн хүрээнд өөрийн ‘passion project’-оо судалгаа, ном, хөтөлбөр, дадлага ажлаар баяжуулж бодитойгоор хэрэгжүүлнэ. Чиглүүлэгч багшийн удирдлага дор эсээ бичих аргачлалд суралцахаас гадна коллежийн аппликэйшний 30-50 эсээндээ хувьчилсан чиглүүлэг авна. Тодорхойлох захиа авах стратеги болон тодорхойлох захиа авахад чиглүүлнэ. Санхүүгийн тооцоолол хийх, коллежийн аппликэйшний санхүүгийн баталгаа, баримтууд бэлтгэхэд дэмжлэг үзүүлнэ.",
    aguulga:
      "Сургалтын хөтөлбөрийн агуулга: Зан төлөв ба мэргэжил сонголтын тестүүд, IELTS & SAT түвшин тогтоолт ба оноо ахиулах сургалт, Англи хэл ба математикийн гүнзгийрүүлсэн сургалт, Passion project хэрэгжүүлэх (судалгаа, ном, дадлага), Эсээ бичих аргачлал ба хувьчилсан зөвлөгөө, Коллежийн аппликэйшний стратеги, Тодорхойлох захиа авах стратеги, Санхүүгийн тооцоолол ба баримт бичгийн бэлтгэл.",
  },
};

// Lists
const lists: Record<SurgaltKey, string[]> = {
  mobile: [
    "React-н JSX, props, state, components талаар суурь ойлголтыг олж авах",
    "React Native core/community/custom component ашиглаж болон бичиж сурах",
    "CSS ашиглан өөрийн босгосон компонентууддаа UI style/өнгө, хэмжээ г.м/ загваруудыг оруулах",
    "React hook гэж юу вэ? тэдгээрийг хэрхэн ашиглах талаар суралцах",
    "Өгөгдлийг хэрхэн удирдах тухайн өгөгдлөө хэрхэн хадгалах талаарх ойлголт авах",
    "UI Interaction ашиглах болон компонентдоо хөдөлгөөн оруулж хөдөлгөөнтэй болгох",
  ],
  ui: [
    "Технологийн бүтээгдэхүүний шаардлага боловсруулах",
    "Figjam",
    "figma",
    "Design Low-Fi",
    "High-Fi prototype",
    "Responsive web & app",
    "Design and develop,",
    "Portfolio web",
  ],
  front: [
    "Web fundamentals (git, yarn, Visual studio, Command lines)",
    "HTML",
    "CSS /css, sass, tailwind, styled-components, responsive website/",
    "Figma",
    "JS /javascript fundamentals, logics, typescript, DOM/",
    "SEO /Google, Bing ,GTM, metadata, open graph/",
    "React JS /jsx, Structure, Routing, Component, Hooks, Context, HOC/",
    "Next JS /Structure, Routing, Image Optimization, Server Side Rendering /",
    "Understanding of Micro frontend /Webpack/",
    "API /graphql, rest api/",
    "Testing (Unit testing, System testing)",
    "Deployment (Cloudflare, Vercel)",
  ],
  back: [
    "Web fundamentals(HTML, CSS, JAVASCRIPT..)",
    "System architecture",
    "NodeJS, Express.js, Graphql",
    "Database (SQL, nosql), MongoDB",
    "Testing (Unit testing, End to end test)",
    "Deployment (Docker, Nginx, Kubernetes,AWS)",
    "Third-party integration process(AWS, Cloudflare, Sendgrid)",
    "Monitoring",
  ],
  gap: [
    "Өөрийгөө таних аялал: Амьдралын түүхээ дүгнэж, ирээдүйгээ тодорхойлох",
    "Оноогоо авах: Стандарт шалгалтуудад бэлтгэх",
    "Өсөлтийн сэтгэлгээгээ хөгжүүлэх: Хичээлээс гадуурх ажлууд",
    "Өөрийн түүхээ бичих: Эсээ чиглүүлэг",
    "Бусдад өөрийгөө таниулах: Тодорхойлох захиа",
    "СSS & Idoc: Санхүүгийн төлөвлөгөө болон бичиг баримтууд",
    "Life-Skill буюу Амьдрах ур чадвар олгох, академик бэлтгэл хичээлүүд",
    "Academic writing and reading",
    "Communication",
    "Time management",
    "Interviewing",
    "Email writing",
    "Passion Project",
    "Leadership Financial literacy",
    "/IT сургалт/",
  ],
  icp: [
    "Өөрийгөө таних аялал: Амьдралын түүхээ дүгнэж, ирээдүйгээ тодорхойлох",
    "Оноогоо авах: Стандарт шалгалтуудад бэлтгэх",
    "Өсөлтийн сэтгэлгээгээ хөгжүүлэх: Хичээлээс гадуурх ажлууд",
    "Өөрийн түүхээ бичих: Эсээ чиглүүлэг",
    "Бусдад өөрийгөө таниулах: Тодорхойлох захиа",
    "СSS & Idoc: Санхүүгийн төлөвлөгөө болон бичиг баримтууд",
    "Life-Skill буюу Амьдрах ур чадвар олгох, академик бэлтгэл хичээлүүд",
    "Academic writing and reading",
    "Communication",
    "Time management",
    "Interviewing",
    "Email writing",
    "Passion Project",
    "Leadership Financial literacy",
    "/IT сургалт/",
  ],
  jcp: [
    "Өөрийгөө таних аялал: Амьдралын түүхээ дүгнэж, ирээдүйгээ тодорхойлох",
    "Оноогоо авах: Стандарт шалгалтуудад бэлтгэх",
    "Өсөлтийн сэтгэлгээгээ хөгжүүлэх: Хичээлээс гадуурх ажлууд",
    "Өөрийн түүхээ бичих: Эсээ чиглүүлэг",
    "Бусдад өөрийгөө таниулах: Тодорхойлох захиа",
    "СSS & Idoc: Санхүүгийн төлөвлөгөө болон бичиг баримтууд",
    "Life-Skill буюу Амьдрах ур чадвар олгох, академик бэлтгэл хичээлүүд",
    "Academic writing and reading",
    "Communication",
    "Time management",
    "Interviewing",
    "Email writing",
    "Passion Project",
    "Leadership Financial literacy",
    "/IT сургалт/",
  ],
};

// Tabs
const tabs: { key: SurgaltKey; label: string }[] = [
  { key: "mobile", label: "Мобайл хөгжүүлэгч" },
  { key: "ui", label: "UI/UX дизайнер" },
  { key: "front", label: "Front-End хөгжүүлэгч" },
  { key: "back", label: "Back-End хөгжүүлэгч" },
  { key: "gap", label: "GAP хөтөлбөр" },
  { key: "icp", label: "ICP xөтөлбөр" },
  { key: "jcp", label: "JCP xөтөлбөр" },
];

// Images
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const images: Record<SurgaltKey, any> = {
  mobile: surgaltMobileSidePhoto,
  ui: surgaltUISidePhoto,
  front: surgaltFrontSidePhoto,
  back: surgaltBackSidePhoto,
  gap: surgaltGapSidePhoto,
  icp: surgaltGapSidePhoto,
  jcp: surgaltGapSidePhoto,
};

export default function SurgaltHotolbor() {
  const [surgalt, setSurgalt] = useState<SurgaltKey>("mobile");

  const current = medeelel[surgalt];
  const currentList = lists[surgalt];

  return (
    <div className="flex justify-center bg-white min-h-screen items-center text-gray-900">
      <div className="max-w-6xl p-6">
        {/* Header / tabs */}
        <nav className="flex flex-wrap gap-3 justify-center mb-8">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setSurgalt(t.key)}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-shadow focus:outline-none ${
                surgalt === t.key
                  ? "bg-black text-white shadow"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>

        {/* Content grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <article>
            <h2 className="text-2xl font-semibold mb-3">{current.ehlel}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{current.text}</p>

            <h3 className="text-lg font-medium mb-2">{current.ehlel1}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {current.text1}
            </p>

            <h4 className="text-base font-semibold mb-2">{current.aguulga}</h4>

            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              {currentList.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          </article>

          <aside className="flex justify-center items-start">
            {images[surgalt] ? (
              <Image
                src={images[surgalt]}
                alt={current.ehlel}
                className=""
                priority
              />
            ) : (
              <div className="w-full h-48 md:h-64 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                Зураг байхгүй
              </div>
            )}
          </aside>
        </section>
      </div>
    </div>
  );
}
