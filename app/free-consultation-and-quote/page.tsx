"use client";

import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle } from "lucide-react";

import { useRouter } from "next/navigation";
import { ServiceNavButtons } from "@/components/ui/ServiceNavButtons";

const FreeConsultationPage = () => {
  const router = useRouter();

  const handleCallClick = () => {
    window.location.href = "tel:+0894219421";
  };

  const handleMessageClick = () => {
    router.push("/contact");
  };
  return (
    <div className="min-h-screen bg-background">
      <ServiceNavButtons />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/free_quote/rn_image_picker_lib_temp_2cd44738-e63c-49ad-9a08-5d03afbcfbbe.png)`,
          }}
        >
          <div className="absolute inset-0 bg-primary/10 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Free Consultation
              <br />
              <span className="">& Quote</span>
            </h1>
            <div className="w-24 md:w-32 h-1 bg-accent mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Personalized Material Selection Service */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Personalized Material Selection Service
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Make your home project effortless with our premium catalog
                    consultation service. Our team brings a handpicked selection
                    of premium material catalogs directly to your home or job
                    site, guiding you through the best options for your design,
                    budget, and space—all while securing you an exclusive{" "}
                    <span className="font-semibold text-accent">
                      10% discount
                    </span>{" "}
                    on your purchases.
                  </p>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <p>Premium material catalogs brought to you</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <p>Expert guidance on design and budget options</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <p>Exclusive 10% discount on all purchases</p>
                  </div>
                </div>
              </div>
              <div className="animate-scale-in">
                <img
                  src="/free_quote/cons3.jpg"
                  alt="Premium material selection catalogs"
                  className="w-full h-auto rounded-lg shadow-elegant"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Home Consultation Process */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-scale-in">
                <img
                  src="/free_quote/Dollarphotoclub_64449348.jpg"
                  alt="Home consultation and design planning"
                  loading="lazy"
                  className="w-full h-auto rounded-lg shadow-elegant"
                />
              </div>
              <div className="order-1 lg:order-2 animate-slide-up">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Comprehensive Home Consultation
                </h3>
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Once you get in touch, we'll arrange a convenient time to
                    discuss your vision for the bathroom, take preliminary
                    measurements, and provide tailored design suggestions that
                    harmonise with the overall style of your home.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>Vision Discussion</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>Measurements</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>Design Suggestions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>Style Harmony</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Quote Process */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Transparent & Detailed Quoting
                </h3>
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Once we've chosen all the materials and finalised the design
                    together, we'll prepare and send you a detailed quote
                    outlining every aspect of the project, so you know exactly
                    what to expect – with{" "}
                    <span className="font-semibold text-accent">
                      complete transparency
                    </span>{" "}
                    and{" "}
                    <span className="font-semibold text-accent">
                      no hidden fees
                    </span>
                    .
                  </p>
                  <div className="bg-accent/10 rounded-lg p-6 mt-6">
                    <h4 className="font-semibold text-foreground mb-3">
                      Your quote includes:
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span>Itemized material costs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span>Labor breakdown</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span>Project timeline</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span>Total project cost</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-scale-in">
                <img
                  src="/free_quote/business-handshake-business-people.jpg"
                  alt="Detailed quote and project planning"
                  loading="lazy"
                  className="w-full h-auto rounded-lg shadow-elegant"
                />
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in">
            <div className="bg-card rounded-lg p-8 shadow-soft">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Start Your Bathroom Transformation?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book your free consultation today and take the first step
                towards your dream bathroom
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
                <Button
                  variant="default"
                  size="sm"
                  className="
      text-sm px-4 py-2
      md:text-lg md:px-8 md:py-4 md:size-lg
    "
                  onClick={handleMessageClick}
                >
                  <Calendar className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Book Free Consultation
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className="
      text-sm px-4 py-2
      md:text-lg md:px-8 md:py-4 md:size-lg
    "
                  onClick={handleCallClick}
                >
                  Call Us Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeConsultationPage;
