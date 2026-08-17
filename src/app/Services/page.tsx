import type { Metadata } from "next";
import { LegacyFrame } from "@/components/legacy/LegacyFrame";
import { absoluteUrl } from "@/lib/site";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Services | Google Ads for Home Service Businesses",
  description: "Google Ads management, Local Services Ads, tracking and landing page support for home service businesses.",
  alternates: {
    canonical: absoluteUrl(routes.services)
  }
};

export default function ServicesPage() {
  return <LegacyFrame title="Hire Kader services" src="/legacy-direct/Kader%20-%20Redesign%20(hirekader).html#services" />;
}
