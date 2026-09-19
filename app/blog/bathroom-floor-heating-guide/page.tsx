"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
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
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BlogPost5 = () => {
  const handleCallClick = () => {
    window.location.href = "tel:+0894219421";
  };
  const router = useRouter();

  const handleMessageClick = () => {
    router.push("/contact");
  };

  const floorHeatingBenefits = [
    {
      icon: <Thermometer className="h-6 w-6" />,
      title: "1. Warmth and Comfort",
      description:
        "One of the most obvious benefits is the comfort it provides. Cold bathroom floors can be a shock to your feet, especially in the winter months. With floor heating, you can say goodbye to the discomfort of chilly tiles, as the system gently warms your bathroom floor, providing consistent and even warmth throughout the room.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "2. Energy Efficiency",
      description:
        "Floor heating systems are highly energy-efficient compared to traditional heating methods. Unlike space heaters or radiators, which heat the air, floor heating warms the floor surface directly. This allows you to maintain a comfortable temperature at lower settings, reducing the need for additional space heaters or central heating, which can be costly.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "3. Moisture Control and Drying",
      description:
        "Bathrooms are inherently humid spaces, and floors often take the brunt of moisture buildup from showers and baths. Floor heating helps to reduce moisture levels and prevent mold growth by keeping the floor warm and dry. Additionally, it aids in drying wet towels or bath mats more efficiently.",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "4. Even Heat Distribution",
      description:
        "Floor heating provides even heat distribution throughout the bathroom, ensuring there are no cold spots. This is especially important in larger bathrooms or bathrooms with multiple walls and fixtures, where traditional heating systems might struggle to reach every corner.",
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "5. Increased Property Value",
      description:
        "Adding floor heating to your bathroom can increase the resale value of your home. It's considered a luxury feature that many potential buyers find desirable, especially in colder climates. It also sets your home apart from others that lack this modern convenience.",
    },
  ];

  const electricSystemPros = [
    "Easy Installation: Electric systems are perfect for smaller bathrooms or renovation projects, as they don't require a complex setup.",
    "Cost-Effective: Generally, electric systems are more affordable to install than hydronic systems.",
    "Quick Response Time: Electric systems heat up quickly, allowing you to enjoy a warm floor almost instantly after turning on the thermostat.",
  ];

  const electricSystemCons = [
    "Higher Operating Costs: While electric floor heating is efficient, it may be more expensive to operate over time compared to hydronic systems, especially in larger bathrooms.",
    "Limited for Large Areas: Electric systems can be less cost-effective for larger bathrooms or whole-house heating, as the energy consumption can increase.",
  ];

  const hydronicSystemPros = [
    "Energy Efficiency: Hydronic systems are more energy-efficient over time, especially for larger bathrooms or whole-house heating. The system uses less energy to heat larger areas.",
    "Long-Term Savings: While the installation cost is higher, hydronic systems can be more cost-effective to operate over the long run.",
    "Even Heating for Large Spaces: Hydronic systems are excellent for providing consistent heat across larger bathroom spaces.",
  ];

  const hydronicSystemCons = [
    "Higher Installation Cost: Hydronic systems require more complex installation, including the boiler and piping, which can make them more expensive upfront.",
    "Slower Heating Time: Hydronic systems take longer to heat up than electric systems, so they may not be ideal if you need instant warmth.",
  ];

  const installationSteps = [
    {
      title: "1. Preparation",
      description:
        "Before installing a floor heating system, ensure that the bathroom floor is level and free of debris. You may need to remove any old flooring (e.g., carpet, linoleum, or tiles) to prepare for the new installation.",
    },
    {
      title: "2. Install the Heating System",
      description:
        "For electric systems, the heating cables or mats are laid out in a grid pattern across the bathroom floor. The system is then wired to a thermostat, which will control the temperature. For hydronic systems, PEX tubing is laid beneath the floor and connected to a boiler or hot water source. A manifold distributes the heated water through the pipes under the floor.",
    },
    {
      title: "3. Connect to Power or Boiler",
      description:
        "For electric systems, connect the system to the electrical supply. Be sure to follow the manufacturer's instructions to avoid electrical hazards. For hydronic systems, connect the tubing to the manifold and ensure it's properly integrated with your boiler or water heater.",
    },
    {
      title: "4. Test the System",
      description:
        "Once the system is installed, test it to ensure that everything is functioning properly. Make sure the system heats up as expected, and that the thermostat is working correctly.",
    },
    {
      title: "5. Cover and Finish",
      description:
        "Finally, cover the heating system with your chosen flooring material (typically tiles, stone, or vinyl). Ensure that the floor is installed securely and that the grout lines are properly sealed.",
    },
  ];

  const maintenanceTips = [
    "Check the System Regularly: Periodically check for any signs of malfunction. Electric systems are generally low-maintenance, but hydronic systems may require more attention to the pipes and boiler.",
    "Use Proper Flooring: Make sure the flooring you choose is compatible with floor heating. Tiles and stone are great options, while wood and carpet may not work well with radiant heat.",
    "Don't Overheat: Avoid setting the temperature too high, as this can damage the system and increase energy costs. Aim for a comfortable, moderate temperature.",
  ];

  const zenServices = [
    "Expert floor heating system installation",
    "Professional advice on the best type of system for your bathroom",
    "Maintenance and troubleshooting services",
    "High-quality products and guaranteed customer satisfaction",
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
              The Ultimate Guide to Bathroom Floor Heating
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 opacity-90 drop-shadow-md max-w-3xl mx-auto">
              Comfort, Efficiency, and Luxury
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
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Introduction */}
          <div className="mb-12 md:mb-16 animate-fade-in">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-center">
              Discover the benefits of floor heating in bathrooms. From enhanced
              comfort to energy efficiency, learn about the different types of
              floor heating systems and how to install them in your bathroom.
            </p>

            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              There's nothing quite like stepping out of a warm shower or bath
              and feeling the gentle warmth of a heated floor beneath your feet.
              Bathroom floor heating is no longer just a luxury—it's a smart and
              practical addition to any home, providing unparalleled comfort,
              energy efficiency, and even improving your bathroom's overall
              design.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              At Zen Bathroom, we believe that bathroom floor heating should be
              a top consideration when renovating or building a bathroom. In
              this blog, we'll cover the benefits of floor heating, the
              different types of systems available, and the best practices for
              installation to help you decide if this upgrade is right for you.
            </p>
          </div>

          {/* Why Choose Floor Heating */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12 text-center">
              🌟 Why Choose Floor Heating for Your Bathroom?
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-center">
              When it comes to bathroom comfort, heated floors stand out as one
              of the most popular features for a reason. Here are the top
              benefits of installing a floor heating system:
            </p>

            <div className="space-y-6">
              {floorHeatingBenefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="shadow-soft hover:shadow-elegant transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                          {benefit.title}
                        </h3>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Types of Systems */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12 text-center">
              🛠️ Types of Bathroom Floor Heating Systems
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-center">
              When it comes to choosing a floor heating system, there are two
              primary options: electric and hydronic systems. Each has its own
              benefits and considerations, depending on your needs and budget.
            </p>

            {/* Electric Floor Heating */}
            <div className="mb-8">
              <Card className="shadow-elegant animate-fade-in">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    1. Electric Floor Heating
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Electric floor heating systems are the most common and
                    easiest to install in bathrooms, particularly in renovation
                    projects.
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-primary mb-3">
                      How It Works:
                    </h4>
                    <p className="text-base md:text-lg text-foreground leading-relaxed">
                      Electric systems use heating cables or heating mats that
                      are embedded in the floor (typically beneath the tiles or
                      underfloor). These cables are powered by electricity and
                      heat up when turned on, providing warmth directly to the
                      floor surface.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-green-800 mb-4">
                        Pros:
                      </h4>
                      <div className="space-y-3">
                        {electricSystemPros.map((pro, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                            <span className="text-sm md:text-base text-green-700">
                              {pro}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-red-800 mb-4">
                        Cons:
                      </h4>
                      <div className="space-y-3">
                        {electricSystemCons.map((con, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                            <span className="text-sm md:text-base text-red-700">
                              {con}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-lg">
                    <p className="text-base">
                      <strong>Best For:</strong> Small to medium-sized bathrooms
                      or as a supplementary heating option.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Hydronic Floor Heating */}
            <div className="mb-8">
              <Card className="shadow-elegant animate-fade-in">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    2. Hydronic Floor Heating
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Hydronic systems are a water-based heating method that
                    circulates hot water through tubes or pipes installed under
                    the floor.
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-primary mb-3">
                      How It Works:
                    </h4>
                    <p className="text-base md:text-lg text-foreground leading-relaxed">
                      In hydronic systems, warm water from a boiler is pumped
                      through a network of PEX (cross-linked polyethylene)
                      tubing beneath the floor. The heated water transfers
                      warmth to the floor, which in turn radiates heat into the
                      room.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-green-800 mb-4">
                        Pros:
                      </h4>
                      <div className="space-y-3">
                        {hydronicSystemPros.map((pro, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                            <span className="text-sm md:text-base text-green-700">
                              {pro}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-red-800 mb-4">
                        Cons:
                      </h4>
                      <div className="space-y-3">
                        {hydronicSystemCons.map((con, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                            <span className="text-sm md:text-base text-red-700">
                              {con}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6  p-4 rounded-lg">
                    <p className="text-base ">
                      <strong>Best For:</strong> Larger bathrooms or homes with
                      existing hydronic heating systems, or for homeowners
                      looking for a long-term investment.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Installation Process */}
          <div className="mb-12 md:mb-16">
            <Card className="shadow-elegant animate-fade-in bg-gradient-subtle">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                  🛠️ How to Install Bathroom Floor Heating
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-center">
                  Installing a floor heating system requires careful planning,
                  and while DIY installation is possible with electric systems,
                  it's recommended to hire a professional for optimal results.
                  Here's a general overview of the installation process:
                </p>

                <div className="space-y-6">
                  {installationSteps.map((step, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-lg p-6 shadow-soft"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                            {step.title}
                          </h3>
                          <p className="text-base md:text-lg text-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Maintenance Tips */}
          <div className="mb-12 md:mb-16">
            <Card className="shadow-elegant animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                  ⚡ Maintenance Tips for Bathroom Floor Heating
                </h2>

                <div className="space-y-4">
                  {maintenanceTips.map((tip, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 bg-gradient-subtle p-6 rounded-lg"
                    >
                      <Wrench className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span className="text-base md:text-lg text-foreground">
                        {tip}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Zen Bathroom */}
          <div className="mb-12 md:mb-16">
            <Card className="shadow-elegant bg-gradient-subtle animate-fade-in">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                  🏠 Why Choose Zen Bathroom for Your Floor Heating
                  Installation?
                </h2>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-center">
                  At Zen Bathroom, we specialize in installing high-quality
                  floor heating systems in bathrooms and other areas of your
                  home. Whether you're looking for an electric or hydronic
                  system, our team of professionals can help you select the
                  right solution for your space and budget.
                </p>

                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4 text-center">
                    Our services include:
                  </h3>
                  <div className="grid gap-4 max-w-3xl mx-auto">
                    {zenServices.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 bg-card rounded-lg p-4 shadow-soft"
                      >
                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                        <span className="text-base md:text-lg text-foreground font-medium">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
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
              Ready to Add Luxurious Warmth to Your Bathroom?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Floor heating can transform your bathroom from a cold, functional
              space into a warm, relaxing retreat. At Zen Bathroom, we'll help
              you make the right choice for your bathroom floor heating needs.
              Contact us today to schedule a consultation and start enjoying the
              comfort of heated floors in your bathroom!
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
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost5;
