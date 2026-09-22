import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Contact Us | Zen Bathroom Dublin",
  description: "Get in touch with Zen Bathroom for a free consultation and quote on your bathroom renovation in Dublin, Meath or Kildare.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Zen Bathroom Dublin",
    description: "Get in touch with Zen Bathroom for a free consultation and quote on your bathroom renovation in Dublin, Meath or Kildare.",
    url: "https://www.zenbathroom.ie/contact",
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
    title: "Contact Us | Zen Bathroom Dublin",
    description: "Get in touch with Zen Bathroom for a free consultation and quote on your bathroom renovation in Dublin, Meath or Kildare.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
