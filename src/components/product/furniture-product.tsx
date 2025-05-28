"use client";
import Image from "next/image";

export default function FurnitureProduct() {
  return (
    <section className="py-16" data-aos="fade-up">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="flex-1">
          <Image
            src="/furniture1.jpg"
            alt="Furniture"
            width={500}
            height={350}
            className="rounded-2xl shadow-2xl object-cover w-full"
          />
        </div>
        <div
          className="flex-1"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-200">Furniture Custom</h2>
          <p className="text-lg text-gray-200">
            Kami melayani pembuatan furniture custom untuk kebutuhan kantor, toko, dan rumah. Desain modern, material berkualitas, dan pengerjaan profesional.
          </p>
        </div>
      </div>
    </section>
  );
}
