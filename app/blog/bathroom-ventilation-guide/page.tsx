import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Bathroom Ventilation Guide | Zen Bathroom",
  description: "Proper ventilation is essential for a healthy bathroom. Zen Bathroom Dublin explains why it matters and how to get it right.",
  alternates: {
    canonical: "/blog/bathroom-ventilation-guide",
  },
  openGraph: {
    title: "Bathroom Ventilation Guide | Zen Bathroom",
    description: "Proper ventilation is essential for a healthy bathroom. Zen Bathroom Dublin explains why it matters and how to get it right.",
    url: "https://www.zenbathroom.ie/blog/bathroom-ventilation-guide",
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
    title: "Bathroom Ventilation Guide | Zen Bathroom",
    description: "Proper ventilation is essential for a healthy bathroom. Zen Bathroom Dublin explains why it matters and how to get it right.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
