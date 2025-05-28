"use client";
import Image from "next/image";

export default function NeonboxProduct() {
  return (
    <section className="py-16" data-aos="fade-up">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <Image
            src="/neon1.jpg"
            alt="Neon Box"
            width={500}
            height={350}
            className="rounded-2xl shadow-2xl object-cover w-full"
          />
        </div>
        <div
          className="flex-1"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-200">Neon Box</h2>
          <p className="text-lg text-gray-200">
            Neon box adalah media promosi dengan pencahayaan LED yang sangat menarik perhatian, cocok untuk branding toko, kantor, atau usaha Anda. Tersedia berbagai bentuk dan ukuran sesuai kebutuhan.
          </p>
        </div>
      </div>
    </section>
  );
}
