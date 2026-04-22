"use client";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ThemeProvider } from "@/components/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-navy-900 text-gray-900 dark:text-white font-body selection:bg-gold-500/30 selection:text-gold-600 dark:selection:text-gold-400 transition-colors duration-300">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
