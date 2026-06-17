"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const heroConfig = {
  name: "Jesslyn Chiunardy",
  headings: [
    "Graphic Designer",
    "Experiential Marketing",
  ],
  heroImage: "/Chiunery Web Banner.png",
};

export default function HeroSection() {
  const { name, headings, heroImage } = heroConfig;
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [textOpacity, setTextOpacity] = useState(1);

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

  useEffect(() => {
    const handleScroll = () => {
      const fadeOver = window.innerHeight * 0.4;
      setTextOpacity(Math.max(0, 1 - window.scrollY / fadeOver));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-full w-full overflow-hidden">
      <Image
        src={heroImage}
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: textOpacity }}
      >
        <div className="w-full max-w-360 mx-auto px-8 md:px-16 flex flex-col items-center">
          <div className="w-full text-center md:w-fit md:text-left">
            <h1 className="text-6xl md:text-6xl font-bold text-black leading-none tracking-tight">
              {name}
            </h1>
            <p
              className="ml-1 mt-1 text-2xl md:text-2xl font-light text-primary"
              style={{ opacity: visible ? 1 : 0, transition: "opacity 0.4s" }}
            >
              {headings[index]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
