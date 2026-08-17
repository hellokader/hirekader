export const siteSettingsQuery = `*[_type == "siteSettings"][0]`;

export const blogPostsQuery = `*[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  updatedAt,
  category->{
    title,
    "slug": slug.current
  },
  seo
}`;

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  updatedAt,
  readTime,
  category->{
    title,
    "slug": slug.current
  },
  body,
  seo
}`;
