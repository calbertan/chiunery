import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.behance.net",
      },
      {
        protocol: "https",
        hostname: "mir-s3-cdn-cf.behance.net",
      },
      {
        protocol: "https",
        hostname: "mir-cdn.behance.net",
      },
      {
        protocol: "https",
        hostname: "c4.staticflickr.com",
      },
      {
        protocol: "https",
        hostname: "**.staticflickr.com",
      },
    ],
  },
};

export default nextConfig;
