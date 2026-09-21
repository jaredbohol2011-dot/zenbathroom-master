"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send, Phone, Mail, MapPin } from "lucide-react";
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

  return (
    <section
      id="quote-form"
      className="py-8 sm:py-12 lg:py-20 bg-gradient-subtle min-h-screen"
    >
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

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl sm:text-2xl text-primary">
                Request a Quote
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <div className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullname" className="text-sm font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="fullname"
                      value={formData.fullname}
                      onChange={(e) => handleChange("fullname", e.target.value)}
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
                      onChange={(e) => handleChange("email", e.target.value)}
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
                    <Label htmlFor="eircode" className="text-sm font-medium">
                      Eircode
                    </Label>
                    <Input
                      id="eircode"
                      value={formData.eircode}
                      onChange={(e) => handleChange("eircode", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <Button
                  onClick={handleSubmit}
                  variant="cta"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Send Quote Request"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <Card className="shadow-soft">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent rounded-full p-2 sm:p-3 flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-accent-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-primary mb-1 sm:mb-2">
                      Call Us
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-1 sm:mb-2">
                      Ready to discuss your project?
                    </p>
                    <p className="text-base sm:text-lg font-semibold text-primary">
                      0894219421
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent rounded-full p-2 sm:p-3 flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-accent-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-primary mb-1 sm:mb-2">
                      Email Us
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-1 sm:mb-2">
                      Send us your project details
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg font-semibold text-primary break-all">
                      zenbathroom@yahoo.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent rounded-full p-2 sm:p-3 flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-accent-foreground" />
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
          </div>
        </div>
      </div>
    </section>
  );
}
