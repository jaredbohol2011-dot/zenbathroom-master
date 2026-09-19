import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The order matters: first format in the array that the browser supports
    // is served. Put AVIF first if you want the smallest file.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
