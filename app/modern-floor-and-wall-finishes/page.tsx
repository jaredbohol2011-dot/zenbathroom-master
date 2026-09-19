"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { ServiceNavButtons } from "@/components/ui/ServiceNavButtons";
const finishesFeatures = [
  {
    title: "Microcement",
    subtitle: "",
    image:
      "modern_finishes/rn_image_picker_lib_temp_e5d073d8-3c06-4f71-bb99-69f481531091.jpg",
    description:
      "Seamless microcement finishes that create a modern, industrial look with excellent waterproof properties and minimal maintenance requirements.",
  },
  {
    title: "Epoxy floor",
    subtitle: "",
    image:
      "modern_finishes/rn_image_picker_lib_temp_6d8409fb-8551-4e7e-ba8d-8da319a3ec70.jpg",
    description:
      "Durable epoxy floor coatings that provide a glossy, seamless surface resistant to water, stains, and heavy foot traffic.",
  },
  {
    title: "Venetian plaster",
    subtitle: "",
    image: "modern_finishes/image3.jpg",
    description:
      "Luxurious Venetian plaster finishes that add depth and elegance with their smooth, marble-like appearance and natural variations.",
  },
  {
    title: "Glass panels",
    subtitle: "",
    image: "modern_finishes/image4.jpg",
    description:
      "Contemporary glass panel solutions that create bright, spacious environments while providing easy-to-clean, hygienic surfaces.",
  },
];

const ModernFinishesPage = () => {
  const router = useRouter();

  const handleCallClick = () => {
    window.location.href = "tel:+0894219421";
  };

  const handleMessageClick = () => {
    router.push("/contact");
  };

  return (
    <div className="min-h-screen w-full section-mobile-full">
      <ServiceNavButtons />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[50vh] lg:min-h-[55vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/modern_finishes/hero.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-primary/10 backdrop-blur-[1px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
              Modern Floor and Wall Finishes
            </h1>
            <div className="w-24 md:w-32 h-1 bg-accent mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Service Description */}
          <div className="mb-12 md:mb-20 animate-fade-in text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
              Alternative Wall and Floor Finishes
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                If you're looking for something different from traditional
                tiles, we offer a range of alternative materials for your
                bathroom floors and walls. From waterproof wall panels and
                microcement finishes to vinyl flooring and other innovative
                solutions, we can create a unique look that suits your style and
                lifestyle. Our team will guide you through the options to find
                the perfect materials that combine practicality, durability, and
                beautiful design for your new bathroom.
              </p>
            </div>
          </div>

          {/* Mobile Layout - Stacked with Card Design */}
          <div className="block lg:hidden space-y-12">
            {finishesFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    {/* Image with Card Styling */}
                    <div className="relative group mb-6 w-full max-w-lg">
                      <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-2xl">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all duration-300" />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-4 max-w-lg">
                      <h3 className="text-3xl font-bold text-primary">
                        {feature.title}
                      </h3>
                      {feature.subtitle && (
                        <p className="text-xl text-accent font-semibold">
                          {feature.subtitle}
                        </p>
                      )}
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="pt-2">
                        <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout - 2x2 Grid with Uniform Card Sizing */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
            {finishesFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="animate-slide-up h-full"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 h-full">
                  <div className="flex items-center gap-8 h-full">
                    {/* Image with Premium Styling - Fixed Size */}
                    <div className="relative group flex-shrink-0 w-64">
                      <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-2xl">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all duration-300" />
                      </div>
                    </div>

                    {/* Text Content - Takes remaining space and centers vertically */}
                    <div className="space-y-4 flex-1 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold text-primary">
                        {feature.title}
                      </h3>
                      {feature.subtitle && (
                        <p className="text-xl text-accent font-semibold">
                          {feature.subtitle}
                        </p>
                      )}
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="pt-2">
                        <div className="w-16 h-1 bg-accent rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Ready to Transform Your Surfaces?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Get a free consultation and quote for your modern finishes
              project. Our experts are ready to create unique, durable surfaces
              for your bathroom.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="hero"
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
                onClick={handleCallClick}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call for Free Quote
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={handleMessageClick}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModernFinishesPage;
