import { About } from "@/components/sections/about";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me",
    description: "Learn more about Aydin Gundeger's background, journey, and passion for software engineering.",
};

export default function AboutPage() {
    return <About />;
}
