import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "company", title: "Company", type: "string" }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "testimonial", title: "Testimonial", type: "text", rows: 5, validation: (rule) => rule.required() }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "service", title: "Service", type: "reference", to: [{ type: "service" }] })
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "company",
      media: "photo"
    }
  }
});
