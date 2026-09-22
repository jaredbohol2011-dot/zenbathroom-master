import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Free Consultation & Quote | Zen Bathroom Dublin",
  description: "Book a free consultation and get a personalised quote for your bathroom renovation in Dublin from Zen Bathroom.",
  alternates: {
    canonical: "/free-consultation-and-quote",
  },
  openGraph: {
    title: "Free Consultation & Quote | Zen Bathroom Dublin",
    description: "Book a free consultation and get a personalised quote for your bathroom renovation in Dublin from Zen Bathroom.",
    url: "https://www.zenbathroom.ie/free-consultation-and-quote",
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
    title: "Free Consultation & Quote | Zen Bathroom Dublin",
    description: "Book a free consultation and get a personalised quote for your bathroom renovation in Dublin from Zen Bathroom.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
