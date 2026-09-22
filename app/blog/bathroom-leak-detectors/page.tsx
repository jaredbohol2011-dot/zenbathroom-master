import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Bathroom Leak Detectors Guide | Zen Bathroom",
  description: "Protect your home from water damage. Zen Bathroom Dublin explains why a leak detector is a smart addition to any bathroom renovation.",
  alternates: {
    canonical: "/blog/bathroom-leak-detectors",
  },
  openGraph: {
    title: "Bathroom Leak Detectors Guide | Zen Bathroom",
    description: "Protect your home from water damage. Zen Bathroom Dublin explains why a leak detector is a smart addition to any bathroom renovation.",
    url: "https://www.zenbathroom.ie/blog/bathroom-leak-detectors",
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
    title: "Bathroom Leak Detectors Guide | Zen Bathroom",
    description: "Protect your home from water damage. Zen Bathroom Dublin explains why a leak detector is a smart addition to any bathroom renovation.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
