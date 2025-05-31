import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/main-navbar";
import Footer from "@/components/common/footer";
import WhatsappBtn from "@/components/common/whatsapp-btn";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Riendys Advertising",
    template: "%s | Riendys Advertising",
  },
  description: "Riendys Advertising adalah perusahaan yang berfokus pada solusi promosi dan branding untuk berbagai usaha. menyediakan neonbox , laser cut , furniture , exterior dan interior.",
  openGraph: {
    title: "Riendys Advertising",
    description:
      "Riendys Advertising adalah perusahaan yang berfokus pada solusi promosi dan branding untuk berbagai usaha. menyediakan neonbox , laser cut , furniture , exterior dan interior.",
    url: "https://riendysadvertising.com",
    siteName: "Riendys Advertising",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Riendys Advertising",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        
       
        {children}
        <WhatsappBtn />
        <Footer />
      </body>
    </html>
  );
}
