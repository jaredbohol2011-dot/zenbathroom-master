import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Financing Options | Zen Bathroom Dublin",
  description: "Flexible financing options for your bathroom renovation in Dublin. Speak to Zen Bathroom about spreading the cost of your project.",
  alternates: {
    canonical: "/financing",
  },
  openGraph: {
    title: "Financing Options | Zen Bathroom Dublin",
    description: "Flexible financing options for your bathroom renovation in Dublin. Speak to Zen Bathroom about spreading the cost of your project.",
    url: "https://www.zenbathroom.ie/financing",
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
    title: "Financing Options | Zen Bathroom Dublin",
    description: "Flexible financing options for your bathroom renovation in Dublin. Speak to Zen Bathroom about spreading the cost of your project.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
