import { Projects } from "@/components/sections/projects";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "Showcase of selected projects and case studies developed by Aydin Gundeger.",
};

export default function ProjectsPage() {
    return <Projects />;
}
