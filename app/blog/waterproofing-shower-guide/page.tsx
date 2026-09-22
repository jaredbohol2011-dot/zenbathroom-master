import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Shower Waterproofing & Tanking Guide | Zen Bathroom",
  description: "Understand shower tanking and why proper waterproofing is essential, explained by Zen Bathroom Dublin's renovation experts.",
  alternates: {
    canonical: "/blog/waterproofing-shower-guide",
  },
  openGraph: {
    title: "Shower Waterproofing & Tanking Guide | Zen Bathroom",
    description: "Understand shower tanking and why proper waterproofing is essential, explained by Zen Bathroom Dublin's renovation experts.",
    url: "https://www.zenbathroom.ie/blog/waterproofing-shower-guide",
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
    title: "Shower Waterproofing & Tanking Guide | Zen Bathroom",
    description: "Understand shower tanking and why proper waterproofing is essential, explained by Zen Bathroom Dublin's renovation experts.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
