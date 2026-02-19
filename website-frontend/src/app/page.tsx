import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://zoofttechnologies.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zooft Technologies",
  url: "https://zoofttechnologies.com",
  logo: "/images/zooft logo.png",
  description:
    "Zooft Technologies builds secure, AI-powered software solutions — custom web and mobile apps, data analytics, IT consultancy, and developer training in Uganda and East Africa.",
  foundingDate: "2025",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nakawa",
    addressLocality: "Kampala",
    addressCountry: "UG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+256773252651",
    contactType: "customer service",
    email: "info@zoofttechnologies.com",
  },
  sameAs: [
    "https://www.linkedin.com/company/zooft-technologies",
    "https://x.com/Zoofttech",
    "https://www.instagram.com/zoofttechnologies",
    "https://www.facebook.com/profile.php?id=61575438293498",
    "https://www.youtube.com/@ZooftTechnologies",
    "https://www.tiktok.com/@zoofttechnologies",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <SolutionsSection />
      <ContactSection />
    </>
  );
}
