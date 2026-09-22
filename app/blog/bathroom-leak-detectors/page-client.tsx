"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, Mail, User, Calendar, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

const BlogPost13 = () => {
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
  /* Original content arrays (kept verbatim)                             */
  /* ------------------------------------------------------------------ */
  const reasonsToInstall = [
    {
      title: "Early Detection:",
      desc: "Prevent mold growth, structural damage, and floor warping by catching leaks early.",
    },
    {
      title: "Real-Time Alerts:",
      desc: "Get notified via app, text, or email — even when you're not home.",
    },
    {
      title: "Long-Term Savings:",
      desc: "Avoid emergency plumbing bills and insurance claims by addressing leaks quickly.",
    },
  ];

  const detectorTypes = [
    {
      name: "Basic Models:",
      desc: "Sound a local alarm when water is detected.",
    },
    {
      name: "Smart Detectors:",
      desc: "Connect to Wi-Fi and integrate with smart home systems like Alexa, Google Home, or Apple HomeKit.",
    },
    {
      name: "Advanced Systems:",
      desc: "Pair with automatic shut-off valves to stop water flow instantly when a leak is detected.",
    },
  ];

  const placementLocations = [
    "Under bathroom sinks",
    "Behind or around the toilet base",
    "Near the bathtub or shower enclosure",
    "Inside bathroom cabinets (to monitor for slow pipe drips)",
  ];

  const choosingFeatures = [
    {
      title: "Smart Connectivity:",
      desc: "Look for Wi-Fi enabled or app-connected devices for remote monitoring.",
    },
    {
      title: "Battery Life:",
      desc: "Many detectors offer multi-year battery life, requiring minimal maintenance.",
    },
    {
      title: "Audible Alarms:",
      desc: "Choose a model with a loud built-in alarm for immediate on-site alerts.",
    },
    {
      title: "Ease of Installation:",
      desc: "Most are wireless and can be installed without tools.",
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
            Protect Your Home from Water Damage
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 opacity-90 drop-shadow-md max-w-3xl mx-auto">
            Why Bathroom Leak Detectors Are a Smart Investment
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

      {/* ---------------- MAIN ARTICLE ---------------- */}
      <article className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl space-y-12 md:space-y-16">
          {/* INTRO */}
          <div className="animate-fade-in">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              Water damage is one of the most common — and expensive — issues
              homeowners face. But in many cases, it's completely preventable.
              Installing a leak detector in your bathroom is a simple and
              effective way to catch small problems before they turn into big
              repairs.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              At Zen Bathroom, we believe smart prevention is better than costly
              cure. Whether you're managing a large home or a compact condo,
              leak detectors offer peace of mind and real-time protection where
              it matters most.
            </p>
          </div>

          {/* WHY INSTALL */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Why Install a Leak Detector in the Bathroom?
            </h2>
            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Bathrooms are high-risk zones for water damage. Hidden
                  plumbing behind walls, overflowing toilets, and under-sink
                  drips can go unnoticed for days or even weeks. A leak detector
                  acts like a 24/7 monitor, alerting you the moment it senses
                  water in places it shouldn't be.
                </p>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Key Benefits:
                </h3>
                <ul className="space-y-4">
                  {reasonsToInstall.map((r) => (
                    <li key={r.title} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-foreground">{r.title}</strong>
                        <span className="text-muted-foreground"> {r.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* HOW THEY WORK */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              How Bathroom Leak Detectors Work
            </h2>
            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Leak detectors are compact electronic sensors placed in
                  vulnerable areas. Once water contacts the sensor, the device
                  triggers an alarm and/or sends a wireless alert. Many models
                  also monitor humidity and temperature — helpful for
                  identifying slow leaks or conditions that encourage mold.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 mt-12 text-center">
              Types of Leak Detectors:
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {detectorTypes.map((t) => (
                <Card key={t.name} className="shadow-soft animate-slide-up">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-2">
                      {t.name}
                    </h4>
                    <p className="text-muted-foreground">{t.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* PLACEMENT LOCATIONS */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Where to Place Leak Detectors in the Bathroom
            </h2>
            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  To maximize effectiveness, place detectors near the most
                  common leak sources:
                </p>
                <ul className="space-y-2">
                  {placementLocations.map((loc) => (
                    <li key={loc} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{loc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* CHOOSING THE RIGHT DETECTOR */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Choosing the Right Leak Detector
            </h2>
            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  When selecting a detector, consider the following features:
                </p>
                <ul className="space-y-4">
                  {choosingFeatures.map((f) => (
                    <li key={f.title} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">{f.title}</strong>
                        <span className="text-muted-foreground"> {f.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-gradient-subtle rounded-lg">
                  <p className="text-sm text-primary">
                    💡 <strong>Tip from the Experts:</strong> For ultimate peace
                    of mind, consider a whole-home water monitoring system that
                    works in tandem with local leak detectors.
                  </p>
                </div>
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
              Final Thoughts
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Bathroom leak detectors are a small investment that offer
              significant protection. As part of your home's smart defense
              system, they ensure you're alerted at the first sign of trouble —
              helping you act fast and avoid costly damage.
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

export default BlogPost13;
