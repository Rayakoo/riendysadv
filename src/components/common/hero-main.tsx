"use client";
import Image from "next/image";
import { useState } from "react";

export default function HeroMain() {
  const images = ["/tim5.jpg", "/tim6.jpg", "/tim7.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <section
      className="w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto"
      data-aos="fade-up"
    >
       
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center">
                    <Image
                      src="/logo.jpg"
                      alt="Logo"
                      width={340}
                      height={120}
                      className="object-contain"
                      priority
                    />
                  </span>
                 
          </div>
          <span className="text-white">Solusi Advertising</span>
          <br />
          <span className="text-gray-400">Untuk Bisnis Anda</span>
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-lg text-center ">
          Riendys Advertising siap membantu usaha Anda tampil menonjol dengan
          berbagai produk promosi seperti neon box, signage, acrylic, furniture
          custom, dan banyak lagi. Percayakan kebutuhan branding dan promosi Anda
          pada tim profesional kami!
        </p>
        <a
          href="https://wa.me/6285738775587?text=halo%20riendysadv%20bantu%20saya%20dalam%20pemesanan"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          Konsultasi Gratis
        </a>
        {/* SLIDER HERO MOBILE */}
        <div className="w-full flex justify-center items-center mt-8 md:hidden">
          <div className="relative w-full max-w-[95vw] sm:max-w-[400px] h-[220px] sm:h-[280px] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800 bg-black">
            <Image
              src={images[currentImage]}
              alt="Hero"
              layout="fill"
              objectFit="cover"
              className="object-cover"
              priority
            />
            {/* Tombol prev/next */}
            <button
              onClick={() =>
                setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-200 text-black rounded-full w-9 h-9 flex items-center justify-center z-10 shadow-lg transition"
              aria-label="Previous"
              style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M17 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-200 text-black rounded-full w-9 h-9 flex items-center justify-center z-10 shadow-lg transition"
              aria-label="Next"
              style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M11 5l7 7-7 7" />
              </svg>
            </button>
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-3 h-3 rounded-full border border-white ${
                    currentImage === idx ? "bg-white" : "bg-gray-700"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* SLIDER HERO DESKTOP */}
      <div className="flex-1 flex justify-center items-center mt-12 md:mt-0 hidden md:flex">
        <div className="relative w-full max-w-[600px] h-[420px] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800 bg-black">
          <Image
            src={images[currentImage]}
            alt="Hero"
            layout="fill"
            objectFit="cover"
            className="object-cover"
            priority
          />
          {/* Tombol prev/next */}
          <button
            onClick={() =>
              setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-200 text-black rounded-full w-12 h-12 flex items-center justify-center z-10 shadow-lg transition"
            aria-label="Previous"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
          >
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M17 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-200 text-black rounded-full w-12 h-12 flex items-center justify-center z-10 shadow-lg transition"
            aria-label="Next"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
          >
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M11 5l7 7-7 7" />
            </svg>
          </button>
          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`w-3 h-3 rounded-full border border-white ${
                  currentImage === idx ? "bg-white" : "bg-gray-700"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
