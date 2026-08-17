import type { Metadata } from "next";
import { LegacyFrame } from "@/components/legacy/LegacyFrame";
import { absoluteUrl } from "@/lib/site";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "About Md Abdul Kader",
  description: "About Md Abdul Kader, Google Ads specialist for home service businesses in the US, UK and Australia.",
  alternates: {
    canonical: absoluteUrl(routes.about)
  }
};

export default function AboutPage() {
  return <LegacyFrame title="About Md Abdul Kader" src="/legacy-direct/Kader%20-%20Redesign%20(hirekader).html#about" />;
}
