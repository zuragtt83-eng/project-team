"use client";
import { useEffect, useRef, useState } from "react";

const wordsData = [
  "Цахиурын",
  "хөндийд",
  "бүртгэлтэй",
  "Эрксис",
  "Монголиа",
  "ХХК",
  "нь",
  "2024",
  "оноос",
  "эхлэн",
  "шинэ",
  "үеийн",
  "залуу",
  "иргэдийн",
  "технологийн",
  "боловсролыг",
  "дээшлүүлэх,",
  "өндөр",
  "ур",
  "чадвартай",
  "боловсон",
  "xүчин",
  "бэлтгэх",
  "зорилгынхоо",
  "хүрээнд",
  "Эрксис",
  "академийг",
  "үүсгэн",
  "байгуулж",
  "мэргэжлийн",
  "ур",
  "чадвартай",
  "баг",
  "бүрдүүлэн",
  "ажиллаж",
  "байна.",
];

export const TextAnimation = () => {
  return (
    <div className="relative flex justify-center items-start h-[2000px] w-full px-4">
      <div>
        <p>jijig taniltsuulga</p>
      </div>
      <div className="sticky top-[190px] md:top-[310px] flex justify-center w-full">
        <div className="flex flex-wrap justify-center max-w-[980px]">
          {wordsData.map((word, index) => (
            <AnimatedWord key={index} word={word} delay={index * 100} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface AnimatedWordProps {
  word: string;
  delay: number;
}

const AnimatedWord = ({ word, delay }: AnimatedWordProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible) {
          setTimeout(() => {
            setIsVisible(true);
            setHasBeenVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [delay, hasBeenVisible]);

  return (
    <span
      ref={ref}
      className={`m-2 inline-block font-bold transition-all duration-700 ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0 blur-0"
          : "opacity-0 translate-y-5 blur-sm"
      } text-sm md:text-[1.875rem] lg:text-5xl text-center`}
    >
      {word}
    </span>
  );
};
