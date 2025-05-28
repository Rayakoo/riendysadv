"use client";
import Image from "next/image";

export default function AboutMain() {
  return (
    <section className="py-20 px-6 bg-black relative overflow-hidden" data-aos="fade-up">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/kencana.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="object-cover"
          style={{ opacity: 0.65 }}
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Tentang Riendys Advertising</h2>
          <p className="text-gray-300 mb-6">
            Riendys Advertising adalah perusahaan yang berfokus pada solusi promosi dan branding untuk berbagai usaha. Dengan pengalaman lebih dari 10 tahun, kami telah membantu banyak klien meningkatkan visibilitas dan daya tarik bisnis mereka melalui produk-produk kreatif dan inovatif.
          </p>
          <ul className="text-gray-400 space-y-2 mb-8">
            <li>✓ Tim kreatif & profesional</li>
            <li>✓ Proses cepat & hasil berkualitas</li>
            <li>✓ Harga transparan & konsultasi gratis</li>
          </ul>
          <a
            href="https://wa.me/6285738775587?text=halo%20riendysadv%20bantu%20saya%20dalam%20pemesanan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            Konsultasi Sekarang
          </a>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800">
            <Image
              src="/tim1.jpg"
              alt="Tim Kami"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
