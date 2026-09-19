"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { ServiceNavButtons } from "@/components/ui/ServiceNavButtons";

const tilingFeatures = [
  {
    title: "Large format tiles",
    subtitle: "260*120",
    image:
      "/tiling/rn_image_picker_lib_temp_533a4acd-91e0-481b-81d0-b713fab18504.jpg",
    description:
      "Modern large format tiles create a sleek, contemporary look with fewer grout lines for easier maintenance.",
  },
  {
    title: "Metro tiles",
    subtitle: "",
    image:
      "/tiling/rn_image_picker_lib_temp_2c0902ed-f18c-4931-a264-4ab5f9ed06eb.jpg",
    description:
      "Classic subway-style tiles that bring timeless elegance to any bathroom design.",
  },
  {
    title: "Mitered tiles",
    subtitle: "",
    image:
      "/tiling/rn_image_picker_lib_temp_dbd8f7ff-a823-4d0a-ac09-8e49025d11d4.jpg",
    description:
      "Professional mitered edges create seamless corners and a premium finished appearance.",
  },
  {
    title: "Mosaic tiles",
    subtitle: "",
    image:
      "/tiling/rn_image_picker_lib_temp_6ced9d54-01fd-4c33-b630-11d47e75ffd5.webp",
    description:
      "Intricate mosaic patterns add texture and visual interest to feature walls and accents.",
  },
];

const TilingPage = () => {
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
            backgroundImage: `url(/tiling/rn_image_picker_lib_temp_de268bc5-bb86-477c-b3a0-898f295bac03.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-primary/10 backdrop-blur-[1px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
              Tiling Service
            </h1>
            <div className="w-24 md:w-32 h-1 bg-accent mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Service Description with Custom Ceramic Sink */}
          <div className="mb-12 md:mb-20 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
              About our tiling services
            </h2>
            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20 max-w-7xl mx-auto">
              {/* Left - Service Description */}
              <div className="lg:flex-1">
                <p className="text-base md:text-lg text-foreground leading-relaxed mb-8 lg:mb-0">
                  As part of our bathroom renovation services, we offer expert
                  tiling to complete your new space to the highest standard.
                  From helping you choose tiles that suit your design and
                  lifestyle to ensuring precise installation with a flawless
                  finish, we handle every detail with care. We use the latest
                  generation of professional tools to achieve accurate cuts and
                  perfect alignment, ensuring exceptional results every time.
                  Our professional team delivers durable, high-quality tiling
                  that not only looks beautiful but also stands the test of
                  time, bringing your dream bathroom to life.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Stacked with Premium Card Design */}
          <div className="block lg:hidden space-y-12">
            {tilingFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 h-[600px] flex flex-col">
                  <div className="flex flex-col items-center text-center h-full">
                    {/* Image with Premium Card Styling */}
                    <div className="relative group mb-6 w-full max-w-lg flex-shrink-0">
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
                    <div className="space-y-4 max-w-lg flex-grow flex flex-col justify-center">
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

            {/* Custom Ceramic Sink for Mobile with Premium Card Design */}
            <div className="animate-slide-up">
              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 h-[600px] flex flex-col">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="relative group mb-6 w-full max-w-lg flex-shrink-0">
                    <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-2xl">
                      <img
                        src="/tiling/rn_image_picker_lib_temp_be582003-58f6-4737-aa5b-f6c0b93cd4a5.jpg"
                        alt="Custom ceramic sink"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all duration-300" />
                    </div>
                  </div>
                  <div className="space-y-4 max-w-lg flex-grow flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-primary">
                      Custom ceramic sink
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Bespoke ceramic fixtures perfectly integrated with your
                      tiling design for a cohesive look.
                    </p>
                    <div className="pt-2">
                      <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - 2x2 Grid with Premium Card Design and Fixed Heights */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
            {tilingFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 h-[400px] flex">
                  <div className="flex items-center gap-8 w-full">
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

          {/* Fifth Item - Large Format on Desktop */}
          {tilingFeatures.length > 4 && (
            <div className="hidden lg:block mt-20">
              <div
                className="animate-slide-up flex items-center gap-12 max-w-7xl mx-auto"
                style={{ animationDelay: `${4 * 0.2}s` }}
              >
                {/* Image - Much Larger */}
                <div className="relative group flex-shrink-0 w-[500px]">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-2xl">
                    <img
                      src={tilingFeatures[4].image}
                      alt={tilingFeatures[4].title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all duration-300" />
                  </div>
                </div>

                {/* Text Content - Much Larger */}
                <div className="space-y-6 flex-1">
                  <h3 className="text-5xl font-bold text-primary leading-tight">
                    {tilingFeatures[4].title}
                  </h3>
                  {tilingFeatures[4].subtitle && (
                    <p className="text-2xl text-accent font-semibold">
                      {tilingFeatures[4].subtitle}
                    </p>
                  )}
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {tilingFeatures[4].description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Ready to Transform Your Bathroom?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Get a free consultation and quote for your tiling project. Our
              experts are ready to bring your vision to life.
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

export default TilingPage;
