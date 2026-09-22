"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  MessageCircle,
} from "lucide-react";
import { sendQuoteRequest } from "@/lib/sendQuoteRequest";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    eircode: "",
  });

  const [toastMessage, setToastMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendQuoteRequest({ formType: "quote", ...formData });
      setToastMessage(
        "Quote Request Submitted! We'll contact you within 24 hours to discuss your project."
      );
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        eircode: "",
      });
    } catch {
      setToastMessage(
        "Something went wrong sending your request. Please call or email us directly."
      );
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToastMessage(""), 5000);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleCallClick = () => {
    window.location.href = "tel:+0894219421";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-hero">
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Transform Your Bathroom Today
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 drop-shadow-md max-w-2xl mx-auto">
              Get your free consultation and quote from Dublin's premier
              bathroom renovation experts
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="shadow-soft bg-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Licensed & Insured
                </h3>
                <p className="text-sm text-muted-foreground">
                  Fully licensed and insured for your peace of mind
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft bg-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 text-yellow-500 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold text-primary mb-2">
                  5-Star Reviews
                </h3>
                <p className="text-sm text-muted-foreground">
                  Consistently rated 5 stars by our customers
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft bg-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-blue-500 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold text-primary mb-2">
                  24hr Response
                </h3>
                <p className="text-sm text-muted-foreground">
                  Fast response time within 24 hours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="quote-form" className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toast Message */}
          {toastMessage && (
            <div className="fixed top-4 left-4 right-4 z-50 bg-green-500 text-white p-4 rounded-lg shadow-lg animate-pulse">
              {toastMessage}
            </div>
          )}

          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 sm:mb-4">
              Get Your Free Quote
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Ready to start your bathroom renovation? Contact us today for a
              personalized quote
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto ">
            {/* Contact Form */}
            <div className="order-2 lg:order-1  ">
              <Card className="shadow-elegant border-0 bg-card/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl sm:text-2xl text-primary">
                    Request a Quote
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="fullname"
                          className="text-sm font-medium"
                        >
                          Full Name
                        </Label>
                        <Input
                          id="fullname"
                          value={formData.fullname}
                          onChange={(e) =>
                            handleChange("fullname", e.target.value)
                          }
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="eircode"
                          className="text-sm font-medium"
                        >
                          Eircode
                        </Label>
                        <Input
                          id="eircode"
                          value={formData.eircode}
                          onChange={(e) =>
                            handleChange("eircode", e.target.value)
                          }
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <Button
                      onClick={handleSubmit}
                      variant="cta"
                      className="w-full transform hover:scale-105 transition-all duration-300"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {isSubmitting ? "Sending..." : "Send Quote Request"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-2 space-y-4 sm:space-y-6 mb-16">
              <Card className="shadow-soft border-0 bg-card/60 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-accent to-accent/80 rounded-full p-3 flex-shrink-0 shadow-soft">
                      <Phone className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-primary mb-1 sm:mb-2">
                        Call Us
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-1 sm:mb-2">
                        Ready to discuss your project?
                      </p>
                      <a
                        href="tel:0894219421"
                        className="text-base sm:text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
                      >
                        0894219421
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-0 bg-card/60 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-accent to-accent/80 rounded-full p-3 flex-shrink-0 shadow-soft">
                      <Mail className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-primary mb-1 sm:mb-2">
                        Email Us
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-1 sm:mb-2">
                        Send us your project details
                      </p>
                      <a
                        href="mailto:zenbathroom@yahoo.com"
                        className="text-sm sm:text-base lg:text-lg font-semibold text-primary hover:text-primary/80 transition-colors break-all"
                      >
                        zenbathroom@yahoo.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-0 bg-card/60 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-accent to-accent/80 rounded-full p-3 flex-shrink-0 shadow-soft">
                      <MapPin className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-primary mb-1 sm:mb-2">
                        Service Areas
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-1 sm:mb-2">
                        We service all of Dublin
                      </p>
                      <p className="text-sm sm:text-base lg:text-lg font-semibold text-primary">
                        Dublin, Meath, Kildare
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us Section */}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our satisfied customers who have transformed their bathrooms
            with Zen Bathroom
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
              onClick={handleCallClick}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: 0894219421
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://wa.me/353894219421', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Send us a Message
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
