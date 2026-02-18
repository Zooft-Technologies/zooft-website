import type { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/content";
import ImageWithFallback from "@/components/ImageWithFallback";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore Zooft Technologies' portfolio of successful projects including e-commerce platforms, hospital management systems, and inventory solutions across Uganda.",
  openGraph: {
    title: "Our Projects | Zooft Technologies",
    description:
      "Portfolio of successful technology solutions delivered across e-commerce, healthcare, finance, and education sectors.",
    url: "https://zoofttechnologies.com/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-zooft-primary to-zooft-dark text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-zooft-light">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Showcasing successful technology solutions we&apos;ve delivered for
            our clients
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden relative">
                  <ImageWithFallback
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zooft-primary font-medium bg-zooft-light px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(project.completedDate).toLocaleDateString()}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-zooft-primary">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-700">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-zooft-primary mb-2">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-zooft-primary text-white px-4 py-2 rounded hover:bg-zooft-dark transition-colors"
                    >
                      View Project
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Project <span className="text-zooft-primary">Categories</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We&apos;ve successfully delivered projects across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { category: "E-Commerce", count: 15, description: "Online marketplaces and retail solutions", icon: "🛒" },
              { category: "Healthcare", count: 8, description: "Medical management and patient systems", icon: "🏥" },
              { category: "Finance", count: 12, description: "Banking and financial technology solutions", icon: "💰" },
              { category: "Education", count: 10, description: "Learning management and academic systems", icon: "📚" },
            ].map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-zooft-light mx-auto mb-4 flex items-center justify-center text-3xl">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl text-zooft-primary">
                    {category.category}
                  </CardTitle>
                  <div className="text-3xl font-bold text-zooft-secondary">
                    {category.count}+
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Project <span className="text-zooft-primary">Success</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Measurable results that demonstrate our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center"><div className="text-4xl font-bold text-zooft-primary mb-2">98%</div><div className="text-gray-600">Client Satisfaction</div></div>
            <div className="text-center"><div className="text-4xl font-bold text-zooft-primary mb-2">100%</div><div className="text-gray-600">On-Time Delivery</div></div>
            <div className="text-center"><div className="text-4xl font-bold text-zooft-primary mb-2">24/7</div><div className="text-gray-600">Support Available</div></div>
            <div className="text-center"><div className="text-4xl font-bold text-zooft-primary mb-2">50+</div><div className="text-gray-600">Projects Delivered</div></div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-zooft-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Next Project
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to join our list of successful clients? Let&apos;s discuss your
            project requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-zooft-primary font-medium px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}
