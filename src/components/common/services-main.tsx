"use client";
import Image from "next/image";

export default function ServicesMain() {
  // 8 faktor layanan utama
  const cards = [
    {
      img: "/service/quality.jpg",
      title: "Kualitas Terbaik",
      desc: "Kami menggunakan bahan berkualitas tinggi untuk memastikan neon box dan papan reklame tahan lama dan terlihat profesional.",
      
    },
    {
      img: "/service/price.jpg",
      title: "Harga Kompetitif",
      desc: "Kami menawarkan harga yang terjangkau tanpa mengorbankan kualitas hasil kerja kami.",
    },
    {
      img: "/service/good.jpg",
      title: "Tim Profesional",
      desc: "Tim ahli kami berpengalaman dalam pemasangan neon box dan papan reklame dengan hasil yang rapi dan tepat waktu.",
    },
    {
      img: "/service/time.jpg",
      title: "Pengiriman Tepat Waktu",
      desc: "Menjamin bahwa produk atau layanan dikirimkan sesuai dengan jadwal yang disepakati, memberikan kepercayaan lebih kepada pelanggan.",
    },
    {
      img: "/service/premium.jpg",
      title: "Material Berkualitas Tinggi",
      desc: "Menggunakan bahan-bahan terbaik, seperti akrilik, LED tahan lama, atau aluminium, yang menjamin daya tahan dan penampilan yang elegan.",
    },
    {
      img: "/service/service.jpg",
      title: "Layanan Pelanggan Responsif",
      desc: "Tim customer service yang cepat merespon pertanyaan dan kebutuhan pelanggan, memberikan pengalaman pelanggan yang lebih baik.",
    },
    {
      img: "/service/free.jpg",
      title: "Gratis Design",
      desc: "Kami memberikan layanan desain gratis untuk setiap pemesanan produk, sehingga Anda bisa mendapatkan hasil sesuai keinginan tanpa biaya tambahan.",
    },
    {
      img: "/service/warranty.jpg",
      title: "Garansi Kerusakan",
      desc: "Setiap produk yang kami buat mendapatkan garansi kerusakan, sehingga Anda tidak perlu khawatir jika terjadi masalah pada produk.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-black">Keunggulan Layanan Kami</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-xl p-8 flex flex-col items-center shadow-lg"
              data-aos="fade-up"
              data-aos-delay={(idx % 4) * 80}
            >
              <Image src={card.img} alt={card.title} width={64} height={64} className="rounded-3xl"/>
              <h3 className="text-xl font-semibold mt-4 mb-2 text-white">{card.title}</h3>
              <p className="text-gray-400 text-center">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
