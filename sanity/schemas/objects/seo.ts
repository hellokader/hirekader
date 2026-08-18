import { defineField, defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta title",
      type: "string",
      validation: (rule) => rule.max(60).warning("Aim for 60 characters or fewer.")
    }),
    defineField({
      name: "metaDescription",
      title: "Meta description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.max(160).warning("Aim for 160 characters or fewer.")
    }),
    defineField({ name: "canonicalUrl", title: "Canonical URL", type: "url" }),
    defineField({ name: "ogTitle", title: "Open Graph title", type: "string" }),
    defineField({ name: "ogDescription", title: "Open Graph description", type: "text", rows: 3 }),
    defineField({ name: "ogImage", title: "Open Graph image", type: "image", options: { hotspot: true } }),
    defineField({ name: "noIndex", title: "No index", type: "boolean", initialValue: false }),
    defineField({ name: "noFollow", title: "No follow", type: "boolean", initialValue: false })
  ]
});
