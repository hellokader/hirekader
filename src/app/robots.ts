import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const isProduction = siteConfig.url === "https://hirekader.com";

  return {
    rules: {
      userAgent: "*",
      allow: isProduction ? "/" : undefined,
      disallow: isProduction ? ["/studio"] : "/"
    },
    sitemap: `${siteConfig.url}/sitemap.xml`
  };
}
