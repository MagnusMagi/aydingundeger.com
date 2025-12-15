"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Check, Copy, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ScheduleCall } from "@/components/schedule-call";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
    const [copied, setCopied] = useState(false);

    const containerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(contentRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none reverse",
            },
            scale: 0.95,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out"
        });
    }, { scope: containerRef });

    const copyEmail = () => {
        navigator.clipboard.writeText("hello@aydingundeger.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" ref={containerRef} className="flex min-h-screen w-full flex-col justify-center px-4 text-foreground md:px-6">
            <div ref={contentRef} className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Let's Work Together
                </h2>
                <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                    Currently open to new opportunities. Whether you have a question or just want to say hi,
                    I'll try my best to get back to you!
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                    <Button
                        size="lg"
                        className="bg-fresh-sky-600 text-white hover:bg-fresh-sky-700"
                        asChild
                    >
                        <Link href="mailto:hello@aydingundeger.com">
                            <Mail className="mr-2 h-4 w-4" />
                            Say Hello
                        </Link>
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className={cn(
                            "border-ocean-deep-200 bg-transparent text-foreground hover:bg-ocean-deep-100 dark:border-ocean-deep-700 dark:text-ocean-deep-200 dark:hover:bg-ocean-deep-800 dark:hover:text-white",
                            "focus-visible:ring-fresh-sky-500",
                            copied && "border-green-500 text-green-500"
                        )}
                        onClick={copyEmail}
                    >
                        {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                        {copied ? "Copied!" : "Copy Email"}
                    </Button>

                    <ScheduleCall />
                </div>

                <div className="mt-12 flex gap-6">
                    <Link href="https://github.com" target="_blank" className="text-muted-foreground transition-colors hover:text-foreground">
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground transition-colors hover:text-foreground">
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="https://twitter.com" target="_blank" className="text-muted-foreground transition-colors hover:text-foreground">
                        <Twitter className="h-6 w-6" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                </div>

                <p className="mt-8 text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Aydin Gundeger. All rights reserved.
                </p>
            </div>
        </section>
    );
}
