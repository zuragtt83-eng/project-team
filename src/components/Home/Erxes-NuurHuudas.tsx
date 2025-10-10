import Header from "../Layout/Header";

export default function ErxesNuurHuudas() {
  return (
    <div
      className="w-full h-screen relative"
      style={{
        backgroundImage: `url("/images/erxesBack.png")`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
  
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full px-10">
        <Header />

        <div className="flex justify-between items-center pb-10">
          <div className="flex flex-col space-y-4 text-white">
            <p>
              Өнөөдөр бид хийж буй хөрөнгө оруулалт бүр маргаашийн амжилт,{" "}
              <br />
              үнэ цэнтэй холбоотой. Бүх алхам, бүх шийдвэр бол ирээдүйн
              өөрийнхөө <br /> төлөө хийж буй хөрөнгө юм.
            </p>
            <p>@{new Date().getFullYear()} Erxes Academy</p>
          </div>

          <div className="flex flex-col space-y-2 text-white">
            <p>Мобайл хөгжүүлэгч</p>
            <p>UI/UX дизайнер</p>
            <p>Front-End хөгжүүлэгч</p>
            <p>Back-End хөгжүүлэгч</p>
          </div>
        </div>
      </div>
    </div>
  );
}
