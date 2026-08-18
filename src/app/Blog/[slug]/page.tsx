import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegacyFrame } from "@/components/legacy/LegacyFrame";
import { getBlogPost, getFallbackBlogPosts } from "@/sanity/lib/blog";
import { absoluteUrl } from "@/lib/site";
import { routes } from "@/lib/routes";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getFallbackBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.seo?.metaDescription || post.description,
    alternates: {
      canonical: post.seo?.canonicalUrl || absoluteUrl(routes.blogPost(post.slug))
    },
    openGraph: {
      type: "article",
      title: post.seo?.ogTitle || post.title,
      description: post.seo?.ogDescription || post.seo?.metaDescription || post.description,
      publishedTime: post.date,
      modifiedTime: post.updated || undefined
    },
    robots: {
      index: !post.seo?.noIndex,
      follow: !post.seo?.noFollow
    },
    twitter: {
      card: "summary_large_image"
    }
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return <LegacyFrame title={post.title} src={`/api/legacy-blog/${post.slug}`} />;
}
