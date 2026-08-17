import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/site-content";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/blog"];
  const posts = blogPosts.filter((post) => !post.draftOnly).map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, ...posts].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date()
  }));
}
