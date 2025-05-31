"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NeonSection from "@/components/gallery/neon-section";
import AcrylicSection from "@/components/gallery/acrylic-section";
import ExteriorSection from "@/components/gallery/exterior-section";
import InteriorSection from "@/components/gallery/interior-section";
import FurnitureSection from "@/components/gallery/furniture-section";
import LaserSection from "@/components/gallery/laser-section";

export default function GalleryPageClient() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-white drop-shadow-lg tracking-wide uppercase">
          Galeri Project Riendys Advertising
        </h1>
        <p className="text-center mb-16 text-gray-300 max-w-2xl mx-auto">
          Berikut beberapa galeri karya project{" "}
          <a
            href="https://riendysadv.com"
            className="text-white underline hover:text-gray-300 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Riendys Advertising
          </a>
          .
        </p>
        <section id="neon-section">
          <NeonSection />
        </section>
        <section id="acrylic-section">
          <AcrylicSection />
        </section>
        <section id="exterior-section">
          <ExteriorSection />
        </section>
        <section id="interior-section">
          <InteriorSection />
        </section>
        <section id="furniture-section">
          <FurnitureSection />
        </section>
        <section id="laser-section">
          <LaserSection />
        </section>
      </div>
    </div>
  );
}
