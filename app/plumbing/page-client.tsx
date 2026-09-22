"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { ServiceNavButtons } from "@/components/ui/ServiceNavButtons";

const plumbingFeatures = [
  {
    title: "Hidden drains",
    subtitle: "",
    image:
      "plumbing/rn_image_picker_lib_temp_5461a876-63d6-4dbc-8240-d00747f67af1.jpg",
    description:
      "Concealed drainage systems that maintain clean lines and modern aesthetics while providing superior functionality.",
  },
  {
    title: "Concealed showers",
    subtitle: "",
    image:
      "plumbing/rn_image_picker_lib_temp_e4f83f39-c3f2-4d01-9bab-9364fae4036a.jpg",
    description:
      "Wall-mounted shower systems with hidden valves for a minimalist, spa-like experience in your bathroom.",
  },
  {
    title: "Concealed taps",
    subtitle: "",
    image:
      "plumbing/rn_image_picker_lib_temp_aca874a9-53fd-498b-ad3a-0e3a0dc62596.jpg",
    description:
      "Elegant wall-mounted taps with concealed pipework for a clean, contemporary finish.",
  },
  {
    title: "Underfloor heating",
    subtitle: "",
    image:
      "plumbing/rn_image_picker_lib_temp_ab71f7fe-29a8-4743-b5f6-7bf6f45f707b.jpg",
    description:
      "Energy-efficient underfloor heating systems that provide comfortable warmth throughout your bathroom space.",
  },
  {
    title: "Macerators",
    subtitle: "",
    image:
      "plumbing/rn_image_picker_lib_temp_aadafa41-4c2f-476e-9336-0e0ba0d74b74.jpg",
    description:
      "Compact waste disposal systems that enable bathroom installation in locations without conventional drainage.",
  },
  {
    title: "Steam showers",
    subtitle: "",
    image:
      "plumbing/rn_image_picker_lib_temp_4c4d10e8-c60e-4dd3-a02f-03994a6b375b.jpg",
    description:
      "Luxury steam shower systems that transform your bathroom into a personal wellness sanctuary.",
  },
];

const PlumbingPage = () => {
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
            backgroundImage: `url(/plumbing/plumbing_2.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-primary/10 backdrop-blur-[1px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
              Plumbing Dublin
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
              Expert Plumbing Inspection & Modern Solutions
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                Our skilled plumbing team conducts thorough inspections to
                detect leaks, inefficiencies, or potential issues. We offer
                modern, tailored solutions to improve your water system's
                performance, efficiency, and style—helping you save money and
                upgrade your space.
              </p>
            </div>
          </div>

          {/* Mobile Layout - Stacked with Card Design */}
          <div className="block lg:hidden space-y-12">
            {plumbingFeatures.map((feature, index) => (
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

          {/* Desktop Layout - 3 Columns × 2 Rows with Uniform Card Sizing */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {plumbingFeatures.map((feature, index) => (
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
              Ready to Upgrade Your Plumbing?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Get a free consultation and quote for your plumbing project. Our
              experts are ready to bring modern solutions to your bathroom.
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

export default PlumbingPage;
