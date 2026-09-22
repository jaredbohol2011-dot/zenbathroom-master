"use client";

import * as React from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { sendQuoteRequest } from "@/lib/sendQuoteRequest";
import Image from "next/image";
import promoBanner from "../public/promotions/free-led-niche.jpg";

const ChooseImage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    eircode: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendQuoteRequest({
        formType: "led-niche-promotion",
        fullname: formData.name,
        eircode: formData.eircode,
        phone: formData.phone,
      });
      setIsModalOpen(false);
      setFormData({ name: "", eircode: "", phone: "" });
      setToastMessage(
        "Request submitted! We'll contact you within 24 hours to discuss your project."
      );
    } catch {
      setToastMessage(
        "Something went wrong sending your request. Please call or email us directly."
      );
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToastMessage(""), 5000);
    }
  };

  return (
    <section className="py-5 md:py-10 bg-background">
      {toastMessage && (
        <div className="fixed top-4 left-4 right-4 z-50 bg-green-500 text-white p-4 rounded-lg shadow-lg animate-pulse">
          {toastMessage}
        </div>
      )}
      <div className="container mx-auto px-4">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="relative w-full aspect-[2/1] overflow-hidden rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 group"
          aria-label="Open the Free LED Niche promotion form"
        >
          <Image
            src={promoBanner}
            alt="Your Zen Bathroom with a Free LED Niche included with your renovation this autumn"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </button>
      </div>

      {/* Modal Dialog with Promotion Form */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[95vw] sm:max-w-lg w-full max-h-[95vh] overflow-auto p-4 sm:p-6">
          <DialogHeader className="pb-2">
            <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mt-4">
              This season&apos;s promotion – Free LED Niche
            </DialogTitle>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">
              Type in your details below to get a Free LED Niche included
              with your renovation this season
            </p>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <Label htmlFor="led-name" className="text-sm sm:text-base">
                Full Name
              </Label>
              <Input
                id="led-name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="led-eircode" className="text-sm sm:text-base">
                Eircode
              </Label>
              <Input
                id="led-eircode"
                value={formData.eircode}
                onChange={(e) => handleChange("eircode", e.target.value)}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="led-phone" className="text-sm sm:text-base">
                Phone Number
              </Label>
              <Input
                id="led-phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
                className="mt-1"
              />
            </div>

            <Button
              type="submit"
              variant="cta"
              size="lg"
              className="w-full text-sm sm:text-base"
              disabled={isSubmitting}
            >
              <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              {isSubmitting
                ? "Sending..."
                : "Schedule your free consultation and quote"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ChooseImage;
