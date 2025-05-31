"use client";
import Image from "next/image";
import { useState } from "react";

const neonImages = [
  "/Neon1.jpg", "/neon2.jpg", "/neon3.jpg", "/neon4.jpg", "/neon5.jpg",
  "/neon6.jpg", "/neon7.jpg", "/neon8.jpg", "/neon9.jpg", "/neon10.jpg",
  "/neon11.jpg", "/neon12.jpg", "/neon13.jpg", "/neon14.jpg", "/neon15.jpg",
  "/neon16.jpg", "/neon17.jpg", "/neon18.jpg", "/neon19.jpg", "/neon20.jpg",
  "/neon21.jpg", "/neon22.jpg", "/neon23.jpg", "/neon24.jpg", "/neon25.jpg",
  "/neon26.jpg", "/neon27.jpg", "/neon28.jpg", "/neon29.jpg", "/neon30.jpg",
  "/neon31.jpg", "/neon32.jpg", "/neon33.jpg", "/neon34.jpg", "/neon35.jpg",
  // tambahkan gambar lain jika ada
];

export default function NeonSection() {
  const [visible, setVisible] = useState(8);
  const [preview, setPreview] = useState<string | null>(null);

  const handleShowMore = () => {
    setVisible((prev) => Math.min(prev + 4, neonImages.length));
  };

  return (
    <section className="mb-20">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-white text-center tracking-wide drop-shadow-lg uppercase">
        Neon Box
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {neonImages.slice(0, visible).map((src, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200 transition-transform hover:scale-105 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay={idx % 4 * 80}
            onClick={() => setPreview(src)}
          >
            <Image
              src={src}
              alt={`Neon Box ${idx + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-[180px] md:h-[220px]"
            />
          </div>
        ))}
      </div>
      {visible < neonImages.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="px-8 py-3 bg-yellow-100 text-black font-bold rounded-full shadow-lg hover:bg-yellow-200 transition"
          >
            Lihat Lainnya
          </button>
        </div>
      )}
      {/* Modal Preview */}
      {preview && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80"
          onClick={() => setPreview(null)}
        >
          <div className="relative max-w-full max-h-full p-4">
            <img
              src={preview}
              alt="Preview"
              className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
            <button
              className="absolute top-2 right-2 bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center text-2xl"
              onClick={() => setPreview(null)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
