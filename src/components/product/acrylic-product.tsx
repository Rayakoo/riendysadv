"use client";
import Image from "next/image";

export default function AcrylicProduct() {
  return (
    <section className="py-16" data-aos="fade-up">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <Image
            src="/acrylic1.jpg"
            alt="Acrylic"
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-200">Acrylic</h2>
          <p className="text-lg text-gray-200">
            Produk acrylic kami meliputi huruf timbul, display, plakat, dan berbagai kebutuhan promosi dengan bahan acrylic berkualitas, hasil potong rapi dan presisi.
          </p>
        </div>
      </div>
    </section>
  );
}
