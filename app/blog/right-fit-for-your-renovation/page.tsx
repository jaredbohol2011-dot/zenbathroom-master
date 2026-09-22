import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Types of Bathrooms: Finding the Right Fit | Zen Bathroom",
  description: "Not sure which bathroom layout suits your home? Zen Bathroom Dublin walks through the types of bathrooms to consider.",
  alternates: {
    canonical: "/blog/right-fit-for-your-renovation",
  },
  openGraph: {
    title: "Types of Bathrooms: Finding the Right Fit | Zen Bathroom",
    description: "Not sure which bathroom layout suits your home? Zen Bathroom Dublin walks through the types of bathrooms to consider.",
    url: "https://www.zenbathroom.ie/blog/right-fit-for-your-renovation",
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
    title: "Types of Bathrooms: Finding the Right Fit | Zen Bathroom",
    description: "Not sure which bathroom layout suits your home? Zen Bathroom Dublin walks through the types of bathrooms to consider.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
