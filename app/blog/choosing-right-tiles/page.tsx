import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Choosing the Right Tiles | Zen Bathroom Blog",
  description: "Tile selection can make or break a renovation. Zen Bathroom Dublin shares how to choose the right tiles for your bathroom.",
  alternates: {
    canonical: "/blog/choosing-right-tiles",
  },
  openGraph: {
    title: "Choosing the Right Tiles | Zen Bathroom Blog",
    description: "Tile selection can make or break a renovation. Zen Bathroom Dublin shares how to choose the right tiles for your bathroom.",
    url: "https://www.zenbathroom.ie/blog/choosing-right-tiles",
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
    title: "Choosing the Right Tiles | Zen Bathroom Blog",
    description: "Tile selection can make or break a renovation. Zen Bathroom Dublin shares how to choose the right tiles for your bathroom.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
