"use client";

import React, { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const banners = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80", // Cyberpunk Microchip & Tech Circuit
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80", // Futuristic Neon Geometric Tech Abstract
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80", // Digital Matrix & Cyber Security Code
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80", // High-Tech Server Room & AI Core
  "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1600&q=80", // Web3, Blockchain & Quantum Computing
  "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=1600&q=80"  // Modern Software Developer Coding Setup
];

export default function BannerSlider() {
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 }, 
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 md:px-0">
      <div
        className="relative overflow-hidden rounded-2xl md:rounded-3xl mt-4 border border-zinc-800/50 shadow-2xl shadow-black/40 group"
        ref={emblaRef}
      >
        <div className="flex">
          {banners.map((banner, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] h-[180px] sm:h-[280px] md:h-[420px] lg:h-[480px] w-full bg-zinc-950"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 z-10 pointer-events-none" />
              
              <Image
                src={banner}
                alt={`Premium Banner ${index + 1}`}
                fill
                priority={index === 0}
                className="object-fill object-center transition-transform duration-700 select-none"
                unoptimized // এক্সটার্নাল ইমেজ যদি নেক্সটজেএস-এ রেন্ডার হতে সমস্যা করে
              />
            </div>
          ))}
        </div>

        {/* মডার্ন গ্লাস-মরফিজম নেভিগেশন বাটন (গ্রুপ হোভারে স্লাইড ইন হবে) */}
        {/* Previous Button */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-white/10 text-white/80 hover:text-white p-3 backdrop-blur-md shadow-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-auto hidden md:flex items-center justify-center"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-white/10 text-white/80 hover:text-white p-3 backdrop-blur-md shadow-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-auto hidden md:flex items-center justify-center"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* আল্ট্রা-মডার্ন ডট ইন্ডিকেটরস (ক্যাপসুল স্টাইল) */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5 z-20 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? "w-6 bg-gradient-to-r from-pink-500 to-indigo-500 shadow-md shadow-pink-500/20"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}