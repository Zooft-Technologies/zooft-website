import type { Metadata } from "next";
import { services } from "@/data/content";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Zooft Technologies offers custom software development, web and mobile apps, data analytics, IT consultancy, and developer training in Uganda and East Africa.",
  openGraph: {
    title: "Our Services | Zooft Technologies",
    description:
      "Custom software, web and mobile apps, data analytics, IT consultancy, and developer training in Uganda and East Africa.",
    url: "https://zoofttechnologies.com/services",
  },
  alternates: {
    canonical: "https://zoofttechnologies.com/services",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Zooft Technologies Services",
  description:
    "Custom software development, web and mobile applications, data analytics, IT consultancy, and developer training.",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      url: `https://zoofttechnologies.com/services/${service.id}`,
      provider: {
        "@type": "Organization",
        name: "Zooft Technologies",
      },
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesPageContent />
    </>
  );
}
