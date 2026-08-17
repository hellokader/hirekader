import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegacyFrame } from "@/components/legacy/LegacyFrame";
import { blogPosts } from "@/data/site-content";
import { absoluteUrl } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.filter((post) => !post.draftOnly).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug && !item.draftOnly);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: absoluteUrl(`/blog/${post.slug}`)
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated || undefined
    },
    twitter: {
      card: "summary_large_image"
    }
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug && !item.draftOnly);

  if (!post) {
    notFound();
  }

  return <LegacyFrame title={post.title} src="/legacy-direct/Blog%20Article%20Template.html" />;
}
