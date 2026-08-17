import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io"
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/Kader%20-%20Redesign%20(hirekader).html",
        destination: "/",
        permanent: true
      },
      {
        source: "/Blog%20Index.html",
        destination: "/blog",
        permanent: true
      },
      {
        source: "/Blog%20Article%20Template.html",
        destination: "/blog/why-your-leads-are-lying-to-you",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
