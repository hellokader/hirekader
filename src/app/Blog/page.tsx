import type { Metadata } from "next";
import { LegacyFrame } from "@/components/legacy/LegacyFrame";
import { absoluteUrl } from "@/lib/site";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Blog | Google Ads notes for home service businesses",
  description:
    "Short, specific notes on Google Ads, tracking and landing pages for home service businesses. Written between accounts by the person running them, not a content team.",
  alternates: {
    canonical: absoluteUrl(routes.blog)
  }
};

export default function BlogPage() {
  return <LegacyFrame title="Hire Kader blog" src="/legacy-direct/Blog%20Index.html" />;
}
