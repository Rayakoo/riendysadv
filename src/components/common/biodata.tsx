"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stats = [
  { value: 2013, label: "Berdiri sejak" },
  { value: 614, label: "Custom akrilik" },
  { value: 568, label: "Pelanggan" },
  { value: 945, label: "Digital Printing" },
  { value: 8, label: "Tim Produksi" },
  { value: 1289, label: "Proyek Selesai" },
];

function useCountUp(target: number, duration = 1200) {
  const [count, setCount] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    let start: number | null = null;
    function animate(ts: number) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        raf.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    }
    raf.current = requestAnimationFrame(animate);
    return () => {
      if (raf.current !== null) {
        cancelAnimationFrame(raf.current);
      }
    };
  }, [target, duration]);

  return count;
}

export default function BiodataSection() {
  // Panggil useCountUp satu per satu, bukan di .map()
  const count0 = useCountUp(stats[0].value, 1200);
  const count1 = useCountUp(stats[1].value, 1200);
  const count2 = useCountUp(stats[2].value, 1200);
  const count3 = useCountUp(stats[3].value, 1200);
  const count4 = useCountUp(stats[4].value, 1200);
  const count5 = useCountUp(stats[5].value, 1200);

  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/tim3.jpg"
          alt="Background"
          fill
          className="object-cover"
          style={{ filter: "brightness(0.6)" }}
          priority
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center items-start mb-12 md:mb-0">
          <span className="text-yellow-100 font-semibold mb-2 text-lg">Berpengalaman lebih dari 10 tahun.</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Membuat dengan presisi dan<br />berkualitas.
          </h1>
          <a
            href="https://riendysadv.com"
            className="text-white font-bold underline underline-offset-4 decoration-2 text-lg hover:text-yellow-100 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            RIENDYSADV.COM
          </a>
        </div>
        {/* Right: Stats */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10 text-center">
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              {count0}
            </span>
            <span className="text-lg md:text-xl text-white/80 mt-1">{stats[0].label}</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              {count1}
            </span>
            <span className="text-lg md:text-xl text-white/80 mt-1">{stats[1].label}</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              {count2}
            </span>
            <span className="text-lg md:text-xl text-white/80 mt-1">{stats[2].label}</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              {count3}
            </span>
            <span className="text-lg md:text-xl text-white/80 mt-1">{stats[3].label}</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              {count4}
            </span>
            <span className="text-lg md:text-xl text-white/80 mt-1">{stats[4].label}</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              {count5}
            </span>
            <span className="text-lg md:text-xl text-white/80 mt-1">{stats[5].label}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
