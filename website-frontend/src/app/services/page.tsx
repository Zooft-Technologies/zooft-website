import type { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/data/content";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Zooft Technologies offers custom software development, cybersecurity solutions, cloud infrastructure, and IT consulting services in Uganda and East Africa.",
  openGraph: {
    title: "Our Services | Zooft Technologies",
    description:
      "Custom software development, cybersecurity, cloud infrastructure, and IT consulting services in Uganda.",
    url: "https://zoofttechnologies.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-zooft-primary to-zooft-dark text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-zooft-light">Services</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to drive your business
            forward
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service) => (
              <Card
                key={service.id}
                className="hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-zooft-light flex items-center justify-center text-3xl mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-zooft-primary">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-lg text-gray-700">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-zooft-primary mb-3">
                        Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-600"
                          >
                            <span className="text-zooft-primary mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-zooft-primary mb-3">
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-600"
                          >
                            <span className="text-zooft-secondary mr-2">★</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="inline-block bg-zooft-primary text-white px-6 py-3 rounded-lg hover:bg-zooft-dark transition-colors"
                    >
                      Get Started
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-zooft-primary">Process</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business needs and objectives" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap and architecture" },
              { step: "03", title: "Development", description: "Building your solution with agile methodology" },
              { step: "04", title: "Deployment", description: "Launching and supporting your new system" },
            ].map((process, index) => (
              <Card key={index} className="text-center relative">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-zooft-primary text-white mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                    {process.step}
                  </div>
                  <CardTitle className="text-xl text-zooft-primary">
                    {process.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{process.description}</p>
                </CardContent>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-zooft-light"></div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies We <span className="text-zooft-primary">Use</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Cutting-edge tools and frameworks to build robust solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React", "Node.js", "Python", "Java", "Angular", "Vue.js",
              "AWS", "Docker", "MongoDB", "PostgreSQL", "Firebase", "TypeScript",
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-zooft-primary font-bold">
                    {tech.charAt(0)}
                  </span>
                </div>
                <div className="text-sm font-medium text-gray-700">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-zooft-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and how our services can help you
            achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-zooft-primary font-medium px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
