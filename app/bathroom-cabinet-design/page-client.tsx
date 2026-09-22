"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { ServiceNavButtons } from "@/components/ui/ServiceNavButtons";

const cabinetFeatures = [
  {
    title: "Cabinets for concealed toilets",
    subtitle: "",
    image: "bathroom_cabinet_design/image2.jpg",
    description:
      "Custom-built cabinets that seamlessly hide wall-hung toilets and their cisterns, creating a clean, minimalist bathroom aesthetic.",
  },
  {
    title: "Custom vanity units",
    subtitle: "",
    image: "bathroom_cabinet_design/image3.jpg",
    description:
      "Bespoke vanity units designed to fit your exact specifications, combining style with practical storage for all your bathroom essentials.",
  },
  {
    title: "Custom storage cabinets",
    subtitle: "",
    image: "bathroom_cabinet_design/image4.jpg",
    description:
      "Tailored storage solutions that maximize space efficiency while maintaining the elegant design flow of your bathroom renovation.",
  },
];

const CabinetDesignPage = () => {
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
            backgroundImage: `url(/bathroom_cabinet_design/hero.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-primary/10 backdrop-blur-[1px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
              Bathroom Cabinet Design & Fabrication Dublin
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
              Custom Bathroom Cabinets
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                Maximise your bathroom's potential with our bespoke cabinet
                service. We design, build, and install custom cabinets tailored
                to your specific space, style, and storage needs. Whether you're
                looking for a sleek floating vanity, fitted under-sink storage,
                mirrored cabinets, or unique shelving solutions, we create
                pieces that perfectly complement your bathroom design. Using
                high-quality materials and precise craftsmanship, we ensure
                every cabinet is durable, functional, and beautifully finished,
                giving your bathroom a practical yet stylish upgrade.
              </p>
            </div>
          </div>

          {/* Mobile Layout - Stacked with Card Design */}
          <div className="block lg:hidden space-y-12">
            {cabinetFeatures.map((feature, index) => (
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

          {/* Desktop Layout - Single Row with 3 Columns */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16">
            {cabinetFeatures.map((feature, index) => (
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
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
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
              Ready for Custom Bathroom Cabinets?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Get a free consultation and quote for your custom cabinet project.
              Our craftsmen are ready to design and build bespoke storage
              solutions for your bathroom.
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

export default CabinetDesignPage;
