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
  Settings,
  Zap,
  Shield,
  Star,
  Thermometer,
  Home,
  DollarSign,
  Wrench,
  AlertTriangle,
  Eye,
  Droplets,
  Wind,
  Circle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/router";

const BlogPost6 = () => {
  const handleCallClick = () => {
    window.location.href = "tel:+0894219421";
  };
  const router = useRouter();

  const handleMessageClick = () => {
    router.push("/contact");
  };

  const blogTopics = [
    "What causes mould in bathrooms?",
    "Health risks of mould exposure",
    "How to remove mould effectively",
    "Prevention tips to keep your bathroom mould-free",
  ];

  const mouldCauses = [
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "High humidity",
      description: "Hot showers create steam, increasing moisture levels.",
    },
    {
      icon: <Wind className="h-6 w-6" />,
      title: "Poor ventilation",
      description: "Lack of airflow traps dampness.",
    },
    {
      icon: <Circle className="h-6 w-6" />,
      title: "Organic materials",
      description: "Soap scum, dirt, and dead skin cells feed mould.",
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Dark, damp corners",
      description:
        "Areas like shower grout, under sinks, and behind toilets rarely dry completely.",
    },
  ];

  const healthRisks = [
    "Allergic reactions (sneezing, coughing, skin irritation)",
    "Respiratory problems (asthma flare-ups, wheezing)",
    "Headaches and fatigue",
    "Long-term exposure may worsen immune responses",
  ];

  const naturalSolutions = [
    {
      name: "White vinegar",
      instructions:
        "Spray undiluted vinegar on mouldy areas, leave for 1 hour, then scrub and rinse.",
    },
    {
      name: "Baking soda paste",
      instructions: "Mix with water, apply to mould, scrub gently, and rinse.",
    },
    {
      name: "Tea tree oil",
      instructions:
        "Combine 1 tsp with 1 cup of water, spray, and leave overnight.",
    },
  ];

  const commercialCleaners = [
    {
      name: "Bleach solution (1 part bleach to 10 parts water)",
      instructions: "Effective on non-porous surfaces (avoid overuse).",
    },
    {
      name: "Anti-mould sprays",
      instructions: "Designed to kill spores and prevent regrowth.",
    },
  ];

  const deepCleaningTips = [
    "Use an old toothbrush for grout lines.",
    "Wash shower curtains and bath mats regularly.",
    "Dry surfaces with a squeegee after showering.",
  ];

  const preventionTips = [
    "Improve ventilation – Use an exhaust fan or open windows during/after showers.",
    "Wipe down wet surfaces – Keep tiles, glass, and sinks dry.",
    "Fix leaks promptly – Check pipes, taps, and seals for drips.",
    "Use a dehumidifier – Helps reduce excess moisture.",
    "Choose mould-resistant products – Opt for anti-mould paint, silicone sealant, and shower curtains.",
  ];

  const zenServices = [
    {
      title: "Mold Assessment and Inspection",
      description:
        "Thorough, professional mold assessments to detect hidden mold and identify problem areas.",
    },
    {
      title: "Mold Removal and Remediation",
      description:
        "Safe and effective mold removal using state-of-the-art equipment and methods.",
    },
    {
      title: "Damage Repair",
      description:
        "Repairing any structural damage caused by mold and water damage, including drywall, wood, and flooring.",
    },
    {
      title: "Preventative Measures",
      description:
        "Offering solutions like vapor barriers, better ventilation systems, and moisture control devices to keep mold from returning.",
    },
  ];

  return (
    <div className="min-h-screen w-full section-mobile-full">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] md:min-h-[45vh] lg:min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/project 3/1.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-[1px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg leading-tight">
              How to Tackle Mould in Your Bathroom
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 opacity-90 drop-shadow-md max-w-3xl mx-auto">
              Causes, Prevention, and Removal
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
              <span>7 min read</span>
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
              Mold is more than just an eyesore. It's a sneaky, fast-growing
              problem that can wreak havoc on your home and health. Whether it's
              found in the bathroom, kitchen, or hidden behind walls, mold is a
              common issue that homeowners often overlook until it's too late.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              At Zen Bathroom, we believe in proactive care. Mold removal isn't
              just about cleaning a visible patch of growth — it's about
              tackling the root cause and ensuring your home remains safe, dry,
              and healthy.
            </p>

            <div className="bg-gradient-subtle p-6 rounded-lg">
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                In this blog, we'll explore:
              </h3>
              <div className="space-y-3">
                {blogTopics.map((topic, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-base md:text-lg text-foreground">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Does Mould Grow */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12 text-center">
              Why Does Mould Grow in Bathrooms?
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-center">
              Bathrooms are prime spots for mould growth due to:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {mouldCauses.map((cause, index) => (
                <Card
                  key={index}
                  className="shadow-soft hover:shadow-elegant transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        {cause.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-primary mb-2">
                          🔹 {cause.title}
                        </h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {cause.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="shadow-elegant bg-red-50 border-red-200">
              <CardContent className="p-6 md:p-8 text-center">
                <p className="text-lg md:text-xl text-red-800 leading-relaxed">
                  Without proper care, mould spores multiply quickly, leading to
                  stubborn stains and potential structural damage over time.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Health Risks */}
          <div className="mb-12 md:mb-16">
            <Card className="shadow-elegant animate-fade-in bg-orange-50 border-orange-200">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                  Health Risks of Bathroom Mould
                </h2>

                <p className="text-lg md:text-xl text-orange-800 leading-relaxed mb-6 text-center">
                  Exposure to mould can cause:
                </p>

                <div className="space-y-4 mb-8">
                  {healthRisks.map((risk, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-white p-4 rounded-lg"
                    >
                      <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                      <span className="text-base md:text-lg text-orange-800">
                        - {risk}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-orange-100 p-4 rounded-lg">
                  <p className="text-base md:text-lg text-orange-800 text-center">
                    If you or your family experience unexplained allergy-like
                    symptoms, bathroom mould could be the culprit.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* How to Remove Mould */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12 text-center">
              How to Remove Mould Safely
            </h2>

            <Card className="shadow-elegant bg-accent  200 mb-8">
              <CardContent className="p-6 text-center">
                <p className="text-lg  text-accent-foreground font-semibold">
                  Before cleaning, wear gloves and a mask to avoid inhaling
                  spores.
                </p>
              </CardContent>
            </Card>

            {/* Natural Solutions */}
            <div className="mb-8">
              <Card className="shadow-elegant animate-fade-in">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    1. Natural Solutions
                  </h3>

                  <div className="space-y-6">
                    {naturalSolutions.map((solution, index) => (
                      <div key={index} className=" p-6 rounded-lg">
                        <h4 className="text-lg md:text-xl font-semibold mb-3">
                          - {solution.name}
                        </h4>
                        <p className="text-base ">{solution.instructions}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Commercial Cleaners */}
            <div className="mb-8">
              <Card className="shadow-elegant animate-fade-in">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    2. Commercial Cleaners
                  </h3>

                  <div className="space-y-6">
                    {commercialCleaners.map((cleaner, index) => (
                      <div key={index} className="p-6 rounded-lg">
                        <h4 className="text-lg md:text-xl font-semibold ">
                          - {cleaner.name}
                        </h4>
                        <p className="text-base">{cleaner.instructions}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Deep Cleaning Tips */}
            <div className="mb-8">
              <Card className="shadow-elegant animate-fade-in">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    3. Deep Cleaning Tips
                  </h3>

                  <div className="space-y-4">
                    {deepCleaningTips.map((tip, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3  p-4 rounded-lg"
                      >
                        <Wrench className="h-5 w-5 flex-shrink-0 mt-1" />
                        <span className="text-base md:text-lg ">- {tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Prevention */}
          <div className="mb-12 md:mb-16">
            <Card className="shadow-elegant animate-fade-in bg-gradient-subtle">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                  How to Prevent Mould from Coming Back
                </h2>

                <div className="space-y-4">
                  {preventionTips.map((tip, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 bg-card rounded-lg p-6 shadow-soft"
                    >
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span className="text-base md:text-lg text-foreground">
                        ✔ {tip}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Expert Help */}
          <div className="mb-12 md:mb-16">
            <Card className="shadow-elegant bg-gradient-subtle animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 text-center">
                  If you've discovered mold in your home, don't panic — our
                  expert team is here to help. We offer comprehensive mold
                  inspection, removal, and prevention services to ensure your
                  home is safe and mold-free.
                </p>

                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary mb-6 text-center">
                    Our services include:
                  </h3>
                  <div className="space-y-6">
                    {zenServices.map((service, index) => (
                      <div
                        key={index}
                        className="bg-card rounded-lg p-6 shadow-soft"
                      >
                        <h4 className="text-lg md:text-xl font-bold text-primary mb-3">
                          {service.title}:
                        </h4>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Protect Your Home */}
          <div className="mb-12 md:mb-16">
            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                  Protect Your Home and Health Today
                </h2>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 text-center">
                  Mold might seem like a minor inconvenience at first, but left
                  unchecked, it can lead to serious issues that affect both your
                  property and health. With the right care and attention,
                  however, mold can be controlled and prevented.
                </p>

                <p className="text-base md:text-lg text-foreground leading-relaxed text-center">
                  At Zen bathroom we specialize in ensuring your home stays
                  mold-free, with expert inspections, thorough removal, and
                  long-term prevention solutions. Don't wait for mold to take
                  hold — contact us today to schedule an inspection or learn
                  more about our mold remediation services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Ready to Tackle Your Mould Problem?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Don't let mould compromise your family's health and your home's
              integrity. Contact Zen Bathroom today for professional mould
              assessment, removal, and prevention services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="hero"
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
                onClick={handleCallClick}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call for Free Inspection
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={handleMessageClick}
              >
                <Mail className="mr-2 h-5 w-5" />
                Schedule Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost6;
