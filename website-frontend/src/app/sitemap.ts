import type { MetadataRoute } from "next";
import { services } from "@/data/content";
import { roleSlugs } from "@/app/careers/roles-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zoofttechnologies.com";

  const staticRoutes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/careers", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const serviceRoutes = services.map((service) => ({
    path: `/services/${service.id}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const careerRoutes = roleSlugs.map((role) => ({
    path: `/careers/${role.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...careerRoutes].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
