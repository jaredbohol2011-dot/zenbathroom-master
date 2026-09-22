"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, Mail, User, Calendar, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

const BlogPost17 = () => {
  const router = useRouter();

  const handleCallClick = () => {
    window.location.href = "tel:+0894219421";
  };

  const handleMessageClick = () => {
    router.push("/contact");
  };

  /* ------------------------- ORIGINAL DATA ------------------------- */
  const benefits = [
    { title: "Waterproof", desc: "Preventing leaks and water damage" },
    { title: "Mould-resistant", desc: "Keeping your bathroom hygienic" },
    { title: "Beautiful", desc: "Creating crisp, clean lines that last" },
    { title: "Durable", desc: "Stopping tiles from shifting or cracking" },
  ];

  const groutTypes = [
    {
      title: "Cement-Based Grout",
      items: [
        {
          name: "Sanded Grout",
          detail:
            'Best for wider joints (1/8" or larger). Ideal for floor tiles.',
        },
        {
          name: "Unsanded Grout",
          detail: 'Used for narrow joints (< 1/8") and delicate tiles.',
        },
      ],
    },
    {
      title: "Epoxy Grout",
      detail:
        "More durable, stain-resistant, and waterproof. Great for showers and kitchens.",
    },
    {
      title: "Furan Resin Grout",
      detail:
        "Extremely chemical-resistant; rarely used in residential projects.",
    },
  ];

  const steps = [
    {
      step: 1,
      title: "Prepare the Surface",
      bullets: [
        "Ensure tiles are firmly set and spacers are removed.",
        "Clean excess thinset or debris from the joints.",
      ],
    },
    {
      step: 2,
      title: "Mix the Grout",
      bullets: [
        "Follow manufacturer instructions for water-to-grout ratio.",
        "Mix to a peanut-butter-like consistency.",
      ],
    },
    {
      step: 3,
      title: "Apply the Grout",
      bullets: [
        "Use a rubber float at 45° to press grout into joints.",
        "Work in small sections to prevent premature drying.",
      ],
    },
    {
      step: 4,
      title: "Remove Excess Grout",
      bullets: [
        "After 10–15 minutes, wipe diagonally with a damp sponge.",
        "Rinse the sponge frequently.",
      ],
    },
    {
      step: 5,
      title: "Final Cleanup & Sealing",
      bullets: [
        "Once fully dry (24–72 h), buff tiles with a dry cloth.",
        "Apply sealer (for cement-based grout) to protect against stains.",
      ],
    },
  ];

  const mistakes = [
    "Skipping the Sealer – Unsealed grout absorbs stains and moisture.",
    "Overwatering the Mix – Weakens grout and leads to cracking.",
    "Rushing the Cleanup – Waiting too long makes grout harder to remove.",
    "Ignoring Expansion Joints – Use flexible caulk instead of grout at movement-prone edges.",
  ];

  const maintenance = [
    {
      title: "Regular Cleaning",
      text: "Use a pH-neutral cleaner to avoid damaging the grout.",
    },
    {
      title: "Re-sealing",
      text: "Reapply sealer every 1–2 years for cement-based grout.",
    },
    {
      title: "Repairing Cracks",
      text: "Remove damaged grout and reapply fresh grout as needed.",
    },
  ];

  const services = [
    "Professional grouting installation and repairs",
    "Custom grout color and finish options",
    "Grout sealing and maintenance services",
    "Expert advice on the best grout for your tiles",
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
            The Ultimate Guide to Bathroom Grouting
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 opacity-90 drop-shadow-md max-w-3xl mx-auto">
            Expert Advice from Zen Bathroom
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
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN ARTICLE */}
      <article className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl space-y-12 md:space-y-16">
          {/* INTRO */}
          <div className="animate-fade-in">
            <Card className="shadow-elegant">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Why Grouting is the Secret to a Perfect Bathroom
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At Zen Bathrooms, we've fitted hundreds of bathrooms across
                  [your location], and we know one truth: great tiles deserve
                  great grout. Proper grouting isn't just about filling
                  gaps—it's what makes your bathroom:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {benefits.map((b) => (
                    <div key={b.title} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-foreground">{b.title}:</strong>
                        <span className="text-muted-foreground"> {b.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* TYPES OF GROUT */}
          <section>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12 text-center">
              Types of Grout: Which One Should You Use?
            </h2>
            <div className="space-y-8">
              {groutTypes.map((type, idx) => (
                <Card
                  key={idx}
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                      {type.title}
                    </h3>
                    {type.items ? (
                      <ul className="space-y-3 text-muted-foreground">
                        {type.items.map((item) => (
                          <li
                            key={item.name}
                            className="flex items-start gap-2"
                          >
                            <strong className="text-foreground">
                              {item.name}:
                            </strong>
                            <span>{item.detail}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground">{type.detail}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* STEP-BY-STEP */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              How to Grout Tile Like a Pro
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {steps.map((step) => (
                <Card
                  key={step.step}
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: `${step.step * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-4 text-center">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-3">
                      {step.title}
                    </h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {step.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* MISTAKES */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Common Grouting Mistakes to Avoid
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {mistakes.map((m, i) => (
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

          {/* MAINTENANCE */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Maintaining Your Grout for Longevity
            </h2>
            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <ul className="space-y-4">
                  {maintenance.map((m) => (
                    <li key={m.title} className="flex items-start gap-3">
                      <strong className="text-foreground">{m.title}:</strong>
                      <span className="text-muted-foreground">{m.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* WHY ZEN */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Why Choose Zen Bathroom for Your Grouting Needs?
            </h2>
            <Card className="shadow-elegant bg-gradient-subtle animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  At Zen Bathroom, we specialize in providing high-quality
                  grouting services that ensure your tiles stay in place and
                  look stunning for years to come. Whether you're tackling a DIY
                  project or need professional help, our team can assist with
                  everything from grout selection to expert application.
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
              Ready to Get Your Grout Game On?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Proper grouting ensures a professional, long-lasting tile
              installation. Let Zen Bathroom help you achieve the perfect grout
              application for your home.
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

export default BlogPost17;
