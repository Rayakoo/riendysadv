"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/", match: ["/"] },
  { name: "Product", href: "/Product", match: ["/Product"] },
  { name: "Gallery", href: "/Gallery", match: ["/Gallery"] },
  { name: "About us", href: "/About", match: ["/About"] },
  { name: "Contacts", href: "/Contact", match: ["/Contact"] },
  { name: "Blog", href: "/Blog", match: ["/Blog"] },
];

const socialLinks = [
//   {
//     href: "https://facebook.com",
//     label: "Facebook",
//     icon: (
//       <svg
//         width="18"
//         height="18"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         viewBox="0 0 24 24"
//       >
//         <path d="M17 2.1V5.2a.7.7 0 0 0 .7.7h2.1v3.5h-2.8v9.5h-4.2v-9.5h-2.1V5.9h2.1V4.2C10.8 2.7 12.1 1.5 13.7 1.5h2.1v2.6h-2.1c-.2 0-.4.2-.4.4v1.4h2.5z" />
//       </svg>
//     ),
//   },
  {
    href: "https://www.instagram.com/riendys_adv?igsh=bmZ2a2JrMW5waHBq",
    label: "Instagram",
    icon: (
      <svg
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="1" />
      </svg>
    ),
  },
//   {
//     href: "https://youtube.com",
//     label: "YouTube",
//     icon: (
//       <svg
//         width="18"
//         height="18"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         viewBox="0 0 24 24"
//       >
//         <rect x="2" y="6" width="20" height="12" rx="4" />
//         <polygon points="10,9 16,12 10,15" fill="currentColor" />
//       </svg>
//     ),
//   },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    function handleClick(e: MouseEvent) {
      if (
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[#191918] border-b border-[#222] z-50" ref={navRef}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* Ganti SVG dengan gambar logo */}
            <span className="flex items-center">
              <Image
                src="/logo.jpg" // pastikan nama file di public adalah 'logo.jpg' (huruf kecil semua)
                alt="Logo"
                width={120}
                height={60}
                className="object-contain"
                priority
              />
            </span>
          </div>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden text-yellow-100 ml-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          {/* Nav Links */}
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-8 absolute md:static top-full left-0 w-full md:w-auto bg-[#191918] md:bg-transparent px-6 md:px-0 py-4 md:py-0`}
          >
            {navLinks.map((link) => {
              const isActive = link.match.some((m) => pathname === m);
              return (
                <li key={link.name} className="md:inline-block">
                  <Link
                    href={link.href}
                    className={`relative block px-2 py-1 font-medium transition-colors ${
                      isActive
                        ? "text-yellow-100"
                        : "text-white hover:text-yellow-100"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-100 rounded-md"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4 ml-8">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-yellow-100 text-yellow-100 hover:bg-yellow-100 hover:text-[#191918] transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </nav>
      {/* Announcement Bar */}
      <div className="sticky top-[60px] z-[49] w-full bg-yellow-100 text-black flex items-center justify-center px-4 py-2 shadow-md">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 w-full max-w-7xl mx-auto">
          <span className="font-semibold text-base sm:text-lg tracking-wide">
            Dapatkan{" "}
            <span className="font-bold">konsultasi</span> dan{" "}
            <span className="font-bold">desain gratis</span> sekarang
          </span>
          <a
            href="https://wa.me/6285738775587?text=halo%20riendysadv%20bantu%20saya%20dalam%20pemesanan"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline underline-offset-4 decoration-2 text-base sm:text-lg hover:text-green-700 transition"
            style={{ whiteSpace: "nowrap" }}
          >
            Konsultasi sekarang
          </a>
        </div>
      </div>
    </>
  );
}