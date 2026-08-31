"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { facilities } from "@/config/facilities";

export default function FacilitiesSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const facility = facilities[activeIndex];

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === facilities.length - 1 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? facilities.length - 1 : current - 1
    );
  };

  return (
    <div className="mt-12">
      <div className="relative h-[560px] overflow-hidden rounded-3xl">
        {/* Facility Image */}
        <img
          key={facility.id}
          src={facility.image}
          alt={facility.name}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Facility information */}
        <div className="absolute bottom-0 left-0 max-w-2xl p-8 text-white sm:p-12 lg:p-16">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#c9a45c]">
            {facility.category}
          </p>

          <h3 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl">
            {facility.name}
          </h3>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            {facility.description}
          </p>
        </div>

        {/* Slide number */}
        <div className="absolute right-8 top-8 text-sm text-white sm:right-12 sm:top-12">
          <span className="font-semibold">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>

          <span className="mx-2 text-white/40">/</span>

          <span className="text-white/60">
            {String(facilities.length).padStart(2, "0")}
          </span>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-8 right-8 flex gap-3 sm:bottom-12 sm:right-12">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous facility"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white backdrop-blur-md transition hover:bg-white hover:text-[#173f35]"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next facility"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white backdrop-blur-md transition hover:bg-white hover:text-[#173f35]"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Progress indicators */}
      <div className="mt-6 flex gap-2">
        {facilities.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`View ${item.name}`}
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