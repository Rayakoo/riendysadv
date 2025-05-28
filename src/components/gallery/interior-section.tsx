"use client";
import Image from "next/image";
import { useState } from "react";

const interiorImages = [
  "/interior1.jpg", "/interior2.jpg", "/interior3.jpg", "/interior4.jpg", "/interior5.jpg",
  "/interior6.jpg", "/interior7.jpg", "/interior8.jpg", "/interior9.jpg", "/interior10.jpg",
  "/interior11.jpg", "/interior12.jpg", "/interior13.jpg", "/interior14.jpg", "/interior15.jpg", "/interior16.jpg",
  // tambahkan gambar lain jika ada
];

export default function InteriorSection() {
  const [visible, setVisible] = useState(10);

  const handleShowMore = () => {
    setVisible((prev) => Math.min(prev + 5, interiorImages.length));
  };

  return (
    <section className="mb-20">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-white text-center tracking-wide drop-shadow-lg uppercase">
        Interior
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {interiorImages.slice(0, visible).map((src, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200 transition-transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={idx % 4 * 80}
          >
            <Image
              src={src}
              alt={`Interior ${idx + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-[180px] md:h-[220px]"
            />
          </div>
        ))}
      </div>
      {visible < interiorImages.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="px-8 py-3 bg-yellow-100 text-black font-bold rounded-full shadow-lg hover:bg-yellow-200 transition"
          >
            Lihat Lainnya
          </button>
        </div>
      )}
    </section>
  );
}
