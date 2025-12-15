"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { Github, Globe, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

import { projectsData } from "@/lib/projects";

export function Projects() {
    const containerRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        const title = headerRef.current;
        const cards = projectRefs.current.filter(Boolean);

        if (!title || cards.length === 0) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                end: "bottom center",
                toggleActions: "play none none none",
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
                y: 60,
                autoAlpha: 0,
                scale: 0.95,
            }, {
                y: 0,
                autoAlpha: 1,
                scale: 1,
                duration: 1.2,
                stagger: 0.15,
                ease: "expo.out"
            }, "-=0.6");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="min-h-screen w-full relative overflow-hidden flex flex-col justify-center py-20 px-4 md:px-12 lg:px-24">

            {/* Ambient Background Elements */}
            <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-fresh-sky-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-tropical-teal-500/10 rounded-full blur-[120px] -z-10 animate-pulse delay-1000" />

            <div ref={headerRef} className="mb-20 space-y-4 flex flex-col items-center text-center">
                <h2 className="text-sm font-bold tracking-widest text-fresh-sky-600 uppercase">Selected Work</h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-fresh-sky-600 to-tropical-teal-600">Projects</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    A collection of digital products where design meets engineering excellence.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        ref={(el) => { projectRefs.current[index] = el; }}
                        className={`group relative rounded-3xl overflow-hidden bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01]`}
                    >
                        {/* Image Placeholder / Gradient Overlay */}
                        <div className={`relative h-64 w-full bg-gradient-to-br ${project.color} overflow-hidden`}>
                            {/* Abstract Shapes in placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-110 transition-transform duration-700">
                                <div className="w-32 h-32 rounded-full bg-white/20 blur-2xl" />
                            </div>

                            {/* Overlay Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 transition-colors duration-300 group-hover:bg-black/10">
                                <div className="flex justify-end gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <Link
                                        href={project.links.demo}
                                        target="_blank"
                                        className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-colors"
                                    >
                                        <Globe className="w-5 h-5" />
                                    </Link>
                                    <Link
                                        href={project.links.code}
                                        target="_blank"
                                        className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 space-y-4">
                            <div>
                                <Link href={`/projects/${project.slug}`} className="block w-fit">
                                    <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-fresh-sky-500 transition-colors flex items-center gap-2">
                                        {project.title}
                                        <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                    </h3>
                                </Link>
                                <p className="text-sm font-medium text-fresh-sky-600 dark:text-fresh-sky-400">
                                    {project.subtitle}
                                </p>
                            </div>

                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-4">
                                {project.tags.map((tag) => (
                                    <Badge
                                        key={tag}
                                        variant="secondary"
                                        className="bg-white/5 hover:bg-white/10 dark:bg-white/5 dark:hover:bg-white/10 transition-colors"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
