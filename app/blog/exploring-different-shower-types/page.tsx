import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Exploring Different Shower Types | Zen Bathroom",
  description: "From power showers to wet rooms, Zen Bathroom Dublin explores the different shower types to consider for your renovation.",
  alternates: {
    canonical: "/blog/exploring-different-shower-types",
  },
  openGraph: {
    title: "Exploring Different Shower Types | Zen Bathroom",
    description: "From power showers to wet rooms, Zen Bathroom Dublin explores the different shower types to consider for your renovation.",
    url: "https://www.zenbathroom.ie/blog/exploring-different-shower-types",
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
    title: "Exploring Different Shower Types | Zen Bathroom",
    description: "From power showers to wet rooms, Zen Bathroom Dublin explores the different shower types to consider for your renovation.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
