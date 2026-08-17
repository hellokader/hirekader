import { defineField, defineType } from "sanity";

export const faqGroup = defineType({
  name: "faqGroup",
  title: "FAQ Group",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "items",
      title: "Questions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", title: "Question", type: "string" },
            { name: "answer", title: "Answer", type: "text", rows: 4 }
          ]
        }
      ]
    })
  ]
});
