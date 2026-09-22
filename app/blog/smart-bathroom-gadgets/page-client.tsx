"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, Mail, User, Calendar, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

const BlogPost11 = () => {
  const router = useRouter();

  const handleCallClick = () => {
    window.location.href = "tel:+0894219421";
  };

  const handleMessageClick = () => {
    router.push("/contact");
    setTimeout(() => {
      const element = document.getElementById("quote-form");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  /* ------------------------------------------------------------------ */
  /* Content arrays identical to original file – no wording changed     */
  /* ------------------------------------------------------------------ */
  const guideItems = [
    "Must-have smart bathroom gadgets",
    "Eco-friendly tech for water and energy savings",
    "High-tech hygiene solutions",
    "Luxury gadgets for a spa-like experience",
    "How to choose the right tech for your bathroom",
  ];

  const smartMirrors = [
    "Built-in LED lighting with adjustable color temperatures",
    "Anti-fog technology so your mirror stays clear after hot showers",
    "Voice control (Alexa/Google Assistant integration)",
    "Touchscreen displays for weather, news, or even YouTube tutorials while you get ready",
  ];

  const smartToilets = [
    "Heated seats with adjustable temperature",
    "Automatic lid opening/closing (motion-sensor activated)",
    "Bidets with warm water & air drying (no more toilet paper waste!)",
    "Self-cleaning UV sanitation for better hygiene",
    "Built-in nightlights for late-night trips",
  ];

  const digitalShowers = [
    "Set your exact preferred temperature (no sudden cold shocks!)",
    "Control water flow & pressure via touchpad or smartphone",
    "Voice-activated operation (“Hey Google, start my shower at 102°F”)",
    "Water-saving modes to reduce consumption",
  ];

  const smartScales = [
    "Body composition analysis (muscle mass, bone density, water percentage)",
    "Syncs with fitness apps (Apple Health, Google Fit, Fitbit)",
    "Pregnancy mode for expecting mothers",
    "Multiple user profiles for the whole family",
  ];

  const bluetoothSpeakers = [
    "100% waterproof designs (some even work underwater!)",
    "Crisp, room-filling sound",
    "Voice assistant compatibility",
    "Suction cups or magnetic mounts for easy placement",
  ];

  const uvSanitizers = [
    "UV-C light kills 99.9% of germs",
    "Fast sanitizing cycles (as quick as 3 minutes)",
    "Compact & countertop-friendly",
    "Some models include toothpaste dispensers",
  ];

  const smartFaucets = [
    "Motion-sensor activation (great for messy hands)",
    "Temperature presets to prevent accidental burns",
    "Water usage tracking to conserve resources",
    "Voice control (“Alexa, fill the sink with 2 inches of warm water”)",
  ];

  const aromatherapyDiffusers = [
    "App-controlled scent scheduling",
    "Color-changing LED lights for a relaxing ambiance",
    "Bluetooth speaker combos (some models)",
  ];

  const choosingTips = [
    {
      title: "Compatibility",
      content:
        "Check if devices work with your existing smart home system (Google Home, Alexa, etc.).",
    },
    {
      title: "Installation",
      content:
        "Some gadgets (like digital showers) may require professional setup.",
    },
    {
      title: "Budget",
      content:
        "Prices range from affordable (smart scales) to high-end (luxury smart toilets).",
    },
    {
      title: "Waterproof Ratings",
      content:
        "Ensure electronics are rated for bathroom humidity (look for IPX7 or higher).",
    },
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
            Smart Bathroom Gadgets
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 opacity-90 drop-shadow-md max-w-3xl mx-auto">
            Upgrade Your Routine with These High-Tech Essentials
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
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- INTRO & GUIDE OVERVIEW ---------------- */}
      <article className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl space-y-12 md:space-y-16">
          {/* Intro */}
          <div className="animate-fade-in">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              The bathroom is no longer just a functional space—it's becoming a
              high-tech haven. From voice-controlled mirrors to self-cleaning
              toilets, innovative gadgets are transforming our daily routines
              into smarter, more luxurious experiences.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              At Zen Bathroom, we specialize in helping you integrate the latest
              technology to save water, boost hygiene, and indulge in spa-like
              comfort right at home.
            </p>
          </div>

          {/* Guide Overview */}
          <Card className="shadow-elegant animate-fade-in">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                In this guide, we’ll explore:
              </h2>
              <ul className="grid gap-2 md:grid-cols-2">
                {guideItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* ---------------- SMART GADGETS SECTIONS ---------------- */}
          <section className="space-y-12">
            {[
              {
                title: "1. Smart Mirrors: The Ultimate Bathroom Upgrade",
                bullets: smartMirrors,
              },
              {
                title: "2. High-Tech Toilets: Beyond the Basics",
                bullets: smartToilets,
              },
              {
                title:
                  "3. Digital Shower Systems: Perfect Temperature Every Time",
                bullets: digitalShowers,
              },
              {
                title: "4. Smart Scales: Track More Than Just Weight",
                bullets: smartScales,
              },
              {
                title:
                  "5. Waterproof Bluetooth Speakers: Shower Concerts, Anyone?",
                bullets: bluetoothSpeakers,
              },
              {
                title: "6. UV Toothbrush Sanitizers: Kill Germs Automatically",
                bullets: uvSanitizers,
              },
              {
                title: "7. Smart Faucets: Touchless & Water-Saving",
                bullets: smartFaucets,
              },
              {
                title: "8. Aromatherapy Diffusers with Smart Controls",
                bullets: aromatherapyDiffusers,
              },
            ].map(({ title, bullets }, idx) => (
              <Card
                key={idx}
                className="shadow-soft animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {title}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* ---------------- HOW TO CHOOSE ---------------- */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              How to Choose the Right Bathroom Tech
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {choosingTips.map((tip, i) => (
                <Card
                  key={i}
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {tip.title}
                    </h3>
                    <p className="text-muted-foreground">{tip.content}</p>
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
              Final Thoughts
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              The bathroom of the future is here—smarter, cleaner, and more
              luxurious than ever. Whether you start with a simple waterproof
              speaker or go all-in with a high-tech toilet, these gadgets make
              your daily routine more efficient, enjoyable, and healthy.
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

export default BlogPost11;
