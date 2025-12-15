import { Experience } from "@/components/sections/experience";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Experience",
    description: "Explore Aydin Gundeger's professional experience and career timeline in software development.",
};

export default function ExperiencePage() {
    return <Experience />;
}
