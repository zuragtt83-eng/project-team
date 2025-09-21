"use client";
import React, { useState } from "react";

const SevenGridComponent = () => {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  // Individual grid texts - customize each one
  const grid1Text = "Идэвхтэй";
  const grid2Text = "Нэгдүгээр";
  const grid3Text = "Хоёрдугаар";
  const grid4Text = "Гуравдугаар";
  const grid5Text = "Дөрөвдүгээр";
  const grid6Text = "Тавдугаар";
  const grid7Text = "Зургадугаар";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 p-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          7 Элементийн Систем
        </h2>

        <div className="flex gap-2 mb-8 w-full justify-center">
          {/* Grid 1 - Active */}
          <div
            className={`
              h-screen rounded-2xl cursor-pointer transition-all duration-300 ease-out relative flex-shrink-0
              ${
                focusedIndex === 1
                  ? "bg-black w-40 shadow-xl z-10"
                  : focusedIndex !== null
                  ? "bg-gray-300 w-12 opacity-40"
                  : "bg-black w-20"
              }
            `}
            onClick={() => setFocusedIndex(focusedIndex === 1 ? null : 1)}
            tabIndex={0}
            role="button"
            aria-pressed={focusedIndex === 1}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setFocusedIndex(focusedIndex === 1 ? null : 1);
              }
              if (e.key === "Escape") setFocusedIndex(null);
            }}
          >
            {focusedIndex === 1 && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-max">
                <div className="bg-black bg-opacity-90 text-white px-3 py-2 rounded-lg shadow-lg">
                  <p className="text-sm font-medium whitespace-nowrap">
                    {grid1Text}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Grid 2 */}
          <div
            className={`
              h-screen rounded-2xl cursor-pointer transition-all duration-300 ease-out relative flex-shrink-0
              ${
                focusedIndex === 2
                  ? "bg-gray-600 w-40 shadow-xl z-10"
                  : focusedIndex !== null
                  ? "bg-gray-300 w-12 opacity-40"
                  : "bg-gray-400 w-20"
              }
            `}
            onClick={() => setFocusedIndex(focusedIndex === 2 ? null : 2)}
            tabIndex={0}
            role="button"
            aria-pressed={focusedIndex === 2}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setFocusedIndex(focusedIndex === 2 ? null : 2);
              }
              if (e.key === "Escape") setFocusedIndex(null);
            }}
          >
            {focusedIndex === 2 && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-max">
                <div className="bg-black bg-opacity-90 text-white px-3 py-2 rounded-lg shadow-lg">
                  <p className="text-sm font-medium whitespace-nowrap">
                    {grid2Text}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Grid 3 */}
          <div
            className={`
              h-screen rounded-2xl cursor-pointer transition-all duration-300 ease-out relative flex-shrink-0
              ${
                focusedIndex === 3
                  ? "bg-gray-600 w-40 shadow-xl z-10"
                  : focusedIndex !== null
                  ? "bg-gray-300 w-12 opacity-40"
                  : "bg-gray-400 w-20"
              }
            `}
            onClick={() => setFocusedIndex(focusedIndex === 3 ? null : 3)}
            tabIndex={0}
            role="button"
            aria-pressed={focusedIndex === 3}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setFocusedIndex(focusedIndex === 3 ? null : 3);
              }
              if (e.key === "Escape") setFocusedIndex(null);
            }}
          >
            {focusedIndex === 3 && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-max">
                <div className="bg-black bg-opacity-90 text-white px-3 py-2 rounded-lg shadow-lg">
                  <p className="text-sm font-medium whitespace-nowrap">
                    {grid3Text}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Grid 4 */}
          <div
            className={`
              h-screen rounded-2xl cursor-pointer transition-all duration-300 ease-out relative flex-shrink-0
              ${
                focusedIndex === 4
                  ? "bg-gray-600 w-40 shadow-xl z-10"
                  : focusedIndex !== null
                  ? "bg-gray-300 w-12 opacity-40"
                  : "bg-gray-400 w-20"
              }
            `}
            onClick={() => setFocusedIndex(focusedIndex === 4 ? null : 4)}
            tabIndex={0}
            role="button"
            aria-pressed={focusedIndex === 4}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setFocusedIndex(focusedIndex === 4 ? null : 4);
              }
              if (e.key === "Escape") setFocusedIndex(null);
            }}
          >
            {focusedIndex === 4 && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-max">
                <div className="bg-black bg-opacity-90 text-white px-3 py-2 rounded-lg shadow-lg">
                  <p className="text-sm font-medium whitespace-nowrap">
                    {grid4Text}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Grid 5 */}
          <div
            className={`
              h-screen rounded-2xl cursor-pointer transition-all duration-300 ease-out relative flex-shrink-0
              ${
                focusedIndex === 5
                  ? "bg-gray-600 w-40 shadow-xl z-10"
                  : focusedIndex !== null
                  ? "bg-gray-300 w-12 opacity-40"
                  : "bg-gray-400 w-20"
              }
            `}
            onClick={() => setFocusedIndex(focusedIndex === 5 ? null : 5)}
            tabIndex={0}
            role="button"
            aria-pressed={focusedIndex === 5}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setFocusedIndex(focusedIndex === 5 ? null : 5);
              }
              if (e.key === "Escape") setFocusedIndex(null);
            }}
          >
            {focusedIndex === 5 && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-max">
                <div className="bg-black bg-opacity-90 text-white px-3 py-2 rounded-lg shadow-lg">
                  <p className="text-sm font-medium whitespace-nowrap">
                    {grid5Text}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Grid 6 */}
          <div
            className={`
              h-screen rounded-2xl cursor-pointer transition-all duration-300 ease-out relative flex-shrink-0
              ${
                focusedIndex === 6
                  ? "bg-gray-600 w-40 shadow-xl z-10"
                  : focusedIndex !== null
                  ? "bg-gray-300 w-12 opacity-40"
                  : "bg-gray-400 w-20"
              }
            `}
            onClick={() => setFocusedIndex(focusedIndex === 6 ? null : 6)}
            tabIndex={0}
            role="button"
            aria-pressed={focusedIndex === 6}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setFocusedIndex(focusedIndex === 6 ? null : 6);
              }
              if (e.key === "Escape") setFocusedIndex(null);
            }}
          >
            {focusedIndex === 6 && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-max">
                <div className="bg-black bg-opacity-90 text-white px-3 py-2 rounded-lg shadow-lg">
                  <p className="text-sm font-medium whitespace-nowrap">
                    {grid6Text}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Grid 7 */}
          <div
            className={`
              h-screen rounded-2xl cursor-pointer transition-all duration-300 ease-out relative flex-shrink-0
              ${
                focusedIndex === 7
                  ? "bg-gray-600 w-40 shadow-xl z-10"
                  : focusedIndex !== null
                  ? "bg-gray-300 w-12 opacity-40"
                  : "bg-gray-400 w-20"
              }
            `}
            onClick={() => setFocusedIndex(focusedIndex === 7 ? null : 7)}
            tabIndex={0}
            role="button"
            aria-pressed={focusedIndex === 7}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setFocusedIndex(focusedIndex === 7 ? null : 7);
              }
              if (e.key === "Escape") setFocusedIndex(null);
            }}
          >
            {focusedIndex === 7 && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-max">
                <div className="bg-black bg-opacity-90 text-white px-3 py-2 rounded-lg shadow-lg">
                  <p className="text-sm font-medium whitespace-nowrap">
                    {grid7Text}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Spacer for text overlay */}
        <div className="h-16"></div>

        {/* Click interaction */}
        <div className="mt-6">
          <p className="text-sm text-gray-600 text-center">
            Элементүүдийг дарж фокус хийж текст харах боломжтой
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SevenGridComponent;
