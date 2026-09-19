"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, Mail, User, Calendar, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

const BlogPost16 = () => {
  const router = useRouter();

  const handleCallClick = () => {
    window.location.href = "tel:+0894219421";
  };

  const handleMessageClick = () => {
    router.push("/contact");
  };

  /* ------------------------- ORIGINAL DATA ------------------------- */
  const guideItems = [
    "Popular shower types and their pros & cons",
    "Space-saving solutions for small bathrooms",
    "Luxury shower options for a spa-like experience",
    "Key considerations when choosing a shower",
    "Trending designs in modern bathrooms",
  ];

  const cabinetBenefits = [
    {
      label: "Organization",
      text: "Keeps toiletries, medications, towels, and other essentials neatly stored and easily accessible.",
    },
    {
      label: "Maximized Space",
      text: "Adds much-needed storage to often limited bathroom space, keeping your counters clutter-free.",
    },
    {
      label: "Aesthetic Appeal",
      text: "Choose cabinets that complement your bathroom's overall design, whether it's modern, traditional, or rustic.",
    },
    {
      label: "Increased Property Value",
      text: "Well-thought-out cabinetry can boost your bathroom's functionality and contribute to a higher home resale value.",
    },
  ];

  const cabinetTypes = [
    {
      title: "1. Vanity Cabinets: The All-in-One Solution",
      desc: "Vanity cabinets combine sink storage and counter space into one unit.",
      features: [
        "Includes space beneath the sink for towels, cleaning products, etc.",
        "Often comes with built-in drawers for smaller items like makeup or toiletries",
        "Available in various sizes to fit different bathroom layouts",
      ],
      bestFor: [
        "Bathrooms with limited space needing storage + countertop",
        "Homeowners wanting an all-inclusive design that integrates with the sink",
      ],
    },
    {
      title: "2. Wall-Mounted Cabinets: Space-Saving and Modern",
      desc: "Wall-mounted cabinets are hung from the wall, leaving the floor open.",
      features: [
        "Open floor space beneath makes the room feel larger",
        "Can be installed at varying heights",
        "Ideal for modern or minimalist designs",
      ],
      bestFor: [
        "Small bathrooms or half-baths where space optimization is key",
        "Contemporary or sleek bathrooms prioritizing clean lines",
      ],
    },
    {
      title: "3. Medicine Cabinets: For Functional Elegance",
      desc: "Compact cabinets that often include a mirror for grooming.",
      features: [
        "Mirror included—two-in-one solution",
        "Slim design fits neatly into the wall",
        "Available recessed or surface-mounted",
      ],
      bestFor: [
        "Limited-space bathrooms needing convenient storage",
        "Homeowners combining storage with a mirror",
      ],
    },
    {
      title: "4. Linen Cabinets: Tall and Spacious",
      desc: "Tall units for towels, linens, and cleaning supplies.",
      features: [
        "Tall vertical design maximizes storage",
        "Great for towels, washcloths, toiletries",
        "Can be placed next to shower or toilet",
      ],
      bestFor: [
        "Larger bathrooms needing extra storage",
        "Households with multiple people needing towel/linen space",
      ],
    },
  ];

  const materials = [
    {
      name: "Wood",
      desc: "Timeless, natural warmth; great for traditional or rustic styles.",
      pros: "Highly customizable, can be stained or painted.",
      cons: "Requires regular sealing to prevent moisture damage.",
    },
    {
      name: "MDF",
      desc: "Engineered wood—durable, affordable, resists warping.",
      pros: "Smooth paintable surface; budget-friendly.",
      cons: "Heavier; edges can swell if not sealed.",
    },
    {
      name: "Laminate",
      desc: "Affordable, durable, wide variety of colors & textures.",
      pros: "Water-resistant, easy to clean.",
      cons: "Prone to scratches and chips over time.",
    },
    {
      name: "Glass & Acrylic",
      desc: "Sleek, modern, minimalistic.",
      pros: "High-end look; easy to wipe clean.",
      cons: "Shows fingerprints and water spots.",
    },
  ];

  const choosingTips = [
    "Assess Your Storage Needs – drawers vs. shelves.",
    "Match Your Bathroom Style – modern, traditional, rustic.",
    "Consider Size and Layout – wall-mounted vs. floor-standing.",
    "Opt for Quality Hardware – durable hinges & handles.",
  ];

  const trends = [
    "Nature-inspired designs (stone textures, wood-effect tiles)",
    "Smart storage (pull-out organizers, hidden outlets)",
    "Frameless mirrors & floating vanities",
    "Mixed-material finishes (wood + metal, matte + gloss)",
  ];

  const services = [
    "Custom bathroom cabinet design and installation",
    "Material selection (wood, MDF, laminate, etc.)",
    "Space planning to maximize storage and functionality",
    "Expert installation for a seamless, professional finish",
  ];

  return (
    <div className="min-h-screen w-full section-mobile-full">
      {/* HERO */}
      <section className="relative min-h-[40vh] md:min-h-[45vh] lg:min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/project 5/1.jpg)" }}
        >
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-[1px]" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg leading-tight">
            The Ultimate Guide to Bathroom Cabinets
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 opacity-90 drop-shadow-md max-w-3xl mx-auto">
            Function, Style, and Storage Solutions
          </p>
          <div className="w-24 md:w-32 h-1 bg-accent mx-auto rounded-full" />
        </div>
      </section>

      {/* METADATA */}
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

      {/* MAIN ARTICLE */}
      <article className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl space-y-12 md:space-y-16">
          {/* INTRO */}
          <div className="animate-fade-in">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              When it comes to bathroom design, cabinets are more than just
              storage—they are the backbone of your space. Whether you're
              renovating or simply upgrading, selecting the right bathroom
              cabinets can significantly improve both the functionality and look
              of your bathroom. From organizing toiletries to housing cleaning
              supplies, the right cabinetry makes all the difference.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              At Zen Bathroom, we believe that smart storage solutions are
              essential for creating a bathroom that's not only beautiful but
              also organized and efficient. In this blog, we'll dive into the
              different types of bathroom cabinets, the materials you can choose
              from, and tips on how to pick the best cabinets for your space.
            </p>
          </div>

          {/* WHY CABINETS MATTER */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Why Bathroom Cabinets Matter
            </h2>
            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Bathroom cabinets play a crucial role in maintaining
                  organization and reducing clutter. But beyond that, they also
                  contribute to the overall look and feel of your bathroom. A
                  well-designed cabinet can enhance your bathroom's style,
                  provide extra storage, and even increase your home's value.
                </p>
                <ul className="space-y-4">
                  {cabinetBenefits.map((b) => (
                    <li key={b.label} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-foreground">{b.label}:</strong>
                        <span className="text-muted-foreground"> {b.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* CABINET TYPES */}
          <section>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12 text-center">
              Types of Bathroom Cabinets
            </h2>
            <div className="space-y-8">
              {cabinetTypes.map((cab, idx) => (
                <Card
                  key={idx}
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                      {cab.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{cab.desc}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-primary mb-2">
                          Key Features:
                        </h4>
                        <ul className="space-y-2 text-muted-foreground">
                          {cab.features.map((f) => (
                            <li key={f} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2">
                          Best For:
                        </h4>
                        <ul className="space-y-2 text-muted-foreground">
                          {cab.bestFor.map((b) => (
                            <li key={b} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* MATERIALS */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              🛠️ Materials for Bathroom Cabinets
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {materials.map((mat, i) => (
                <Card
                  key={i}
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {mat.name}
                    </h3>
                    <p className="text-muted-foreground mb-3">{mat.desc}</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Pros:</strong> {mat.pros}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Cons:</strong> {mat.cons}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CHOOSING TIPS */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              How to Choose the Right Bathroom Cabinets for Your Space
            </h2>
            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <div className="space-y-4">
                  {choosingTips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-muted-foreground">{tip}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* TRENDS */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Bathroom Cabinet Trends to Watch
            </h2>
            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <div className="grid gap-4 md:grid-cols-2">
                  {trends.map((t) => (
                    <div key={t} className="flex items-start gap-3">
                      <span className="text-2xl">✨</span>
                      <span className="text-muted-foreground">{t}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* WHY ZEN */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Why Choose Zen Bathroom for Your Bathroom Cabinets?
            </h2>
            <Card className="shadow-elegant bg-gradient-subtle animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  At Zen Bathroom, we understand that the right bathroom
                  cabinetry can transform your space. Whether you're renovating
                  a small powder room or creating a luxurious master bath, our
                  expert team can guide you in selecting and installing the best
                  cabinets for your needs.
                </p>
                <ul className="grid gap-2 md:grid-cols-2 text-muted-foreground">
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

      {/* FINAL CTA */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Update Your Bathroom Cabinets?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Your bathroom can be both functional and beautiful with the right
              cabinets. Contact us today for a consultation or to explore our
              wide range of bathroom cabinetry options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" onClick={handleMessageClick}>
                Get Free Quote
              </Button>
              <Button variant="outline" size="lg" onClick={handleCallClick}>
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost16;
