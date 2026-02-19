import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Zooft Technologies for custom software development, mobile apps, data analytics, IT consultancy, and developer training. Based in Nakawa, Kampala, Uganda.",
  openGraph: {
    title: "Contact Us | Zooft Technologies",
    description:
      "Reach out to Zooft Technologies for secure, AI-powered software solutions. Located in Nakawa, Kampala, Uganda.",
    url: "https://zoofttechnologies.com/contact",
  },
  alternates: {
    canonical: "https://zoofttechnologies.com/contact",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "Organization",
    name: "Zooft Technologies",
    url: "https://zoofttechnologies.com",
    telephone: "+256773252651",
    email: "contact@zoofttechnologies.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nakawa",
      addressLocality: "Kampala",
      addressCountry: "UG",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactPageContent />
    </>
  );
}
