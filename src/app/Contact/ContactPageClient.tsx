"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MapsContact from "@/components/contact/maps-contact";
import FaqContact from "@/components/contact/faq-contact";
import CustomerServiceContact from "@/components/contact/customer-service-contact";

export default function ContactPageClient() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <MapsContact />
      <CustomerServiceContact />
      <FaqContact />
    </div>
  );
}
