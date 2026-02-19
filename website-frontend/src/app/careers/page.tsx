import type { Metadata } from "next";
import CareersPageContent from "./CareersPageContent";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Zooft Technologies — a remote-first software company in Uganda. Explore open roles in marketing, design, engineering, data science, and internship programs for students and tech enthusiasts.",
  openGraph: {
    title: "Careers | Zooft Technologies",
    description:
      "Work remotely with a growing tech team in East Africa. Explore roles and internship opportunities at Zooft Technologies.",
    url: "https://zoofttechnologies.com/careers",
  },
  alternates: {
    canonical: "https://zoofttechnologies.com/careers",
  },
};

const careersJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Careers at Zooft Technologies",
  description:
    "Explore career opportunities and internships at Zooft Technologies, a remote-first software company based in Uganda.",
  url: "https://zoofttechnologies.com/careers",
  mainEntity: {
    "@type": "Organization",
    name: "Zooft Technologies",
    url: "https://zoofttechnologies.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kampala",
      addressCountry: "UG",
    },
  },
};

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersJsonLd) }}
      />
      <CareersPageContent />
    </>
  );
}
