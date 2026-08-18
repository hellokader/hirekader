import type { LucideIcon } from "lucide-react";
import { AlertTriangle, BarChart3, Filter, MapPin, MousePointerClick, PhoneCall } from "lucide-react";
import { blogPosts as fallbackBlogPosts, categoryToSlug } from "@/data/site-content";
import { hasSanityEnv } from "@/sanity/env";
import { client } from "@/sanity/lib/client";
import { BLOG_POST_QUERY, BLOG_POSTS_QUERY } from "@/sanity/lib/queries";

export type BlogPostContentBlock = {
  _type?: string;
  style?: string;
  listItem?: string;
  children?: Array<{
    _type?: string;
    text?: string;
    marks?: string[];
  }>;
};

export type BlogPost = {
  _id?: string;
  slug: string;
  title: string;
  shortTitle: string;
  excerpt: string;
  description: string;
  category: string;
  date: string;
  displayDate: string;
  updated: string | null;
  readTime: string;
  iconName: string;
  body?: BlogPostContentBlock[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    canonicalUrl?: string;
    ogTitle?: string;
    ogDescription?: string;
    noIndex?: boolean;
    noFollow?: boolean;
  };
};

type SanityBlogPost = {
  _id?: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  featuredImage?: unknown;
  featuredImageAlt?: string;
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
  readTime?: string;
  tags?: string[];
  category?: {
    title?: string;
    slug?: string;
  };
  body?: BlogPostContentBlock[];
  seo?: BlogPost["seo"];
};

const iconByCategory: Record<string, string> = {
  "Google Ads": "filter",
  Tracking: "phone-call",
  "Landing pages": "mouse-pointer-click",
  "Local SEO": "map-pin"
};

const iconComponents: Record<string, LucideIcon> = {
  "alert-triangle": AlertTriangle,
  "bar-chart-3": BarChart3,
  filter: Filter,
  "map-pin": MapPin,
  "mouse-pointer-click": MousePointerClick,
  "phone-call": PhoneCall
};

export async function getBlogPosts() {
  const sanityPosts = await fetchSanityBlogPosts();
  return sanityPosts.length > 0 ? sanityPosts : getFallbackBlogPosts();
}

export async function getBlogPost(slug: string) {
  const sanityPost = await fetchSanityBlogPost(slug);
  return sanityPost || getFallbackBlogPosts().find((post) => post.slug === slug) || null;
}

export function getFallbackBlogPosts(): BlogPost[] {
  return fallbackBlogPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
    shortTitle: post.shortTitle,
    excerpt: post.excerpt,
    description: post.description,
    category: post.category,
    date: post.date,
    displayDate: post.displayDate,
    updated: post.updated,
    readTime: post.readTime,
    iconName: iconByCategory[post.category] || "phone-call"
  }));
}

export function getPostIconComponent(post: BlogPost) {
  return iconComponents[post.iconName] || PhoneCall;
}

export function getBlogCategories(posts: BlogPost[]) {
  const categories = posts.map((post) => post.category).filter(Boolean);
  return ["All", ...Array.from(new Set(categories))];
}

export function getBlogCategorySlug(category: string) {
  return categoryToSlug(category);
}

async function fetchSanityBlogPosts(): Promise<BlogPost[]> {
  if (!hasSanityEnv) {
    return [];
  }

  try {
    const posts = await client.fetch<SanityBlogPost[]>(
      BLOG_POSTS_QUERY,
      {},
      {
        next: {
          revalidate: 60,
          tags: ["blogPost"]
        }
      }
    );

    return posts.map(normalizeSanityPost).filter(Boolean) as BlogPost[];
  } catch {
    return [];
  }
}

async function fetchSanityBlogPost(slug: string): Promise<BlogPost | null> {
  if (!hasSanityEnv) {
    return null;
  }

  try {
    const post = await client.fetch<SanityBlogPost | null>(
      BLOG_POST_QUERY,
      { slug },
      {
        next: {
          revalidate: 60,
          tags: ["blogPost", `blogPost:${slug}`]
        }
      }
    );

    return post ? normalizeSanityPost(post) : null;
  } catch {
    return null;
  }
}

function normalizeSanityPost(post: SanityBlogPost): BlogPost | null {
  if (!post.title || !post.slug) {
    return null;
  }

  const category = post.category?.title || "Google Ads";
  const date = post.publishedAt ? post.publishedAt.slice(0, 10) : new Date().toISOString().slice(0, 10);
  const description = post.seo?.metaDescription || post.excerpt || post.title;

  return {
    _id: post._id,
    slug: post.slug,
    title: post.title,
    shortTitle: post.title,
    excerpt: post.excerpt || description,
    description,
    category,
    date,
    displayDate: formatDisplayDate(date),
    updated: post.updatedAt ? post.updatedAt.slice(0, 10) : null,
    readTime: post.readTime || "5 min read",
    iconName: iconByCategory[category] || "phone-call",
    body: post.body,
    seo: post.seo
  };
}

function formatDisplayDate(date: string) {
  const parsed = new Date(`${date}T00:00:00Z`);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    timeZone: "UTC"
  }).format(parsed);
}
