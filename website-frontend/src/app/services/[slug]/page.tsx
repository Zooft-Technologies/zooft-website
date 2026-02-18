import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/content";
import ServiceDetailContent from "./ServiceDetailContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return {};

  return {
    title: `${service.title} | Zooft Technologies`,
    description: service.longDescription.slice(0, 160),
    openGraph: {
      title: `${service.title} | Zooft Technologies`,
      description: service.description,
      url: `https://zoofttechnologies.com/services/${service.id}`,
      type: "website",
    },
    alternates: {
      canonical: `https://zoofttechnologies.com/services/${service.id}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) notFound();

  return <ServiceDetailContent service={service} />;
}
