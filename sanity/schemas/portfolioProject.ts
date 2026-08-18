import { defineField, defineType } from "sanity";

export const portfolioProject = defineType({
  name: "portfolioProject",
  title: "Portfolio Project",
  type: "document",
  groups: [
    { name: "overview", title: "Overview" },
    { name: "story", title: "Story" },
    { name: "media", title: "Media" },
    { name: "seo", title: "SEO" }
  ],
  fields: [
    defineField({ name: "projectName", title: "Project name", type: "string", group: "overview", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", group: "overview", options: { source: "projectName" }, validation: (rule) => rule.required() }),
    defineField({ name: "clientType", title: "Client / business type", type: "string", group: "overview" }),
    defineField({ name: "industry", title: "Industry", type: "string", group: "overview" }),
    defineField({ name: "challenge", title: "Challenge", type: "text", rows: 4, group: "story" }),
    defineField({ name: "strategy", title: "Strategy", type: "text", rows: 4, group: "story" }),
    defineField({ name: "workCompleted", title: "Work completed", type: "array", group: "story", of: [{ type: "string" }] }),
    defineField({ name: "results", title: "Results", type: "text", rows: 4, group: "story" }),
    defineField({
      name: "metrics",
      title: "Metrics",
      type: "array",
      group: "story",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "value", title: "Value", type: "string" }
          ]
        }
      ]
    }),
    defineField({ name: "featuredImage", title: "Featured image", type: "image", group: "media", options: { hotspot: true } }),
    defineField({ name: "featuredImageAlt", title: "Featured image alt text", type: "string", group: "media" }),
    defineField({ name: "gallery", title: "Gallery", type: "array", group: "media", of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({ name: "testimonial", title: "Testimonial", type: "reference", group: "story", to: [{ type: "testimonial" }] }),
    defineField({ name: "ctaLabel", title: "CTA label", type: "string", group: "story" }),
    defineField({ name: "ctaHref", title: "CTA destination", type: "string", group: "story" }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" })
  ],
  preview: {
    select: {
      title: "projectName",
      subtitle: "industry",
      media: "featuredImage"
    }
  }
});
