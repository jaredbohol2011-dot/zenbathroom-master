import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Bathroom Design Styles Guide | Zen Bathroom",
  description: "Discover the bathroom design styles worth considering for your renovation, from classic to contemporary, with tips from Zen Bathroom Dublin.",
  alternates: {
    canonical: "/blog/bathroom-design-styles",
  },
  openGraph: {
    title: "Bathroom Design Styles Guide | Zen Bathroom",
    description: "Discover the bathroom design styles worth considering for your renovation, from classic to contemporary, with tips from Zen Bathroom Dublin.",
    url: "https://www.zenbathroom.ie/blog/bathroom-design-styles",
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
    title: "Bathroom Design Styles Guide | Zen Bathroom",
    description: "Discover the bathroom design styles worth considering for your renovation, from classic to contemporary, with tips from Zen Bathroom Dublin.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
