"use client";
import React from "react";

export default function CustomerServiceContact() {
  return (
    <section className="py-20 px-6 bg-black" data-aos="fade-up">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Contact Us</h2>
        <p className="text-gray-300 mb-8">
          Konsultasi gratis dan penawaran terbaik untuk kebutuhan video bisnis Anda.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
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
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            {/* SVG Customer Service Icon */}
            <span className="rounded-full bg-white p-2 flex items-center justify-center">
              <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="#FFD600" strokeWidth="3" fill="#fff" />
                <ellipse cx="24" cy="22" rx="10" ry="8" fill="#FFD600" />
                <ellipse cx="24" cy="36" rx="14" ry="6" fill="#FFD600" opacity="0.3" />
                <circle cx="19" cy="21" r="1.5" fill="#fff" />
                <circle cx="29" cy="21" r="1.5" fill="#fff" />
                <path d="M20 25c1.5 2 6.5 2 8 0" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <span className="text-lg font-semibold text-white">Customer Service Riendys Advertising</span>
          </div>
          <p className="text-gray-400 mt-2">WA / Telp: 0857-3877-5587</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-gray-300">Cek juga sosial media kami di sini:</span>
            <a
              href="https://www.instagram.com/riendys_adv?igsh=MWw2d3pxODBsc2JmMw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <span className="rounded-full bg-black p-1 flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17" cy="7" r="1" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
