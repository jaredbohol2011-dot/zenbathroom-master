"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, User, Calendar, Clock, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const BlogPost4 = () => {
  const router = useRouter();

  const handleCallClick = () => {
    window.location.href = "tel:+0894219421";
  };

  const handleMessageClick = () => {
    router.push("/contact");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/project 4/1.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg font-serif">
              Types of Bathrooms: Finding the Right Fit for Your Renovation
            </h1>
            <div className="w-24 md:w-32 h-1 bg-accent mx-auto rounded-full mb-6" />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-8 sm:py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Blog Meta Information */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-muted-foreground animate-fade-in">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Zen Bathroom Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>January 3, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>8 min read</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12 animate-slide-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                At Zen Bathroom, we know that a well-designed bathroom does more
                than meet your daily needs—it enhances comfort, adds value to
                your home, and reflects your personal style. Whether you're
                remodeling a dated powder room or building your dream master
                bath, understanding the different types of bathrooms can help
                you make the most of your renovation project.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                Here's a breakdown of the most common bathroom types we help our
                clients renovate, along with where each one works best:
              </p>
            </div>
          </div>

          {/* Bathroom Types */}
          <div className="space-y-12">
            {/* Full Bathroom */}
            <Card
              className="shadow-soft animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-serif">
                    Full Bathroom (4-Piece Bath)
                  </h2>
                </div>

                <div className="mb-6">
                  <p className="text-base leading-relaxed text-muted-foreground mb-4">
                    A full bathroom includes:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Toilet</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Sink</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Shower</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Bathtub (or a combined shower/tub)
                      </span>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground mb-4">
                    This is the most versatile and family-friendly bathroom
                    setup. It's ideal for master suites or shared spaces in
                    larger households. During renovation, we often upgrade full
                    bathrooms with features like custom tile work, modern
                    vanities, and walk-in showers.
                  </p>
                  <div className="bg-accent/10 rounded-lg p-4">
                    <p className="text-sm font-semibold text-primary mb-1">
                      Perfect for:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Master bedrooms, family bathrooms, guest suites
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Three-Quarter Bathroom */}
            <Card
              className="shadow-soft animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-serif">
                    Three-Quarter Bathroom (3/4 Bath)
                  </h2>
                </div>

                <div className="mb-6">
                  <p className="text-base leading-relaxed text-muted-foreground mb-4">
                    Includes:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Toilet</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Sink</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Either a shower or a tub
                      </span>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground mb-4">
                    If you don't have room for a full bath, a three-quarter
                    layout is an excellent compromise. These bathrooms are
                    perfect for guests or secondary bedrooms, and they're a
                    popular renovation choice when converting unused spaces like
                    basements or attics.
                  </p>
                  <div className="bg-accent/10 rounded-lg p-4">
                    <p className="text-sm font-semibold text-primary mb-1">
                      Perfect for:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Guest rooms, in-law suites, basement conversions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Half Bathroom */}
            <Card
              className="shadow-soft animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-serif">
                    Half Bathroom (Powder Room)
                  </h2>
                </div>

                <div className="mb-6">
                  <p className="text-base leading-relaxed text-muted-foreground mb-4">
                    Includes:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Toilet</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Sink</span>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground mb-4">
                    Compact and practical, half baths are usually located near
                    living or dining areas. If you're thinking about adding
                    value and convenience to your home, a powder room remodel is
                    a cost-effective option with big impact.
                  </p>
                  <div className="bg-accent/10 rounded-lg p-4">
                    <p className="text-sm font-semibold text-primary mb-1">
                      Perfect for:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Main floor access, guest use
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Jack and Jill Bathroom */}
            <Card
              className="shadow-soft animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-serif">
                    Jack and Jill Bathroom
                  </h2>
                </div>

                <div className="mb-6">
                  <p className="text-base leading-relaxed text-muted-foreground mb-4">
                    A Jack and Jill bathroom is shared between two bedrooms and
                    often features:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Two sinks</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Shared shower or tub
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">One toilet</span>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground mb-4">
                    These layouts promote privacy and efficiency—especially for
                    kids or siblings. We specialize in creating stylish, shared
                    spaces that minimize clutter and maximize function.
                  </p>
                  <div className="bg-accent/10 rounded-lg p-4">
                    <p className="text-sm font-semibold text-primary mb-1">
                      Perfect for:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Family homes, children's bedrooms
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* En Suite Bathroom */}
            <Card
              className="shadow-soft animate-slide-up"
              style={{ animationDelay: "0.5s" }}
            >
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    5
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-serif">
                    En Suite Bathroom
                  </h2>
                </div>

                <div className="mb-6">
                  <p className="text-base leading-relaxed text-muted-foreground mb-4">
                    An en suite is directly connected to a bedroom, offering
                    ultimate privacy. It can be a full or three-quarter bath and
                    is often a priority in master suite renovations. Our team
                    can design a custom en suite tailored to your lifestyle,
                    whether you prefer a spa-like retreat or a sleek modern
                    design.
                  </p>
                  <div className="bg-accent/10 rounded-lg p-4">
                    <p className="text-sm font-semibold text-primary mb-1">
                      Perfect for:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Master suites, guest bedrooms
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wet Room */}
            <Card
              className="shadow-soft animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    6
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-serif">
                    Wet Room
                  </h2>
                </div>

                <div className="mb-6">
                  <p className="text-base leading-relaxed text-muted-foreground mb-4">
                    A wet room is a fully waterproof bathroom with an open,
                    walk-in shower—no barriers, no thresholds. These modern,
                    stylish spaces are especially popular for small homes and
                    accessibility upgrades. Proper installation is crucial, and
                    that's where our experience comes in.
                  </p>
                  <div className="bg-accent/10 rounded-lg p-4">
                    <p className="text-sm font-semibold text-primary mb-1">
                      Perfect for:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Contemporary homes, mobility-friendly remodels
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Luxury Bathroom */}
            <Card
              className="shadow-soft animate-slide-up"
              style={{ animationDelay: "0.7s" }}
            >
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    7
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-serif">
                    Luxury Bathroom or Spa-Inspired Remodel
                  </h2>
                </div>

                <div className="mb-6">
                  <p className="text-base leading-relaxed text-muted-foreground mb-4">
                    Looking for more than just a refresh? Luxury bathrooms
                    include:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Freestanding tubs
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Double vanities
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Rainfall showers
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Heated floors
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Custom lighting and finishes
                      </span>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground mb-4">
                    We work with homeowners to bring their spa-inspired dreams
                    to life—from modern minimalist to rustic charm.
                  </p>
                  <div className="bg-accent/10 rounded-lg p-4">
                    <p className="text-sm font-semibold text-primary mb-1">
                      Perfect for:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      High-end remodels, custom homes
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ready to Renovate Section */}
          <Card
            className="shadow-elegant mt-12 animate-slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            <CardContent className="p-6 lg:p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-serif">
                Ready to Renovate Your Bathroom?
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-8 max-w-3xl mx-auto">
                No matter the size or type, a bathroom renovation is one of the
                best investments you can make in your home. At Zen Bathrroom, we
                handle everything from layout planning and design to plumbing,
                permits, and final touches. Whether you're updating a small
                powder room or building a luxurious master ensuite, we'll help
                you create a bathroom that fits your lifestyle—and your budget.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mb-8">
                👉 Contact us today for a free consultation or browse our
                [project gallery] to get inspired.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleCallClick}
                  variant="default"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Free Quote
                </Button>
                <Button
                  onClick={handleMessageClick}
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </article>
    </div>
  );
};

export default BlogPost4;
