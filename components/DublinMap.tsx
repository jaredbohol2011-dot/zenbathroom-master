"use client";

import * as React from "react";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DublinMapPin {
  id: number;
  title: string;
  neighborhood: string;
  mapX: number; // 0-100, percentage across the map
  mapY: number; // 0-100, percentage down the map
}

interface DublinMapProps {
  pins: DublinMapPin[];
  activePinId: number | null;
  onSelectPin: (id: number) => void;
}

const DublinMap = ({ pins, activePinId, onSelectPin }: DublinMapProps) => {
  const [hoveredId, setHoveredId] = React.useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto mb-10 md:mb-14">
      <div className="relative aspect-square sm:aspect-[6/5] w-full overflow-hidden rounded-2xl shadow-soft bg-[#cfe3ea]">
        {/* Stylized illustrated coastline */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        >
          <rect x="0" y="0" width="100" height="100" fill="#cfe3ea" />
          <path
            d="M0,0 L50,0 L68,8 L65,14 L72,20 L88,24 L80,30 L68,34 L62,42 L58,50 L60,58 L56,66 L58,74 L54,80 L58,88 L50,96 L50,100 L0,100 Z"
            fill="hsl(41 30% 88%)"
            stroke="hsl(25 25% 70%)"
            strokeWidth="0.5"
          />
          {/* Liffey */}
          <path
            d="M20,49 C30,49.5 44,49.5 58,50"
            fill="none"
            stroke="hsl(200 35% 72%)"
            strokeWidth="1"
          />
          <text
            x="30"
            y="46"
            fontSize="3.2"
            fill="hsl(25 35% 40%)"
            fontFamily="serif"
            fontWeight="600"
          >
            Dublin
          </text>
          <text
            x="72"
            y="55"
            fontSize="2.6"
            fill="hsl(200 40% 45%)"
            fontFamily="serif"
            fontStyle="italic"
          >
            Dublin Bay
          </text>
        </svg>

        {/* Pins */}
        {pins.map((pin) => {
          const isActive = pin.id === activePinId;
          const isHovered = pin.id === hoveredId;
          return (
            <button
              key={pin.id}
              type="button"
              onClick={() => onSelectPin(pin.id)}
              onMouseEnter={() => setHoveredId(pin.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="absolute -translate-x-1/2 -translate-y-full flex flex-col items-center group focus:outline-none"
              style={{ left: `${pin.mapX}%`, top: `${pin.mapY}%` }}
              aria-label={`View ${pin.title} in ${pin.neighborhood}`}
            >
              <span
                className={cn(
                  "whitespace-nowrap mb-1 rounded-full bg-card/90 px-2 py-0.5 text-[10px] sm:text-xs font-medium text-primary shadow-soft transition-all duration-200",
                  isActive || isHovered
                    ? "opacity-100 scale-105"
                    : "opacity-90 sm:opacity-0 sm:group-hover:opacity-100"
                )}
              >
                {pin.neighborhood}
              </span>
              <span className="relative flex items-center justify-center">
                {isActive && (
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary/40 animate-ping" />
                )}
                <MapPin
                  className={cn(
                    "relative h-7 w-7 sm:h-8 sm:w-8 drop-shadow-md transition-transform duration-200 fill-primary text-primary-foreground stroke-[1.5]",
                    (isActive || isHovered) && "scale-125",
                    "group-hover:scale-125"
                  )}
                />
              </span>
            </button>
          );
        })}
      </div>
      <p className="text-center text-xs sm:text-sm text-muted-foreground mt-3">
        Click a pin to view that completed project
      </p>
    </div>
  );
};

export default DublinMap;
