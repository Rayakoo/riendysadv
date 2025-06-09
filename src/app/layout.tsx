import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/main-navbar";
import Footer from "@/components/common/footer";
import WhatsappBtn from "@/components/common/whatsapp-btn";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import Script from "next/script";



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
    default: "Riendys Advertising - Neonbox & Acrylic Malang",
    template: "%s | Riendys Advertising",
  },
  description:
    "Riendys Advertising adalah perusahaan yang berfokus pada solusi branding dan promosi. Kami menyediakan neonbox, acrylic, laser cut, furniture, serta desain interior dan eksterior di Malang.",
  keywords: ["neonbox", "acrylic", "laser cut", "branding", "Malang", "advertising"],
  openGraph: {
    title: "Riendys Advertising - Neonbox & Acrylic Malang",
    description:
      "Riendys Advertising menyediakan jasa neonbox, acrylic, laser cut, dan branding terbaik di Malang. Hubungi kami untuk solusi promosi yang efektif!",
    url: "https://riendysadvertising.com",
    siteName: "Riendys Advertising",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Riendys Advertising - Neonbox & Acrylic Malang",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riendys Advertising - Neonbox & Acrylic Malang",
    description:
      "Riendys Advertising adalah solusi terbaik untuk branding dan promosi bisnis Anda di Malang. Kami menyediakan neonbox, acrylic, laser cut, dan desain interior.",
    images: ["/logo.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-KSNBCMGZ" />
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KSNBCMGZ');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KSNBCMGZ"
            style={{ display: "none", visibility: "hidden", height: 0, width: 0 }}
          ></iframe>
        </noscript>
        <Navbar />
        
       
        {children}
        <WhatsappBtn />
        <Footer />
      </body>
       <GoogleAnalytics gaId="G-G6S12V5XJW" />
    </html>
  );
}
