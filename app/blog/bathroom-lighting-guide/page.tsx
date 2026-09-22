import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Bathroom Lighting Guide | Zen Bathroom",
  description: "Good lighting can transform a bathroom. Zen Bathroom Dublin shares tips on layering light for a functional, stylish space.",
  alternates: {
    canonical: "/blog/bathroom-lighting-guide",
  },
  openGraph: {
    title: "Bathroom Lighting Guide | Zen Bathroom",
    description: "Good lighting can transform a bathroom. Zen Bathroom Dublin shares tips on layering light for a functional, stylish space.",
    url: "https://www.zenbathroom.ie/blog/bathroom-lighting-guide",
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
    title: "Bathroom Lighting Guide | Zen Bathroom",
    description: "Good lighting can transform a bathroom. Zen Bathroom Dublin shares tips on layering light for a functional, stylish space.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
