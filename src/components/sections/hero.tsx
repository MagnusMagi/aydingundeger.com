"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const socialRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(contentRef.current, {
            y: 50,
            autoAlpha: 0,
            duration: 1,
            delay: 0.2,
        })
            .from(socialRef.current, {
                y: 20,
                autoAlpha: 0,
                duration: 0.6,
            }, "-=0.4");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="min-h-screen w-full relative overflow-hidden flex items-center justify-center py-20 px-4 md:px-12 lg:px-24">

            {/* Ambient Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fresh-sky-500/10 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-tropical-teal-500/10 rounded-full blur-[100px] -z-10 animate-pulse delay-1000" />

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <div ref={contentRef} className="text-center lg:text-left space-y-8">
                    <h2 className="text-sm md:text-base font-bold tracking-widest text-fresh-sky-600 uppercase">
                        Senior Full Stack Developer
                    </h2>
                    <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                        Building digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fresh-sky-600 to-tropical-teal-600">
                            experiences
                        </span> that matter.
                    </h1>
                    <p ref={textRef} className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        I specialize in building scalable, high-performance web applications
                        with modern technologies. Let's turn your vision into reality.
                    </p>

                    <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <Link
                            href="/projects"
                            className="px-8 py-4 rounded-full bg-ocean-deep-900 dark:bg-ocean-deep-50 text-ocean-deep-50 dark:text-ocean-deep-950 font-bold hover:scale-105 hover:shadow-lg hover:shadow-fresh-sky-500/20 transition-all duration-300 flex items-center justify-center"
                        >
                            View My Work <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                        <Link
                            href="/cv"
                            className="px-8 py-4 rounded-full border border-ocean-deep-200 dark:border-ocean-deep-800 text-ocean-deep-900 dark:text-ocean-deep-50 font-medium hover:bg-ocean-deep-50 dark:hover:bg-ocean-deep-900 transition-all duration-300 flex items-center justify-center"
                        >
                            <Download className="mr-2 h-4 w-4" /> Download CV
                        </Link>
                    </div>

                    <div ref={socialRef} className="flex gap-6 justify-center lg:justify-start text-ocean-deep-400">
                        <Link
                            href="https://github.com"
                            target="_blank"
                            className="transition-colors hover:text-ocean-deep-900 dark:hover:text-ocean-deep-50"
                        >
                            <Github className="h-6 w-6" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link
                            href="https://linkedin.com"
                            target="_blank"
                            className="transition-colors hover:text-ocean-deep-900 dark:hover:text-ocean-deep-50"
                        >
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link
                            href="mailto:hello@aydingundeger.com"
                            className="transition-colors hover:text-ocean-deep-900 dark:hover:text-ocean-deep-50"
                        >
                            <Mail className="h-6 w-6" />
                            <span className="sr-only">Email</span>
                        </Link>
                    </div>
                </div>

                {/* Hero Visual Placeholder - Right Side */}
                <div className="hidden lg:block relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-fresh-sky-500/20 to-tropical-teal-500/20 rounded-full blur-3xl animate-pulse" />
                    {/* You could add a 3D spline or image here later */}
                </div>

            </div>
        </section>
    );
}
