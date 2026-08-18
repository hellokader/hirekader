import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  groups: [
    { name: "overview", title: "Overview" },
    { name: "content", title: "Content" },
    { name: "media", title: "Media" },
    { name: "seo", title: "SEO" }
  ],
  fields: [
    defineField({ name: "title", title: "Title", type: "string", group: "overview", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", group: "overview", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "shortDescription", title: "Short description", type: "text", rows: 3, group: "overview" }),
    defineField({ name: "heroHeading", title: "Hero heading", type: "string", group: "content" }),
    defineField({ name: "heroDescription", title: "Hero description", type: "text", rows: 4, group: "content" }),
    defineField({ name: "fullContent", title: "Full content", type: "array", group: "content", of: [{ type: "block" }, { type: "image", options: { hotspot: true } }] }),
    defineField({ name: "icon", title: "Icon name", type: "string", group: "media" }),
    defineField({ name: "featuredImage", title: "Featured image", type: "image", group: "media", options: { hotspot: true } }),
    defineField({ name: "featuredImageAlt", title: "Featured image alt text", type: "string", group: "media" }),
    defineField({ name: "benefits", title: "Benefits", type: "array", group: "content", of: [{ type: "string" }] }),
    defineField({ name: "process", title: "Process", type: "array", group: "content", of: [{ type: "string" }] }),
    defineField({ name: "faqs", title: "FAQs", type: "array", group: "content", of: [{ type: "reference", to: [{ type: "faq" }] }] }),
    defineField({ name: "ctaLabel", title: "CTA label", type: "string", group: "content" }),
    defineField({ name: "ctaHref", title: "CTA destination", type: "string", group: "content" }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "shortDescription",
      media: "featuredImage"
    }
  }
});
