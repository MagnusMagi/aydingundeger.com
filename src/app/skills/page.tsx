import { Skills } from "@/components/sections/skills";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Skills & Technologies",
    description: "A comprehensive list of technologies, languages, and frameworks in Aydin Gundeger's tech stack.",
};

export default function SkillsPage() {
    return <Skills />;
}
