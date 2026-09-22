import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Mitered Tiling Explained | Zen Bathroom",
  description: "Discover what mitered tiling is and how it creates a seamless, premium finish, explained by Zen Bathroom Dublin.",
  alternates: {
    canonical: "/blog/miltered-tiling",
  },
  openGraph: {
    title: "Mitered Tiling Explained | Zen Bathroom",
    description: "Discover what mitered tiling is and how it creates a seamless, premium finish, explained by Zen Bathroom Dublin.",
    url: "https://www.zenbathroom.ie/blog/miltered-tiling",
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
    title: "Mitered Tiling Explained | Zen Bathroom",
    description: "Discover what mitered tiling is and how it creates a seamless, premium finish, explained by Zen Bathroom Dublin.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
