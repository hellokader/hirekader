import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { renderLegacyBlogIndex } from "@/lib/legacy-blog-html";
import { getBlogPosts } from "@/sanity/lib/blog";

export const runtime = "nodejs";
export const revalidate = 60;

export async function GET() {
  const htmlPath = path.join(process.cwd(), "public", "legacy-direct", "Blog Index.html");
  const [html, posts] = await Promise.all([readFile(htmlPath, "utf8"), getBlogPosts()]);

  return new NextResponse(renderLegacyBlogIndex(html, posts), {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300"
    }
  });
}
