"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, Mail, User, Calendar, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

const BlogPost12 = () => {
  const router = useRouter();

  const handleCallClick = () => {
    window.location.href = "tel:+0894219421";
  };

  const handleMessageClick = () => {
    router.push("/contact");
  };

  /* ------------------------------------------------------------------ */
  /* Original content kept verbatim                                      */
  /* ------------------------------------------------------------------ */

  const whyHumiditySources = [
    "Showers & baths",
    "Sinks & running water",
    "Poor air circulation",
  ];

  const moistureConsequences = [
    "Mold & mildew growth (black spots on grout, ceilings)",
    "Peeling paint & wallpaper",
    "Musty odors",
    "Structural damage over time",
  ];

  const exhaustFanSteps = [
    {
      title: "Choose the Right Exhaust Fan",
      content:
        "Size: Match CFM to room size (e.g., 50 CFM for 50 sq ft)\nNoise Level: <1.5 sones for quiet operation\nHumidity Sensor: Auto-turns on when moisture is high",
    },
    {
      title: "Install Properly",
      content:
        "Vent to the outside (not the attic!)\nUse insulated ducting to prevent condensation\nPlace near the shower (but not directly above water)",
    },
    {
      title: "Use a Timer or Smart Switch",
      content:
        "Keeps fan running 20–30 mins post-shower\nSmart models can be controlled via phone",
    },
    {
      title: "Supplement with Passive Ventilation",
      content:
        "Grille doors (allow airflow if no window)\nCeiling vents (for bathrooms with attic access)",
    },
    {
      title: "Maintain Your System",
      content:
        "Clean fan covers monthly (dust reduces efficiency)\nCheck ducts annually for blockages\nReplace old fans (inefficient models waste energy)",
    },
  ];

  const ventilationMistakes = [
    "Running the fan for too short a time (needs 20+ mins after showering)",
    "Venting into the attic (causes mold in roof space)",
    "Using a weak fan (undersized CFM won't remove moisture)",
    "Ignoring mold buildup (clean with vinegar or hydrogen peroxide)",
  ];

  const bestByType = [
    { type: "Small half-bath", solution: "Basic exhaust fan (50 CFM)" },
    {
      type: "Windowless full bath",
      solution: "High-CFM fan (80+ CFM) with humidity sensor",
    },
    {
      type: "Luxury master bath",
      solution: "Silent smart fan + heated floor drying",
    },
    { type: "Basement bathroom", solution: "Dehumidifier + exhaust fan" },
  ];

  return (
    <div className="min-h-screen w-full section-mobile-full">
      {/* ---------------- HERO ---------------- */}
      <section className="relative min-h-[40vh] md:min-h-[45vh] lg:min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/project 5/1.jpg)" }}
        >
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-[1px]" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg leading-tight">
            The Complete Guide to Bathroom Ventilation
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 opacity-90 drop-shadow-md max-w-3xl mx-auto">
            Preventing Mold & Improving Air Quality
          </p>
          <div className="w-24 md:w-32 h-1 bg-accent mx-auto rounded-full" />
        </div>
      </section>

      {/* ---------------- METADATA ---------------- */}
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
              <span>10 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- MAIN ARTICLE ---------------- */}
      <article className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl space-y-12 md:space-y-16">
          {/* INTRO */}
          <div className="animate-fade-in">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              Bathrooms are one of the most moisture-prone areas in your home.
              Between showers, baths, and high humidity, the bathroom
              environment can easily become a breeding ground for mold, mildew,
              and unpleasant odors. That's why bathroom ventilation is not just
              a luxury — it's a necessity for every home.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              At Zen Bathroom, we understand the critical role that proper
              ventilation plays in maintaining a clean, healthy, and
              long-lasting bathroom. In this blog, we'll explore why bathroom
              ventilation is essential, how it works, and the best options for
              ensuring your bathroom stays dry and fresh.
            </p>
          </div>

          {/* WHY VENTILATION MATTERS */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Why Bathroom Ventilation Matters
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card
                className="shadow-soft animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Bathrooms generate high humidity from:
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {whyHumiditySources.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card
                className="shadow-soft animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Left unchecked, this moisture causes:
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {moistureConsequences.map((c) => (
                      <li key={c} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* TYPES OF VENTILATION SYSTEMS */}
          <section>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12 text-center">
              Types of Bathroom Ventilation Systems
            </h2>

            {/* Exhaust Fans */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                1. Exhaust Fans (Most Effective Solution)
              </h3>
              <div className="grid gap-8 md:grid-cols-2">
                <Card
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-3">
                      How They Work
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Extract moist air through ductwork to the outside</li>
                      <li>
                        Should be{" "}
                        <strong>CFM-rated for your bathroom size</strong> (1 CFM
                        per sq ft minimum)
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-3">
                      Best For
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Windowless bathrooms</li>
                      <li>High-humidity climates</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Windows */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                2. Windows (Natural Ventilation)
              </h3>
              <div className="grid gap-8 md:grid-cols-2">
                <Card
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: "0.5s" }}
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-3">
                      Pros
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>No electricity needed</li>
                      <li>Provides daylight</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-3">
                      Cons
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        Less effective in cold climates (won’t be opened in
                        winter)
                      </li>
                      <li>Doesn’t remove humidity as quickly as a fan</li>
                    </ul>
                    <div className="mt-4 p-3 bg-gradient-subtle rounded-lg text-sm text-primary">
                      💡 <strong>Tip:</strong> Install tilt-and-turn windows for
                      secure ventilation.
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Dehumidifiers */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                3. Dehumidifiers (For Extra Damp Spaces)
              </h3>
              <Card
                className="shadow-soft animate-slide-up"
                style={{ animationDelay: "0.7s" }}
              >
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-primary mb-3">
                    Best For
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Basement bathrooms</li>
                    <li>Homes in very humid regions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* HVAC Ventilation */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                4. HVAC Ventilation (Whole-House Airflow)
              </h3>
              <div className="grid gap-8 md:grid-cols-2">
                <Card
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: "0.8s" }}
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-3">
                      How It Helps
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Connects bathroom to central air system</li>
                      <li>Balances humidity throughout the home</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: "0.9s" }}
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-3">
                      Best For
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>New builds & major renovations</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* HOW TO IMPROVE */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              How to Improve Bathroom Ventilation
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {exhaustFanSteps.map((step, i) => (
                <Card
                  key={i}
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-3">
                      {step.title}
                    </h3>
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {step.content}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* COMMON MISTAKES */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Common Ventilation Mistakes to Avoid
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {ventilationMistakes.map((m, i) => (
                <Card
                  key={i}
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <CardContent className="p-6 flex items-start gap-3">
                    <span className="text-red-500 text-xl font-bold">❌</span>
                    <span className="text-muted-foreground">{m}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* BEST BY TYPE */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Best Ventilation Solutions by Bathroom Type
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {bestByType.map((b, i) => (
                <Card
                  key={i}
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {b.type}
                    </h3>
                    <p className="text-muted-foreground">{b.solution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </article>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Keep Your Bathroom Dry and Healthy with Professional Ventilation
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              A well-ventilated bathroom is essential for maintaining a dry,
              comfortable, and mold-free environment. Whether you're renovating
              or upgrading your current system, Zen Bathroom is here to help you
              achieve the perfect bathroom ventilation solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto"
                onClick={handleCallClick}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 0894219421
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
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

export default BlogPost12;
