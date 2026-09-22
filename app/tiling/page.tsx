import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Tiling Service Dublin | Zen Bathroom",
  description: "Expert bathroom tiling in Dublin — large format, metro, mitered and mosaic tiles installed to a flawless finish. Get a free quote from Zen Bathroom.",
  alternates: {
    canonical: "/tiling",
  },
  openGraph: {
    title: "Tiling Service Dublin | Zen Bathroom",
    description: "Expert bathroom tiling in Dublin — large format, metro, mitered and mosaic tiles installed to a flawless finish. Get a free quote from Zen Bathroom.",
    url: "https://www.zenbathroom.ie/tiling",
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
    title: "Tiling Service Dublin | Zen Bathroom",
    description: "Expert bathroom tiling in Dublin — large format, metro, mitered and mosaic tiles installed to a flawless finish. Get a free quote from Zen Bathroom.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PageClient />;
}
