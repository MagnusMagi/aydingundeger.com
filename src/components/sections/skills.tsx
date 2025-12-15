"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Database, Wrench } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skillsData = {
    Core: {
        icon: Code2,
        color: "text-fresh-sky-600",
        skills: ["React", "Next.js", "TypeScript", "Node.js", "Go"]
    },
    Styling: {
        icon: Palette,
        color: "text-tropical-teal-600",
        skills: ["Tailwind CSS", "Framer Motion", "GSAP", "SCSS", "Shadcn UI"]
    },
    Backend: {
        icon: Database,
        color: "text-tropical-teal-500",
        skills: ["PostgreSQL", "Prisma", "Redis", "Docker", "AWS"]
    },
    Tools: {
        icon: Wrench,
        color: "text-pumpkin-spice-500",
        skills: ["Git", "Figma", "Jest", "Cypress", "Vercel"]
    },
};

export function Skills() {
    const containerRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        const title = headerRef.current;
        const cards = cardsRef.current.filter(Boolean); // Filter out nulls

        if (!title || cards.length === 0) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                toggleActions: "play none none none", // Don't reverse, keep visible
                markers: false,
            }
        });

        tl.fromTo(title, {
            y: 30,
            autoAlpha: 0,
        }, {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power3.out"
        })
            .fromTo(cards, {
                y: 50,
                autoAlpha: 0,
            }, {
                y: 0,
                autoAlpha: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.out(1.7)"
            }, "-=0.5");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="min-h-screen w-full relative overflow-hidden flex flex-col justify-center py-20 px-4 md:px-12 lg:px-24">

            {/* Ambient Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-fresh-sky-500/10 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-tropical-teal-500/10 rounded-full blur-[100px] -z-10 animate-pulse delay-700" />

            <div ref={headerRef} className="text-center mb-16 relative z-10">
                <h2 className="text-sm font-bold tracking-widest text-fresh-sky-600 uppercase mb-4">My Toolkit</h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                    Technical Arsenal
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    A curated stack of technologies I use to build scalable, high-performance web applications.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full relative z-10">
                {Object.entries(skillsData).map(([category, data], index) => {
                    const Icon = data.icon;
                    return (
                        <div
                            key={category}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            className="group p-8 rounded-3xl bg-white/5 dark:bg-black/20 backdrop-blur-xl border border-white/10 dark:border-white/5 hover:border-fresh-sky-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-fresh-sky-500/10"
                        >
                            <div className={`mb-6 p-3 rounded-2xl bg-white/5 w-fit ${data.color}`}>
                                <Icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-bold mb-6 text-foreground">{category}</h3>

                            <div className="flex flex-wrap gap-2">
                                {data.skills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="secondary"
                                        className="bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 transition-colors px-3 py-1 text-sm font-medium"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
