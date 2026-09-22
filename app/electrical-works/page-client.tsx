"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { ServiceNavButtons } from "@/components/ui/ServiceNavButtons";

const electricalFeatures = [
  {
    title: "Led lights",
    subtitle: "",
    image:
      "electrical_works/rn_image_picker_lib_temp_e2455b9d-3d2c-4f48-98e9-98e0556ed23b.jpg",
    description:
      "Energy-efficient LED lighting solutions that provide bright, long-lasting illumination while reducing energy consumption.",
  },
  {
    title: "Smart toilets",
    subtitle: "",
    image:
      "electrical_works/rn_image_picker_lib_temp_d4e79a97-afff-4663-9944-11de7eb1260a.jpg",
    description:
      "Advanced smart toilet systems with automated features for enhanced comfort, hygiene, and convenience.",
  },
  {
    title: "Motion detectors",
    subtitle: "Toilet • Lights • Exhaust fan",
    image:
      "electrical_works/rn_image_picker_lib_temp_c3dce2e3-9daa-44b4-9943-416a38c57a98.jpg",
    description:
      "Intelligent motion detection systems that automatically control toilets, lighting, and exhaust fans for hands-free operation.",
  },
  {
    title: "Waterproof speakers",
    subtitle: "",
    image:
      "electrical_works/rn_image_picker_lib_temp_d11e2caa-33cc-4c62-ba22-204662654045.jpg",
    description:
      "High-quality waterproof audio systems that deliver crystal-clear sound in wet bathroom environments.",
  },
  {
    title: "Smart mirrors",
    subtitle: "",
    image:
      "electrical_works/rn_image_picker_lib_temp_5d226d4c-68ff-4d72-a760-8cc651f4027f.jpg",
    description:
      "Interactive smart mirrors with built-in displays, lighting controls, and connectivity features for modern bathroom functionality.",
  },
  {
    title: "Leak detectors",
    subtitle: "",
    image:
      "electrical_works/rn_image_picker_lib_temp_f5fa9545-6ded-42f1-8000-9ea1bc69eafa.jpg",
    description:
      "Advanced leak detection systems that monitor water levels and alert you to potential issues before they become major problems.",
  },
];

const ElectricalWorksPage = () => {
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
            backgroundImage: `url(/electrical_works/hero.png)`,
          }}
        >
          <div className="absolute inset-0 bg-primary/10 backdrop-blur-[1px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
              Electrical Works Dublin
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
              Electrical Service
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                Our electrical service ensures that your new bathroom is not
                only beautifully designed but also safe, functional, and
                compliant with all regulations. From installing lighting,
                extractor fans, and underfloor heating systems to carrying out
                all necessary wiring adjustments, our qualified electricians
                handle every aspect with precision and care. We stay up to date
                with the latest trends and technologies, allowing us to
                implement the newest generation of smart gadgets and innovative
                solutions in your bathroom. Using high-quality materials and
                professional tools, we deliver reliable, efficient installations
                that seamlessly integrate with your design, giving you complete
                peace of mind.
              </p>
            </div>
          </div>

          {/* Mobile Layout - Stacked with Card Design */}
          <div className="block lg:hidden space-y-12">
            {electricalFeatures.map((feature, index) => (
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
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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

          {/* Desktop Layout - 3 Columns × 2 Rows with Uniform Card Sizing */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {electricalFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="animate-slide-up h-full"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center h-full">
                    {/* Uniform Image Size */}
                    <div className="relative group mb-4 w-full flex-shrink-0">
                      <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-2xl">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all duration-300" />
                      </div>
                    </div>

                    {/* Text Content with Consistent Height */}
                    <div className="space-y-3 flex-grow flex flex-col justify-between">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-primary leading-tight">
                          {feature.title}
                        </h3>
                        {feature.subtitle && (
                          <p className="text-lg text-accent font-semibold">
                            {feature.subtitle}
                          </p>
                        )}
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                      <div className="pt-1">
                        <div className="w-12 h-1 bg-accent mx-auto rounded-full" />
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
              Ready to Upgrade Your Electrical Systems?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Get a free consultation and quote for your electrical project. Our
              qualified electricians are ready to bring smart solutions to your
              bathroom.
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

export default ElectricalWorksPage;
