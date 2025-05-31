"use client";
import { useState, useEffect } from "react";

export default function VideoMain() {
  const videoList = [
    "/video1.mp4",
    "/video2.mp4",
    "/video6.mp4",
    "/video4.mp4", 
    
    // tambahkan video lain jika ada
  ];
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videoList.length);
    }, 26000);
    return () => clearInterval(interval);
  }, [videoList.length]);

  return (
    <section className="py-16 px-6 bg-black" data-aos="fade-up">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Video Proses Pengerjaan</h2>
        <p className="text-gray-300 mb-8">
          Proses pengerjaan dilakukan secara profesional , detail dan teliti untuk menghasilkan produk yang berkualitas tinggi.
        </p>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800 mx-auto max-w-3xl bg-black">
          <video
            key={currentVideo}
            src={videoList[currentVideo]}
            controls={false}
            autoPlay
            muted
            loop={false}
            className="object-cover w-full h-full"
            onEnded={() => setCurrentVideo((prev) => (prev + 1) % videoList.length)}
          />
          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {videoList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentVideo(idx)}
                className={`w-3 h-3 rounded-full border border-white ${currentVideo === idx ? "bg-white" : "bg-gray-700"}`}
                aria-label={`Go to video ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
