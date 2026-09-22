import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Bathroom Cabinet Design Dublin | Zen Bathroom",
  description: "Bespoke bathroom cabinet design and fabrication in Dublin. Custom vanities and storage built to fit your space, by Zen Bathroom.",
  alternates: {
    canonical: "/bathroom-cabinet-design",
  },
  openGraph: {
    title: "Bathroom Cabinet Design Dublin | Zen Bathroom",
    description: "Bespoke bathroom cabinet design and fabrication in Dublin. Custom vanities and storage built to fit your space, by Zen Bathroom.",
    url: "https://www.zenbathroom.ie/bathroom-cabinet-design",
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
    title: "Bathroom Cabinet Design Dublin | Zen Bathroom",
    description: "Bespoke bathroom cabinet design and fabrication in Dublin. Custom vanities and storage built to fit your space, by Zen Bathroom.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
