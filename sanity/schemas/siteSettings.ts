import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "brand", title: "Brand" },
    { name: "contact", title: "Contact" },
    { name: "social", title: "Social" },
    { name: "seo", title: "SEO" }
  ],
  fields: [
    defineField({ name: "siteName", title: "Site name", type: "string", group: "brand", validation: (rule) => rule.required() }),
    defineField({ name: "logo", title: "Logo", type: "image", group: "brand", options: { hotspot: true } }),
    defineField({ name: "favicon", title: "Favicon", type: "image", group: "brand", options: { hotspot: true } }),
    defineField({ name: "email", title: "Email", type: "email", group: "contact", initialValue: "hello@hirekader.com" }),
    defineField({ name: "whatsapp", title: "WhatsApp", type: "string", group: "contact", initialValue: "+8801941171135" }),
    defineField({ name: "phone", title: "Phone", type: "string", group: "contact" }),
    defineField({ name: "location", title: "Location", type: "string", group: "contact" }),
    defineField({ name: "timezone", title: "Timezone", type: "string", group: "contact", initialValue: "GMT+6 · US/UK/AU hours" }),
    defineField({ name: "turnaround", title: "Turnaround", type: "string", group: "contact", initialValue: "Within 48h" }),
    defineField({ name: "linkedin", title: "LinkedIn", type: "url", group: "social" }),
    defineField({ name: "facebook", title: "Facebook", type: "url", group: "social" }),
    defineField({ name: "instagram", title: "Instagram", type: "url", group: "social" }),
    defineField({ name: "youtube", title: "YouTube", type: "url", group: "social" }),
    defineField({ name: "defaultSeo", title: "Default SEO", type: "seo", group: "seo" }),
    defineField({ name: "footerCopyright", title: "Footer copyright", type: "string", group: "brand" })
  ],
  preview: {
    select: {
      title: "siteName",
      subtitle: "email"
    }
  }
});
