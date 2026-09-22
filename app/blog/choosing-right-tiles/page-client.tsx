"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Phone,
  Mail,
  CheckCircle,
  Calendar,
  User,
  Clock,
  Shield,
  Star,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";

const BlogPost2 = () => {
  const router = useRouter();

  const handleCallClick = () => {
    window.location.href = "tel:+0894219421";
  };

  const handleMessageClick = () => {
    router.push("/contact");
  };
  const tileSelection = [
    {
      title: "Porcelain Tiles",
      subtitle: "(Our Top Pick)",
      features: [
        "Nearly waterproof - Absorption rate below 0.5%",
        "Extremely durable - Resists chips and scratches",
        "Perfect for: Showers, floors, and high-moisture areas",
      ],
    },
    {
      title: "Ceramic Tiles",
      subtitle: "",
      features: [
        "More budget-friendly option",
        "Easy to clean and maintain",
        "Best for: Bathroom walls and backsplashes",
      ],
    },
    {
      title: "Natural Stone Tiles",
      subtitle: "",
      features: [
        "Luxurious marble, slate, or travertine",
        "Requires annual sealing",
        "Ideal for: Feature walls and vanity surrounds",
      ],
    },
    {
      title: "Glass & Mosaic Tiles",
      subtitle: "",
      features: [
        "Creates stunning visual accents",
        "Excellent for: Shower niches and borders",
      ],
    },
  ];

  const installationProcess = [
    {
      title: "Pre-Installation Waterproofing",
      details: [
        "Apply membrane behind shower walls",
        "Slope floors perfectly to drains",
      ],
    },
    {
      title: "Precision Layout Planning",
      details: [
        "Laser-level all surfaces",
        "Create balanced patterns with minimal cuts",
      ],
    },
    {
      title: "Expert Installation",
      details: [
        "Use commercial-grade thinset mortar",
        "Perfect spacing with professional-level spacers",
      ],
    },
    {
      title: "Grouting & Sealing",
      details: [
        "Apply mold-resistant grout",
        "Seal all natural stone surfaces",
      ],
    },
  ];

  const trendingStyles = [
    "Bold Patterns and Geometric Designs: Intricate mosaics, striking chevron patterns, and other geometric designs are making a statement in 2025, adding character and dynamism to spaces.",
    "Textured and 3D Tiles: Tiles with textured finishes, like fluted or embossed surfaces, are popular for creating a multi-dimensional look and playing with light and shadow.",
    "Color Drenching: This trend involves using a single tile color across walls, floors, and accents to create immersive and impactful spaces. Deep forest green, burnt terracotta, cobalt blue, and sunset yellow are among the standout colors.",
    "Natural Materials and Stone-Effect Tiles: The focus on nature continues with natural stone and stone-effect tiles, offering a timeless elegance and a connection to the outdoors.",
    "Sustainable and Eco-Friendly Tiles: Sustainability is a growing concern, with an increasing demand for eco-friendly tiles that align with environmentally conscious values.",
    "Large-Format Tiles: These tiles are favored for creating clean lines and a minimalist aesthetic in contemporary spaces, and can also make small bathrooms feel more spacious.",
    "Wood-Effect Tiles: Wood-look tiles are popular for their ability to bring warmth and a touch of nature indoors, creating a cozy and inviting atmosphere.",
    "Mosaic Tiles: These versatile tiles continue to be timeless design elements, offering endless possibilities for patterns and designs.",
    "Monochromatic and Minimalist Palettes: While bold colors are trending, monochromatic palettes in shades of white, grey, and black remain popular for creating serene and elegant spaces.",
    "Mix and Match Finishes: Combining matte, gloss, and textured finishes adds depth and visual interest to a space.",
    "Dark Colors: Deep blues, emerald greens, and other rich, dark colors are making a comeback, particularly in bathrooms and kitchens.",
    "Herringbone Pattern: This classic pattern, created with rectangular tiles, remains a timeless choice for floors and walls.",
  ];

  const whyChooseUs = [
    "Bathroom specialists - We only renovate bathrooms",
    "Lifetime craftsmanship warranty on all tile work",
    "In-house design consultants to help select perfect tiles",
    "Stress-free installation - We handle everything from demo to cleanup",
  ];

  const tileSelectionDetermines = [
    "Long-term durability - Withstanding daily moisture and wear",
    "Safety - Providing proper slip resistance",
    "Design impact - Creating your bathroom's entire aesthetic",
    "Home value - Quality tiling increases resale value by up to 20%",
  ];

  return (
    <div className="min-h-screen w-full section-mobile-full">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] md:min-h-[45vh] lg:min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/project 2/1.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-[1px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg leading-tight">
              The Complete Guide to Bathroom Tiles
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 opacity-90 drop-shadow-md max-w-3xl mx-auto">
              Expert Advice from Zen Bathroom
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 text-center">
              Why Tile Selection Makes or Breaks Your Bathroom Renovation
            </h2>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              At Zen Bathroom, we've transformed hundreds of bathrooms in Dublin
              and Paris, and we know one thing for certain - your tile choices
              determine:
            </p>

            {/* What Tiles Determine */}
            <Card className="mb-8 shadow-soft">
              <CardContent className="p-6">
                <div className="grid gap-4">
                  {tileSelectionDetermines.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-base md:text-lg text-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Curated Tile Selection */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12 text-center">
              Our Curated Tile Selection for Bathrooms
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-center">
              After years of bathroom renovations, we recommend these
              top-performing tile types:
            </p>

            <div className="space-y-8 md:space-y-12">
              {tileSelection.map((tile, index) => (
                <Card
                  key={index}
                  className="shadow-soft hover:shadow-elegant transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                          {tile.title}
                          {tile.subtitle && (
                            <span className="text-accent ml-2">
                              {tile.subtitle}
                            </span>
                          )}
                        </h3>
                      </div>
                    </div>

                    <div className="grid gap-3 ml-12">
                      {tile.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-base md:text-lg text-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Installation Process */}
          <div className="mb-12 md:mb-16">
            <Card className="shadow-elegant animate-fade-in bg-gradient-subtle">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                  Our Bathroom-Specific Tile Installation Process
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-center">
                  What sets our tile work apart:
                </p>

                <div className="space-y-6">
                  {installationProcess.map((step, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-lg p-6 shadow-soft"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3">
                            {step.title}
                          </h3>
                          <div className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <div
                                key={detailIndex}
                                className="flex items-start gap-3"
                              >
                                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                                <span className="text-base text-foreground">
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trending Styles */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12 text-center">
              Trending Bathroom Tile Styles for 2025
            </h2>

            <div className="grid gap-6">
              {trendingStyles.map((trend, index) => (
                <Card
                  key={index}
                  className="shadow-soft hover:shadow-elegant transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <p className="text-base md:text-lg text-foreground leading-relaxed flex-1">
                        {trend}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Zen Bathroom */}
          <div className="mb-12 md:mb-16">
            <Card className="shadow-elegant bg-gradient-subtle animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                  Why Choose Zen Bathroom for Bathroom Tiling?
                </h2>

                <div className="grid gap-4 max-w-3xl mx-auto">
                  {whyChooseUs.map((reason, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 bg-card rounded-lg p-4 shadow-soft"
                    >
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span className="text-base md:text-lg text-foreground font-medium">
                        {reason}
                      </span>
                    </div>
                  ))}
                </div>
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
              Ready for a Bathroom That Wows?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto">
              Visit our partner's showroom to view hundreds of tile samples or
              call us for a free consultation.
            </p>
            <p className="text-base md:text-lg text-primary font-semibold mb-8">
              Ask about our current tile package specials!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="hero"
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
                onClick={handleCallClick}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call for Free Consultation
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={handleMessageClick}
              >
                <Mail className="mr-2 h-5 w-5" />
                Visit Showroom
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost2;
