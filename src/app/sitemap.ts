import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { routes, serviceRoutes } from "@/lib/routes";
import { getBlogPosts } from "@/sanity/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [routes.home, routes.about, routes.services, routes.blog, routes.contact];
  const posts = (await getBlogPosts()).filter((post) => !post.seo?.noIndex).map((post) => routes.blogPost(post.slug));
  const services = serviceRoutes.map((service) => routes.service(service.slug));

  return [...staticRoutes, ...posts, ...services].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date()
  }));
}
