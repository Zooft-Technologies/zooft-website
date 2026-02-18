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
};

export default function AboutPage() {
  return <AboutPageContent />;
}
