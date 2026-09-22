import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Modern Floor & Wall Finishes Dublin | Zen Bathroom",
  description: "Contemporary floor and wall finishes for Dublin bathrooms, including microcement and waterproof systems, installed by Zen Bathroom.",
  alternates: {
    canonical: "/modern-floor-and-wall-finishes",
  },
  openGraph: {
    title: "Modern Floor & Wall Finishes Dublin | Zen Bathroom",
    description: "Contemporary floor and wall finishes for Dublin bathrooms, including microcement and waterproof systems, installed by Zen Bathroom.",
    url: "https://www.zenbathroom.ie/modern-floor-and-wall-finishes",
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
    title: "Modern Floor & Wall Finishes Dublin | Zen Bathroom",
    description: "Contemporary floor and wall finishes for Dublin bathrooms, including microcement and waterproof systems, installed by Zen Bathroom.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
