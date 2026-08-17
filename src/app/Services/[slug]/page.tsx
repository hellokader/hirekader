import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegacyFrame } from "@/components/legacy/LegacyFrame";
import { absoluteUrl } from "@/lib/site";
import { getServiceRoute, routes, serviceRoutes } from "@/lib/routes";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceRoutes.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceRoute(slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | Hire Kader`,
    description: service.description,
    alternates: {
      canonical: absoluteUrl(routes.service(service.slug))
    }
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceRoute(slug);

  if (!service) {
    notFound();
  }

  return <LegacyFrame title={service.title} src="/legacy-direct/Kader%20-%20Redesign%20(hirekader).html#services" />;
}
