"use client";

import * as React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export interface DublinMapPin {
  id: number;
  title: string;
  neighborhood: string;
  lat: number;
  lng: number;
}

interface DublinMapProps {
  pins: DublinMapPin[];
  activePinId: number | null;
  onSelectPin: (id: number) => void;
}

const PIN_FILL = "#5a3d24"; // matches --primary (rich brown)
const PIN_STROKE = "#f5efe3"; // matches --card (warm cream)

function createPinIcon(active: boolean) {
  const size = active ? 38 : 30;
  const html = `
    <div style="transform-origin: bottom center; transition: transform 150ms ease;">
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 2px 3px rgba(0,0,0,0.35));">
        <path d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z" fill="${PIN_FILL}" stroke="${PIN_STROKE}" stroke-width="1.2"/>
        <circle cx="12" cy="9.5" r="2.6" fill="${PIN_STROKE}"/>
      </svg>
    </div>
  `;
  return L.divIcon({
    html,
    className: "",
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
  });
}

// Fit the map to show every pin once, on first render
const FitBounds = ({ pins }: { pins: DublinMapPin[] }) => {
  const map = useMap();
  React.useEffect(() => {
    if (pins.length === 0) return;
    const bounds = L.latLngBounds(
      pins.map((p) => [p.lat, p.lng] as [number, number]),
    );
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [map, pins]);
  return null;
};

const DublinMap = ({ pins, activePinId, onSelectPin }: DublinMapProps) => {
  return (
    <div className="w-full mb-10 md:mb-14">
      <div className="relative z-0 aspect-[4/3] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-soft">
        <MapContainer
          center={[53.3498, -6.2603]}
          zoom={10}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FitBounds pins={pins} />
          {pins.map((pin) => (
            <Marker
              key={pin.id}
              position={[pin.lat, pin.lng]}
              icon={createPinIcon(pin.id === activePinId)}
              eventHandlers={{ click: () => onSelectPin(pin.id) }}
            >
              <Tooltip direction="top" offset={[0, -28]}>
                {pin.neighborhood}
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <p className="text-center text-xs sm:text-sm text-muted-foreground mt-3">
        Click a pin to view that completed project
      </p>
    </div>
  );
};

export default DublinMap;
