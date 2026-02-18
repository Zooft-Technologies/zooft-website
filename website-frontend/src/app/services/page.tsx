import type { Metadata } from "next";
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

export default function ServicesPage() {
  return <ServicesPageContent />;
}
