"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";

import BgOverview from "@/../public/images/bg-overview.jpeg";
import BgInterior from "@/../public/images/bg-interior.jpeg";
import BgCharging from "@/../public/images/bg-charging.jpeg";
import BgConnectivity from "@/../public/images/bg-connectivity.jpeg";
import BgSafety from "@/../public/images/bg-safety.jpeg";

export default function Home() {
  useEffect(() => {
    // Ensure Lenis runs only on client-side
    if (typeof window !== "undefined") {
      const lenis = new Lenis();

      const animate = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);

      // Cleanup to destroy Lenis instance on unmount
      return () => {
        lenis.destroy();
      };
    }
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Overview Section */}
      <section>
        <Section
          image={BgOverview}
          tag="Overview"
          title="Elevate adventure in the luxury electric SUV of tomorrow."
          description="More space. More utility - All luxury. Feel the freedom to move as quickly as life comes. The world is yours, and every road is an invitation."
        />
      </section>

      {/* Interior Section */}
      <section>
        <Section
          image={BgInterior}
          tag="Interior"
          title="Interior space. Superior taste."
          description="Whether with family or flying solo, comfortably fit up to 7 with a roomy 3rd row, or fold the seats to reveal more space for what matters most."
        />
      </section>

      {/* Charging Section */}
      <section>
        <Section
          image={BgCharging}
          tag="Charging"
          title="Long distances in lightning speed."
          description="Go at the speed of Gravity with ultra-quick charging at over 300kW. Explore more beaches and beyond with less waiting and more convenient control."
        />
      </section>

      {/* Connectivity Section */}
      <section>
        <Section
          image={BgConnectivity}
          tag="Connectivity"
          title="Feel the world at your fingertips."
          description="A single tap transforms your cabin into a personal multi-sensory wellness space with curated content where each experience is custom-designed with an elegant combination of visuals, lighting, audio, temperature, and massage."
        />
      </section>

      {/* Safety Section */}
      <section>
        <Section
          image={BgSafety}
          tag="Safety"
          title="Designed for peace of mind."
          description="Welcome to DreamDrive, your elegantly advanced driver assistance system. That means more sensors and better radar. Day or night - rain or shine - rest assured that all angles are covered."
        />
      </section>
    </main>
  );
}
