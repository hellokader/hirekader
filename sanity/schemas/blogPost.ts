import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  groups: [
    { name: "content", title: "Content" },
    { name: "media", title: "Media" },
    { name: "meta", title: "Meta" },
    { name: "seo", title: "SEO" }
  ],
  fields: [
    defineField({ name: "title", title: "Title", type: "string", group: "content", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", group: "content", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3, group: "content", validation: (rule) => rule.required() }),
    defineField({ name: "featuredImage", title: "Featured image", type: "image", group: "media", options: { hotspot: true } }),
    defineField({ name: "featuredImageAlt", title: "Featured image alt text", type: "string", group: "media" }),
    defineField({ name: "category", title: "Category", type: "reference", group: "meta", to: [{ type: "blogCategory" }] }),
    defineField({ name: "tags", title: "Tags", type: "array", group: "meta", of: [{ type: "string" }] }),
    defineField({ name: "author", title: "Author", type: "string", group: "meta", initialValue: "Abdul Kader" }),
    defineField({ name: "publishedAt", title: "Published at", type: "datetime", group: "meta" }),
    defineField({ name: "updatedAt", title: "Updated at", type: "datetime", group: "meta" }),
    defineField({ name: "readTime", title: "Read time", type: "string", group: "meta" }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      group: "content",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }]
    }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
      media: "featuredImage"
    }
  }
});
