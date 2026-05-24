"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroSectionProps {
  name: string;
  headings: string[];
  heroImage: string;
}

export default function HeroSection({ name, headings, heroImage }: HeroSectionProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % headings.length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, [headings.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src={heroImage}
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-secondary/60" />

      <div className="absolute inset-0 flex items-end">
        <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 pb-16 md:pb-24">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-bg leading-none tracking-tight">
            {name}
          </h1>
          <p
            className="mt-4 text-2xl md:text-3xl font-light text-primary transition-opacity duration-400"
            style={{ opacity: visible ? 1 : 0 }}
          >
            {headings[index]}
          </p>
        </div>
      </div>
    </section>
  );
}
