import { Facebook, Instagram, Music, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaTiktok } from "react-icons/fa";

export const Footer = () => {
  // Use a static year to avoid hydration mismatch
  const currentYear = 2025;

  const services = [
    "Tiling",
    "Plumbing",
    "Electrical Works",
    "Modern Floor and Wall Finishes",
    "Bathroom Cabinet Design",
    "Free Consultation and Quote",
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/zenbathrooms",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/zen.bathroom",
      color: "hover:text-pink-600",
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      url: "https://tiktok.com/@zenbathrooms",
      color: "hover:text-cyan-600",
    },
  ];

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-serif mb-6">ZEN Bathroom</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <a
                  href="mailto:zenbathroom@yahoo.com"
                  className="hover:text-primary transition-colors"
                >
                  zenbathroom@yahoo.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 " />
                <a href="tel:+0894219421" className="hover:text-primary ">
                  WhatsApp: 0894219421
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>Dublin, Ireland</span>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => {
                const slug = service.toLowerCase().replace(/\s+/g, "-");
                return (
                  <li key={slug}>
                    <a
                      href={`/${slug}`} // <-- note the leading slash
                      className="hover:text-accent transition-colors text-sm"
                    >
                      {service}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-2">
              <li></li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-primarytransition-colors text-sm"
                >
                  Financing
                </a>
              </li>
              <li>
                {/*<a
                  href="#reviews"
                  className="hover:text-accent transition-colors text-sm"
                >
                  Reviews
                </a>*/}
              </li>
              <li>
                <a
                  href="/blog/bathroom-design-styles"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#quote-form"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-6">Connect With Us</h4>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    asChild
                    className={` hover:bg-primary-foreground/20 ${social.color} transition-all duration-300`}
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © {currentYear} ZEN Bathrooms. All rights reserved.
            </div>
            {/* <div className="flex space-x-6 text-sm">
              <a
                href="#privacy"
                className="hover:text-accent transition-colors"
              >
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>*/}
          </div>
        </div>
      </div>
    </footer>
  );
};
