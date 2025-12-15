"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const socialRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        // Initial set
        gsap.set([badgeRef.current, contentRef.current, socialRef.current], {
            y: 40,
            autoAlpha: 0
        });

        // Sequence
        tl.to(badgeRef.current, {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            delay: 0.2
        })
            .to(contentRef.current, {
                y: 0,
                autoAlpha: 1,
                duration: 1.2,
                stagger: 0.1
            }, "-=0.8")
            .to(socialRef.current, {
                y: 0,
                autoAlpha: 1,
                duration: 1,
            }, "-=1");

    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center py-20 px-4 md:px-12"
        >

            {/* Background Grid & Mask */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.07] z-0 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-0 pointer-events-none" />

            {/* Ambient Glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-fresh-sky-500/20 rounded-full blur-[120px] -z-10 animate-pulse mix-blend-screen" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-tropical-teal-500/20 rounded-full blur-[120px] -z-10 animate-pulse delay-700 mix-blend-screen" />


            <div className="max-w-5xl w-full flex flex-col items-center text-center relative z-10 space-y-8 md:space-y-12">

                {/* Status Badge */}
                <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ocean-deep-50/50 dark:bg-ocean-deep-900/50 border border-ocean-deep-200 dark:border-ocean-deep-800 backdrop-blur-md shadow-sm">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fresh-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-fresh-sky-500"></span>
                    </span>
                    <span className="text-xs md:text-sm font-medium text-ocean-deep-600 dark:text-ocean-deep-300">
                        Available for new projects
                    </span>
                </div>

                {/* Main Content */}
                <div ref={contentRef} className="space-y-6 md:space-y-8">
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-foreground leading-[0.9] md:leading-[0.9]">
                        Building digital
                        <br />
                        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-fresh-sky-500 via-tropical-teal-500 to-fresh-sky-500 animate-gradient-bp bg-[length:200%_auto]">
                            experiences
                            <Sparkles className="absolute -top-4 -right-8 w-8 h-8 md:w-12 md:h-12 text-school-bus-yellow-400 animate-pulse" />
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
                        I craft scalable, high-performance web applications having <strong className="text-foreground font-medium">premium aesthetics</strong> and seamless user experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-8">
                        <Link
                            href="/projects"
                            className="group relative px-8 py-4 rounded-full bg-foreground text-background font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl hover:shadow-fresh-sky-500/10"
                        >
                            View Projects
                            <span className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 rounded-full bg-transparent border border-input text-foreground font-medium text-lg hover:bg-accent/50 hover:text-accent-foreground hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>

                {/* Social Links - Minimized & Premium */}
                <div ref={socialRef} className="pt-8 md:pt-16 flex items-center gap-8 text-muted-foreground">
                    <Link href="https://github.com/MagnusMagi" target="_blank" className="hover:text-foreground transition-colors hover:scale-110 duration-300">
                        <Github className="w-6 h-6 md:w-7 md:h-7" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" className="hover:text-foreground transition-colors hover:scale-110 duration-300">
                        <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="mailto:hello@aydingundeger.com" className="hover:text-foreground transition-colors hover:scale-110 duration-300">
                        <Mail className="w-6 h-6 md:w-7 md:h-7" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>

            </div>
        </section>
    );
}
