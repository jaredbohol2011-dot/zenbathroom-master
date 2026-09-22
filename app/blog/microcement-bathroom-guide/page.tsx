import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Microcement Bathrooms Guide | Zen Bathroom",
  description: "What is microcement and is it right for your bathroom? Zen Bathroom Dublin breaks down this seamless modern finish.",
  alternates: {
    canonical: "/blog/microcement-bathroom-guide",
  },
  openGraph: {
    title: "Microcement Bathrooms Guide | Zen Bathroom",
    description: "What is microcement and is it right for your bathroom? Zen Bathroom Dublin breaks down this seamless modern finish.",
    url: "https://www.zenbathroom.ie/blog/microcement-bathroom-guide",
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
    title: "Microcement Bathrooms Guide | Zen Bathroom",
    description: "What is microcement and is it right for your bathroom? Zen Bathroom Dublin breaks down this seamless modern finish.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
