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
    href: "https://www.instagram.com/riendys_adv?igsh=MWw2d3pxODBsc2JmMw==",
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
  
  {
    href: "https://wa.me/6285738775587?text=halo%20riendysadv%20bantu%20saya%20dalam%20pemesanan",
    label: "WhatsApp",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.18-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.25-1.45l-.37-.22-3.69.96.98-3.59-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.3 0 1.34.99 2.63 1.13 2.81.14.18 1.95 2.98 4.73 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.89-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z" />
                </svg>
    ),
  },
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
            <span className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={120}
                height={60}
                className="object-contain"
                priority
              />
            </span>
            {/* Social icons for mobile (hamburger) */}
            <div className="flex md:hidden items-center gap-2 ml-2">
             <a
  href="instagram://user?username=riendys_adv"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
  className="w-8 h-8 flex items-center justify-center rounded-full border border-yellow-100 text-yellow-100 hover:bg-yellow-100 hover:text-[#191918] transition"
>
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
</a>

              <a
                href="https://wa.me/6285738775587?text=halo%20riendysadv%20bantu%20saya%20dalam%20pemesanan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.18-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.25-1.45l-.37-.22-3.69.96.98-3.59-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.3 0 1.34.99 2.63 1.13 2.81.14.18 1.95 2.98 4.73 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.89-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z" />
                </svg>
              </a>
            </div>
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