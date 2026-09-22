import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Bathroom Mould Guide | Zen Bathroom",
  description: "Learn why mould grows in bathrooms and how to prevent it, with practical advice from Zen Bathroom Dublin.",
  alternates: {
    canonical: "/blog/bathroom-mould-guide",
  },
  openGraph: {
    title: "Bathroom Mould Guide | Zen Bathroom",
    description: "Learn why mould grows in bathrooms and how to prevent it, with practical advice from Zen Bathroom Dublin.",
    url: "https://www.zenbathroom.ie/blog/bathroom-mould-guide",
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
    title: "Bathroom Mould Guide | Zen Bathroom",
    description: "Learn why mould grows in bathrooms and how to prevent it, with practical advice from Zen Bathroom Dublin.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
