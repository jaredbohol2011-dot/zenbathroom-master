import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Bathroom Floor Heating Guide | Zen Bathroom",
  description: "Is underfloor heating right for your bathroom? Zen Bathroom Dublin explains the benefits and what to consider before installing it.",
  alternates: {
    canonical: "/blog/bathroom-floor-heating-guide",
  },
  openGraph: {
    title: "Bathroom Floor Heating Guide | Zen Bathroom",
    description: "Is underfloor heating right for your bathroom? Zen Bathroom Dublin explains the benefits and what to consider before installing it.",
    url: "https://www.zenbathroom.ie/blog/bathroom-floor-heating-guide",
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
    title: "Bathroom Floor Heating Guide | Zen Bathroom",
    description: "Is underfloor heating right for your bathroom? Zen Bathroom Dublin explains the benefits and what to consider before installing it.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
