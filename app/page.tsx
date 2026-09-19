"use client";

import HeroSection from "@/components/HeroSection";
import ChooseImage from "@/components/ChooseImage";
import ServicesSection from "@/components/ServicesSection";
import { CallToAction, SecondCTA } from "@/components/CallToAction";
import ProjectsGallery from "@/components/ProjectsGallery";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <ChooseImage />
        <ServicesSection />
        <CallToAction />
        <ProjectsGallery />
        <BlogSection />
        <FAQSection />
        <SecondCTA />
      </main>
    </div>
  );
}
