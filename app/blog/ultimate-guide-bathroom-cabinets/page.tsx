import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Ultimate Guide to Bathroom Cabinets | Zen Bathroom",
  description: "Everything you need to know about choosing bathroom cabinets, from Zen Bathroom Dublin's design team.",
  alternates: {
    canonical: "/blog/ultimate-guide-bathroom-cabinets",
  },
  openGraph: {
    title: "Ultimate Guide to Bathroom Cabinets | Zen Bathroom",
    description: "Everything you need to know about choosing bathroom cabinets, from Zen Bathroom Dublin's design team.",
    url: "https://www.zenbathroom.ie/blog/ultimate-guide-bathroom-cabinets",
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
    title: "Ultimate Guide to Bathroom Cabinets | Zen Bathroom",
    description: "Everything you need to know about choosing bathroom cabinets, from Zen Bathroom Dublin's design team.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
