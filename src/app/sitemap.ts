import { MetadataRoute } from "next";
import { projectsData } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://aydingundeger.com";

    const routes = [
        "",
        "/about",
        "/experience",
        "/skills",
        "/projects",
        "/contact",
        "/cv",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    const projectRoutes = projectsData.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    return [...routes, ...projectRoutes];
}
