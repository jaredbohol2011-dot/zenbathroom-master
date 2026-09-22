import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Smart Bathroom Gadgets Guide | Zen Bathroom",
  description: "From smart mirrors to heated towel rails, Zen Bathroom Dublin explores the bathroom tech worth adding to your renovation.",
  alternates: {
    canonical: "/blog/smart-bathroom-gadgets",
  },
  openGraph: {
    title: "Smart Bathroom Gadgets Guide | Zen Bathroom",
    description: "From smart mirrors to heated towel rails, Zen Bathroom Dublin explores the bathroom tech worth adding to your renovation.",
    url: "https://www.zenbathroom.ie/blog/smart-bathroom-gadgets",
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
    title: "Smart Bathroom Gadgets Guide | Zen Bathroom",
    description: "From smart mirrors to heated towel rails, Zen Bathroom Dublin explores the bathroom tech worth adding to your renovation.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
