import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteName", title: "Site name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "logo", title: "Logo", type: "image", options: { hotspot: true } }),
    defineField({ name: "email", title: "Email", type: "email" }),
    defineField({ name: "whatsapp", title: "WhatsApp", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "timezone", title: "Timezone", type: "string" }),
    defineField({ name: "linkedin", title: "LinkedIn", type: "url" }),
    defineField({ name: "defaultSeo", title: "Default SEO", type: "seo" }),
    defineField({ name: "footerCopyright", title: "Footer copyright", type: "string" })
  ]
});
