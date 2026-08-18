import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("HIRE KADER CMS")
    .items([
      S.listItem()
        .title("Website")
        .child(
          S.list()
            .title("Website")
            .items([
              S.listItem().title("Homepage").schemaType("homePage").child(S.document().schemaType("homePage").documentId("homePage")),
              S.listItem().title("Site Settings").schemaType("siteSettings").child(S.document().schemaType("siteSettings").documentId("siteSettings")),
              S.listItem().title("Navigation").schemaType("navigation").child(S.document().schemaType("navigation").documentId("navigation"))
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Content")
        .child(
          S.list()
            .title("Content")
            .items([
              S.documentTypeListItem("service").title("Services"),
              S.documentTypeListItem("portfolioProject").title("Portfolio"),
              S.documentTypeListItem("blogPost").title("Blog Posts"),
              S.documentTypeListItem("testimonial").title("Testimonials"),
              S.documentTypeListItem("faq").title("FAQs"),
              S.documentTypeListItem("blogCategory").title("Blog Categories")
            ])
        ),
      S.divider(),
      S.documentTypeListItem("footer").title("Footer"),
      S.documentTypeListItem("faqGroup").title("FAQ Groups")
    ]);
