export const siteConfig = {
  name: "Hire Kader",
  owner: "Md Abdul Kader",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.hirekader.com",
  description:
    "Google Ads management for home service businesses in the US, UK and Australia, built around booked jobs, not clicks.",
  linkedin: "https://linkedin.com/in/abdul-kader-ppc"
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
