import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Electrical Works Dublin | Zen Bathroom",
  description: "Safe, certified electrical work for bathroom renovations in Dublin — lighting, extractor fans and fittings installed by Zen Bathroom's expert team.",
  alternates: {
    canonical: "/electrical-works",
  },
  openGraph: {
    title: "Electrical Works Dublin | Zen Bathroom",
    description: "Safe, certified electrical work for bathroom renovations in Dublin — lighting, extractor fans and fittings installed by Zen Bathroom's expert team.",
    url: "https://www.zenbathroom.ie/electrical-works",
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
    title: "Electrical Works Dublin | Zen Bathroom",
    description: "Safe, certified electrical work for bathroom renovations in Dublin — lighting, extractor fans and fittings installed by Zen Bathroom's expert team.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
