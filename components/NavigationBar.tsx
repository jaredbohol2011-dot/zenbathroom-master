"use client";

import * as React from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const services = [
  "Tiling",
  "Plumbing",
  "Electrical Works",
  "Modern Floor and wall Finishes",
  "Bathroom cabinet design",
  "Free Quote and Consultation",
];

const NavigationBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = React.useState(false);
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleNavClick = (section: string) => {
    setIsOpen(false);
    setIsMobileServicesOpen(false);
    if (section === "financing") {
      router.push("/financing");
    } else {
      console.log(`router.push to ${section}`);
    }
  };

  const handleServiceClick = (service: string) => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);

    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    switch (service) {
      case "Tiling":
        router.push("/tiling");
        break;
      case "Plumbing":
        router.push("/plumbing");
        break;
      case "Electrical Works":
        router.push("/electrical-works");
        break;
      case "Modern Floor and wall Finishes":
        router.push("/modern-floor-and-wall-finishes");
        break;
      case "Bathroom cabinet design":
        router.push("/bathroom-cabinet-design");
        break;
      case "Free Quote and Consultation":
        router.push("/free-consultation-and-quote");
        break;
      default:
        console.log(`router.push to service: ${service}`);
    }
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  React.useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mobile-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1>
              <button
                onClick={() => router.push("/")}
                className="text-xl md:text-2xl font-bold text-primary font-serif hover:opacity-80 transition-opacity cursor-pointer"
              >
                ZEN Bathroom
              </button>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Services
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    isServicesOpen && "rotate-180"
                  )}
                />
              </Button>

              {/* Desktop Dropdown Menu */}
              <div
                className={cn(
                  "absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-md shadow-elegant transition-all duration-200 origin-top",
                  isServicesOpen
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                )}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="py-2">
                  {services.map((service, index) => (
                    <button
                      key={service}
                      onClick={() => handleServiceClick(service)}
                      className="w-full px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Button
              variant="ghost"
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => handleNavClick("financing")}
            >
              Financing
            </Button>

            {/*<Button
              variant="ghost"
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => handleNavClick("reviews")}
            >
              Reviews
            </Button>*/}

            {/* Desktop CTA Button */}
            <Button
              className="bg-gradient-hero text-primary-foreground shadow-elegant hover:shadow-soft transform hover:scale-105 font-semibold"
              onClick={() => router.push("./contact")}
            >
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground hover:text-primary hover:bg-accent"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 sm:w-96">
                <SheetHeader className="text-left pb-6">
                  <SheetTitle className="text-2xl font-bold text-primary font-serif">
                    ZEN Bathroom
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col space-y-4">
                  {/* Mobile Services Collapsible */}
                  <Collapsible
                    open={isMobileServicesOpen}
                    onOpenChange={setIsMobileServicesOpen}
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-between text-lg font-medium py-6 hover:bg-accent hover:text-accent-foreground"
                      >
                        Services
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform duration-200",
                            isMobileServicesOpen && "rotate-180"
                          )}
                        />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2 mt-2 ml-4">
                      {services.map((service) => (
                        <Button
                          key={service}
                          variant="ghost"
                          className="w-full justify-start text-base font-normal py-4 pl-4 hover:bg-accent/50 hover:text-accent-foreground"
                          onClick={() => handleServiceClick(service)}
                        >
                          {service}
                        </Button>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-lg font-medium py-6 hover:bg-accent hover:text-accent-foreground"
                      onClick={() => router.push("/financing")}
                    >
                      Financing
                    </Button>
                  </SheetClose>
                </div>
                <div className="absolute bottom-8 left-6 right-6">
                  <SheetClose asChild>
                    <Button
                      className="w-full bg-gradient-hero text-primary-foreground shadow-elegant hover:shadow-soft transform hover:scale-105 py-6 text-lg font-semibold"
                      onClick={() => router.push("/contact")}
                    >
                      Get Free Quote
                    </Button>
                  </SheetClose>
                </div>

                {/* Mobile CTA */}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { NavigationBar };
