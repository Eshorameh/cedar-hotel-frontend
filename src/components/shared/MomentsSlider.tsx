"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { moments } from "@/config/moments";

export default function MomentsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const moment = moments[activeIndex];

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === moments.length - 1 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? moments.length - 1 : current - 1
    );
  };

  return (
    <div className="mt-12">
      <div className="relative h-[600px] overflow-hidden rounded-3xl">
        {/* Image */}
        <img
          key={moment.id}
          src={moment.image}
          alt={moment.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/5" />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-8 text-white sm:p-12 lg:p-16">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#c9a45c]">
            {moment.category}
          </p>

          <h3 className="font-display mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            {moment.title}
          </h3>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            {moment.description}
          </p>
        </div>

        {/* Counter */}
        <div className="absolute right-8 top-8 text-sm font-medium text-white/80 sm:right-12 sm:top-12">
          <span className="text-white">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>

          <span className="mx-2 text-white/40">/</span>

          <span>
            {String(moments.length).padStart(2, "0")}
          </span>
        </div>

        {/* Controls */}
        <div className="absolute bottom-8 right-8 flex gap-3 sm:bottom-12 sm:right-12">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous moment"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-[#173f35]"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next moment"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-[#173f35]"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Progress */}
      <div className="mt-6 flex gap-2">
        {moments.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to ${item.title}`}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-12 bg-[#173f35]"
                : "w-6 bg-[#d9d5cc]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}