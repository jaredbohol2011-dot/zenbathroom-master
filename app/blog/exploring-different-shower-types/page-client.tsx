"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, Mail, User, Calendar, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

const BlogPost15 = () => {
  const router = useRouter();

  const handleCallClick = () => {
    window.location.href = "tel:+0894219421";
  };

  const handleMessageClick = () => {
    router.push("/contact");
  };

  //  ---- All original content arrays preserved verbatim ----
  const guideItems = [
    "Popular shower types and their pros & cons",
    "Space-saving solutions for small bathrooms",
    "Luxury shower options for a spa-like experience",
    "Key considerations when choosing a shower",
    "Trending designs in modern bathrooms",
  ];

  const showerTypes = [
    {
      title: "1. Enclosed Showers (Shower Cubicles)",
      desc: "The most common type, featuring a framed or frameless glass enclosure.",
      pros: [
        "Space-efficient – Fits well in most bathrooms",
        "Contains water splash – Keeps the rest of the bathroom dry",
        "Variety of styles – Framed, semi-frameless, or fully frameless",
      ],
      cons: [
        "Can feel cramped if too small",
        "Glass requires regular cleaning",
      ],
      best: "Standard bathrooms, budget-friendly renovations",
    },
    {
      title: "2. Walk-In Showers",
      desc: "A sleek, open-concept shower with minimal barriers.",
      pros: [
        "Modern, luxurious look",
        "Easier access (great for mobility issues)",
        "Feels more spacious",
      ],
      cons: [
        "More water splashing – Requires good drainage",
        "Needs proper waterproofing (tanking)",
      ],
      best: "Contemporary bathrooms, aging-in-place designs",
    },
    {
      title: "3. Wet Rooms",
      desc: "A fully waterproofed bathroom where the shower area blends seamlessly into the room.",
      pros: [
        "Ultra-modern aesthetic",
        "No shower tray needed – Fully tiled floor",
        "Great for small bathrooms (no enclosure taking up space)",
      ],
      cons: [
        "Expensive to install (requires full waterproofing)",
        "Everything gets wet – Must plan storage carefully",
      ],
      best: "High-end bathrooms, minimalist designs",
    },
    {
      title: "4. Corner Showers (Quadrant Showers)",
      desc: "Designed to fit snugly into a bathroom corner.",
      pros: [
        "Space-saving – Ideal for small bathrooms",
        "Affordable – Many pre-fab options available",
        "Can have sliding doors (no swing space needed)",
      ],
      cons: ["Limited interior space", "Angled doors can be tricky"],
      best: "Compact bathrooms, guest ensuites",
    },
    {
      title: "5. Bathtub-Shower Combos",
      desc: "A shower installed over a bathtub.",
      pros: [
        "Dual functionality – Best of both worlds",
        "Cost-effective – No need for separate units",
      ],
      cons: [
        "Less comfortable than a dedicated shower",
        "Can feel cramped when showering",
      ],
      best: "Family bathrooms, homes with limited space",
    },
    {
      title: "6. Steam Showers",
      desc: "A high-end shower with built-in steam function.",
      pros: [
        "Spa-like relaxation – Helps with muscle tension",
        "Can include aromatherapy & chromotherapy",
        "Adds value to your home",
      ],
      cons: ["Expensive to install & maintain", "Requires proper ventilation"],
      best: "Luxury bathrooms, wellness-focused homes",
    },
    {
      title: "7. Outdoor Showers",
      desc: "An open-air shower, often in gardens or pool areas.",
      pros: [
        "Refreshing natural experience",
        "Great for rinsing off after swimming",
        "No enclosure needed",
      ],
      cons: ["Only usable in warm weather", "Requires weatherproof materials"],
      best: "Vacation homes, tropical climates",
    },
  ];

  const choosingTips = [
    "Assess your space – Measure carefully before deciding.",
    "Consider who's using it – Families, elderly, or guests?",
    "Set a budget – Wet rooms & steam showers cost more.",
    "Think about maintenance – Glass doors vs. tiled walls.",
    "Match your bathroom style – Modern, traditional, or rustic?",
  ];

  const trends = [
    "Nature-inspired designs (stone textures, wood-effect tiles)",
    "Smart showers (digital temperature control, voice activation)",
    "Frameless glass enclosures (for a seamless look)",
    "Linear drains (sleek and minimalistic)",
  ];

  const services = [
    "Expert consultation and custom shower design",
    "Professional installation with waterproofing",
    "Luxury spa and steam shower builds",
    "Complete bathroom remodeling services",
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
            Exploring Different Shower Types
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 opacity-90 drop-shadow-md max-w-3xl mx-auto">
            Which One Fits Your Style and Needs?
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
              <span>9 min read</span>
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
              When it comes to designing a bathroom, the shower is often the
              focal point. Not only is it functional, but it also plays a big
              role in the overall aesthetic and ambiance of the space. Whether
              you're renovating or building a new bathroom, understanding the
              different types of showers can help you make an informed decision.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              At Zen Bathroom, we offer a range of shower solutions tailored to
              fit every style, space, and budget. Here's an overview of the most
              popular shower types and how to choose the one that best suits
              your needs.
            </p>
          </div>

          {/* GUIDE OVERVIEW */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              In this guide, we'll explore:
            </h2>
            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <div className="grid gap-2 md:grid-cols-2">
                  {guideItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* SHOWER TYPES */}
          <section>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12 text-center">
              Popular Shower Types
            </h2>
            <div className="space-y-12">
              {showerTypes.map((shower, idx) => (
                <Card
                  key={idx}
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                      {shower.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{shower.desc}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-primary mb-2">Pros:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          {shower.pros.map((p) => (
                            <li key={p} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2">Cons:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          {shower.cons.map((c) => (
                            <li key={c} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-gradient-subtle rounded-lg">
                      <p className="text-sm text-primary">
                        <strong>💡 Best for:</strong> {shower.best}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CHOOSING TIPS */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              How to Choose the Right Shower Type
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
              Shower Trends to Watch
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
              Why Choose Zen Bathroom for Your Shower Installation?
            </h2>
            <Card className="shadow-elegant bg-gradient-subtle animate-fade-in">
              <CardContent className="p-6 md:p-8 text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  At Zen Bathroom, we specialize in creating the perfect shower
                  solution tailored to your needs. Whether you're after a
                  luxurious steam shower or a simple walk-in option, our team of
                  experienced professionals is here to guide you through the
                  process. From design to installation, we ensure your shower is
                  functional, stylish, and built to last.
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
              Ready to Upgrade Your Shower?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Choosing the right shower type for your bathroom is an important
              decision that will affect both the functionality and style of your
              space. Let us help you bring your vision to life.
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

export default BlogPost15;
