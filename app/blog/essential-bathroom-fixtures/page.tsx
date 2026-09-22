import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Essential Bathroom Fixtures | Zen Bathroom",
  description: "A guide to the essential fixtures every bathroom needs, from Zen Bathroom Dublin's renovation experts.",
  alternates: {
    canonical: "/blog/essential-bathroom-fixtures",
  },
  openGraph: {
    title: "Essential Bathroom Fixtures | Zen Bathroom",
    description: "A guide to the essential fixtures every bathroom needs, from Zen Bathroom Dublin's renovation experts.",
    url: "https://www.zenbathroom.ie/blog/essential-bathroom-fixtures",
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
    title: "Essential Bathroom Fixtures | Zen Bathroom",
    description: "A guide to the essential fixtures every bathroom needs, from Zen Bathroom Dublin's renovation experts.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
