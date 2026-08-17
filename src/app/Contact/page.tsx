import type { Metadata } from "next";
import { LegacyFrame } from "@/components/legacy/LegacyFrame";
import { absoluteUrl } from "@/lib/site";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Contact | Hire Kader",
  description: "Contact Md Abdul Kader for a free Google Ads audit or to book a call.",
  alternates: {
    canonical: absoluteUrl(routes.contact)
  }
};

export default function ContactPage() {
  return <LegacyFrame title="Contact Hire Kader" src="/legacy-direct/Kader%20-%20Redesign%20(hirekader).html#call" />;
}
