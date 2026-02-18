import type { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { companyInfo, teamMembers } from "@/data/content";
import ImageWithFallback from "@/components/ImageWithFallback";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Zooft Technologies - our mission, vision, values, and the passionate team behind innovative technology solutions",
  openGraph: {
    title: "About Us | Zooft Technologies",
    description:
      "Learn about Zooft Technologies - our mission, vision, values, and the passionate team behind innovative technology solutions in Uganda.",
    url: "https://zoofttechnologies.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-zooft-primary to-zooft-dark text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-zooft-light">Zooft Technologies</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            {companyInfo.description}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-l-4 border-zooft-primary">
              <CardHeader>
                <CardTitle className="text-2xl text-zooft-primary">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {companyInfo.mission}
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-zooft-secondary">
              <CardHeader>
                <CardTitle className="text-2xl text-zooft-secondary">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {companyInfo.vision}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-zooft-primary">Values</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyInfo.values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-zooft-light mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-zooft-primary">
                      {index + 1}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-zooft-primary">
                    {value}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-zooft-primary">Journey</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-zooft-primary mb-2">
                5+
              </div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zooft-primary mb-2">
                50+
              </div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zooft-primary mb-2">
                30+
              </div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zooft-primary mb-2">
                10+
              </div>
              <div className="text-gray-600">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-zooft-primary">Team</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Passionate professionals dedicated to delivering exceptional
              technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card
                key={member.id}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden relative">
                    <ImageWithFallback
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl text-zooft-primary">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-zooft-secondary font-medium">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    {member.socialLinks.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        className="text-zooft-primary hover:text-zooft-dark transition-colors"
                        aria-label="LinkedIn"
                      >
                        📧
                      </a>
                    )}
                    {member.socialLinks.email && (
                      <a
                        href={`mailto:${member.socialLinks.email}`}
                        className="text-zooft-primary hover:text-zooft-dark transition-colors"
                        aria-label="Email"
                      >
                        ✉️
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-zooft-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help transform your business with
            innovative technology solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-zooft-primary font-medium px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
