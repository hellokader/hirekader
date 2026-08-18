import { defineField, defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Question", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "answer", title: "Answer", type: "text", rows: 4, validation: (rule) => rule.required() }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Money & commitment", value: "money" },
          { title: "Results & timing", value: "results" },
          { title: "How we work together", value: "process" }
        ]
      }
    })
  ],
  preview: {
    select: {
      title: "question",
      subtitle: "category"
    }
  }
});
