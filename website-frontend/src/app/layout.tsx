import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL("https://zoofttechnologies.com"),
  title: {
    default: "Zooft Technologies | The Better Way to Do It",
    template: "%s | Zooft Technologies",
  },
  description:
    "Zooft Technologies provides innovative technology solutions including custom software development, cybersecurity, cloud infrastructure, and IT consulting in Uganda and East Africa.",
  keywords: [
    "Zooft Technologies",
    "software development Uganda",
    "cybersecurity Uganda",
    "cloud infrastructure Kampala",
    "IT consulting East Africa",
    "web development Uganda",
    "mobile app development Kampala",
    "digital transformation Uganda",
  ],
  authors: [{ name: "Zooft Technologies" }],
  creator: "Zooft Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zoofttechnologies.com",
    siteName: "Zooft Technologies",
    title: "Zooft Technologies | The Better Way to Do It",
    description:
      "Innovative technology solutions for modern businesses in Uganda and East Africa.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Zoofttech",
    title: "Zooft Technologies",
    description:
      "Innovative technology solutions for modern businesses in Uganda and East Africa.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
