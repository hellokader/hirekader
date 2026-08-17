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
        source: "/index.html",
        destination: "/",
        permanent: true
      },
      {
        source: "/blog.html",
        destination: "/Blog",
        permanent: true
      },
      {
        source: "/services.html",
        destination: "/Services",
        permanent: true
      },
      {
        source: "/about.html",
        destination: "/About",
        permanent: true
      },
      {
        source: "/contact.html",
        destination: "/Contact",
        permanent: true
      },
      {
        source: "/Kader%20-%20Redesign%20(hirekader).html",
        destination: "/",
        permanent: true
      },
      {
        source: "/Blog%20Index.html",
        destination: "/Blog",
        permanent: true
      },
      {
        source: "/Blog%20Article%20Template.html",
        destination: "/Blog/why-your-leads-are-lying-to-you",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
