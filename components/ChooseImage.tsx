"use client";

import * as React from "react";
import { X, Send, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Gallery Images
import galleryImage1 from "../public/galleryImages/1.jpg";
import galleryImage2 from "../public/galleryImages/2.jpg";
import galleryImage3 from "../public/galleryImages/3.jpg";
const ChooseImage = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      image: galleryImage1,
    },
    {
      id: 2,
      title: "Project 2",
      image: galleryImage2,
    },
    {
      id: 3,
      title: "Project 3",
      image: galleryImage3,
    },
  ];

  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    eircode: "",
    selectedProject: "",
  });

  const handleImageClick = (projectId: number) => {
    const project = projects.find((p) => p.id === projectId);
    setSelectedImage(projectId);
    setFormData((prev) => ({
      ...prev,
      selectedProject: project?.title || "",
    }));
    setIsModalOpen(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
    setIsModalOpen(false);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      eircode: "",
      selectedProject: "",
    });
  };

  const selectedProject = projects.find((p) => p.id === selectedImage);

  return (
    <section className={`py-5 md:py-10 bg-background`}>
      <div className="container mx-auto px-4">
        {/* Card Container wrapping all content */}
        <div className="bg-card rounded-2xl p-6 md:p-8 lg:p-12 shadow-soft hover:shadow-elegant transition-all duration-300">
          {/* Title and Subtitle */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4 md:mb-6 leading-tight">
              Guess the Winning Bathroom and Win Free Tiles
            </h2>
          </div>

          {/* Project Images Grid - Always 3 columns */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={cn(
                  "group relative cursor-pointer overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 hover:scale-[1.02] md:hover:scale-105",
                  index === 0 && "animate-slide-in-left",
                  index === 1 && "animate-slide-up",
                  index === 2 && "animate-slide-in-right"
                )}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => handleImageClick(project.id)}
              >
                {/* Project Image */}
                <div className="relative aspect-[2/4] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 group-hover:bg-primary/10 transition-all duration-300" />

                  {/* Project Title Overlay - Bottom Left */}
                  <div className="absolute bottom-0 left-0 right-0 to-transparent p-2 sm:p-4 md:p-6">
                    <p className="text-xs sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
                      {project.title}
                    </p>
                  </div>

                  {/* Hover Effect Indicator */}
                  <div className="absolute top-1 sm:top-2 md:top-4 right-1 sm:right-2 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/80 backdrop-blur-sm p-1 sm:p-1.5 md:p-2 rounded-full shadow-soft">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 sm:mt-12 md:mt-16 animate-slide-up px-2">
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6">
              Click on your favorite design to get your quote and for more
              information
            </p>
          </div>
        </div>
      </div>

      {/* Modal Dialog with Quote Form */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[95vw] sm:max-w-2xl lg:max-w-4xl w-full max-h-[95vh] overflow-auto p-3 sm:p-6">
          <DialogHeader className="pb-4">
            <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mt-4">
              This Month’s Promotion – Get{" "}
              <span className="font-bold">FREE TILES!</span>
            </DialogTitle>

            <div className="text-sm sm:text-base text-muted-foreground space-y-3 mt-2">
              <p>
                We’re showcasing{" "}
                <span className="font-bold">
                  three stunning bathroom designs
                </span>
                , and we’re letting <span className="font-bold">you</span>{" "}
                decide which one gets the spotlight!
              </p>

              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Vote for your favorite design from the three options.</li>
                <li>
                  If you guess the{" "}
                  <span className="font-bold">most popular choice</span> (the
                  one with the most votes), you get{" "}
                  <span className="font-bold">FREE TILES</span> on your upcoming
                  renovation project!
                </li>
              </ul>
            </div>
          </DialogHeader>

          {selectedProject && (
            <div className="space-y-6">
              {/* Selected Project Preview */}
              <div className="relative">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg shadow-soft"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0  to-transparent p-3 sm:p-4 rounded-b-lg">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                    Selected: {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Quote Form */}
              <Card className="shadow-elegant">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg sm:text-xl text-primary">
                    Request a Quote
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm sm:text-base">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm sm:text-base">
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-sm sm:text-base">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) =>
                            handleChange("phone", e.target.value)
                          }
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="eircode"
                          className="text-sm sm:text-base"
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
                      type="submit"
                      variant="cta"
                      size="lg"
                      className="w-full text-sm sm:text-base"
                    >
                      <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Claim your Discount!
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Close Button */}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ChooseImage;
