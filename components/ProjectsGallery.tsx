"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";
import DublinMap from "@/components/DublinMap";

// Project Images
// Project 1 Images (13 images)
import project1_1 from "../public/project 1/1.jpg";
import project1_2 from "../public/project 1/2.jpg";
import project1_3 from "../public/project 1/3.jpg";
import project1_4 from "../public/project 1/4.jpg";
import project1_5 from "../public/project 1/5.jpg";
import project1_6 from "../public/project 1/6.jpg";
import project1_7 from "../public/project 1/7.jpg";
import project1_8 from "../public/project 1/8.jpg";
import project1_9 from "../public/project 1/9.jpg";
import project1_10 from "../public/project 1/10.jpg";
import project1_11 from "../public/project 1/11.jpg";
import project1_12 from "../public/project 1/12.jpg";
import project1_13 from "../public/project 1/13.jpg";

// Project 2 Images (10 images)
import project2_1 from "../public/project 2/1.jpg";
import project2_2 from "../public/project 2/2.jpg";
import project2_3 from "../public/project 2/3.jpg";
import project2_4 from "../public/project 2/4.jpg";
import project2_5 from "../public/project 2/5.jpg";
import project2_6 from "../public/project 2/6.jpg";
import project2_7 from "../public/project 2/7.jpg";
import project2_8 from "../public/project 2/8.jpg";
import project2_9 from "../public/project 2/9.jpg";
import project2_10 from "../public/project 2/10.jpg";

// Project 3 Images (7 images)
import project3_1 from "../public/project 3/1.jpg";
import project3_2 from "../public/project 3/2.jpg";
import project3_3 from "../public/project 3/3.jpg";
import project3_4 from "../public/project 3/4.jpg";
import project3_5 from "../public/project 3/5.jpg";
import project3_6 from "../public/project 3/6.jpg";
import project3_7 from "../public/project 3/7.jpg";

// Project 4 Images (10 images)
import project4_1 from "../public/project 4/1.jpg";
import project4_2 from "../public/project 4/2.jpg";
import project4_3 from "../public/project 4/3.jpg";
import project4_4 from "../public/project 4/4.jpg";
import project4_5 from "../public/project 4/5.jpg";
import project4_6 from "../public/project 4/6.jpg";
import project4_7 from "../public/project 4/7.jpg";
import project4_8 from "../public/project 4/8.jpg";
import project4_9 from "../public/project 4/9.jpg";
import project4_10 from "../public/project 4/10.jpg";

// Project 5 Images (10 images)
import project5_1 from "../public/project 5/1.jpg";
import project5_2 from "../public/project 5/2.jpg";
import project5_3 from "../public/project 5/3.jpg";
import project5_4 from "../public/project 5/4.jpg";
import project5_5 from "../public/project 5/5.jpg";
import project5_6 from "../public/project 5/6.jpg";
import project5_7 from "../public/project 5/7.jpg";
import project5_8 from "../public/project 5/8.jpg";
import project5_9 from "../public/project 5/9.jpg";
import project5_10 from "../public/project 5/10.jpg";

const ProjectsGallery = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      mainImage: project1_1,
      allImages: [
        project1_1,
        project1_2,
        project1_3,
        project1_4,
        project1_5,
        project1_6,
        project1_7,
        project1_8,
        project1_9,
        project1_10,
        project1_11,
        project1_12,
        project1_13,
      ],
      description: "Victorian Green Bathroom",
      neighborhood: "Ranelagh",
      mapX: 38,
      mapY: 52,
    },
    {
      id: 2,
      title: "Project 2",
      mainImage: project2_1,
      allImages: [
        project2_1,
        project2_2,
        project2_3,
        project2_4,
        project2_5,
        project2_6,
        project2_7,
        project2_8,
        project2_9,
        project2_10,
      ],
      description: "Scandinavian Bathroom",
      neighborhood: "Blackrock",
      mapX: 48,
      mapY: 64,
    },
    {
      id: 3,
      title: "Project 3",
      mainImage: project3_1,
      allImages: [
        project3_1,
        project3_2,
        project3_3,
        project3_4,
        project3_5,
        project3_6,
        project3_7,
      ],
      description: "Black and White Bathroom",
      neighborhood: "Dalkey",
      mapX: 46,
      mapY: 80,
    },
    {
      id: 4,
      title: "Project 4",
      mainImage: project4_1,
      allImages: [
        project4_1,
        project4_2,
        project4_3,
        project4_4,
        project4_5,
        project4_6,
        project4_7,
        project4_8,
        project4_9,
        project4_10,
      ],
      description: "Navy Victorian Bathroom",
      neighborhood: "Howth",
      mapX: 80,
      mapY: 26,
    },
    {
      id: 5,
      title: "Project 5",
      mainImage: project5_1,
      allImages: [
        project5_1,
        project5_2,
        project5_3,
        project5_4,
        project5_5,
        project5_6,
        project5_7,
        project5_8,
        project5_9,
        project5_10,
      ],
      description: "Small Emerald Green",
      neighborhood: "Malahide",
      mapX: 60,
      mapY: 10,
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [activePinId, setActivePinId] = React.useState<number | null>(null);
  const [selectedProject, setSelectedProject] = React.useState<
    (typeof projects)[0] | null
  >(null);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  // Touch/Swipe state
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  // Check if mobile on mount
  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkIsMobile();
    const handleResize = () => checkIsMobile();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Manual navigation with smooth transition
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Touch/Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isMobile || !touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      // Swipe left - go to next slide
      nextSlide();
    } else if (isRightSwipe) {
      // Swipe right - go to previous slide
      prevSlide();
    }
  };

  // Handle project click
  const handleProjectClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setSelectedImageIndex(0);
    setIsModalOpen(true);
  };

  // Handle map pin click: highlight the pin, sync the carousel, and open the gallery
  const handlePinClick = (id: number) => {
    const project = projects.find((p) => p.id === id);
    if (!project) return;
    setActivePinId(id);
    const projectIndex = projects.findIndex((p) => p.id === id);
    if (projectIndex !== -1) setCurrentIndex(projectIndex);
    handleProjectClick(project);
  };

  // Handle modal image change
  const handleThumbnailClick = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
  };

  // Modal navigation functions
  const nextModalImage = () => {
    if (!selectedProject) return;
    setSelectedImageIndex((prevIndex) =>
      prevIndex === selectedProject.allImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevModalImage = () => {
    if (!selectedProject) return;
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProject.allImages.length - 1 : prevIndex - 1
    );
  };

  // Keyboard navigation for modal
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen || !selectedProject) return;

      if (event.key === "ArrowRight") {
        event.preventDefault();
        nextModalImage();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        prevModalImage();
      } else if (event.key === "Escape") {
        event.preventDefault();
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, selectedProject, selectedImageIndex]);

  // Get visible projects based on screen size
  const getVisibleProjects = () => {
    const visibleCount = 3; // Show 3 on desktop, 1 on mobile (handled by CSS)
    const visible = [];

    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % projects.length;
      visible.push({ ...projects[index], index });
    }

    return visible;
  };

  const visibleProjects = getVisibleProjects();

  return (
    <section className="py-5 md:py-10 bg-background">
      <div className="container mx-auto px-4">
        {/* Card Container wrapping all content */}
        <div className="bg-card rounded-2xl p-6 md:p-8 lg:p-12 shadow-soft hover:shadow-elegant transition-all duration-300">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
              Our Projects
            </h2>
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: "300" }}
            >
              Explore our portfolio of stunning bathroom transformations
            </p>
          </div>

          {/* Dublin Map */}
          <DublinMap
            pins={projects.map((p) => ({
              id: p.id,
              title: p.title,
              neighborhood: p.neighborhood,
              mapX: p.mapX,
              mapY: p.mapY,
            }))}
            activePinId={activePinId}
            onSelectPin={handlePinClick}
          />

          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 shadow-soft hover:shadow-elegant transition-all duration-300 h-10 w-10 md:h-12 md:w-12 disabled:opacity-50"
              onClick={prevSlide}
              disabled={isTransitioning}
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 shadow-soft hover:shadow-elegant transition-all duration-300 h-10 w-10 md:h-12 md:w-12 disabled:opacity-50"
              onClick={nextSlide}
              disabled={isTransitioning}
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </Button>

            {/* Carousel Content */}
            <div className="overflow-hidden rounded-lg">
              {/* Mobile View - Single Image */}
              <div className="block md:hidden">
                <div className="relative w-full">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    {projects.map((project, index) => (
                      <div key={project.id} className="w-full flex-shrink-0">
                        <div
                          className="relative group cursor-pointer"
                          onClick={() => handleProjectClick(project)}
                        >
                          <div className="aspect-[3/4] overflow-hidden rounded-lg">
                            <Image
                              src={project.mainImage}
                              alt={project.title}
                              loading="lazy"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-all duration-300" />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0  p-4 md:p-6">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                              {project.title}
                            </h3>
                            <p className="text-white/90 text-sm md:text-base leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                          {/* Click indicator */}
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-soft">
                              <svg
                                className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
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
                </div>
              </div>

              {/* Desktop View - Three Images */}
              <div className="hidden md:block">
                <div className="relative w-full">
                  <div
                    className="flex transition-transform duration-500 ease-in-out gap-6"
                    style={{
                      transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                    }}
                  >
                    {/* Render all projects for smooth infinite scroll */}
                    {[...projects, ...projects, ...projects].map(
                      (project, globalIndex) => {
                        const projectIndex = globalIndex % projects.length;
                        return (
                          <div
                            key={`${project.id}-${globalIndex}`}
                            className="w-1/3 flex-shrink-0 group cursor-pointer"
                            onClick={() => handleProjectClick(project)}
                          >
                            <div className="relative">
                              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                                <Image
                                  src={project.mainImage}
                                  alt={project.title}
                                  loading="lazy"
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0  transition-all duration-300" />
                              </div>
                              <div className="absolute bottom-0 left-0 right-0  to-transparent p-4 lg:p-6">
                                <h3 className="text-lg lg:text-xl font-bold text-white mb-2">
                                  {project.title}
                                </h3>
                                <p className="text-white/90 text-sm lg:text-base leading-relaxed">
                                  {project.description}
                                </p>
                              </div>
                              {/* Click indicator */}
                              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-soft">
                                  <svg
                                    className="w-5 h-5 text-primary"
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
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 md:mt-8 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-primary/30 hover:bg-primary/50",
                    isTransitioning && "pointer-events-none"
                  )}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 md:mt-16 animate-slide-up">
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6">
              Click on any project to view the complete gallery
            </p>
          </div>
        </div>
      </div>

      {/* Modal Dialog for Project Gallery */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[95vw] sm:max-w-6xl w-full max-h-[95vh] overflow-auto p-2 sm:p-6">
          <DialogHeader className="pb-4">
            <DialogTitle className="text-2xl md:text-3xl font-bold text-primary">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>

          {selectedProject && (
            <div className="space-y-6">
              {/* Main Image with Navigation */}
              <div className="relative group">
                <Image
                  src={selectedProject.allImages[selectedImageIndex]}
                  alt={`${selectedProject.title} - Image ${
                    selectedImageIndex + 1
                  }`}
                  loading="lazy"
                  className="w-full max-h-[60vh] object-contain rounded-lg shadow-elegant"
                />

                {/* Modal Navigation Arrows - Only show if there are multiple images */}
                {selectedProject.allImages.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 h-10 w-10 md:h-12 md:w-12"
                      onClick={prevModalImage}
                    >
                      <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 h-10 w-10 md:h-12 md:w-12"
                      onClick={nextModalImage}
                    >
                      <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                    </Button>
                  </>
                )}

                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImageIndex + 1} / {selectedProject.allImages.length}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary">
                  Gallery ({selectedProject.allImages.length} images)
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4">
                  {selectedProject.allImages.map((image, index) => (
                    <button
                      key={index}
                      className={cn(
                        "relative aspect-square overflow-hidden rounded-md transition-all duration-300 hover:scale-105",
                        index === selectedImageIndex
                          ? "ring-2 ring-primary shadow-elegant scale-105"
                          : "hover:shadow-soft"
                      )}
                      onClick={() => handleThumbnailClick(index)}
                    >
                      <Image
                        src={image}
                        alt={`${selectedProject.title} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {index === selectedImageIndex && (
                        <div className="absolute inset-0 " />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <div className="pt-4 border-t border-border">
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>
                    Use arrow keys or click the arrows to router.push through
                    images
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Close Button */}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsGallery;
