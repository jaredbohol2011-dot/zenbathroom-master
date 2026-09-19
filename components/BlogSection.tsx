"use client";

import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Calendar,
  User,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Bathroom design styles 2025",
    excerpt:
      "Step into 2025 with bathroom design ideas that balance timeless elegance and modern innovation. Explore trending styles that can inspire your next remodel with Zen Bathroom.",
    author: "Zen Team",
    date: "August 3, 2025",
    readTime: "8 min read",
    url: "/blog/bathroom-design-styles",
  },
  {
    id: 2,
    title:
      "The Complete Guide to Bathroom Tiles: Expert Advice from Zen Bathroom",
    excerpt:
      "Choosing the right tiles is one of the most important renovation decisions. From durability to slip resistance and design impact, discover how tile selection shapes the entire bathroom experience.",
    author: "Zen Team",
    date: "August 6, 2025",
    readTime: "7 min read",
    url: "/blog/choosing-right-tiles",
  },
  {
    id: 3,
    title:
      "The Art of Mitered Tiling: Elevate Your Bathroom with Seamless Luxury",
    excerpt:
      "Mitered tiling creates crisp, seamless edges that transform an ordinary bathroom into a luxury retreat. Learn why this advanced technique is the choice for homeowners seeking a refined finish.",
    author: "Zen Team",
    date: "August 10, 2025",
    readTime: "6 min read",
    url: "/blog/miltered-tiling",
  },
  {
    id: 4,
    title: "Types of Bathrooms: Finding the Right Fit for Your Renovation",
    excerpt:
      "From powder rooms to master suites, every bathroom type serves a unique purpose. Discover which layout best fits your lifestyle, home size, and renovation goals.",
    author: "Zen Team",
    date: "March 1, 2024",
    readTime: "6 min read",
    url: "/blog/right-fit-for-your-renovation",
  },
  {
    id: 5,
    title:
      "The Ultimate Guide to Bathroom Floor Heating: Comfort, Efficiency, and Luxury",
    excerpt:
      "Heated bathroom floors add comfort and efficiency to any home. Explore the pros and cons of electric vs. hydronic systems and learn how to integrate floor heating into your renovation.",
    author: "Zen Team",
    date: "February 20, 2024",
    readTime: "8 min read",
    url: "/blog/bathroom-floor-heating-guide",
  },
  {
    id: 6,
    title:
      "How to Tackle Mould in Your Bathroom: Causes, Prevention, and Removal",
    excerpt:
      "Bathroom mould spreads quickly if ignored. Understand the causes, learn effective prevention techniques, and explore safe removal methods to protect your home and health.",
    author: "Zen Team",
    date: "February 15, 2024",
    readTime: "5 min read",
    url: "/blog/bathroom-mould-guide",
  },
  {
    id: 7,
    title:
      "Bathroom Lighting Guide: How to Choose the Perfect Fixtures for Your Space",
    excerpt:
      "Lighting sets the mood and function of your bathroom. From layered lighting plans to statement fixtures, explore how to create a bright yet relaxing space.",
    author: "Zen Team",
    date: "February 10, 2024",
    readTime: "6 min read",
    url: "/blog/bathroom-lighting-guide",
  },
  {
    id: 8,
    title:
      "Microcement for Bathrooms: The Ultimate Guide to a Seamless, Modern Look",
    excerpt:
      "Microcement offers a sleek, seamless finish that’s both modern and durable. Learn how proper waterproofing and application ensure long-lasting results in bathrooms.",
    author: "Zen Team",
    date: "February 5, 2024",
    readTime: "7 min read",
    url: "/blog/microcement-bathroom-guide",
  },
  {
    id: 9,
    title:
      "Waterproofing Your shower: A Step-by-Step Guide to prevent Leaks and Damage",
    excerpt:
      "Waterproofing is the foundation of a reliable bathroom. This guide walks you through the process of sealing showers to prevent costly leaks, mold growth, and long-term damage.",
    author: "Zen Team",
    date: "January 30, 2024",
    readTime: "9 min read",
    url: "/blog/waterproofing-shower-guide",
  },
  {
    id: 11,
    title:
      "Smart Bathroom Gadgets: Upgrade Your Routine with These High-Tech Essentials",
    excerpt:
      "From voice-controlled mirrors to smart showers, today’s bathrooms are becoming tech-powered spaces. Explore the best gadgets for comfort, convenience, and efficiency.",
    author: "Zen Team",
    date: "January 25, 2024",
    readTime: "6 min read",
    url: "/blog/smart-bathroom-gadgets",
  },
  {
    id: 12,
    title:
      "The Complete Guide to Bathroom Ventilation: Preventing Mold & Improving Air Quality",
    excerpt:
      "Poor ventilation can trap moisture and damage your bathroom. Learn how to choose the right exhaust fan, improve airflow, and protect your space from mold and mildew.",
    author: "Zen Team",
    date: "January 20, 2024",
    readTime: "8 min read",
    url: "/blog/bathroom-ventilation-guide",
  },
  {
    id: 13,
    title:
      "Protect Your Home from Water Damage: Why Bathroom Leak Detectors Are a Smart Investment",
    excerpt:
      "Leak detectors provide an early warning system against water damage. Find out how these affordable devices save homeowners thousands in repair costs and give peace of mind.",
    author: "Zen Team",
    date: "January 15, 2024",
    readTime: "10 min read",
    url: "/blog/bathroom-leak-detectors",
  },
  {
    id: 14,
    title: "Why Bathroom Wall Insulation Is a Game Changer for Your Home",
    excerpt:
      "Bathroom wall insulation prevents heat loss, reduces condensation, and boosts energy efficiency. Discover the best insulation methods for comfort and cost savings.",
    author: "Zen Team",
    date: "January 10, 2024",
    readTime: "5 min read",
    url: "/blog/bathroom-wall-insulation",
  },
  {
    id: 15,
    title:
      "Exploring Different Shower Types: Which One Fits Your Style and Needs?",
    excerpt:
      "From walk-in showers to rainfall systems, explore the different types of showers available and learn which one best suits your home, budget, and lifestyle.",
    author: "Zen Team",
    date: "January 5, 2024",
    readTime: "7 min read",
    url: "/blog/exploring-different-shower-types",
  },
  {
    id: 16,
    title:
      "Title: The Ultimate Guide to Bathroom Cabinets: Function, Style, and Storage Solutions",
    excerpt:
      "Bathroom cabinets are more than storage—they define layout and style. Compare materials, explore trending designs, and learn tips to maximize organization.",
    author: "Zen Team",
    date: "December 25, 2023",
    readTime: "5 min read",
    url: "/blog/ultimate-guide-bathroom-cabinets",
  },
  {
    id: 17,
    title:
      "The Ultimate Guide to Bathroom Grouting – Expert Advice from Zen Bathroom",
    excerpt:
      "Grout may seem small, but it makes a huge difference in bathroom finishes. Learn why proper grouting improves durability, appearance, and water resistance in tiled spaces.",
    author: "Zen Team",
    date: "December 20, 2023",
    readTime: "8 min read",
    url: "/blog/ultimate-guide-bathroom-grouting",
  },
  {
    id: 10,
    title: "Essential Bathroom Fixtures",
    excerpt:
      "Fixtures are the finishing touches that bring your bathroom design together. Discover the must-have essentials and how to choose ones that balance style and function.",
    author: "Zen Team",
    date: "December 30, 2023",
    readTime: "6 min read",
    url: "/blog/essential-bathroom-fixtures",
  },
];

const BlogSection = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isMobilePaused, setIsMobilePaused] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [cardsPerView, setCardsPerView] = React.useState(1); // Default to 2 to match mobile
  const [isHydrated, setIsHydrated] = React.useState(false);

  // Touch/Swipe state
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);

  // Hydration check
  useEffect(() => {
    setIsHydrated(true);

    // Get cards per view based on screen size
    const getCardsPerView = () => {
      if (window.innerWidth >= 1024) return 3; // Desktop: 3 cards
      if (window.innerWidth >= 768) return 1; // Tablet: 1 card
      return 1; // Mobile: 1 card
    };

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    // Set initial values after hydration
    setCardsPerView(getCardsPerView());
    checkIsMobile();

    const handleResize = () => {
      setCardsPerView(getCardsPerView());
      checkIsMobile();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play functionality - advance by appropriate step
  React.useEffect(() => {
    if (!isHydrated) return; // Don't run auto-play until hydrated

    // Disable auto-play on mobile devices
    if (isMobile) return;

    // On desktop: pause on hover or when autoplay is off
    const shouldPause = !isAutoPlaying || isHovered;

    if (shouldPause) return;

    const interval = setInterval(() => {
      const step = cardsPerView;
      setCurrentIndex((prevIndex) =>
        prevIndex + step >= blogPosts.length ? 0 : prevIndex + step
      );
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, isMobile, cardsPerView, isHydrated]);

  // Manual navigation - advance by 2 on mobile, by cardsPerView on desktop
  const nextSlide = () => {
    const step = isMobile ? 1 : cardsPerView;
    setCurrentIndex((prevIndex) =>
      prevIndex + step >= blogPosts.length ? 0 : prevIndex + step
    );
  };

  const prevSlide = () => {
    const step = isMobile ? 1 : cardsPerView;
    setCurrentIndex((prevIndex) =>
      prevIndex - step < 0
        ? Math.max(0, blogPosts.length - step)
        : prevIndex - step
    );
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

  // Toggle play/pause
  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Handle mobile tap to pause/resume - Remove since we don't want auto-play on mobile
  const handleMobileTap = () => {
    // On mobile, tapping should not affect auto-play since it's disabled
    // This function can be kept for potential future features
  };

  // Handle hover states (desktop only)
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  const handleCardClick = (url: string) => {
    // Check if it's an internal blog link
    if (url.startsWith("/blog/")) {
      router.push(url);
    } else {
      // External link - open in new tab
      window.open(url, "_blank");
    }
  };

  // Get visible posts
  const getVisiblePosts = () => {
    const visible = [];
    for (let i = 0; i < cardsPerView; i++) {
      const index = (currentIndex + i) % blogPosts.length;
      visible.push({ ...blogPosts[index], index });
    }
    return visible;
  };

  const visiblePosts = getVisiblePosts();

  // Check if animation is currently running
  const isAnimationRunning = isMobile
    ? false // No auto-play on mobile
    : isAutoPlaying && !isHovered;

  // Show loading state or simplified version until hydrated
  if (!isHydrated) {
    return (
      <section className="py-5 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Blogs
            </h2>
            <p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: "300" }}
            >
              Stay updated with the latest bathroom renovation trends and tips
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(0, 3).map((post) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardHeader className="pb-3 p-4 md:p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{post.date}</span>

                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg md:text-xl text-primary hover:text-accent transition-colors leading-tight">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 p-4 md:p-6 pt-0">
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="h-4 w-4 mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-accent hover:text-accent-foreground"
                      >
                        <span>Read More</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Blogs
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: "300" }}
          >
            Stay updated with the latest bathroom renovation trends and tips
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Carousel Container */}
          <div
            className="relative max-w-6xl mx-auto"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Carousel Content */}
            <div className="overflow-hidden rounded-lg">
              {/* Mobile View - One Card */}
              <div className="block md:hidden">
                <div className="relative">
                  <div
                    className="flex transition-transform duration-700 ease-out"
                    style={{
                      transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    {blogPosts.map((post, index) => (
                      <div
                        key={`mobile-${index}`}
                        className="flex-shrink-0 w-full"
                      >
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            handleCardClick(post.url);
                          }}
                        >
                          <Card className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
                            <CardHeader className="pb-3 p-4">
                              <div className="flex items-center text-sm text-muted-foreground mb-3">
                                <Calendar className="h-4 w-4 mr-2" />
                                <span>{post.date}</span>
                                <span className="mx-2">•</span>
                                <span>{post.readTime}</span>
                              </div>
                              <CardTitle className="text-lg text-primary hover:text-accent transition-colors leading-tight">
                                {post.title}
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 p-4 pt-0">
                              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3"></p>
                              <div className="flex items-center justify-between pt-2">
                                <div className="flex items-center text-sm text-muted-foreground">
                                  <User className="h-4 w-4 mr-2" />
                                  <span>{post.author}</span>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="hover:bg-accent hover:text-accent-foreground"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleCardClick(post.url);
                                  }}
                                >
                                  <span>Read More</span>
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile Swipe Indicator */}
                  <div className="flex justify-center mt-4 gap-2">
                    {blogPosts.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          index === currentIndex ? "bg-primary" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Mobile Swipe Instructions */}
                  <div className="text-center mt-2">
                    <p className="text-xs text-muted-foreground">
                      Swipe left or right to navigate
                    </p>
                  </div>
                </div>
              </div>

              {/* Desktop/Tablet View - Multiple Cards */}
              <div className="hidden md:block">
                <div
                  className="flex gap-6 transition-transform duration-700 ease-out"
                  style={{
                    transform: `translateX(-${
                      currentIndex * (100 / cardsPerView)
                    }%)`,
                  }}
                >
                  {blogPosts.concat(blogPosts).map((post, globalIndex) => {
                    const postIndex = globalIndex % blogPosts.length;
                    const isVisible =
                      globalIndex >= currentIndex &&
                      globalIndex < currentIndex + cardsPerView;

                    return (
                      <div
                        key={`desktop-${globalIndex}`}
                        className={`flex-shrink-0 group transition-all duration-700 ease-out cursor-pointer ${
                          cardsPerView === 3
                            ? "w-[calc((100%-3rem)/3)]"
                            : "w-[calc((100%-1.5rem)/2)]"
                        } ${
                          isVisible
                            ? "opacity-100 scale-100"
                            : "opacity-70 scale-95"
                        }`}
                        onClick={() => handleCardClick(post.url)}
                      >
                        <Card className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 h-full">
                          <CardHeader className="pb-3 p-4 md:p-6">
                            <div className="flex items-center text-sm text-muted-foreground mb-3">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>{post.date}</span>
                              <span className="mx-2">•</span>
                              <span>{post.readTime}</span>
                            </div>
                            <CardTitle className="text-lg md:text-xl text-primary hover:text-accent transition-colors leading-tight">
                              {post.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4 p-4 md:p-6 pt-0">
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-3"></p>
                            <div className="flex items-center justify-between pt-2">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <User className="h-4 w-4 mr-2" />
                                <span>{post.author}</span>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="hover:bg-accent hover:text-accent-foreground"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCardClick(post.url);
                                }}
                              >
                                <span>Read More</span>
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Controls Section - Hide on Mobile since we have swipe */}
          <div className="hidden md:flex justify-center items-center mt-6 gap-6">
            {/* Left Arrow */}
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/30 hover:bg-white/50 shadow-soft hover:shadow-elegant transition-all duration-300 h-10 w-10"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5 text-primary" />
            </Button>

            {/* Auto-play status indicator */}
            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
              <div
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  isAnimationRunning
                    ? "bg-green-500 animate-pulse"
                    : "bg-gray-400"
                }`}
              />
              <span>{isAnimationRunning ? "Auto-playing" : "Paused"}</span>
              <span className="text-xs opacity-75">
                ({currentIndex + 1}/{blogPosts.length})
              </span>
            </div>

            {/* Right Arrow */}
            <Button
              onClick={nextSlide}
              variant="ghost"
              size="icon"
              className="bg-white/30 hover:bg-white/50 shadow-soft hover:shadow-elegant transition-all duration-300 h-10 w-10"
            >
              <ChevronRight className="h-5 w-5 text-primary" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
