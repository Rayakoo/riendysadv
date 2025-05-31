"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroMain from "@/components/common/hero-main";
import VideoMain from "@/components/common/video-main";
import ServicesMain from "@/components/common/services-main";
import ProductsMain from "@/components/common/products-main";
import PortfolioMain from "@/components/common/portfolio-main";
import AboutMain from "@/components/common/about-main";
import ContactMain from "@/components/common/contact-main";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <HeroMain />
      <VideoMain />
      <ProductsMain />
      <ServicesMain />
      
      <PortfolioMain />
      <AboutMain />
      <ContactMain />
    </div>
  );
}