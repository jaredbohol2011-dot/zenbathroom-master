"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Service Images
import tilingImage from "../public/tiling/rn_image_picker_lib_temp_de268bc5-bb86-477c-b3a0-898f295bac03.jpg";
import plumbingImage from "../public/plumbing/plumbing_2.jpg";
import electricalImage from "../public/electrical_works/hero.png";
import modernFinishesImage from "../public/modern_finishes/hero.jpg";
import cabinetDesignImage from "../public/bathroom_cabinet_design/hero.jpg";
import freeQuoteImage from "../public/free_quote/rn_image_picker_lib_temp_2cd44738-e63c-49ad-9a08-5d03afbcfbbe.png";
const services = [
  {
    title: "Tiling",
    image: tilingImage,
    description:
      "Professional tile installation for floors, walls, and backsplashes with precision and attention to detail.",
    route: "/tiling",
  },
  {
    title: "Plumbing",
    image: plumbingImage,
    description:
      "Complete plumbing services including fixture installation, pipe work, and water system optimization.",
    route: "/plumbing",
  },
  {
    title: "Electrical Works",
    image: electricalImage,
    description:
      "Safe and reliable electrical installations, including lighting, ventilation systems and smart tech integration.",
    route: "/electrical-works",
  },
  {
    title: "Modern Floor and wall Finishes",
    image: modernFinishesImage,
    description:
      "Alternative  flooring and wall finishing solutions that transform your bathroom space.",
    route: "/modern-floor-and-wall-finishes",
  },
  {
    title: "Bathroom cabinet design",
    image: cabinetDesignImage,
    description:
      "Custom bathroom cabinetry design and installation for optimal storage and aesthetics.",
    route: "/bathroom-cabinet-design",
  },
  {
    title: "Free Consultation and Quote",
    image: freeQuoteImage,
    description:
      "Get expert guidance from concept to completion with transparent pricing and personalized material selection.",
    route: "/free-consultation-and-quote",
  },
];

const ServicesSection = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  // Touch/Swipe state
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  // Check if mobile on mount
  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkIsMobile();
    const handleResize = () => checkIsMobile();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Manual navigation with smooth transition
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Touch/Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isMobile || !touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      // Swipe left - go to next slide
      nextSlide();
    } else if (isRightSwipe) {
      // Swipe right - go to previous slide
      prevSlide();
    }
  };

  return (
    <section className="py-5 md:py-10 bg-background">
      <div className="container mx-auto px-4">
        {/* Card Container wrapping all content */}
        <div className="bg-card rounded-2xl p-6 md:p-8 lg:p-12 shadow-soft hover:shadow-elegant transition-all duration-300">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
              Our Services
            </h2>
            <h3
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: "300" }}
            >
              Professional bathroom renovation services designed to transform
              your space
            </h3>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/15 hover:bg-white/50 shadow-soft hover:shadow-elegant transition-all duration-300 h-10 w-10 md:h-12 md:w-12 disabled:opacity-50"
              onClick={prevSlide}
              disabled={isTransitioning}
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/15 hover:bg-white/50 shadow-soft hover:shadow-elegant transition-all duration-300 h-10 w-10 md:h-12 md:w-12 disabled:opacity-50"
              onClick={nextSlide}
              disabled={isTransitioning}
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </Button>

            {/* Carousel Content */}
            <div className="overflow-hidden rounded-lg">
              {/* Mobile View - Single Image */}
              <div className="block md:hidden">
                <div className="relative w-full">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    {services.map((service, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div
                          className="relative group cursor-pointer"
                          onClick={() => router.push(service.route)}
                        >
                          <div className="aspect-[4/3] overflow-hidden rounded-lg">
                            <Image
                              src={service.image}
                              alt={service.title}
                              loading="lazy"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0  transition-all duration-300" />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                            <p className="text-xl md:text-2xl font-bold text-white mb-2">
                              {service.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop View - Three Images */}
              <div className="hidden md:block">
                <div className="relative w-full">
                  <div
                    className="flex transition-transform duration-500 ease-in-out gap-6"
                    style={{
                      transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                    }}
                  >
                    {/* Render all services for smooth infinite scroll */}
                    {[...services, ...services, ...services].map(
                      (service, globalIndex) => {
                        const serviceIndex = globalIndex % services.length;
                        return (
                          <div
                            key={`${serviceIndex}-${globalIndex}`}
                            className="w-1/3 flex-shrink-0 group cursor-pointer"
                            onClick={() => router.push(service.route)}
                          >
                            <div className="relative">
                              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                                <Image
                                  src={service.image}
                                  alt={service.title}
                                  loading="lazy"
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-all duration-300" />
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                                <h3 className="text-lg lg:text-xl font-bold text-white mb-2">
                                  {service.title}
                                </h3>
                                <p className="text-white/90 text-sm lg:text-base leading-relaxed">
                                  {}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 md:mt-8 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-primary/30 hover:bg-primary/50",
                    isTransitioning && "pointer-events-none"
                  )}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
