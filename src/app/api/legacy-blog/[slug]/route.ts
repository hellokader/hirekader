import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { renderLegacyBlogArticle } from "@/lib/legacy-blog-html";
import { getBlogPost, getBlogPosts } from "@/sanity/lib/blog";

export const runtime = "nodejs";
export const revalidate = 60;

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(_request: Request, { params }: RouteContext) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return new NextResponse("Not found", { status: 404 });
  }

  const htmlPath = path.join(process.cwd(), "public", "legacy-direct", "Blog Article Template.html");
  const [html, posts] = await Promise.all([readFile(htmlPath, "utf8"), getBlogPosts()]);

  return new NextResponse(renderLegacyBlogArticle(html, post, posts), {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300"
    }
  });
}
