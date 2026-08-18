import { blogCategory } from "./blogCategory";
import { blogPost } from "./blogPost";
import { faq } from "./faq";
import { faqGroup } from "./faqGroup";
import { footer } from "./footer";
import { homePage } from "./homePage";
import { navigation } from "./navigation";
import { seo } from "./objects/seo";
import { portfolioProject } from "./portfolioProject";
import { service } from "./service";
import { siteSettings } from "./siteSettings";
import { testimonial } from "./testimonial";

export const schemaTypes = [
  seo,
  siteSettings,
  navigation,
  homePage,
  footer,
  service,
  portfolioProject,
  testimonial,
  faq,
  faqGroup,
  blogCategory,
  blogPost
];
