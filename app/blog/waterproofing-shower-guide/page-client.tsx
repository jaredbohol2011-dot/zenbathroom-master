"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, CheckCircle, Calendar, User, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

const BlogPost9 = () => {
  const router = useRouter();

  const handleCallClick = () => {
    window.location.href = "tel:+0894219421";
  };

  const handleMessageClick = () => {
    router.push("/contact");
  };

  /* -------------- 1. WHY PROPER WATERPROOFING MATTERS -------------- */
  const whyWaterproofingMatters = [
    "Prevents water penetration into wall cavities and subfloors",
    "Stops mold growth in hidden spaces",
    "Protects structural integrity of your home",
    "Required by building regulations in most areas",
  ];

  /* -------------- 2. WHAT IS SHOWER TANKING -------------- */
  const tankingIntro = [
    "What is Shower Tanking?",
    "Why Tanking is Non-Negotiable",
    "Where Tanking is Needed",
  ];

  /* -------------- 3. SHOWER TRAY UPSTAND MEMBRANES -------------- */
  const upstandMembranes = [
    "What is an Upstand Membrane?",
    "Key Benefits",
    "Types of Upstand Membranes",
  ];

  /* -------------- 4. MATERIALS NEEDED -------------- */
  const materials = [
    "Shower tray upstand membrane",
    "Tanking kit (liquid or sheet membrane)",
    "Primer (if required)",
    "Sealant/adhesive",
    "Notched trowel",
    "Utility knife",
    "Measuring tape",
  ];

  /* -------------- 5. INSTALLATION STEPS -------------- */
  const steps = [
    {
      step: 1,
      title: "Prepare the Substrate",
      desc: [
        "Ensure surfaces are clean, dry and free from debris",
        "Repair any cracks or holes",
        "Apply primer if required by your tanking system",
      ],
    },
    {
      step: 2,
      title: "Install the Shower Tray",
      desc: [
        "Set tray in position on mortar bed or adjustable feet",
        "Ensure perfectly level (critical for drainage)",
      ],
    },
    {
      step: 3,
      title: "Apply the Upstand Membrane",
      desc: [
        "Cut membrane to required height (typically 100 mm above tray)",
        "Apply adhesive to tray edge and wall",
        "Press membrane firmly into place, ensuring no air pockets",
        "Overlap corners by at least 100 mm",
      ],
    },
    {
      step: 4,
      title: "Tank the Shower Area",
      desc: [
        "Apply liquid tanking membrane over walls and upstand",
        "Reinforce corners with waterproof tape",
        "Create a continuous barrier over entire wet area",
      ],
    },
    {
      step: 5,
      title: "Final Checks",
      desc: [
        "Inspect for any gaps or thin areas",
        "Allow proper curing time before tiling",
        "Water test before final installation",
      ],
    },
  ];

  /* -------------- 6. COMMON MISTAKES -------------- */
  const mistakes = [
    {
      title: "Relying only on tiles for waterproofing",
      note: "(Tiles and grout are NOT waterproof)",
    },
    {
      title: "Poor surface preparation",
      note: "(Tanking won't adhere properly to dirty surfaces)",
    },
    {
      title: "Inadequate coverage at corners",
      note: "(90 % of leaks start here)",
    },
    {
      title: "Not allowing proper curing time",
      note: "(Rushing leads to failures)",
    },
    {
      title: "Using standard silicone instead of sanitary sealant",
      note: "(Won’t last in wet environments)",
    },
  ];

  /* -------------- 7. MAINTENANCE TIPS -------------- */
  const maintenance = [
    "Regularly inspect silicone seals (replace every 2-3 years)",
    "Clean grout lines annually to prevent water penetration",
    "Check for any movement in shower tray (can break seals)",
    "Address any leaks immediately before damage occurs",
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
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg leading-tight">
              Waterproofing Your Shower
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 opacity-90 drop-shadow-md max-w-3xl mx-auto">
              A Step-by-Step Guide to Prevent Leaks and Damage
            </p>
            <div className="w-24 md:w-32 h-1 bg-accent mx-auto rounded-full" />
          </div>
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
              A leaking shower can cause catastrophic damage to your home—from
              ruined floorboards and ceilings to dangerous mold growth. Tanking
              (waterproofing) your shower area and properly installing a
              shower-tray upstand membrane are two of the most important steps
              in creating a watertight installation that will last for decades.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              At Zen Bathroom, we specialize in durable, code-compliant
              waterproofing solutions that protect your investment for the long
              haul.
            </p>
          </div>

          {/* WHAT’S INSIDE */}
          <Card className="shadow-elegant animate-fade-in">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                In this comprehensive guide, we’ll cover:
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                {[
                  "What shower tanking is and why it’s crucial",
                  "The purpose of shower-tray upstand membranes",
                  "Step-by-step installation processes",
                  "Common mistakes to avoid",
                  "Maintenance tips for longevity",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* 1. UNDERSTANDING SHOWER TANKING */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Understanding Shower Tanking
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {tankingIntro.map((title, i) => (
                <Card
                  key={i}
                  className="shadow-soft hover:shadow-elegant transition-all animate-slide-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {title}
                    </h3>
                    {i === 0 && (
                      <p className="text-muted-foreground">
                        Tanking refers to creating a completely waterproof
                        barrier behind and around your shower area. This
                        involves applying special waterproofing materials to
                        walls, floors, and joints before tiling.
                      </p>
                    )}
                    {i === 1 && (
                      <ul className="space-y-2 text-muted-foreground">
                        {whyWaterproofingMatters.map((txt, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{txt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {i === 2 && (
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• All shower walls (especially around the tray)</li>
                        <li>
                          • Floor/wall junctions (the most vulnerable area)
                        </li>
                        <li>• Around any penetrations (valves, fixtures)</li>
                      </ul>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* 2. UPSTAND MEMBRANES */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Shower-Tray Upstand Membranes Explained
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {upstandMembranes.map((title, i) => (
                <Card
                  key={i}
                  className="shadow-soft hover:shadow-elegant transition-all animate-slide-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {title}
                    </h3>
                    {i === 0 && (
                      <p className="text-muted-foreground">
                        A specialized waterproofing strip that creates a
                        seamless transition between your shower tray and walls.
                        Typically made from flexible, waterproof materials like
                        PVC or butyl rubber.
                      </p>
                    )}
                    {i === 1 && (
                      <ul className="space-y-2 text-muted-foreground">
                        <li>
                          • Forms a watertight seal at the critical tray/wall
                          junction
                        </li>
                        <li>• Flexible to accommodate movement</li>
                        <li>• Prevents water tracking behind the tray</li>
                        <li>• Much more reliable than silicone alone</li>
                      </ul>
                    )}
                    {i === 2 && (
                      <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                        <li>
                          Pre-formed upstand collars (for specific tray models)
                        </li>
                        <li>
                          Universal flexible membranes (can be cut to size)
                        </li>
                        <li>Integrated tanking systems (complete kits)</li>
                      </ol>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* 3. MATERIALS */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Materials Needed
            </h2>
            <Card className="shadow-elegant">
              <CardContent className="p-6 md:p-8">
                <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
                  {materials.map((m, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{m}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 4. INSTALLATION STEPS */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Step-by-Step Installation Guide
            </h2>
            <div className="space-y-8">
              {steps.map(({ step, title, desc }, i) => (
                <Card
                  key={step}
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                          {title}
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                          {desc.map((d, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span>{d}</span>
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

          {/* 5. COMMON MISTAKES */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Common Mistakes to Avoid
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {mistakes.map((m, i) => (
                <Card
                  key={i}
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <CardContent className="p-6 flex items-start gap-3">
                    <span className="text-red-500 text-2xl font-bold flex-shrink-0">
                      ❌
                    </span>
                    <div>
                      <h3 className="font-bold text-primary mb-1">{m.title}</h3>
                      <p className="text-sm text-muted-foreground italic">
                        {m.note}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* 6. MAINTENANCE */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Maintenance Tips for Longevity
            </h2>
            <Card className="shadow-elegant">
              <CardContent className="p-6 md:p-8">
                <ul className="space-y-3">
                  {maintenance.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="text-accent text-xl">🔹</div>
                      <span className="text-muted-foreground">{tip}</span>
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
              Ready to waterproof your shower the right way?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Don’t wait for a leak—schedule a consultation or request a quote
              today.
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

export default BlogPost9;
