import type { Metadata } from "next";
import BlogPageContent from "./BlogPageContent";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest insights, trends, and best practices in technology, cybersecurity, cloud computing, and digital transformation from Zooft Technologies.",
  openGraph: {
    title: "Blog | Zooft Technologies",
    description:
      "Tech insights, digital transformation guides, and cybersecurity best practices from Zooft Technologies.",
    url: "https://zoofttechnologies.com/blog",
  },
};

export default function BlogPage() {
  return <BlogPageContent />;
}
