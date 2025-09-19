"use client";
import Image from "next/image";
import { useState } from "react";
import surgaltUISidePhoto from "../../../public/images/surgaltMedeelel/surgaltUISidePhoto.png";
import surgaltGapSidePhoto from "../../../public/images/surgaltMedeelel/surgaltGapSidePhoto.png";
import surgaltMobileSidePhoto from "../../../public/images/surgaltMedeelel/surgaltMobileSidePhoto.png";
import surgaltFrontSidePhoto from "../../../public/images/surgaltMedeelel/surgaltFrontSidePhoto.png";
import surgaltBackSidePhoto from "../../../public/images/surgaltMedeelel/surgaltBackSidePhoto.png";

export default function SurgaltHotolbor() {
  const [surgalt, setSurgalt] = useState<
    "mobile" | "ui" | "front" | "back" | "gap" | "icp" | "jcp"
  >("mobile");
  const medeelel = {
    mobile: {
      ehlel: "Яагаад Мобайл хөгжүүлэгч гэж?",
      text: "Ухаалаг гар утасны хэрэглээ бидний амьдралын салшгүй хэсэг болсон. Тиймээс энэ зах зээл дээр түүнтэй адилтгах хэмжээний хэрэглэгч байгаа гэсэн үг. Тэгвэл та хэрэглэгчийн хэрэгцээнд төгс нийцсэн гар утасны бүтээгдэхүүн хөгжүүлж зах зээлд таниулмаар байна уу? Хоббигоо бүтээл болгож iOS, Android үйлдлийн системд зориулагдсан төрөл бүрийн аппликэйшн хийж сурахыг хүсвэл манай Мобайл хөгжүүлэгчийн ангид суралцаарай.",
      ehlel1: "Мобайл хөгжүүлэгчийн сургалт хэрхэн явагдах вэ?",
      text1:
        "Энэхүү сургалтаар ‘React Native’ технологи ашиглан өөрийн хүссэн мобайл аппликэйшнийг iOS болон Android 2 үйлдлийн систем дээр гаргахаас гадна, дизайн системийн дагуу кодын бүтэц, архитектур, компонент бэлтгэх, өгөгдөл, дататай ажиллаж, өгөгдлийг хэрхэн удирдах практикт суурилсан чадварыг олж авна. Сургалтын туршид долоо хоног бүр сурсан мэдлэгээ бататгаж жижиг төслүүд дээр ажиллана.",
      aguulga: "Сургалтын хөтөлбөрийн агуулга:",
    },
    uiux: {
      ehlel: "Зөвхөн танай байгууллагын хэрэгцээнд тохирсон сонголт",
      text: "Аливаа аппликэйшн болон веб хуудас ямар харагдах вэ гэдэг нь UI (User Interface), харин хэрхэн ажиллах вэ гэдэг нь UX (User Experience) юм. Хэрэглэгчийн асуудлыг цогцоор нь шийдсэн, хэрэглэхэд хялбар, оновчтой шийдэл бүхий технологийн бүтээгдэхүүн бий болгох үндэс нь UI/UX дизайнаас шууд хамааралтай. Тиймээс технологийн эринд хамгийн эрэлттэй, ирээдүйтэй, өндөр үнэлгээтэй мэргэжил эзэмшиж үнэ цэнээ нэмэгдүүлэхийг хүсвэл манай UI/UX дизайнерын ангид элсэн суралцаарай.",
      ehlel1: "UI/UX дизайнерын сургалт хэрхэн явагдах вэ?",
      text1:
        "UI/UX-н хамгийн анхан шатны суурийг системтэйгээр суралцаж, хэмжигдэхүйц ур чадварыг эзэмшин бодит төслүүд дээр ажиллаж туршлага хуримтлуулна. Суралцагчид хэрэглэгчийн судалгаа, persona бүтээх, wireframe/ прототип боловсруулах, визуал дизайн, интерактив дизайн, usability тест хийх зэрэг дараалсан практик үйл явцуудаар дамжина.",
      aguulga:
        "Сургалтын хөтөлбөрийн агуулга: Хэрэглэгч судлал & persona, Информацийн архитектур, Wireframing & Prototyping, Visual Design (типографи, өнгө, сетка), Интерактив элементүүд & motion basics, Design systems & component libraries, Usability testing & feedback, Бодит төслөөр практик дасгал, Портфолио бэлдэх.",
    },
    frontend: {
      ehlel: "Яагаад Front-End хөгжүүлэгч гэж?",
      text: "Front-End хөгжүүлэгч гэдэг нь вебсайт болон мобайл аппликэйшнийг ашиглах үед дэлгэц дээр харагдах бүх график дүрслэл, өнгө төрх, товчлуур, навигацийн цэс, текст зэргийг хэрэглэгчдэд шууд харагдах болон харьцах хэсгүүдийг программчилдаг хүнийг хэлнэ.",
      ehlel1: "Front-End хөгжүүлэгчийн сургалт хэрхэн явагдах вэ?",
      text1:
        "Уг сургалтын явцад бид ‘responsive’ вебсайт болон системийг хамгийн анхны суурь ойлголтоос эхлэн алхам алхмаар суралцан хамгийн сүүлийн үеийн Front-End framework, technology болон GitHub, Visual Studio, Webpack зэргийг ахисан түвшинд суралцах болно.",
      aguulga:
        "Сургалтын хөтөлбөрийн агуулга: HTML, CSS, JavaScript үндэс, Responsive design ба CSS framework (Tailwind, Bootstrap), Git & GitHub version control, Modern JavaScript (ES6+), React.js framework, State management (Redux эсвэл Context API), API integration (REST & GraphQL), Webpack & build tools, Deployment (Vercel, Netlify), Бодит төслийн практик ажил.",
    },
    backend: {
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
        "Зан төлөв болон мэргэжил сонголтын тестүүд авч зорилго, мөрөөдөл, хүсэл, сонирхол, чадварыг нь тодорхойлж мэргэжил сонголтод чиглүүлнэ. IELTS, SAT шалгалтын түвшин тогтоож, англи хэл, математикийн оноо нэмэгдүүлэхэд дэмжлэг үзүүлнэ. Хөтөлбөрийн хүрээнд өөрийн ‘passion project’-оо судалгаа, ном, хөтөлбөр, дадлага ажлаар баяжуулж бодитойгоор хэрэгжүүлнэ. Чиглүүлэгч багшийн удирдлага дор эсээ бичих аргачлалд суралцахаас гадна коллежийн аппликэйшний 30-50 эсээндээ хувьчилсан чиглүүлэг авна. Тодорхойлох захиа авах стратеги болон тодорхойлох захиа авахад чиглүүлнэ. Санхүүгийн тооцоолол хийх, коллежийн аппликэйшний санхүүгийн баталгаа, баримтууд бэлтгэхэд дэмжлэг үзүүлдэг.",
      aguulga:
        "Сургалтын хөтөлбөрийн агуулга: Зан төлөв ба мэргэжил сонголтын тестүүд, IELTS & SAT оноо ахиулах сургалт, Англи хэл ба математикийн гүнзгийрүүлсэн сургалт, Passion project хэрэгжүүлэх, Судалгаа & номын ажил, Дадлага туршлага хуримтлуулах, Эсээ бичих аргачлал ба хувьчилсан зөвлөгөө, Коллежийн аппликэйшний стратеги, Тодорхойлох захиа авах стратеги, Санхүүгийн тооцоолол ба баримт бичгийн бэлтгэл.",
    },
    icp: {
      ehlel: "Яагаад ICP (Intensive College Prep) хөтөлбөр гэж?",
      text: "Ерөнхий боловсролын сургуулийн төгсөх ангийн сурагчдад зориулсан түргэвчилсэн сургалт, чиглүүлэг хөтөлбөр. Үргэлжлэх хугацаа 6 сар.",
      ehlel1: "ICP хөтөлбөр хэрхэн явагдах вэ?",
      text1:
        "Зан төлөв болон мэргэжил сонголтын тестүүд авч зорилго, мөрөөдөл, хүсэл, сонирхол, чадварыг нь тодорхойлж мэргэжил сонголтод чиглүүлнэ. IELTS, SAT шалгалтын түвшин тогтоож, англи хэл, математикийн оноо нэмэгдүүлэхэд дэмжлэг үзүүлнэ. Хөтөлбөрийн хүрээнд өөрийн ‘passion project’-оо судалгаа, ном, хөтөлбөр, дадлага ажлаар баяжуулж бодитойгоор хэрэгжүүлнэ. Чиглүүлэгч багшийн удирдлага дор эсээ бичих аргачлалд суралцахаас гадна коллежийн аппликэйшний 30-50 эсээндээ хувьчилсан чиглүүлэг авна. Тодорхойлох захиа авах стратеги болон тодорхойлох захиа авахад чиглүүлнэ. Санхүүгийн тооцоолол хийх, коллежийн аппликэйшний санхүүгийн баталгаа, баримтууд бэлтгэхэд дэмжлэг үзүүлэх.",
      aguulga:
        "Сургалтын хөтөлбөрийн агуулга: Зан төлөв ба мэргэжил сонголтын тестүүд, IELTS & SAT түвшин тогтоолт ба оноо ахиулах сургалт, Англи хэл ба математикийн гүнзгийрүүлсэн сургалт, Passion project хэрэгжүүлэх (судалгаа, ном, дадлага), Эсээ бичих аргачлал ба хувьчилсан зөвлөгөө, Коллежийн аппликэйшний стратеги, Тодорхойлох захиа авах стратеги, Санхүүгийн тооцоолол ба баримт бичгийн бэлтгэл.",
    },
    jcp: {
      ehlel: "Яагаад JCP (Junior College Prep) хөтөлбөр гэж?",
      text: "Ерөнхий боловсролын ахлах ангийн сурагч, их дээд сургуулийн оюутан зэрэг гадаадад тэтгэлэгтэй суралцах сонирхолтой залууст зориулсан хөтөлбөр. Үргэлжлэх хугацаа 1 жил.",
      ehlel1: "JCP хөтөлбөр хэрхэн явагдах вэ?",
      text1:
        "Зан төлөв болон мэргэжил сонголтын тестүүд авч зорилго, мөрөөдөл, хүсэл, сонирхол, чадварыг нь тодорхойлж мэргэжил сонголтод чиглүүлнэ. IELTS, SAT шалгалтын түвшин тогтоож, англи хэл, математикийн оноо нэмэгдүүлэхэд дэмжлэг үзүүлнэ. Хөтөлбөрийн хүрээнд өөрийн ‘passion project’-оо судалгаа, ном, хөтөлбөр, дадлага ажлаар баяжуулж бодитойгоор хэрэгжүүлнэ. Чиглүүлэгч багшийн удирдлага дор эсээ бичих аргачлалд суралцахаас гадна коллежийн аппликэйшний 30-50 эсээндээ хувьчилсан чиглүүлэг авна. Тодорхойлох захиа авах стратеги болон тодорхойлох захиа авахад чиглүүлнэ. Санхүүгийн тооцоолол хийх, коллежийн аппликэйшний санхүүгийн баталгаа, баримтууд бэлтгэхэд дэмжлэг үзүүлнэ.",
      aguulga:
        "Сургалтын хөтөлбөрийн агуулга: Зан төлөв ба мэргэжил сонголтын тестүүд, IELTS & SAT түвшин тогтоолт ба оноо ахиулах сургалт, Англи хэл ба математикийн гүнзгийрүүлсэн сургалт, Passion project хэрэгжүүлэх (судалгаа, ном, дадлага), Эсээ бичих аргачлал ба хувьчилсан зөвлөгөө, Коллежийн аппликэйшний стратеги, Тодорхойлох захиа авах стратеги, Санхүүгийн тооцоолол ба баримт бичгийн бэлтгэл.",
    },
  };
  return (
    <div className="bg-amber-200 w-full h-screen ">
      <div className="flex flex-row justify-around">
        <p onClick={() => setSurgalt("mobile")}>Мобайл хөгжүүлэгч</p>
        <p onClick={() => setSurgalt("ui")}>UI/UX дизайнер</p>
        <p onClick={() => setSurgalt("front")}>Front-End хөгжүүлэгч</p>
        <p onClick={() => setSurgalt("back")}>Back-End хөгжүүлэгч</p>
        <p onClick={() => setSurgalt("gap")}>GAP хөтөлбөр</p>
        <p onClick={() => setSurgalt("icp")}>ICP xөтөлбөр</p>
        <p onClick={() => setSurgalt("jcp")}>JCP xөтөлбөр</p>
      </div>
      <div className="flex flex-row">
        {surgalt === "mobile" && (
          <div className="flex flex-row">
            <div>
              {" "}
              <div>
                {medeelel.mobile.ehlel}
                <p>{medeelel.mobile.text}</p>
              </div>
              <div>
                <h5>{medeelel.mobile.ehlel1}</h5>
                <p>{medeelel.mobile.text1}</p>
              </div>
              <div>
                <h5>{medeelel.mobile.aguulga}</h5>
                <ul>
                  <li>
                    React-н JSX, props, state, components талаар суурь ойлголтыг
                    олж авах
                  </li>
                  <li>
                    React Native core/community/custom component ашиглаж болон
                    бичиж сурах
                  </li>
                  <li>
                    CSS ашиглан өөрийн босгосон компонентууддаа UI style/өнгө,
                    хэмжээ г.м/ загваруудыг оруулах
                  </li>
                  <li>
                    React hook гэж юу вэ? тэдгээрийг хэрхэн ашиглах талаар
                    суралцах
                  </li>
                  <li>
                    Өгөгдлийг хэрхэн удирдах тухайн өгөгдлөө хэрхэн хадгалах
                    талаарх ойлголт авах
                  </li>
                  <li>
                    UI Interaction ашиглах болон компонентдоо хөдөлгөөн оруулж
                    хөдөлгөөнтэй болгох
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Image src={surgaltMobileSidePhoto} alt="Mobile Photo"></Image>
            </div>
          </div>
        )}
        {surgalt == "ui" && (
          <div className="flex flex-row">
            <div>
              {" "}
              <div>
                {medeelel.uiux.ehlel}
                <p>{medeelel.uiux.text}</p>
              </div>
              <div>
                <h5>{medeelel.uiux.ehlel1}</h5>
                <p>{medeelel.uiux.text1}</p>
              </div>
              <div>
                <h5>{medeelel.uiux.aguulga}</h5>
                <ul>
                  <li>Технологийн бүтээгдэхүүний шаардлага боловсруулах</li>
                  <li>Figjam</li>
                  <li>figma</li>
                  <li>Design Low-Fi</li>
                  <li>High-Fi prototype</li>
                  <li>Responsive web & app</li>
                  <li>Design and develop,</li>
                  <li>Portfolio web</li>
                </ul>
              </div>
            </div>
            <div>
              {" "}
              <Image src={surgaltUISidePhoto} alt="Surgalt Side Photo"></Image>
            </div>
          </div>
        )}
        {surgalt == "front" && (
          <div className="flex flex-row">
            <div>
              <div>
                {medeelel.frontend.ehlel}
                <p>{medeelel.frontend.text}</p>
              </div>
              <div>
                <h5>{medeelel.frontend.ehlel1}</h5>
                <p>{medeelel.frontend.text1}</p>
              </div>
              <div>
                <h5>{medeelel.frontend.aguulga}</h5>
                <ul>
                  <li>
                    Web fundamentals (git, yarn, Visual studio, Command lines)
                  </li>
                  <li>HTML</li>
                  <li>
                    CSS /css, sass, tailwind, styled-components, responsive
                    website/
                  </li>
                  <li>Figma</li>
                  <li>JS /javascript fundamentals, logics, typescript, DOM/</li>
                  <li>SEO /Google, Bing ,GTM, metadata, open graph/</li>
                  <li>
                    React JS /jsx, Structure, Routing, Component, Hooks,
                    Context, HOC/
                  </li>
                  <li>
                    Next JS /Structure, Routing, Image Optimization, Server Side
                    Rendering /
                  </li>
                  <li>Understanding of Micro frontend /Webpack/</li>
                  <li>API /graphql, rest api/</li>
                  <li>Testing (Unit testing, System testing)</li>
                  <li>Deployment (Cloudflare, Vercel)</li>
                </ul>
              </div>
            </div>
            <div>
              <Image src={surgaltFrontSidePhoto} alt="Front side photo"></Image>
            </div>
          </div>
        )}
        {surgalt == "back" && (
          <div className="flex flex-row">
            <div>
              <div>
                {medeelel.backend.ehlel}
                <p>{medeelel.backend.text}</p>
              </div>
              <div>
                <h5>{medeelel.backend.ehlel1}</h5>
                <p>{medeelel.backend.text1}</p>
              </div>
              <div>
                <h5>{medeelel.backend.aguulga}</h5>
                <ul>
                  <li>Web fundamentals(HTML, CSS, JAVASCRIPT..)</li>
                  <li>System architecture</li>
                  <li>NodeJS, Express.js, Graphql</li>
                  <li>Database (SQL, nosql), MongoDB</li>
                  <li>Testing (Unit testing, End to end test)</li>
                  <li>Deployment (Docker, Nginx, Kubernetes,AWS)</li>
                  <li>
                    Third-party integration process(AWS, Cloudflare, Sendgrid)
                  </li>
                  <li>Monitoring</li>
                </ul>
              </div>
            </div>
            <div>
              <Image src={surgaltBackSidePhoto} alt="back photo"></Image>
            </div>
          </div>
        )}
        {surgalt == "icp" && (
          <div>
            <div>
              {" "}
              <div>
                {medeelel.icp.ehlel}
                <p>{medeelel.icp.text}</p>
              </div>
              <div>
                <h5>{medeelel.icp.ehlel1}</h5>
                <p>{medeelel.icp.text1}</p>
              </div>
              <div>
                <h5>{medeelel.icp.aguulga}</h5>
                <ul>
                  <li>
                    Өөрийгөө таних аялал: Амьдралын түүхээ дүгнэж, ирээдүйгээ
                    тодорхойлох
                  </li>
                  <li>Оноогоо авах: Стандарт шалгалтуудад бэлтгэх</li>
                  <li>
                    Өсөлтийн сэтгэлгээгээ хөгжүүлэх: Хичээлээс гадуурх ажлууд
                  </li>
                  <li>Өөрийн түүхээ бичих: Эсээ чиглүүлэг</li>
                  <li>Бусдад өөрийгөө таниулах: Тодорхойлох захиа</li>
                  <li>
                    СSS & Idoc: Санхүүгийн төлөвлөгөө болон бичиг баримтууд
                  </li>
                  <li>
                    Life-Skill буюу Амьдрах ур чадвар олгох, академик бэлтгэл
                    хичээлүүд
                  </li>
                  <li>Academic writing and reading</li>
                  <li>Communication</li>
                  <li>Time management</li>
                  <li>Interviewing</li>
                  <li>Email writing</li>
                  <li> Passion Project</li>
                  <li>Leadership Financial literacy</li>
                  <li> /IT сургалт/</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {surgalt == "jcp" && (
          <div>
            <div>
              {" "}
              <div>
                {medeelel.jcp.ehlel}
                <p>{medeelel.jcp.text}</p>
              </div>
              <div>
                <h5>{medeelel.jcp.ehlel1}</h5>
                <p>{medeelel.jcp.text1}</p>
              </div>
              <div>
                <h5>{medeelel.jcp.aguulga}</h5>
                <ul>
                  <li>
                    Өөрийгөө таних аялал: Амьдралын түүхээ дүгнэж, ирээдүйгээ
                    тодорхойлох
                  </li>
                  <li>Оноогоо авах: Стандарт шалгалтуудад бэлтгэх</li>
                  <li>
                    Өсөлтийн сэтгэлгээгээ хөгжүүлэх: Хичээлээс гадуурх ажлууд
                  </li>
                  <li>Өөрийн түүхээ бичих: Эсээ чиглүүлэг</li>
                  <li>Бусдад өөрийгөө таниулах: Тодорхойлох захиа</li>
                  <li>
                    СSS & Idoc: Санхүүгийн төлөвлөгөө болон бичиг баримтууд
                  </li>
                  <li>
                    Life-Skill буюу Амьдрах ур чадвар олгох, академик бэлтгэл
                    хичээлүүд
                  </li>
                  <li>Academic writing and reading</li>
                  <li>Communication</li>
                  <li>Time management</li>
                  <li>Interviewing</li>
                  <li>Email writing</li>
                  <li> Passion Project</li>
                  <li>Leadership Financial literacy</li>
                  <li> /IT сургалт/</li>
                </ul>
              </div>
            </div>
            <div></div>
          </div>
        )}
        {surgalt == "gap" && (
          <div className="flex flex-row">
            <div>
              {" "}
              <div>
                {medeelel.gap.ehlel}
                <p>{medeelel.gap.text}</p>
              </div>
              <div>
                <h5>{medeelel.gap.ehlel1}</h5>
                <p>{medeelel.gap.text1}</p>
              </div>
              <div>
                <h5>{medeelel.gap.aguulga}</h5>
                <ul>
                  <li>
                    Өөрийгөө таних аялал: Амьдралын түүхээ дүгнэж, ирээдүйгээ
                    тодорхойлох
                  </li>
                  <li>Оноогоо авах: Стандарт шалгалтуудад бэлтгэх</li>
                  <li>
                    Өсөлтийн сэтгэлгээгээ хөгжүүлэх: Хичээлээс гадуурх ажлууд
                  </li>
                  <li>Өөрийн түүхээ бичих: Эсээ чиглүүлэг</li>
                  <li>Бусдад өөрийгөө таниулах: Тодорхойлох захиа</li>
                  <li>
                    СSS & Idoc: Санхүүгийн төлөвлөгөө болон бичиг баримтууд
                  </li>
                  <li>
                    Life-Skill буюу Амьдрах ур чадвар олгох, академик бэлтгэл
                    хичээлүүд
                  </li>
                  <li>Academic writing and reading</li>
                  <li>Communication</li>
                  <li>Time management</li>
                  <li>Interviewing</li>
                  <li>Email writing</li>
                  <li> Passion Project</li>
                  <li>Leadership Financial literacy</li>
                  <li> /IT сургалт/</li>
                </ul>
              </div>
            </div>

            <div>
              <Image src={surgaltGapSidePhoto} alt="Gap photo"></Image>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
