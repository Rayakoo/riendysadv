"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function PortfolioMain() {
  const portfolioImages = [
    "/interior1.jpg",
    "/neon2.jpg",
    "/exterior3.jpg",
    "/furniture7.jpg",
    "/led1.jpg",
    "/timbul2.jpg",
    "/exterior1.jpg",
  ];
  const [currentPortfolio, setCurrentPortfolio] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPortfolio((prev) => (prev + 1) % portfolioImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [portfolioImages.length]);

  return (
    <section className="py-20 px-6 bg-black" data-aos="fade-up">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
          Gallery Project
        </h2>
        <p className="text-gray-300 mb-8">
          Beberapa hasil project Riendys Advertising untuk berbagai usaha, mulai
          dari signage, neon box, hingga furniture custom.
        </p>
        <div className="relative w-full max-w-xl mx-auto aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800">
          <Image
            src={portfolioImages[currentPortfolio]}
            alt={`Portfolio ${currentPortfolio + 1}`}
            layout="fill"
            objectFit="cover"
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {portfolioImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPortfolio(idx)}
                className={`w-3 h-3 rounded-full border border-white ${
                  currentPortfolio === idx ? "bg-white" : "bg-gray-700"
                }`}
                aria-label={`Go to gallery image ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
        <button
          className="mt-8 px-8 py-4 bg-white text-black font-bold rounded-full shadow-lg hover:bg-yellow-100 transition"
          onClick={() => (window.location.href = "/Gallery")}
        >
          Lihat Gallery
        </button>
      </div>
    </section>
  );
}
