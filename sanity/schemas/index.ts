import { blogCategory } from "./blogCategory";
import { blogPost } from "./blogPost";
import { faqGroup } from "./faqGroup";
import { footer } from "./footer";
import { navigation } from "./navigation";
import { seo } from "./objects/seo";
import { service } from "./service";
import { siteSettings } from "./siteSettings";

export const schemaTypes = [seo, siteSettings, navigation, footer, service, faqGroup, blogCategory, blogPost];
