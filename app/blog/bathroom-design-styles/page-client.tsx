"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Phone,
  Mail,
  CheckCircle,
  Calendar,
  User,
  Clock,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";

const BlogPost1 = () => {
  const router = useRouter();

  const handleCallClick = () => {
    window.location.href = "tel:+0894219421";
  };

  const handleMessageClick = () => {
    router.push("/contact");
  };

  const designStyles = [
    {
      title: "Modern & Minimalist",
      description:
        "Clean lines, neutral tones, and clutter-free surfaces define this sleek look.",
      features: [
        "Neutral palette (whites, greys, blacks)",
        "Floating vanities for an airy feel",
        "Frameless glass showers",
        "Geometric tile patterns",
        "High-tech fixtures (smart mirrors, touchless faucets)",
      ],
      bestFor: "Small bathrooms, urban homes, and lovers of simplicity.",
    },
    {
      title: "Scandinavian",
      description:
        "Warm minimalism with natural textures and light-filled spaces.",
      features: [
        "Light wood tones (oak, pine)",
        "White walls with subtle pastels",
        "Functional yet stylish storage (ladder shelves, woven baskets)",
        "Matte black or brass fixtures",
        "Plants for a fresh touch",
      ],
      bestFor: "Those who want a cozy yet uncluttered aesthetic.",
    },
    {
      title: "Industrial",
      description:
        "Raw, edgy, and full of character—think exposed pipes and concrete finishes.",
      features: [
        "Concrete or brick walls",
        "Metallic accents (black steel, copper, or brushed nickel)",
        "Open shelving with metal frames",
        "Minimalist lighting (pendant lights, Edison bulbs)",
        "Neutral tones with bold contrasts",
      ],
      bestFor:
        "Loft-style apartments and those who love an urban, unfinished look.",
    },
    {
      title: "Farmhouse & Rustic",
      description: "Charming, cozy, and full of vintage appeal.",
      features: [
        "Shiplap or beadboard walls",
        "Freestanding tubs (clawfoot or slipper style)",
        "Wooden vanities with a distressed finish",
        "Vintage-inspired fixtures (cross-handle taps, oil-rubbed bronze)",
        "Soft, earthy colors (sage green, warm whites, soft blues)",
      ],
      bestFor:
        "Country homes, cottages, and anyone who loves a nostalgic vibe.",
    },
    {
      title: "Spa-Like & Zen",
      description:
        "Turn your bathroom into a calming retreat inspired by luxury resorts.",
      features: [
        "Natural materials (stone, bamboo, teak)",
        "Freestanding soaking tubs",
        "Rainfall showers",
        "Neutral, soothing colors (beige, soft grey, seafoam green)",
        "Minimalist decor with candles and pebble details",
      ],
      bestFor: "Those who want a relaxing, hotel-like experience at home.",
    },
    {
      title: "Glam & Luxe",
      description: "Bold, elegant, and dripping with sophistication.",
      features: [
        "Marble or high-gloss tiles",
        "Gold or crystal fixtures",
        "Statement lighting (chandeliers, sconces)",
        "Velvet or metallic accents",
        "Deep jewel tones (emerald, navy, or charcoal)",
        "Wall paneling",
      ],
      bestFor: "Master bathrooms and those who love a touch of Hollywood glam.",
    },
    {
      title: "Coastal & Nautical",
      description: "Bring the beach indoors with breezy, light-filled designs.",
      features: [
        "White and blue color schemes",
        "Wicker or rattan storage",
        "Subway tiles with light grout",
        "Rope or driftwood accents",
        "Porthole mirrors or shell decor",
      ],
      bestFor: "Beach houses or anyone who loves a fresh, airy feel.",
    },
  ];

  const choosingTips = [
    "Consider your home's overall aesthetic – Your bathroom should complement the rest of your interior.",
    "Think about functionality – A family bathroom may need more storage, while a master bath can be more luxurious.",
    "Look at lighting & space – Dark colors work in large bathrooms, while small spaces benefit from light, reflective surfaces.",
    "Set a budget – Some styles (like glam or industrial) can be pricier due to materials.",
  ];

  const services = [
    "Full bathroom design and renovation",
    "Custom cabinetry and storage solutions",
    "Expert tile installation and fixture upgrades",
    "Consultation on materials, layout, and finishes",
  ];

  return (
    <div className="min-h-screen w-full section-mobile-full">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] md:min-h-[45vh] lg:min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/project 1/1.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-[1px]" />
        </div>

        {/* Back Button */}

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg leading-tight">
              Bathroom Design Styles
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 opacity-90 drop-shadow-md max-w-3xl mx-auto">
              Find the Perfect Look for Your Space
            </p>
            <div className="w-24 md:w-32 h-1 bg-accent mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* Blog Metadata */}
      <section className="py-8 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Zen Bathroom Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>August 3, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Introduction */}
          <div className="mb-12 md:mb-16 animate-fade-in">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              Discover the latest bathroom design trends and explore various
              styles — from classic to contemporary. Find the perfect design for
              your bathroom remodel with inspiration from Zen Bathroom.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              When it comes to bathroom design, there are endless possibilities
              to turn your space into a tranquil retreat, a sleek modern oasis,
              or a timeless classic. Whether you're remodeling, building a new
              bathroom, or simply updating your style, understanding the various
              bathroom design styles can help you create a space that fits your
              needs, aesthetic preferences, and functionality.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              At Zen Bathroom, we've seen the best and brightest bathroom
              designs, and we know that a great bathroom isn't just about
              function — it's about making a statement. Let's dive into some of
              the most popular bathroom design styles to inspire your next
              project.
            </p>

            {/* What's Covered */}
            <Card className="mb-8 shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                  In this guide, we'll explore:
                </h3>
                <div className="grid gap-3">
                  {[
                    "Popular bathroom design styles",
                    "Key features of each style",
                    "How to choose the right one for your home",
                    "Tips for bringing your chosen style to life",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-base md:text-lg text-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Design Styles */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12 text-center">
              Bathroom Design Styles
            </h2>

            <div className="space-y-8 md:space-y-12">
              {designStyles.map((style, index) => (
                <Card
                  key={index}
                  className="shadow-soft hover:shadow-elegant transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                          {style.title}
                        </h3>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                          {style.description}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg md:text-xl font-semibold text-primary mb-4">
                        Key Features:
                      </h4>
                      <div className="grid gap-3">
                        {style.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-base text-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-subtle p-4 rounded-lg">
                      <p className="text-base text-primary">
                        <span className="font-semibold">💡 Best for:</span>{" "}
                        {style.bestFor}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How to Choose */}
          <div className="mb-12 md:mb-16">
            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                  How to Choose the Right Bathroom Style
                </h2>
                <div className="space-y-4">
                  {choosingTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <p className="text-base md:text-lg text-foreground leading-relaxed flex-1">
                        {tip}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Zen Bathroom */}
          <div className="mb-12 md:mb-16">
            <Card className="shadow-elegant bg-gradient-subtle animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                  Why Choose Zen Bathroom for Your Bathroom Remodel?
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 text-center">
                  At Zen Bathroom, we understand that your bathroom should be a
                  reflection of your personality, needs, and lifestyle. Whether
                  you're drawn to sleek modern designs or cozy, vintage-inspired
                  details, our team can help you create the bathroom of your
                  dreams.
                </p>

                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4 text-center">
                  Our services include:
                </h3>
                <div className="grid gap-3 max-w-2xl mx-auto">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-base md:text-lg text-foreground">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Ready to Create Your Dream Bathroom?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Whether you're drawn to contemporary minimalism, vintage charm, or
              coastal tranquility, there's a bathroom design style to suit your
              unique taste and needs. Let us help you bring your vision to life.
            </p>
            <p className="text-base md:text-lg text-primary font-semibold mb-8">
              👉 Contact us today to schedule a consultation or request a quote.
              Together, we'll create the bathroom that fits your style, your
              needs, and your budget.
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
                Get Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost1;
