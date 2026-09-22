"use client";

import React from "react";
import {
  Phone,
  Mail,
  CheckCircle,
  Calendar,
  User,
  Clock,
  Droplets,
  Shield,
  Sparkles,
  Star,
  Navigation,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { useRouter } from "next/navigation";

const BlogPost8 = () => {
  const handleCallClick = () => {
    window.location.href = "tel:+0894219421";
  };

  const router = useRouter();

  const handleMessageClick = () => {
    router.push("/contact");
  };

  const microcementFeatures = [
    "Only 2-3mm thick – No heavy structural changes needed",
    "Highly flexible – Resists cracking",
    "Seamless & joint-free – Perfect for wet areas",
    "Customizable – Available in endless colors and textures",
  ];

  const whyChooseMicrocement = [
    {
      title: "Seamless, Minimalist Aesthetic",
      content:
        "No grout lines or visible joints = easy cleaning & sleek look. Perfect for modern, industrial, or Scandinavian-style bathrooms",
    },
    {
      title: "Waterproof & Mold-Resistant",
      content:
        "When properly sealed, it's 100% waterproof—ideal for showers and wet rooms. Non-porous surface resists mold and bacteria",
    },
    {
      title: "Can Be Applied Over Existing Surfaces",
      content:
        "No need for demolition—we can apply over tiles, concrete, or plasterboard. Saves time & money compared to full replacements",
    },
    {
      title: "Slip-Resistant Options",
      content: "Add textured finishes for safe, non-slip shower floors",
    },
    {
      title: "Durable & Long-Lasting",
      content:
        "Resists scratches, stains, and daily wear. 10+ year lifespan with proper maintenance",
    },
  ];

  const applicationAreas = [
    {
      title: "Shower Walls & Floors",
      content:
        "Creates a continuous, grout-free surface that's easy to clean. No more moldy grout lines!",
    },
    {
      title: "Vanity Countertops & Basins",
      content:
        "Custom-formed sinks for a fully integrated look. Heat and stain-resistant",
    },
    {
      title: "Bathtub Surrounds",
      content:
        "Gives a high-end spa-like feel. Waterproof and easy to maintain",
    },
    {
      title: "Full Wet Rooms",
      content: "Seamless flooring that slopes perfectly to the drain",
    },
    {
      title: "Feature Walls",
      content: "Adds texture and depth compared to plain tiles",
    },
  ];

  const installationProcess = [
    {
      step: "Surface Preparation",
      content:
        "Clean, repair, and prime the existing surface. Ensure perfect adhesion",
    },
    {
      step: "Base Coat Application",
      content: "Reinforced with fiberglass mesh for extra strength",
    },
    {
      step: "Multiple Microcement Layers",
      content:
        "Hand-troweled for ultra-smooth or textured finishes. Custom color blending available",
    },
    {
      step: "Sealing & Protection",
      content:
        "Apply penetrating sealant for waterproofing. Optional matte, satin, or glossy finish",
    },
    {
      step: "Final Curing",
      content: "7-day curing period for maximum durability",
    },
  ];

  const maintenanceTips = [
    "Use pH-neutral cleaners",
    "Reapply sealant every 2-3 years",
    "Avoid harsh abrasives",
  ];

  const whyChooseZen = [
    "Certified Microcement Installers – Trained in European techniques",
    "5-Year Warranty on our workmanship",
    "Custom Color Matching – Get the exact shade you want",
    "Free Consultations – Let's discuss your dream bathroom",
  ];

  return (
    <div className="min-h-screen w-full section-mobile-full">
      {/* Navigation Bar */}

      {/* Hero Section */}
      <section className="relative min-h-[40vh] md:min-h-[45vh] lg:min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/project 5/1.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-[1px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg leading-tight">
              Microcement for Bathrooms
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 opacity-90 drop-shadow-md max-w-3xl mx-auto">
              The Ultimate Guide to a Seamless, Modern Look
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
              <span>August 4, 2025</span>
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
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              At Zen Bathroom, we're always exploring innovative materials to
              create stunning, functional bathrooms. One of the most exciting
              options we offer is microcement—a versatile, durable, and
              ultra-modern finish that's perfect for contemporary bathroom
              designs.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              In this guide, we'll explain what microcement is, why it's ideal
              for bathrooms, and how we apply it for flawless, long-lasting
              results.
            </p>
          </div>

          {/* What Is Microcement Section */}
          <div className="mb-12 md:mb-16">
            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                  What Is Microcement?
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-center">
                  Microcement (also known as microtopping or microconcrete) is a
                  thin, cement-based coating applied over existing surfaces to
                  create a smooth, seamless finish. Unlike traditional concrete,
                  it's:
                </p>

                <div className="grid gap-4 max-w-3xl mx-auto mb-8">
                  {microcementFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-gradient-subtle p-4 rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-base md:text-lg text-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Microcement Section */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12 text-center">
              Why Choose Microcement for Your Bathroom?
            </h2>

            <div className="space-y-8">
              {whyChooseMicrocement.map((benefit, index) => (
                <Card
                  key={index}
                  className="shadow-soft hover:shadow-elegant transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                          {benefit.title}
                        </h3>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                          {benefit.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Where We Use Microcement Section */}
          <div className="mb-12 md:mb-16">
            <Card className="shadow-elegant bg-gradient-subtle animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                  Where We Use Microcement in Bathrooms
                </h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {applicationAreas.map((application, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-lg p-6 shadow-soft hover:shadow-elegant transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-primary mb-3">
                            {application.title}
                          </h3>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            {application.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Installation Process Section */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12 text-center">
              Our Microcement Installation Process
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-center">
              We don't just slap on microcement—we engineer flawless finishes
              through meticulous steps:
            </p>

            <div className="space-y-6">
              {installationProcess.map((process, index) => (
                <Card
                  key={index}
                  className="shadow-soft hover:shadow-elegant transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                          {process.step}
                        </h3>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                          {process.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Maintenance Tips Section */}
          <div className="mb-12 md:mb-16">
            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                  Microcement Maintenance Tips
                </h2>

                <div className="grid gap-4 max-w-3xl mx-auto">
                  {maintenanceTips.map((tip, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 bg-gradient-subtle rounded-lg p-6 shadow-soft"
                    >
                      <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <Droplets className="h-4 w-4" />
                      </div>
                      <span className="text-base md:text-lg text-foreground font-medium">
                        {tip}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Zen Bathroom Section */}
          <div className="mb-12 md:mb-16">
            <Card className="shadow-elegant bg-gradient-subtle animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                  Why Choose Zen Bathroom for Microcement?
                </h2>

                <div className="grid gap-4 max-w-3xl mx-auto">
                  {whyChooseZen.map((reason, index) => (
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

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
              Ready to Transform Your Bathroom with Microcement?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Contact Zen Bathroom today for your free consultation and discover
              the endless possibilities of microcement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="hero"
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
                onClick={handleCallClick}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 0894219421
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={handleMessageClick}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost8;
