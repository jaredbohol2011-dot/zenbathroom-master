import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Bathroom Wall Insulation Guide | Zen Bathroom",
  description: "Find out why wall insulation matters for warmth, soundproofing and damp prevention, with advice from Zen Bathroom Dublin.",
  alternates: {
    canonical: "/blog/bathroom-wall-insulation",
  },
  openGraph: {
    title: "Bathroom Wall Insulation Guide | Zen Bathroom",
    description: "Find out why wall insulation matters for warmth, soundproofing and damp prevention, with advice from Zen Bathroom Dublin.",
    url: "https://www.zenbathroom.ie/blog/bathroom-wall-insulation",
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
    title: "Bathroom Wall Insulation Guide | Zen Bathroom",
    description: "Find out why wall insulation matters for warmth, soundproofing and damp prevention, with advice from Zen Bathroom Dublin.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
