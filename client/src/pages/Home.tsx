import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import SpecialsSection from "@/components/SpecialsSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Custom CSS for the page
    const style = document.createElement('style');
    style.innerHTML = `
      html {
        scroll-behavior: smooth;
      }
      body {
        font-family: 'Lato', sans-serif;
        color: #333333;
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: 'Playfair Display', serif;
      }
      .font-script {
        font-family: 'Pacifico', cursive;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <SpecialsSection />
      <MenuSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
