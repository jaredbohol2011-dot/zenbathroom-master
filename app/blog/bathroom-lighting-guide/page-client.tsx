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
  Lightbulb,
  Zap,
  Star,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";

const BlogPost7 = () => {
  const router = useRouter();

  const handleCallClick = () => {
    window.location.href = "tel:+0894219421";
  };

  const handleMessageClick = () => {
    router.push("/contact");
  };

  const whyLightingMatters = [
    "Perfect Visibility – No more shadows while shaving or applying makeup.",
    "Enhanced Safety – Proper illumination reduces slips and falls.",
    "Mood & Ambiance – Set the tone for relaxation or productivity.",
  ];

  const smartLightingFeatures = [
    "Motion-Activated Night Lights – Gentle illumination for late-night visits.",
    "Voice-Controlled Dimmers – Adjust brightness hands-free.",
    "Color-Changing LEDs – Set the mood with warm or cool tones.",
  ];

  const trendingStyles = [
    "Modern & Sleek – Brushed nickel, matte black (check out our [Metro Luxe Line]).",
    "Rustic & Warm – Vintage Edison bulbs, bronze finishes (see [Heritage Collection]).",
    "Luxury Spa Vibes – Backlit mirrors, crystal pendants (our [Serenity Series] is a bestseller).",
  ];

  const whyChooseZen = [
    "Premium Quality – Durable, stylish, and built to last.",
    "Expert Advice – Our lighting specialists are here to help.",
    "Wide Selection – From budget-friendly to high-end luxury.",
  ];

  return (
    <div className="min-h-screen w-full section-mobile-full">
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
              Bathroom Lighting Guide
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 opacity-90 drop-shadow-md max-w-3xl mx-auto">
              How to Choose the Perfect Fixtures for Your Space
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
              At Zen Bathroom, we believe that great bathroom lighting is more
              than just functionality—it's about creating a space that feels
              both luxurious and practical. Whether you're remodeling or just
              looking for an upgrade, the right lighting can transform your
              bathroom into a relaxing retreat or a bright, energizing haven.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              In this guide, we'll walk you through the best lighting options,
              placement tips, and design trends to help you make the perfect
              choice for your home.
            </p>
          </div>

          {/* Why Bathroom Lighting Matters */}
          <div className="mb-12 md:mb-16">
            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                  Why Bathroom Lighting Matters
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-center">
                  Your bathroom serves multiple purposes—getting ready in the
                  morning, unwinding in the evening, and everything in between.
                  The right lighting ensures:
                </p>

                <div className="grid gap-4 max-w-3xl mx-auto mb-8">
                  {whyLightingMatters.map((reason, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-gradient-subtle p-4 rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-base md:text-lg text-foreground">
                        {reason}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-base md:text-lg text-primary font-medium text-center">
                  At Zen Bathroom, we specialize in high-quality, stylish
                  lighting solutions that meet all these needs.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* The 3 Essential Types */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12 text-center">
              The 3 Essential Types of Bathroom Lighting
            </h2>

            <div className="space-y-8">
              {/* Task Lighting */}
              <Card
                className="shadow-soft hover:shadow-elegant transition-all duration-300 animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                        Task Lighting – For Precision & Clarity
                      </h3>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                        Focused lighting helps with daily grooming tasks. Our
                        top recommendations:
                      </p>
                    </div>
                  </div>

                  <div className="ml-14 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-base md:text-lg text-foreground">
                        <strong>Vanity Lighting:</strong> Install wall sconces
                        on either side of the mirror
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-base md:text-lg text-foreground">
                        <strong>Shower/Tub Lighting:</strong> Waterproof LED
                        recessed lights
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ambient Lighting */}
              <Card
                className="shadow-soft hover:shadow-elegant transition-all duration-300 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                        Ambient Lighting – The Foundation of Your Space
                      </h3>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                        This is your primary light source.
                      </p>
                    </div>
                  </div>

                  <div className="ml-14 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-base md:text-lg text-foreground">
                        <strong>Ceiling Fixtures:</strong> Flush mounts or
                        semi-flush designs.
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-base md:text-lg text-foreground">
                        <strong>Recessed Lighting:</strong> Sleek and
                        energy-efficient.
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Accent Lighting */}
              <Card
                className="shadow-soft hover:shadow-elegant transition-all duration-300 animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                        Accent Lighting – Style & Atmosphere
                      </h3>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                        Add a touch of luxury with:
                      </p>
                    </div>
                  </div>

                  <div className="ml-14 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-base md:text-lg text-foreground">
                        LED Mirror Backlighting.
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-base md:text-lg text-foreground">
                        Decorative Pendants over freestanding.
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Lighting Placement Tips */}
          <div className="mb-12 md:mb-16">
            <Card className="shadow-elegant bg-gradient-subtle animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                  Lighting Placement Tips from Our Experts
                </h2>

                <div className="space-y-6">
                  <div className="bg-card rounded-lg p-6 shadow-soft">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                        •
                      </div>
                      <div className="flex-1">
                        <span className="text-base md:text-lg text-foreground">
                          <strong>Mirror Lighting:</strong> Avoid overhead-only
                          fixtures—side sconces at eye level (66" from the
                          floor) provide the best light.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-lg p-6 shadow-soft">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                        •
                      </div>
                      <div className="flex-1">
                        <span className="text-base md:text-lg text-foreground">
                          <strong>Shower Lighting:</strong> Always use
                          damp-rated fixtures (like our [AquaSafe Recessed
                          Lights]).
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-lg p-6 shadow-soft">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                        •
                      </div>
                      <div className="flex-1">
                        <span className="text-base md:text-lg text-foreground">
                          <strong>Ceiling Lights:</strong> Space recessed lights
                          4-6 feet apart for even brightness.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Smart Lighting Upgrades */}
          <div className="mb-12 md:mb-16">
            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                  Smart Lighting Upgrades for a Modern Bathroom
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-center">
                  Why settle for basic lighting when you can have smart,
                  customizable solutions?
                </p>

                <div className="grid gap-4 max-w-4xl mx-auto">
                  {smartLightingFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 bg-gradient-subtle rounded-lg p-6 shadow-soft"
                    >
                      <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <Zap className="h-4 w-4" />
                      </div>
                      <span className="text-base md:text-lg text-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trending Styles */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12 text-center">
              Trending Bathroom Lighting Styles in 2025
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-center">
              Whether you love modern minimalism or classic elegance, we have
              the perfect fixtures for you:
            </p>

            <div className="grid gap-6">
              {trendingStyles.map((style, index) => (
                <Card
                  key={index}
                  className="shadow-soft hover:shadow-elegant transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <Star className="h-4 w-4" />
                      </div>
                      <p className="text-base md:text-lg text-foreground leading-relaxed flex-1">
                        {style}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Zen Bathroom */}
          <div className="mb-12 md:mb-16">
            <Card className="shadow-elegant bg-gradient-subtle animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                  Why Choose Zen Bathroom for Bathroom Lighting?
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

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
              Ready to transform your bathroom?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Schedule a free consultation with our experts!
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
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost7;
