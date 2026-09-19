"use client";

import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import { useRouter } from "next/navigation";
import { Mail, Phone } from "lucide-react";

interface CallToActionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: "primary" | "secondary";
}

const CallToAction = ({
  title = "Ready to Transform Your Bathroom?",
  description = "Get a free quote today and let our experts bring your vision to life",
  buttonText = "Get Free Quote",
  variant = "primary",
}: CallToActionProps) => {
  const bgClass = variant === "primary" ? "bg-secondary" : "bg-gradient-subtle";
  const router = useRouter();

  const handleMessageClick = () => {
    router.push("/contact");
  };

  return (
    <section className={`py-5 bg-background`}>
      <div className="container mx-auto px-4 text-center">
        {/* Card Container wrapping all content */}
        <div className="bg-card rounded-2xl p-6 md:p-8 lg:p-12 shadow-soft hover:shadow-elegant transition-all duration-300">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2
              className="text-4xl md:text-5xl font-bold text-primary mb-6"
              style={{ fontFamily: "Italiana, serif" }}
            >
              {title}
            </h2>
            <p
              className="text-xl text-primary/80 mb-8"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: "300" }}
            >
              {description}
            </p>
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={handleMessageClick}
            >
              <Quote className="mr-2 h-5 w-5" />
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const SecondCTA = () => {
  const router = useRouter();
  const handleMessageClick = () => {
    router.push("/contact");
  };
  const handleCallClick = () => {
    window.location.href = "tel:+0894219421";
  };

  return (
    <section className="py-5 md:py-10 bg-card">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Ready to get Started?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Contact our expert team to get your bathroom renovation services.
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
  );
};

export { CallToAction, SecondCTA };
