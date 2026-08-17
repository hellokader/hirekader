import Link from "next/link";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import { categoryToSlug } from "@/data/site-content";
import { routes } from "@/lib/routes";

type BlogCardProps = {
  post: {
    slug: string;
    shortTitle: string;
    excerpt: string;
    category: string;
    displayDate: string;
    icon: ComponentType<LucideProps>;
  };
  headingLevel?: "h2" | "h4";
};

export function BlogCard({ post, headingLevel = "h2" }: BlogCardProps) {
  const Icon = post.icon;
  const Heading = headingLevel;

  return (
    <Link className="post" data-cat={categoryToSlug(post.category)} href={routes.blogPost(post.slug)}>
      <div className="cover">
        <Icon aria-hidden="true" />
      </div>
      <div className="meta">
        <span className="cat">{post.category}</span>
        <span className="pdate">{post.displayDate}</span>
      </div>
      <Heading>{post.shortTitle}</Heading>
      <p>{post.excerpt}</p>
    </Link>
  );
}
