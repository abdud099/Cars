"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";

interface SectionProps {
  image: StaticImageData;
  tag: string;
  title: string;
  description: string;
}

const Section: React.FC<SectionProps> = ({ image, tag, title, description }) => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for the background image
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute w-full h-[120%] -z-10 will-change-transform"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4 p-6 md:p-24 text-white">
        <span className="uppercase text-sm tracking-wider opacity-80">
          {tag}
        </span>
        <h1 className="font-serif text-3xl md:text-5xl max-w-[25ch] leading-tight">
          {title}
        </h1>
        <p className="max-w-[50ch] text-sm md:text-base opacity-90">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Section;
