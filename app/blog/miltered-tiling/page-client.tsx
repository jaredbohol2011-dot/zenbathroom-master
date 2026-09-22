"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  CheckCircle,
  Calendar,
  User,
  Clock,
  Settings,
  Zap,
  Shield,
  Star,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";

const BlogPost3 = () => {
  const router = useRouter();

  const handleCallClick = () => {
    window.location.href = "tel:+0894219421";
  };

  const handleMessageClick = () => {
    router.push("/contact");
  };

  const miteredApplications = [
    "Shower niches – For a sleek, built-in appearance",
    "Countertop edges – Creating a waterfall or wrapped effect",
    "Wall transitions – Where tiles meet at corners",
    "Bench seats and ledges – For a smooth, high-end finish",
  ];

  const whyChooseMitered = [
    {
      title: "Ultra-Luxury Aesthetic",
      description:
        "Mitered edges eliminate visible seams, making your bathroom look custom-designed and high-end.",
    },
    {
      title: "No Bulky Trim Pieces",
      description:
        "Traditional tile edges require metal or plastic trim, which can discolor, chip, or look dated. Mitering creates a clean, minimalist look.",
    },
    {
      title: "Increased Durability",
      description:
        "When done correctly, mitered edges are stronger than trim pieces because they rely on the tile itself rather than added materials.",
    },
    {
      title: "Perfect for Modern & Minimalist Designs",
      description:
        "If you love contemporary, frameless showers or floating vanities, mitered tiling enhances the seamless look.",
    },
  ];

  const miteredProcess = [
    {
      title: "Precision Measuring & Layout",
      details: [
        "We plan every cut to ensure perfect alignment before installation.",
        "Laser levels and digital angle finders guarantee accuracy.",
      ],
    },
    {
      title: "Professional Wet Saw Cutting",
      details: [
        "Our industrial-grade wet saws cut porcelain, ceramic, and natural stone at exact 45-degree angles.",
        "Unlike cheap saws, ours produce zero chipping for flawless edges.",
      ],
    },
    {
      title: "Expert Installation",
      details: [
        "We use high-strength epoxy adhesive to bond mitered edges securely.",
        "Each joint is hand-polished for a seamless transition.",
      ],
    },
    {
      title: "Final Sealing & Protection",
      details: [
        "Waterproof sealant is applied to prevent moisture penetration.",
        "For natural stone, we use enhancing sealers to maintain color consistency.",
      ],
    },
  ];

  const whereWeUseMitered = [
    {
      title: "Shower Niches & Shelves",
      description:
        "Instead of clunky metal edges, mitered corners make niches look like they were carved from solid stone.",
    },
    {
      title: "Floating Vanity Countertops",
      description:
        "A mitered waterfall edge gives the illusion of a solid slab, elevating the entire vanity.",
    },
    {
      title: "Bench Seats & Ledges",
      description:
        "No sharp edges—just smooth, comfortable transitions that are easy to clean.",
    },
    {
      title: "Full-Height Tile Walls",
      description:
        "Where walls meet, mitered edges create a continuous flow without distracting trim.",
    },
  ];

  const whyTrustZen = [
    "Master Craftsmen – Our tilers have 10+ years of experience in precision cutting.",
    "Professional Tools – We use commercial-grade saws for perfect 45-degree angles.",
    "Luxury Focus – We specialize in high-end bathroom renovations where details matter.",
    "Warranty Backed – All our mitered tile work comes with a 10-year craftsmanship guarantee.",
  ];

  return (
    <div className="min-h-screen w-full section-mobile-full">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] md:min-h-[45vh] lg:min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/project 3/1.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-[1px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg leading-tight">
              The Art of Mitered Tiling
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 opacity-90 drop-shadow-md max-w-3xl mx-auto">
              Elevate Your Bathroom with Seamless Luxury
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
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Introduction */}
          <div className="mb-12 md:mb-16 animate-fade-in">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              At Zen Bathroom, we believe that the difference between a standard
              bathroom and a luxury, high-end retreat often comes down to the
              details. One of the most sophisticated techniques we use in our
              bathroom renovations is mitered tiling—a method that creates
              seamless, ultra-clean edges for a truly premium finish.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              In this guide, we'll explain what mitered tiling is, why it's
              superior to traditional edge treatments, and how we use it to
              create stunning, high-end bathrooms for our clients.
            </p>
          </div>

          {/* What Is Mitered Tiling */}
          <div className="mb-12 md:mb-16">
            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                  What Is Mitered Tiling?
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-center">
                  Mitered tiling involves precision-cutting the edges of tiles
                  at a 45-degree angle so that two pieces meet seamlessly,
                  creating a sharp, continuous look without bulky trim or metal
                  edges. This technique is commonly used for:
                </p>

                <div className="grid gap-4 max-w-3xl mx-auto mb-8">
                  {miteredApplications.map((application, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-gradient-subtle p-4 rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-base md:text-lg text-foreground">
                        {application}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-base md:text-lg text-primary font-medium text-center italic">
                  Unlike plastic or metal trim strips, which can look cheap over
                  time, mitered edges give tiles a custom, furniture-like
                  quality.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Mitered Edges */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12 text-center">
              Why Choose Mitered Edges for Your Bathroom?
            </h2>

            <div className="space-y-6">
              {whyChooseMitered.map((reason, index) => (
                <Card
                  key={index}
                  className="shadow-soft hover:shadow-elegant transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                          {reason.title}
                        </h3>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Our Mitered Tiling Process */}
          <div className="mb-12 md:mb-16">
            <Card className="shadow-elegant animate-fade-in bg-gradient-subtle">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                  Our Mitered Tiling Process – How We Achieve Flawless Results
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-center">
                  At Zen Bathroom, we don't just cut tiles—we engineer perfect
                  edges using specialized tools and techniques:
                </p>

                <div className="space-y-6">
                  {miteredProcess.map((step, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-lg p-6 shadow-soft"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                            {step.title}
                          </h3>
                          <div className="space-y-3">
                            {step.details.map((detail, detailIndex) => (
                              <div
                                key={detailIndex}
                                className="flex items-start gap-3"
                              >
                                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                                <span className="text-base md:text-lg text-foreground">
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Where We Use Mitered Tiling */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12 text-center">
              Where We Use Mitered Tiling in Bathrooms
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {whereWeUseMitered.map((application, index) => (
                <Card
                  key={index}
                  className="shadow-soft hover:shadow-elegant transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-primary mb-3">
                          {application.title}
                        </h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {application.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recommendation */}
          <div className="mb-12 md:mb-16">
            <Card className="shadow-elegant bg-accent/10 border-accent/20 animate-fade-in">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="max-w-3xl mx-auto">
                  <div className="bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Star className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    Our Recommendation
                  </h3>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed">
                    If you want a true luxury bathroom, mitered edges are worth
                    the investment. For more budget-conscious projects, we offer
                    alternative edge solutions that still look great.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why Trust Zen Bathroom */}
          <div className="mb-12 md:mb-16">
            <Card className="shadow-elegant bg-gradient-subtle animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                  Why Trust Zen Bathroom for Mitered Tiling?
                </h2>

                <div className="grid gap-4 max-w-4xl mx-auto">
                  {whyTrustZen.map((reason, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 bg-card rounded-lg p-6 shadow-soft"
                    >
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span className="text-base md:text-lg text-foreground font-medium">
                        {reason}
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
              Ready for a Bathroom with Flawless, High-End Tiling?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              If you're looking for a truly custom, luxury bathroom, mitered
              edges make all the difference. Book a free design consultation
              with our experts to see how we can transform your space.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="hero"
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
                onClick={handleCallClick}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call for Free Consultation
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={handleMessageClick}
              >
                <Mail className="mr-2 h-5 w-5" />
                Book Design Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost3;
