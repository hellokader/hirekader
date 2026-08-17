export const routes = {
  home: "/",
  portfolio: "/#results",
  about: "/About",
  services: "/Services",
  contact: "/Contact",
  blog: "/Blog",
  audit: "/#audit",
  faq: "/#faq",
  call: "/Contact",
  blogPost: (slug: string) => `/Blog/${slug}`,
  service: (slug: string) => `/Services/${slug}`
} as const;

export const serviceRoutes = [
  {
    slug: "google-ads",
    title: "Google Ads Management",
    description: "Google Ads campaign structure, search term cleanup, tracking and weekly optimization for booked jobs."
  },
  {
    slug: "local-services-ads",
    title: "Local Services Ads",
    description: "Local Services Ads setup and optimization for home service companies that need qualified calls."
  },
  {
    slug: "call-form-tracking",
    title: "Call & Form Tracking",
    description: "Tracking setup for calls, forms and booked-job visibility before budget decisions are made."
  },
  {
    slug: "landing-page-fixes",
    title: "Landing Page Fixes",
    description: "Phone-first landing page improvements that help paid traffic turn into real conversations."
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    description: "Local search and service-area visibility support for home service lead generation."
  },
  {
    slug: "google-business-profile",
    title: "Google Business Profile",
    description: "Google Business Profile direction for local businesses that need stronger map visibility."
  }
] as const;

export function getServiceRoute(slug: string) {
  return serviceRoutes.find((service) => service.slug === slug);
}
