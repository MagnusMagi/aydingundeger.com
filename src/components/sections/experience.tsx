"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
    {
        title: "Lead Frontend Engineer",
        company: "Nexus Finite",
        period: "2023 - Present",
        description: "Leading the frontend squad in re-architecting the core platform dashboard. Improved load times by 40% and implemented a comprehensive design system used across 4 sub-products.",
        skills: ["React", "Next.js", "TypeScript", "GraphQL", "Tailwind CSS"],
    },
    {
        title: "Senior Full Stack Developer",
        company: "Apex Systems",
        period: "2020 - 2023",
        description: "Developed and maintained critical microservices using Node.js and Go. Mentored junior developers and introduced automated testing pipelines that reduced bug rates by 25%.",
        skills: ["Node.js", "Go", "PostgreSQL", "Docker", "Redis"],
    },
    {
        title: "Frontend Developer",
        company: "Spark Creative",
        period: "2018 - 2020",
        description: "Collaborated with designers to deliver high-fidelity UI implementations for e-commerce clients. Specialized in responsive design and accessibility compliance (WCAG 2.1).",
        skills: ["Vue.js", "JavaScript", "SCSS", "GSAP"],
    },
];

export function Experience() {
    const containerRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none reverse",
            }
        });

        tl.from(headerRef.current, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out"
        });

        if (itemRefs.current.length > 0) {
            tl.from(itemRefs.current, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.3,
                ease: "power3.out"
            }, "-=0.2");
        }

    }, { scope: containerRef });

    return (
        <section id="experience" ref={containerRef} className="flex min-h-screen w-full flex-col justify-center py-20 px-4 md:px-6">
            <div ref={headerRef} className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tighter text-fresh-sky-600 dark:text-fresh-sky-400 sm:text-4xl md:text-5xl">
                    Experience
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    My professional journey and career highlights.
                </p>
            </div>

            <div className="mx-auto max-w-4xl space-y-8">
                {experienceData.map((exp, index) => (
                    <div
                        key={index}
                        ref={(el) => { itemRefs.current[index] = el; }}
                        className="relative border-l-2 border-ocean-deep-200 pl-8 pb-8 last:pb-0 dark:border-ocean-deep-800"
                    >
                        <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-fresh-sky-600 ring-4 ring-white dark:bg-fresh-sky-500 dark:ring-ocean-deep-950" />
                        <Card className="border-none bg-ocean-deep-50/50 shadow-sm transition-all hover:bg-ocean-deep-100/50 dark:bg-ocean-deep-900/50 dark:hover:bg-ocean-deep-800/50">
                            <CardHeader>
                                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                                    <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                                    <span className="text-sm font-medium text-muted-foreground">
                                        {exp.period}
                                    </span>
                                </div>
                                <CardDescription className="text-base font-medium text-fresh-sky-600 dark:text-fresh-sky-400">
                                    {exp.company}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                <p className="text-muted-foreground">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill) => (
                                        <Badge key={skill} variant="secondary">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
}
