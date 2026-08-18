export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  siteName,
  logo,
  favicon,
  email,
  whatsapp,
  phone,
  location,
  timezone,
  turnaround,
  linkedin,
  facebook,
  instagram,
  youtube,
  defaultSeo,
  footerCopyright
}`;

export const HOME_PAGE_QUERY = `*[_type == "homePage"][0] {
  title,
  heroBadge,
  heroHeading,
  heroHighlightedText,
  heroDescription,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  proofMetrics,
  servicesHeading,
  servicesDescription,
  portfolioHeading,
  testimonialsHeading,
  ctaHeading,
  ctaDescription,
  audit,
  seo
}`;

export const HOME_AUDIT_QUERY = `{
  "homePage": *[_type == "homePage"][0] {
    audit
  },
  "siteSettings": *[_type == "siteSettings"][0] {
    email,
    whatsapp,
    turnaround,
    timezone
  }
}`;

export const NAVIGATION_QUERY = `*[_type == "navigation"][0] {
  title,
  items[] {
    label,
    href
  }
}`;

export const SERVICES_QUERY = `*[_type == "service" && defined(slug.current)] | order(title asc) {
  _id,
  title,
  "slug": slug.current,
  shortDescription,
  heroHeading,
  heroDescription,
  featuredImage,
  featuredImageAlt,
  seo
}`;

export const SERVICE_QUERY = `*[_type == "service" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  shortDescription,
  heroHeading,
  heroDescription,
  fullContent,
  icon,
  featuredImage,
  featuredImageAlt,
  benefits,
  process,
  faqs[]->,
  ctaLabel,
  ctaHref,
  seo
}`;

export const BLOG_POSTS_QUERY = `*[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  featuredImage,
  featuredImageAlt,
  author,
  publishedAt,
  updatedAt,
  readTime,
  tags,
  category->{
    title,
    "slug": slug.current
  },
  seo
}`;

export const BLOG_POST_QUERY = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  featuredImage,
  featuredImageAlt,
  author,
  publishedAt,
  updatedAt,
  readTime,
  tags,
  category->{
    title,
    "slug": slug.current
  },
  body,
  seo
}`;

export const PORTFOLIO_QUERY = `*[_type == "portfolioProject" && defined(slug.current)] | order(projectName asc) {
  _id,
  projectName,
  "slug": slug.current,
  clientType,
  industry,
  challenge,
  results,
  metrics,
  featuredImage,
  featuredImageAlt,
  seo
}`;

export const PORTFOLIO_PROJECT_QUERY = `*[_type == "portfolioProject" && slug.current == $slug][0] {
  _id,
  projectName,
  "slug": slug.current,
  clientType,
  industry,
  challenge,
  strategy,
  workCompleted,
  results,
  metrics,
  featuredImage,
  featuredImageAlt,
  gallery,
  testimonial->,
  ctaLabel,
  ctaHref,
  seo
}`;

export const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(name asc) {
  _id,
  name,
  company,
  role,
  testimonial,
  photo,
  service->
}`;

export const FAQS_QUERY = `*[_type == "faq"] | order(category asc, question asc) {
  _id,
  question,
  answer,
  category
}`;

export const siteSettingsQuery = SITE_SETTINGS_QUERY;
export const blogPostsQuery = BLOG_POSTS_QUERY;
export const blogPostBySlugQuery = BLOG_POST_QUERY;
