import type { Metadata } from "next";
import { LegacyFrame } from "@/components/legacy/LegacyFrame";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Abdul Kader | Google Ads for Home Service Businesses",
  description: siteConfig.description,
  alternates: {
    canonical: absoluteUrl("/")
  }
};

export default function HomePage() {
  return <LegacyFrame title="Hire Kader homepage" src="/legacy-direct/Kader%20-%20Redesign%20(hirekader).html" />;
}
