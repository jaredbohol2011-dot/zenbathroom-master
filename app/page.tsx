import type { Metadata } from "next";
import PageClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Zen Bathroom | Bathroom Renovations Dublin, Meath & Kildare",
  description: "Premium bathroom renovations and design in Dublin, Meath & Kildare. Tiling, plumbing, electrical works and bespoke cabinetry — get a free consultation and quote.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zen Bathroom | Bathroom Renovations Dublin, Meath & Kildare",
    description: "Premium bathroom renovations and design in Dublin, Meath & Kildare. Tiling, plumbing, electrical works and bespoke cabinetry — get a free consultation and quote.",
    url: "https://www.zenbathroom.ie/",
    siteName: "Zen Bathroom",
    locale: "en_IE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zen Bathroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zen Bathroom | Bathroom Renovations Dublin, Meath & Kildare",
    description: "Premium bathroom renovations and design in Dublin, Meath & Kildare. Tiling, plumbing, electrical works and bespoke cabinetry — get a free consultation and quote.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
