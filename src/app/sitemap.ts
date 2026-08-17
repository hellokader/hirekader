import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/site-content";
import { absoluteUrl } from "@/lib/site";
import { routes, serviceRoutes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [routes.home, routes.about, routes.services, routes.blog, routes.contact];
  const posts = blogPosts.map((post) => routes.blogPost(post.slug));
  const services = serviceRoutes.map((service) => routes.service(service.slug));

  return [...staticRoutes, ...posts, ...services].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date()
  }));
}
