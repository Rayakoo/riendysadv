"use client";

export default function AnnouncementBar() {
  return (
    <div className="sticky top-0 z-[60] w-full bg-yellow-100 text-black flex items-center justify-center px-4 py-2 shadow-md">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 w-full max-w-7xl mx-auto">
        <span className="font-semibold text-base sm:text-lg tracking-wide">
          Dapatkan <span className="font-bold">konsultasi</span> dan <span className="font-bold">desain gratis</span> sekarang
        </span>
        <a
          href="https://wa.me/085738775587"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline underline-offset-4 decoration-2 text-base sm:text-lg hover:text-green-700 transition"
          style={{ whiteSpace: "nowrap" }}
        >
          Konsultasi sekarang
        </a>
      </div>
    </div>
  );
}
