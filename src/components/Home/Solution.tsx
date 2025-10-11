"use client";

import { useThemeContext } from "../context/ThemeLanguage";

export default function Solution() {
  const { theme, languege } = useThemeContext();

  const t = languege
    ? {
        subtitle:
          "Зөвхөн теори биш, tech компаниудын senior developer нартай хамтран бодит төслүүд дээр ажиллаарай.",
        cards: [
          {
            title: "🚀 Долоо хоног бүр төсөл",
            desc: "Startup болон том tech компаниудтай хамтран жижиг бодит төслүүд дээр ажиллах.",
            highlight: true,
          },
          {
            title: "👨‍💻 Senior Менторууд",
            desc: "5+ жил туршлагатай хөгжүүлэгчид өдөр бүр дэмжлэг үзүүлнэ.",
          },
          {
            title: "💼 Portfolio Бүтээх",
            desc: "Бодит төслүүдээр portfolio-г бий болгож, ажил олгогчдод үзүүлэх боломж.",
          },
          {
            title: "🎯 Бодит Ур Чадвар",
            desc: "Git, CI/CD, Code Review зэрэг workflow-оор сурах.",
            highlight: true,
          },
          {
            title: "🤝 Багийн Хамтын Ажиллагаа",
            desc: "Tech компанийн хамтын ажиллагааны арга барилыг эзэмших.",
          },
          {
            title: "📊 Үр Дүн",
            desc: "90% сурагчид 3 сарын дотор ажилд орсон туршлагатай.",
          },
        ],
      }
    : {
        sectionTitle: "HOW IT WORKS",
        mainTitle: "Real Tech Experience",
        mainSubtitle: "Academy Integrated",
        subtitle:
          "Not just theory. Work on real projects with senior developers from partner tech companies.",
        cards: [
          {
            title: "🚀 Weekly Projects",
            desc: "Collaborate on small real projects with startups and tech companies.",
            highlight: true,
          },
          {
            title: "👨‍💻 Senior Mentors",
            desc: "Developers with 5+ years experience providing daily support.",
          },
          {
            title: "💼 Build Portfolio",
            desc: "Collect real projects that impress employers.",
          },
          {
            title: "🎯 Practical Skills",
            desc: "Learn Git, CI/CD, Code Review in real workflow.",
            highlight: true,
          },
          {
            title: "🤝 Team Collaboration",
            desc: "Master collaboration methods used in tech companies.",
          },
          {
            title: "📊 Results",
            desc: "90% of students hired within 3 months track record.",
          },
        ],
      };

  return (
    <section
      className={`min-h-screen w-full transition-colors duration-500 ${
        theme ? "bg-[#0a0e1a] text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6 py-24">
        {/* Header */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <p className="text-sm font-bold tracking-wider text-indigo-500 mb-3 uppercase">
            {t.sectionTitle}
          </p>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-3">
            {t.mainTitle}{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              {t.mainSubtitle}
            </span>
          </h1>
          <p
            className={`text-xl mt-6 ${
              theme ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {t.cards.map((card, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl border flex flex-col gap-4 transition-all duration-300 ${
                card.highlight ? "md:col-span-2 lg:col-span-2" : "md:col-span-1"
              } ${
                theme
                  ? "border-gray-800 bg-gray-900"
                  : "border-gray-200 bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold">{card.title}</h3>
              <p
                className={`text-base mt-2 ${
                  theme ? "text-gray-400" : "text-gray-700"
                }`}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center"></div>
      </div>
    </section>
  );
}
