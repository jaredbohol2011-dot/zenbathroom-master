"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, Mail, User, Calendar, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

const BlogPost10 = () => {
  const router = useRouter();

  const handleCallClick = () => {
    window.location.href = "tel:+0894219421";
  };

  const handleMessageClick = () => {
    router.push("/contact");
  };

  /* ------------------------------------------------------------------ */
  /* Data kept identical to original file                                 */
  /* ------------------------------------------------------------------ */
  const fixtureBenefits = [
    "Define the aesthetic (modern, traditional, industrial, etc.)",
    "Improve water efficiency (save money and resources)",
    "Enhance daily routines (better showers, easier cleaning)",
    "Increase home value (updated fixtures appeal to buyers)",
  ];

  const faucetStyles = [
    { name: "Single-hole", desc: "compact, modern" },
    { name: "Widespread", desc: 'traditional, 8-16" between handles' },
    { name: "Wall-mounted", desc: "sleek, space-saving" },
    { name: "Touchless", desc: "hygienic, great for families" },
  ];

  const faucetFinishes = [
    { name: "Matte Black", desc: "modern & timeless" },
    { name: "Brushed Gold", desc: "warm & luxurious" },
    { name: "Chrome", desc: "classic & budget-friendly" },
  ];

  const showerTypes = [
    { name: "Rainfall", desc: "luxurious, spa-like" },
    { name: "Handheld", desc: "versatile for cleaning & bathing kids/pets" },
    {
      name: "High-pressure",
      desc: "improves water flow in low-pressure homes",
    },
    { name: "LED", desc: "color-changing temperature indicators" },
  ];

  const showerFeatures = [
    "WaterSense certification (saves water without sacrificing pressure)",
    "Anti-clog nozzles (easy to clean)",
    "Adjustable settings (massage, mist, etc.)",
  ];

  const bathtubOptions = [
    { name: "Floor-mounted tub fillers", desc: "for freestanding tubs" },
    { name: "Deck-mounted", desc: "for built-in tubs" },
    { name: "Wall-mounted", desc: "saves space, modern look" },
  ];

  const bathtubMaterials = [
    { name: "Acrylic", desc: "lightweight & affordable" },
    { name: "Cast iron", desc: "durable but heavy" },
    { name: "Stone resin", desc: "luxurious feel" },
  ];

  const toiletTypes = [
    { name: "One-piece", desc: "sleek, easy to clean" },
    { name: "Two-piece", desc: "classic, more affordable" },
    { name: "Wall-hung", desc: "space-saving, modern" },
    { name: "Smart toilets", desc: "bidet, heated seat, auto-flush" },
  ];

  const toiletConsiderations = [
    "Water efficiency (1.28 GPF or less)",
    'Comfort height (17-19" for easier sitting/standing)',
    "Elongated vs. round bowl (elongated is more comfortable)",
  ];

  const bidetOptions = [
    { name: "Standalone bidets", desc: "traditional, separate fixture" },
    { name: "Bidet toilet seats", desc: "add-on for existing toilets" },
    { name: "Smart toilets", desc: "all-in-one with heated seats, air dryers" },
  ];

  const bidetBenefits = [
    "More hygienic than toilet paper",
    "Reduces waste & saves money long-term",
    "Great for mobility-limited users",
  ];

  const accessories = [
    { name: "Heated towel racks", desc: "luxurious & prevents mildew" },
    { name: "Robust robe hooks", desc: "holds weight without pulling out" },
    { name: "Toilet paper holders", desc: "with easy one-handed access" },
  ];

  const accessoryFinishes = [
    "Mix metals intentionally (e.g., matte black faucets with brass hooks)",
    "Avoid cheap chrome (shows water spots easily)",
  ];

  const choosingTips = [
    {
      title: "Match Your Design Style",
      content:
        "Modern: Sleek lines, matte finishes, wall-mounted\nTraditional: Cross-handle faucets, porcelain knobs\nIndustrial: Exposed pipes, black iron, utilitarian look",
    },
    {
      title: "Consider Water Efficiency",
      content:
        "Look for WaterSense-labeled faucets & showerheads\nLow-flow doesn't mean weak pressure—tech has improved!",
    },
    {
      title: "Think About Maintenance",
      content:
        "Polished chrome shows water spots\nOil-rubbed bronze requires occasional waxing\nMatte black hides fingerprints but needs gentle cleaning",
    },
    {
      title: "Set a Budget",
      content:
        "Save on: Towel bars, basic showerheads\nSplurge on: Faucets (used daily), smart toilets",
    },
  ];

  const trends2025 = [
    "🚿 Smart showers (digital temperature control)",
    "✨ Mixed metals (e.g., black faucets with gold mirrors)",
    "💧 Concealed plumbing (ultra-minimalist look)",
    "🌿 Eco-friendly designs (water-saving & lead-free)",
  ];

  const services = [
    "Bathroom fixture selection and installation",
    "Custom design and layout planning",
    "Expert advice on materials, finishes, and efficiency",
    "Full bathroom remodeling services",
  ];

  /* ------------------------------------------------------------------ */
  /* Render                                                             */
  /* ------------------------------------------------------------------ */
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
            The Essential Bathroom Fixtures
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 opacity-90 drop-shadow-md max-w-3xl mx-auto">
            How to Choose the Best for Your Space
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
              <span>7 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- INTRO ---------------- */}
      <article className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl space-y-12 md:space-y-16">
          <div className="animate-fade-in">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              When it comes to bathroom design, fixtures are the unsung heroes.
              While style, color, and layout often take center stage, it's the
              bathroom fixtures that bring it all together. These functional
              elements not only enhance the aesthetic of your space but also
              impact its overall functionality and efficiency.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              At Zen Bathroom, we know that selecting the right fixtures can be
              a game-changer for your bathroom. Whether you're remodeling your
              existing space or starting from scratch, understanding the
              different types of bathroom fixtures is the first step in creating
              a functional, stylish, and comfortable bathroom.
            </p>
          </div>

          {/* ---------------- WHY FIXTURES MATTER ---------------- */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Why Bathroom Fixtures Matter
            </h2>
            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <div className="grid gap-4 md:grid-cols-2">
                  {fixtureBenefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{b}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* ---------------- TYPES OF FIXTURES ---------------- */}
          <section>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12 text-center">
              Types of Bathroom Fixtures & How to Choose Them
            </h2>

            {/* --- Faucets --- */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                1. Faucets
              </h3>
              <div className="grid gap-8 md:grid-cols-2">
                <Card
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-4">
                      Styles
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {faucetStyles.map((s) => (
                        <li key={s.name} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>
                            <strong>{s.name}:</strong> {s.desc}
                          </span>
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
                    <h4 className="text-xl font-bold text-primary mb-4">
                      Finishes
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {faucetFinishes.map((f) => (
                        <li key={f.name} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>
                            <strong>{f.name}:</strong> {f.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 p-4 bg-gradient-subtle rounded-lg">
                      <p className="text-sm text-primary">
                        <span className="mr-2">💡</span>
                        <strong>Tip:</strong> Check the spout height & reach—too
                        short causes splashing, too long looks awkward.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* --- Showerheads --- */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                2. Showerheads
              </h3>
              <div className="grid gap-8 md:grid-cols-2">
                <Card
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-4">
                      Types
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {showerTypes.map((t) => (
                        <li key={t.name} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>
                            <strong>{t.name}:</strong> {t.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {showerFeatures.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* --- Bathtub Fillers --- */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                3. Bathtub Fillers & Freestanding Tubs
              </h3>
              <div className="grid gap-8 md:grid-cols-2">
                <Card
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: "0.5s" }}
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-4">
                      Popular Options
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {bathtubOptions.map((o) => (
                        <li key={o.name} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>
                            <strong>{o.name}:</strong> {o.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-4">
                      Material Choices
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {bathtubMaterials.map((m) => (
                        <li key={m.name} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>
                            <strong>{m.name}:</strong> {m.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* --- Toilets --- */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                4. Toilets
              </h3>
              <div className="grid gap-8 md:grid-cols-2">
                <Card
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: "0.7s" }}
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-4">
                      Types
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {toiletTypes.map((t) => (
                        <li key={t.name} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>
                            <strong>{t.name}:</strong> {t.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: "0.8s" }}
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-4">
                      Key Considerations
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {toiletConsiderations.map((c) => (
                        <li key={c} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* --- Bidets --- */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                5. Bidets & Smart Toilet Attachments
              </h3>
              <div className="grid gap-8 md:grid-cols-2">
                <Card
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: "0.9s" }}
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-4">
                      Options
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {bidetOptions.map((o) => (
                        <li key={o.name} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>
                            <strong>{o.name}:</strong> {o.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: "1s" }}
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-4">
                      Why Consider a Bidet?
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {bidetBenefits.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* --- Accessories --- */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                6. Accessory Fixtures
              </h3>
              <div className="grid gap-8 md:grid-cols-2">
                <Card
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: "1.1s" }}
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-4">
                      Must-Haves
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {accessories.map((a) => (
                        <li key={a.name} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>
                            <strong>{a.name}:</strong> {a.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: "1.2s" }}
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-4">
                      Finishes to Match
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {accessoryFinishes.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* ---------------- HOW TO CHOOSE ---------------- */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              How to Choose the Right Fixtures for Your Bathroom
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
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {tip.content}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* ---------------- 2025 TRENDS ---------------- */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              2025 Bathroom Fixture Trends
            </h2>
            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <div className="grid gap-4 md:grid-cols-2">
                  {trends2025.map((t) => (
                    <p key={t} className="text-muted-foreground">
                      {t}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* ---------------- WHY ZEN BATHROOM ---------------- */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Why Choose Zen Bathroom for Your Bathroom Fixtures?
            </h2>
            <Card className="shadow-elegant bg-gradient-subtle animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  At Zen Bathroom, we offer a wide range of top-quality bathroom
                  fixtures that combine functionality, durability, and style.
                  Whether you're upgrading a single fixture or remodeling your
                  entire bathroom, our expert team is here to guide you through
                  the selection process, ensuring you make the best choices for
                  your space.
                </p>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Our services include:
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {services.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>
      </article>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Upgrade Your Bathroom Fixtures?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              From stylish faucets to luxurious bathtubs, the right bathroom
              fixtures can elevate your space and improve functionality. Let Zen
              Bathroom help you find the perfect fixtures to complete your
              bathroom remodel.
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

export default BlogPost10;
