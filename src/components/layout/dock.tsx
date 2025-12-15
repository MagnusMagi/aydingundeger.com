"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Home, User, Briefcase, Cpu, FolderGit2, Mail, FileText } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const dockItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: User, label: "About", href: "/about" },
    { icon: Briefcase, label: "Experience", href: "/experience" },
    { icon: Cpu, label: "Skills", href: "/skills" },
    { icon: FolderGit2, label: "Projects", href: "/projects" },
    { icon: FileText, label: "CV", href: "/cv" },
    { icon: Mail, label: "Contact", href: "/contact" },
];

export function Dock() {
    const dockRef = useRef<HTMLDivElement>(null);
    const iconsRef = useRef<(HTMLAnchorElement | null)[]>([]);

    useGSAP(() => {
        const dock = dockRef.current;
        if (!dock) return;

        const isTouch = window.matchMedia("(hover: none)").matches;

        if (isTouch) {
            // Simple scale in/out for focus if needed, or just return
            // For touch, we generally want no magnifying effect as it's confusing
            return;
        }

        const handleMouseMove = (e: MouseEvent) => {
            const mouseX = e.clientX;

            iconsRef.current.forEach((icon) => {
                if (!icon) return;

                const rect = icon.getBoundingClientRect();
                const iconCenterX = rect.left + rect.width / 2;

                // Calculate distance from mouse to icon center
                const distance = Math.abs(mouseX - iconCenterX);

                // Calculate scale based on distance (closer = larger)
                // Base scale 1, max scale 1.5, effect range 150px
                let scale = 1;
                if (distance < 150) {
                    const strength = 1 - distance / 150;
                    scale = 1 + strength * 0.5; // Max scale 1.5
                }

                gsap.to(icon, {
                    scale: scale,
                    duration: 0.2,
                    ease: "power2.out",
                });
            });
        };

        const handleMouseLeave = () => {
            iconsRef.current.forEach((icon) => {
                if (!icon) return;
                gsap.to(icon, {
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.out",
                });
            });
        };

        dock.addEventListener("mousemove", handleMouseMove);
        dock.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            dock.removeEventListener("mousemove", handleMouseMove);
            dock.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, { scope: dockRef });

    return (
        <div className="fixed bottom-6 md:bottom-8 left-1/2 z-50 -translate-x-1/2 print:hidden pb-[env(safe-area-inset-bottom)]">
            <div
                ref={dockRef}
                className="flex items-end gap-4 rounded-2xl border border-white/20 bg-white/30 px-4 py-3 shadow-2xl backdrop-blur-xl dark:border-ocean-deep-800/50 dark:bg-ocean-deep-900/30"
            >
                {dockItems.map((item, index) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        ref={(el) => { iconsRef.current[index] = el; }}
                        className={cn(
                            "group relative flex aspect-square w-12 items-center justify-center rounded-xl bg-white/50 text-ocean-deep-600 shadow-sm transition-colors hover:bg-white dark:bg-ocean-deep-800/50 dark:text-ocean-deep-300 dark:hover:bg-ocean-deep-700",
                            "hover:text-fresh-sky-600 dark:hover:text-fresh-sky-400"
                        )}
                        aria-label={item.label}
                    >
                        <item.icon className="h-6 w-6" />

                        {/* Tooltip */}
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-md bg-ocean-deep-900 px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-ocean-deep-100 dark:text-ocean-deep-900 pointer-events-none whitespace-nowrap">
                            {item.label}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
