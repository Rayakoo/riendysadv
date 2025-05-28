import React from "react";
import Image from "next/image";

const Footer = () => (
  <footer className="bg-black border-t border-gray-800 text-white py-10 px-6" data-aos="fade-up">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
      <div className="flex flex-col items-start gap-4">
        {/* Logo */}
        <Image
          src="/logo.jpg"
          alt="Riendys Advertising Logo"
          width={120}
          height={60}
          className="object-contain mb-2"
        />
        {/* Alamat */}
        <div className="text-gray-300 text-sm leading-relaxed">
          Jln. Joyo Agung Atas, Perum Grand Soeroso 2 No.Kavling 11, Merjosari,<br />
          Kec. Lowokwaru, Kota Malang,<br />
          Jawa Timur 65144
        </div>
        {/* WhatsApp */}
        <div className="mt-2 text-yellow-100 font-semibold text-base">
          WhatsApp: <a href="https://wa.me/6285738775587?text=halo%20riendysadv%20bantu%20saya%20dalam%20pemesanan" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-300">0857-3877-5587</a>
        </div>
        {/* Maps Button */}
        <a
          href="https://maps.app.goo.gl/CGon1GAK8r3PJGDt6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold shadow transition"
        >
          Lihat Lokasi di Google Maps
        </a>
      </div>
      <div className="mt-8 md:mt-0 flex-1 flex flex-col items-end justify-between">
        <div className="text-gray-500 text-right">
          {/* Bisa tambahkan info lain di sini jika perlu */}
        </div>
        <div className="mt-8 text-yellow-100 font-semibold text-sm text-right w-full md:w-auto">
          © 2025 riendysadv. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;