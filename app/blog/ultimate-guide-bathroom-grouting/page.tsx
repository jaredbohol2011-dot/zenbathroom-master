import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Ultimate Guide to Bathroom Grouting | Zen Bathroom",
  description: "Grouting can make or break your tiling. Zen Bathroom Dublin shares the secrets to a perfect, lasting finish.",
  alternates: {
    canonical: "/blog/ultimate-guide-bathroom-grouting",
  },
  openGraph: {
    title: "Ultimate Guide to Bathroom Grouting | Zen Bathroom",
    description: "Grouting can make or break your tiling. Zen Bathroom Dublin shares the secrets to a perfect, lasting finish.",
    url: "https://www.zenbathroom.ie/blog/ultimate-guide-bathroom-grouting",
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
    title: "Ultimate Guide to Bathroom Grouting | Zen Bathroom",
    description: "Grouting can make or break your tiling. Zen Bathroom Dublin shares the secrets to a perfect, lasting finish.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
