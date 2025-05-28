"use client";
import NeonboxProduct from "@/components/product/neonbox-product";
import AcrylicProduct from "@/components/product/acrylic-product";
import ExteriorProduct from "@/components/product/exterior-product";
import FurnitureProduct from "@/components/product/furniture-product";
import LaserProduct from "@/components/product/laser-product";
import InteriorProduct from "@/components/product/interior-product";

export default function Product() {
  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <div className="max-w-5xl mx-auto px-4 pt-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-wide mt-8">
          Produk Unggulan Kami
        </h1>
        <p className="text-lg text-gray-300 text-center mb-8 mt-5 max-w-2xl mx-auto">
          Temukan berbagai produk terbaik dari Riendys Advertising! Kami menawarkan
          solusi kreatif dan inovatif untuk kebutuhan promosi dan branding bisnis
          Anda. Mulai dari neon box, acrylic, signage exterior & interior, laser
          cutting, hingga furniture custom, semua dikerjakan dengan kualitas
          terbaik dan desain eksklusif. Pilih produk yang sesuai kebutuhan Anda dan
          jadikan bisnis Anda lebih menonjol!
        </p>
        <NeonboxProduct />
         <FurnitureProduct />
        <AcrylicProduct />
 <InteriorProduct />
        <ExteriorProduct />
       
        <LaserProduct />
       
      </div>
    </div>
  );
}