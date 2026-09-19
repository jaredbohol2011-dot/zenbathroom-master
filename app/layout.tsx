// app/layout.tsx
import type { Metadata } from "next";
import { Poppins, Italiana } from "next/font/google";
import "./globals.css";
import WhatsAppWidget from "@/components/whatsapp";

import { ScrollToTop } from "@/components/ScrollToTop";
import { NavigationBar } from "@/components/NavigationBar";
import { Footer } from "@/components/Footer";
import ScrollProvider from "@/app/providers";
import { Suspense } from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Zen Bathroom - Premium bathroom designs and renovations",
  description:
    "Transform your bathroom with Zen Bathroom Renovations. Expert bathroom renovations and designs. Serving Dublin, Meath & Kildare.",
  metadataBase: new URL("https://www.zenbathroom.ie"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zen Bathroom - Premium designs and renovations",
    description: "Transform your bathroom with Zen Bathroom Renovation",
    url: "https://www.zenbathroom.ie",
    siteName: "Zen Bathroom",
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zen Bathroom - Premium designs and renovations",
    description: "Transform your bathroom with Zen Bathroom Renovation",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${italiana.variable} antialiased`}
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
      >
        <head>
          <link rel="icon" href="/logos.png" />
          <link rel="apple-touch-icon" href="/logos.png" />
        </head>
        <ScrollToTop />
        <Suspense fallback={null}>
          <ScrollProvider>
            <NavigationBar />
            <main>{children}</main>
            <Footer />
            <WhatsAppWidget />
          </ScrollProvider>
        </Suspense>
      </body>
    </html>
  );
}
