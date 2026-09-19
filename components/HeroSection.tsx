"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Facebook, Instagram, Phone } from "lucide-react";
import Link from "next/link";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const handleCallClick = () => {
  window.location.href = "tel:+0894219421";
};

const HeroSection = () => {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleCanPlay = () => {
        console.log("Video can play");
        video.play().catch((e) => console.error("Video play failed:", e));
      };

      const handleError = () => {
        console.error("Video failed to load, showing fallback");
        const fallback = document.getElementById("video-fallback");
        if (fallback) {
          fallback.style.opacity = "1";
        }
      };

      video.addEventListener("canplay", handleCanPlay);
      video.addEventListener("error", handleError);

      return () => {
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("error", handleError);
      };
    }
  }, []);

  const handleMessageClick = () => {
    router.push("/contact");
  };

  return (
    <section className="py-5 relative w-full aspect-square max-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        controls={false}
        onError={(e) => console.error("Video failed to load:", e)}
      >
        <source src="/Intro.mp4" type="video/mp4" />
        <source src="/Intro.mp4" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback background image in case video fails */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-1000"
        id="video-fallback"
      />

      <div className="" />

      {/* Content */}
      <div className="py-5 relative z-10 text-center text-white max-w-4xl mx-auto h-full flex flex-col justify-end pb-4 sm:pb-8 md:pb-12 lg:pb-16">
        <div className="animate-slide-up flex flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 justify-center items-stretch px-4 sm:px-6 md:px-8 mb-4 sm:mb-6 md:mb-8">
          <Button
            variant="hero"
            size="sm"
            className="
              flex-1 max-w-[120px] sm:max-w-[160px] md:max-w-sm lg:max-w-md
              text-[10px] px-2 py-1.5 sm:text-base sm:px-6 sm:py-4
              md:text-lg md:px-8 md:py-5
              lg:text-xl lg:px-12 lg:py-6
              xl:text-2xl xl:px-16 xl:py-8
            "
            onClick={handleMessageClick}
          >
            <Calendar className=" h-2.5 w-2.5 sm:mr-2 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
            Book Consultation
          </Button>

          <Button
            onClick={handleCallClick}
            variant="outline"
            size="sm"
            className="
              flex-1 max-w-[100px] sm:max-w-[140px] md:max-w-sm lg:max-w-md
              text-[10px] px-2 py-1.5 sm:text-base sm:px-6 sm:py-4
              md:text-lg md:px-8 md:py-5
              lg:text-xl lg:px-12 lg:py-6
              xl:text-2xl xl:px-16 xl:py-8
              bg-white/10 border-white/30 text-white hover:bg-white/20
            "
          >
            <Phone className="mr-1 h-2.5 w-2.5 sm:mr-2 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
            Call Now
          </Button>
        </div>

        {/* Social Media Links */}
        <div className="animate-scale-in flex justify-center gap-3 sm:gap-4 md:gap-6">
          <Link href={"https://www.facebook.com/zen.bathroom/"}>
            <Button
              variant="ghost"
              size="icon"
              className="
              bg-white/10 hover:bg-white/20 text-white
              h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14
            "
            >
              <Facebook className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </Button>
          </Link>

          <Link href={"https://www.instagram.com/zen.bathroom"}>
            <Button
              variant="ghost"
              size="icon"
              className="
              bg-white/10 hover:bg-white/20 text-white
              h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14
            "
            >
              <Instagram className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
