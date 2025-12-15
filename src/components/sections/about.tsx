"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function About() {
    const containerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                end: "bottom center",
                toggleActions: "play none none none",
            }
        });

        tl.fromTo(contentRef.current, {
            y: 50,
            autoAlpha: 0,
        }, {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power3.out",
        })
            .fromTo(imageRef.current, {
                scale: 0.8,
                autoAlpha: 0,
            }, {
                scale: 1,
                autoAlpha: 1,
                duration: 1,
                ease: "power3.out",
            }, "-=0.5")
            .fromTo(statsRef.current ? statsRef.current.children : [], {
                y: 20,
                autoAlpha: 0,
            }, {
                y: 0,
                autoAlpha: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: "back.out(1.7)",
            }, "-=0.5");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="min-h-screen w-full relative overflow-hidden flex items-center justify-center py-20 px-4 md:px-12 lg:px-24">

            {/* Ambient Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fresh-sky-500/10 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-tropical-teal-500/10 rounded-full blur-[100px] -z-10 animate-pulse delay-1000" />

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                {/* Left Column: Content */}
                <div ref={contentRef} className="lg:col-span-7 flex flex-col gap-8">
                    <div>
                        <h2 className="text-sm font-bold tracking-widest text-fresh-sky-600 uppercase mb-4">About Me</h2>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                            More than just <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fresh-sky-600 to-tropical-teal-600">
                                lines of code.
                            </span>
                        </h1>
                    </div>

                    <div className="text-lg md:text-xl text-muted-foreground space-y-6 leading-relaxed max-w-2xl">
                        <p>
                            I'm a Senior Full Stack Developer who believes that great software
                            is born at the intersection of robust engineering and intuitive design.
                            For over 6 years, I've redefined digital experiences, focusing not just on
                            functioning applications, but on creating seamless, scalable ecosystems.
                        </p>
                        <p>
                            My approach is holistic: I architect systems that are as maintainable as
                            they are performant. Whether it's optimizing database queries or
                            refining micro-interactions, I sweat the details so the user doesn't have to.
                        </p>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <Link href="/cv">
                            <button className="group relative px-8 py-3 rounded-full bg-foreground text-background font-medium overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">
                                    Download CV <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Column: Visuals & Stats */}
                <div className="lg:col-span-5 flex flex-col gap-8 relative">

                    {/* Abstract Visual Placeholder */}
                    <div ref={imageRef} className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-ocean-deep-50 to-ocean-deep-100 dark:from-ocean-deep-800 dark:to-ocean-deep-900 shadow-2xl border border-white/20">
                        {/* Abstract Geometric Shapes */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3/4 h-3/4 bg-fresh-sky-500/20 rounded-full blur-2xl animate-spin-slow" />
                            <div className="w-1/2 h-1/2 bg-tropical-teal-500/20 rounded-full blur-xl absolute animate-reverse-spin" />
                            {/* Code/Tech graphic or 3D element could go here */}
                            <div className="relative z-10 text-9xl font-bold text-foreground/5 select-none">
                                {"< />"}
                            </div>
                        </div>
                    </div>

                    {/* Floating Stats Grid */}
                    <div ref={statsRef} className="grid grid-cols-2 gap-4 relative z-10 items-center justify-center">
                        <StatCard label="Years Experience" value="6+" />
                        <StatCard label="Projects Delivered" value="50+" />
                        <StatCard label="Happy Clients" value="30+" />
                        <StatCard label="Focus Area" value="Scalability" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function StatCard({ label, value }: { label: string, value: string }) {
    return (
        <div className="p-6 rounded-2xl bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="text-3xl md:text-4xl font-bold text-fresh-sky-600 dark:text-fresh-sky-400 mb-1">{value}</div>
            <div className="text-sm font-medium text-muted-foreground">{label}</div>
        </div>
    );
}
