import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Zooft Technologies — our mission, vision, core values, and the passionate team building secure, AI-powered software solutions in Uganda and East Africa.",
  openGraph: {
    title: "About Us | Zooft Technologies",
    description:
      "Learn about Zooft Technologies — our mission, vision, core values, and the passionate team building secure, AI-powered software solutions in Uganda and East Africa.",
    url: "https://zoofttechnologies.com/about",
  },
  alternates: {
    canonical: "https://zoofttechnologies.com/about",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Organization",
    name: "Zooft Technologies",
    url: "https://zoofttechnologies.com",
    foundingDate: "2025",
    description:
      "Zooft Technologies builds secure, AI-powered software solutions for businesses in Uganda and East Africa.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nakawa",
      addressLocality: "Kampala",
      addressCountry: "UG",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 5,
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutPageContent />
    </>
  );
}
