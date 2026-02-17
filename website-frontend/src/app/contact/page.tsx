import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Zooft Technologies. Contact us for custom software development, cybersecurity, cloud solutions, and IT consulting. Based in Nakawa-Kampala, Uganda.",
  openGraph: {
    title: "Contact Us | Zooft Technologies",
    description:
      "Reach out to Zooft Technologies for innovative technology solutions. Located in Nakawa-Kampala, Uganda.",
    url: "https://zoofttechnologies.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
