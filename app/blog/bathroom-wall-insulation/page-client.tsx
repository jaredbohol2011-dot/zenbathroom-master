"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, Mail, User, Calendar, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

const BlogPost14 = () => {
  const router = useRouter();

  const handleCallClick = () => {
    window.location.href = "tel:+0894219421";
  };

  const handleMessageClick = () => {
    router.push("/contact");
  };

  /* ------------------------------------------------------------------ */
  /* Original content arrays (kept verbatim)                             */
  /* ------------------------------------------------------------------ */
  const benefits = [
    {
      title: "1. Temperature Regulation and Comfort",
      content:
        "Bathrooms often experience temperature swings due to showering, using hot water, and outside weather conditions. Without proper insulation, the space can feel either too hot or too cold. Insulation helps maintain a stable temperature year-round, making your bathroom more comfortable for daily use.",
    },
    {
      title: "2. Moisture Control and Prevention of Mold",
      content:
        "Bathrooms are among the most humid areas in the home, and excess moisture can lead to a range of problems, including mold and mildew. Insulating the walls can act as an added barrier to moisture, preventing it from seeping into the walls and causing long-term damage. It also reduces condensation on the walls, keeping the room drier and safer.",
    },
    {
      title: "3. Noise Reduction",
      content:
        "Bathrooms are often located near other rooms like bedrooms or living rooms. Insulating the walls can help reduce noise, both from the bathroom (such as running water or the sound of the shower) and from external sources like the outside world. It's a great way to add a bit of privacy, especially in shared spaces.",
    },
    {
      title: "4. Energy Efficiency",
      content:
        "A well-insulated bathroom can help lower your home's energy consumption. By preventing heat loss in the winter and keeping cooler temperatures in the summer, bathroom insulation reduces the strain on your heating and cooling systems. Over time, this can result in lower utility bills, making it an investment that pays off.",
    },
  ];

  const materials = [
    {
      title: "1. Fiberglass Insulation",
      content:
        "Fiberglass insulation is one of the most commonly used materials for home insulation due to its affordability and effectiveness. It's available in batts or rolls, making it easy to install between studs. It's great at regulating temperature and can help with soundproofing, but you need to ensure that it's properly sealed to prevent moisture from seeping in.",
      pros: [
        "Cost-effective",
        "Good thermal and acoustic insulation",
        "Available in a variety of sizes",
      ],
      cons: [
        "Can absorb moisture if not properly sealed",
        "May require vapor barriers in humid areas like bathrooms",
      ],
    },
    {
      title: "2. Spray Foam Insulation",
      content:
        "Spray foam insulation is a more modern option that provides a tight seal around the studs and framing. It expands on application, filling in gaps and cracks that traditional batt insulation might miss. It's highly effective at preventing air leaks and controlling moisture.",
      pros: [
        "Excellent at air sealing",
        "High R-value (thermal resistance)",
        "Resistant to moisture, mold, and mildew",
      ],
      cons: [
        "More expensive than fiberglass",
        "Requires professional installation",
      ],
    },
    {
      title: "3. Foam Board Insulation",
      content:
        "Foam board insulation, typically made from materials like extruded polystyrene (XPS), offers high moisture resistance and durability. It's ideal for bathrooms because it won't absorb water like fiberglass. Foam board can be installed over studs and sealed with tape for added moisture protection.",
      pros: [
        "Resistant to water and moisture",
        "Easy to install",
        "Great for areas that are exposed to high humidity",
      ],
      cons: [
        "Can be pricier than fiberglass",
        "May not offer the same soundproofing benefits as fiberglass or spray foam",
      ],
    },
    {
      title: "4. Cotton Insulation (Denim)",
      content:
        "If you prefer an eco-friendly option, cotton insulation made from recycled denim fabric is an excellent choice. It's non-toxic, fire-resistant, and naturally resistant to mold and mildew, making it perfect for high-humidity areas like bathrooms.",
      pros: [
        "Environmentally friendly",
        "Resistant to mold and mildew",
        "Soft and easy to handle",
      ],
      cons: [
        "More expensive than fiberglass",
        "Not as widely available as fiberglass or foam board",
      ],
    },
  ];

  const steps = [
    {
      step: "1. Choose the Right Insulation Material",
      content:
        "As discussed, select an insulation material that best fits your bathroom's needs. For most bathrooms, fiberglass or spray foam are great options, but consider the humidity levels and your budget when deciding.",
    },
    {
      step: "2. Remove Old Wall Coverings (If Necessary)",
      content:
        "If you're renovating or installing insulation in a pre-existing bathroom, you'll need to remove any existing drywall, tiles, or wall coverings. This allows you to work directly with the studs for easy installation of the insulation.",
    },
    {
      step: "3. Install the Insulation",
      content:
        "For batts or rolls of fiberglass insulation, place them between the studs in your walls, making sure to fill every gap. Cut the insulation to fit where needed and secure it in place.\n\nFor spray foam, apply it directly to the studs and surrounding spaces. The foam will expand to fill any cracks or gaps.\n\nFor foam board, cut the foam to fit the wall sections and attach it directly to the studs with adhesive or fasteners.",
    },
    {
      step: "4. Seal Gaps and Edges",
      content:
        "To maximize the effectiveness of your insulation, seal any gaps or seams around the insulation with caulk or foam sealant. This will prevent air and moisture from entering.",
    },
    {
      step: "5. Reinstall the Wall Covering",
      content:
        "Once the insulation is securely in place, cover it with moisture-resistant drywall or backer board if you're working in a wet area like a shower or tub space. Ensure that the new drywall is also treated for moisture resistance.",
    },
    {
      step: "6. Consider a Vapor Barrier",
      content:
        "In areas with high moisture (like around the shower or tub), it's recommended to install a vapor barrier on top of the insulation to prevent moisture buildup.",
    },
  ];

  const services = [
    "Expert insulation consultation and recommendations",
    "Installation of moisture-resistant and energy-efficient insulation",
    "Vapor barrier installation for added moisture control",
    "Comprehensive bathroom remodeling services",
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
            Why Bathroom Wall Insulation Is a Game Changer for Your Home
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 opacity-90 drop-shadow-md max-w-3xl mx-auto">
            Learn the benefits of bathroom wall insulation and how it can
            improve comfort, reduce energy costs, and prevent moisture damage.
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

      {/* ---------------- MAIN ARTICLE ---------------- */}
      <article className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl space-y-12 md:space-y-16">
          {/* INTRO */}
          <div className="animate-fade-in">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              When most people think about insulation, they typically imagine
              attic spaces or exterior walls. However, bathroom wall insulation
              plays an equally important role in maintaining a comfortable,
              energy-efficient home. Whether you're renovating or building a new
              bathroom, properly insulating the walls can improve temperature
              control, prevent moisture-related issues, and enhance the overall
              comfort of your bathroom.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              At Zen Bathroom, we believe that the right insulation isn't just
              for your home's foundation and walls—it's essential for your
              bathroom, too. In this blog, we'll explore why bathroom wall
              insulation is so important, the best materials to use, and how to
              ensure proper installation for maximum effectiveness.
            </p>
          </div>

          {/* WHY INSULATE */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              🛠️ Why Insulate Your Bathroom Walls?
            </h2>
            <Card className="shadow-elegant mb-12 animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Bathrooms experience unique conditions compared to other areas
                  of your home. From hot showers to fluctuating temperatures,
                  bathrooms are susceptible to moisture buildup, humidity, and
                  temperature extremes. Insulating your bathroom walls is one of
                  the best ways to combat these challenges.
                </p>
              </CardContent>
            </Card>
            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((b, i) => (
                <Card
                  key={i}
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {b.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {b.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* MATERIALS */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              🔧 Best Materials for Bathroom Wall Insulation
            </h2>
            <Card className="shadow-elegant mb-12 animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Not all insulation materials are the same, and choosing the
                  right one for your bathroom is crucial. Bathroom insulation
                  needs to be moisture-resistant, durable, and efficient at
                  regulating temperature. Here are some of the best insulation
                  materials for bathroom walls:
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-8 md:grid-cols-2">
              {materials.map((mat, i) => (
                <Card
                  key={i}
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {mat.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{mat.content}</p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">
                          Pros
                        </h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {mat.pros.map((p) => (
                            <li key={p} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">
                          Cons
                        </h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {mat.cons.map((c) => (
                            <li key={c} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0" />
                              <span>{c}</span>
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

          {/* STEP-BY-STEP */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              🛠️ How to Insulate Your Bathroom Walls: Step-by-Step
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, i) => (
                <Card
                  key={i}
                  className="shadow-soft animate-slide-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-4 text-center">
                      {i + 1}
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-3">
                      {step.step.replace(/^\d+\.\s/, "")}
                    </h3>
                    <div className="text-muted-foreground leading-relaxed text-sm whitespace-pre-line">
                      {step.content}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* WHY ZEN BATHROOM */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              🔍 Why Choose Zen Bathroom for Bathroom Wall Insulation?
            </h2>
            <Card className="shadow-elegant bg-gradient-subtle animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  At Zen Bathroom, we understand that insulation is key to
                  creating a comfortable, energy-efficient bathroom. Whether
                  you're remodeling or building a new space, our team of
                  professionals can help you choose the best insulation
                  materials for your needs and ensure proper installation.
                </p>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Our services include:
                </h3>
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

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Improve Your Bathroom's Comfort and Efficiency?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Insulating your bathroom walls can make a big difference in the
              overall comfort of your space, as well as in your energy bills.
              Let Zen Bathroom help you create a bathroom that's not only
              functional but also warm, dry, and energy-efficient.
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

export default BlogPost14;
