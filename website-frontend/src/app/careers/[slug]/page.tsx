import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RoleDetailContent from "./RoleDetailContent";
import { roleSlugs } from "../roles-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return roleSlugs.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const role = roleSlugs.find((r) => r.slug === slug);
  if (!role) return {};

  return {
    title: `${role.title} | Careers | Zooft Technologies`,
    description: role.metaDescription,
    openGraph: {
      title: `${role.title} — Careers at Zooft Technologies`,
      description: role.metaDescription,
      url: `https://zoofttechnologies.com/careers/${role.slug}`,
    },
    alternates: {
      canonical: `https://zoofttechnologies.com/careers/${role.slug}`,
    },
  };
}

export default async function RoleDetailPage({ params }: Props) {
  const { slug } = await params;
  const role = roleSlugs.find((r) => r.slug === slug);
  if (!role) notFound();

  return <RoleDetailContent slug={slug} />;
}
