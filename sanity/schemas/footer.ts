import { defineField, defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({ name: "blurb", title: "Blurb", type: "text", rows: 3 }),
    defineField({
      name: "columns",
      title: "Columns",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            {
              name: "links",
              title: "Links",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "label", title: "Label", type: "string" },
                    { name: "href", title: "URL", type: "string" }
                  ]
                }
              ]
            }
          ]
        }
      ]
    })
  ]
});
