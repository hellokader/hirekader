import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Homepage",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "proof", title: "Trust / Proof" },
    { name: "sections", title: "Sections" },
    { name: "audit", title: "Audit Section" },
    { name: "seo", title: "SEO" }
  ],
  fields: [
    defineField({ name: "title", title: "CMS title", type: "string", initialValue: "Homepage", validation: (rule) => rule.required() }),
    defineField({ name: "heroBadge", title: "Hero badge", type: "string", group: "hero" }),
    defineField({ name: "heroHeading", title: "Hero heading", type: "text", rows: 2, group: "hero" }),
    defineField({ name: "heroHighlightedText", title: "Highlighted heading text", type: "string", group: "hero" }),
    defineField({ name: "heroDescription", title: "Hero description", type: "text", rows: 4, group: "hero" }),
    defineField({ name: "primaryCtaLabel", title: "Primary CTA label", type: "string", group: "hero" }),
    defineField({ name: "primaryCtaHref", title: "Primary CTA destination", type: "string", group: "hero" }),
    defineField({ name: "secondaryCtaLabel", title: "Secondary CTA label", type: "string", group: "hero" }),
    defineField({ name: "secondaryCtaHref", title: "Secondary CTA destination", type: "string", group: "hero" }),
    defineField({
      name: "proofMetrics",
      title: "Proof metrics",
      type: "array",
      group: "proof",
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
    defineField({ name: "servicesHeading", title: "Services heading", type: "string", group: "sections" }),
    defineField({ name: "servicesDescription", title: "Services description", type: "text", rows: 3, group: "sections" }),
    defineField({ name: "portfolioHeading", title: "Portfolio heading", type: "string", group: "sections" }),
    defineField({ name: "testimonialsHeading", title: "Testimonials heading", type: "string", group: "sections" }),
    defineField({ name: "ctaHeading", title: "CTA heading", type: "string", group: "sections" }),
    defineField({ name: "ctaDescription", title: "CTA description", type: "text", rows: 3, group: "sections" }),
    defineField({
      name: "audit",
      title: "Audit section",
      type: "object",
      group: "audit",
      fields: [
        { name: "heading", title: "Heading", type: "string", initialValue: "Get a free Google Ads audit." },
        {
          name: "description",
          title: "Description",
          type: "text",
          rows: 4,
          initialValue:
            "Send me your details and, if you're already running ads, view access. I'll send back a plain-English breakdown of what's working, what's wasting money and what I'd change first. If ads don't make sense for your area, I'll tell you that too."
        },
        { name: "email", title: "Direct email", type: "email", initialValue: "hello@hirekader.com" },
        { name: "whatsapp", title: "WhatsApp", type: "string", initialValue: "+8801941171135" },
        { name: "turnaround", title: "Turnaround", type: "string", initialValue: "Within 48h" },
        { name: "timezone", title: "Timezone", type: "string", initialValue: "GMT+6 · US/UK/AU hours" }
      ]
    }),
    defineField({ name: "seo", title: "SEO", type: "seo", group: "seo" })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "audit.email"
    }
  }
});
