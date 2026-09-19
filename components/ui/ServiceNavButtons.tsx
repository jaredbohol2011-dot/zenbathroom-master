// src/components/ServiceNavButtons.tsx
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useServiceNav } from "@/hooks/useServiceNav";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export function ServiceNavButtons() {
  const { prev, next } = useServiceNav();
  const router = useRouter();

  // Touch/Swipe state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkIsMobile();
    const handleResize = () => checkIsMobile();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

    if (isLeftSwipe && next) {
      // Swipe left - go to next service
      router.push(next.path);
    } else if (isRightSwipe && prev) {
      // Swipe right - go to previous service
      router.push(prev.path);
    }
  };

  return (
    <>
      {/* Large invisible touch area for swipe detection */}
      <div
        className="absolute inset-0 z-10 pointer-events-auto md:pointer-events-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />

      {/* Visible navigation buttons */}
      <div className="absolute top-20 md:top-24 left-4 md:left-8 right-4 md:right-8 z-20 flex justify-between pointer-events-none">
        {prev && (
          <Button
            variant="ghost"
            className="pointer-events-auto bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
            onClick={() => router.push(prev.path)}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
          </Button>
        )}

        {next && (
          <Button
            variant="ghost"
            className="pointer-events-auto ml-auto bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
            onClick={() => router.push(next.path)}
          >
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>
    </>
  );
}
