import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Plumbing Dublin | Zen Bathroom",
  description: "Professional bathroom plumbing services in Dublin from Zen Bathroom. Reliable installs and repairs as part of your full bathroom renovation.",
  alternates: {
    canonical: "/plumbing",
  },
  openGraph: {
    title: "Plumbing Dublin | Zen Bathroom",
    description: "Professional bathroom plumbing services in Dublin from Zen Bathroom. Reliable installs and repairs as part of your full bathroom renovation.",
    url: "https://www.zenbathroom.ie/plumbing",
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
    title: "Plumbing Dublin | Zen Bathroom",
    description: "Professional bathroom plumbing services in Dublin from Zen Bathroom. Reliable installs and repairs as part of your full bathroom renovation.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
