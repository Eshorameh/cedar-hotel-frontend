"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/1.jpg",
    eyebrow: "WELCOME TO CEDAR HOTEL",
    title: "Experience Refined Hospitality",
    description:
      "Discover a serene stay where modern comfort meets warm, thoughtful hospitality.",
  },
  {
    image: "/images/13.jpg",
    eyebrow: "YOUR PRIVATE RETREAT",
    title: "Comfort Designed Around You",
    description:
      "Relax in beautifully appointed spaces created for rest, privacy and effortless comfort.",
  },
  {
    image: "/images/15.jpg",
    eyebrow: "EXCEPTIONAL FACILITIES",
    title: "Everything You Need",
    description:
      "Enjoy thoughtfully curated facilities designed to make every moment of your stay memorable.",
  },
  {
    image: "/images/17.jpg",
    eyebrow: "A WARM WELCOME",
    title: "Stay. Relax. Experience Cedar.",
    description:
      "From arrival to departure, experience hospitality that feels personal.",
  },
  {
    image: "/images/16.jpg",
    eyebrow: "A WARM WELCOME",
    title: "Stay. Relax. Experience Cedar.",
    description:
      "From arrival to departure, experience hospitality that feels personal.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((previous) => (previous + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent((previous) =>
      previous === 0 ? slides.length - 1 : previous - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-[760px] min-h-[680px] overflow-hidden bg-[#173f35]">
      {slides.map((item, index) => (
        <div
          key={item.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] ${
              index === current ? "scale-105" : "scale-100"
            }`}
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
        <div className="max-w-3xl text-white">
          <p className="mb-5 text-xs font-semibold tracking-[0.35em] text-[#c9a45c]">
            {slide.eyebrow}
          </p>

          <h1
            key={slide.title}
            className="font-display max-w-3xl text-5xl leading-[1.05] sm:text-6xl lg:text-8xl"
          >
            {slide.title}
          </h1>

          <p
            key={slide.description}
            className="mt-7 max-w-xl text-base leading-7 text-white/80 sm:text-lg"
          >
            {slide.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#booking"
              className="rounded-full bg-[#c9a45c] px-7 py-4 text-sm font-semibold text-[#173f35] transition hover:bg-white"
            >
              Book Your Stay
            </a>

            <a
              href="#rooms"
              className="rounded-full border border-white/40 bg-white/5 px-7 py-4 text-sm font-semibold backdrop-blur-sm transition hover:bg-white hover:text-[#173f35]"
            >
              Explore Rooms
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setCurrent(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === current
                    ? "w-10 bg-[#c9a45c]"
                    : "w-5 bg-white/40"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="mr-2 text-sm text-white/70">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
              className="rounded-full border border-white/30 p-3 text-white transition hover:bg-white hover:text-[#173f35]"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="rounded-full border border-white/30 p-3 text-white transition hover:bg-white hover:text-[#173f35]"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}