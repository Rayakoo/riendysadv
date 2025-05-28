"use client";

export default function ContactMain() {
  return (
    <section className="py-20 px-6 bg-black" data-aos="fade-up">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Contact Us</h2>
        <p className="text-gray-300 mb-8">
          Konsultasi gratis dan penawaran terbaik untuk kebutuhan video bisnis Anda.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href="https://wa.me/6285738775587?text=halo%20riendysadv%20bantu%20saya%20dalam%20pemesanan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            WhatsApp
          </a>
          <a
            href="tel:+6285738775587"
            className="bg-gray-900 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-700 transition border border-white"
          >
            Telepon Langsung
          </a>
        </div>
        <p className="mt-8 text-gray-400">WA / Telp: 0857-3877-5587</p>
      </div>
    </section>
  );
}
