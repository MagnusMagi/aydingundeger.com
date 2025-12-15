"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download, Printer, MapPin, Mail, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

// GSAP registration
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function CVContent() {
    const containerRef = useRef<HTMLDivElement>(null);
    const paperRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(paperRef.current, {
            y: 50,
            opacity: 0,
            scale: 0.95,
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            delay: 0.2
        });
    }, { scope: containerRef });

    const handlePrint = () => {
        window.print();
    };

    return (
        <div ref={containerRef} className="min-h-screen bg-slate-100 dark:bg-slate-950 py-12 px-4 md:px-8 flex flex-col items-center">

            {/* Action Bar */}
            <div className="w-full md:max-w-[210mm] mb-6 flex justify-between items-center print:hidden px-4 md:px-0">
                <h1 className="text-xl font-bold text-slate-700 dark:text-slate-300">Curriculum Vitae</h1>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={handlePrint}>
                        <Printer className="mr-2 w-4 h-4" />
                        Print
                    </Button>
                    <Button size="sm" onClick={handlePrint} className="bg-blue-600 hover:bg-blue-700">
                        <Download className="mr-2 w-4 h-4" />
                        Download PDF
                    </Button>
                </div>
            </div>

            {/* A4 Paper Layout - Responsive */}
            <div
                ref={paperRef}
                className="w-full md:max-w-[210mm] min-h-[297mm] bg-white text-slate-800 shadow-2xl rounded-sm p-4 md:p-[20mm] print:shadow-none print:w-full print:max-w-none print:min-h-0 print:p-0 print:m-0"
            >
                {/* Header */}
                <header className="border-b-2 border-slate-900 pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 uppercase">Aydin Gundeger</h1>
                        <p className="text-xl text-blue-600 font-medium mt-2">Senior Full Stack Developer</p>
                    </div>
                    <div className="text-sm space-y-2 text-slate-600 text-right md:text-right flex flex-col items-start md:items-end">
                        <div className="flex items-center gap-2">
                            <span>Istanbul, Turkey</span>
                            <MapPin className="w-4 h-4" />
                        </div>
                        <div className="flex items-center gap-2">
                            <span>hello@aydingundeger.com</span>
                            <Mail className="w-4 h-4" />
                        </div>
                        <div className="flex items-center gap-2">
                            <span>+90 555 123 45 67</span>
                            <Phone className="w-4 h-4" />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-blue-600">aydingundeger.com</span>
                            <Globe className="w-4 h-4" />
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">

                    {/* Left Sidebar (Mobile: Top) */}
                    <aside className="md:col-span-4 space-y-8">

                        {/* Summary */}
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-2 mb-4">Profile</h3>
                            <p className="text-sm leading-relaxed text-slate-600 text-justify">
                                Innovative Senior Full Stack Developer with 6+ years of experience in building scalable web applications.
                                Expert in React, Next.js, and Cloud Architecture. Proven track record of leading teams and delivering
                                high-impact solutions for fintech and e-commerce sectors. Passionate about clean code and user-centric design.
                            </p>
                        </section>

                        {/* Skills */}
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-2 mb-4">Core Skills</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xs font-bold text-slate-700 mb-2">Frontend</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["React", "Next.js", "TypeScript", "Tailwind", "GSAP"].map(s => (
                                            <span key={s} className="px-2 py-1 bg-slate-100 text-xs rounded text-slate-700 print:border print:border-slate-200">{s}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-700 mb-2">Backend</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["Node.js", "PostgreSQL", "Redis", "Docker", "AWS"].map(s => (
                                            <span key={s} className="px-2 py-1 bg-slate-100 text-xs rounded text-slate-700 print:border print:border-slate-200">{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Certifications */}
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-2 mb-4">Certifications</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="text-sm font-bold text-slate-900">AWS Certified Solutions Architect</div>
                                    <div className="text-xs text-slate-600">Amazon Web Services</div>
                                    <div className="text-xs text-slate-500 italic">Issued Dec 2023</div>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">Meta Front-End Developer</div>
                                    <div className="text-xs text-slate-600">Coursera</div>
                                    <div className="text-xs text-slate-500 italic">Issued Jun 2022</div>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">Professional Scrum Master I</div>
                                    <div className="text-xs text-slate-600">Scrum.org</div>
                                    <div className="text-xs text-slate-500 italic">Issued Jan 2021</div>
                                </div>
                            </div>
                        </section>

                        {/* Languages */}
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-2 mb-4">Languages</h3>
                            <div className="text-sm space-y-1">
                                <div className="flex justify-between"><span>English</span> <span className="text-slate-500">Professional</span></div>
                                <div className="flex justify-between"><span>Turkish</span> <span className="text-slate-500">Native</span></div>
                            </div>
                        </section>

                    </aside>

                    {/* Main Content */}
                    <main className="md:col-span-8 space-y-8">

                        {/* Experience */}
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-2 mb-6">Experience</h3>

                            <div className="space-y-8">
                                <Role
                                    boxClass="bg-red-200"
                                    title="Senior Full Stack Developer"
                                    company="TechNova Solutions"
                                    period="2021 - Present"
                                    description="Leading a team of 5 developers to rebuild the core flagship analytics platform."
                                    bullets={[
                                        "Architected a micro-frontend system reducing build times by 40%.",
                                        "Implemented a real-time data pipeline using WebSocket and Redis.",
                                        "Mentored junior developers and introduced automated testing standards."
                                    ]}
                                />

                                <Role
                                    title="Full Stack Developer"
                                    company="Creative Agency X"
                                    period="2019 - 2021"
                                    description="Developed bespoke e-commerce experiences for high-profile fashion brands."
                                    bullets={[
                                        "Built headless implementations using Shopify Plus and Next.js.",
                                        "Optimized Core Web Vitals resulting in a 25% increase in conversion rates.",
                                        "Integrated 3rd party payment gateways and inventory management systems."
                                    ]}
                                />

                                <Role
                                    title="Frontend Developer"
                                    company="Startup Inc"
                                    period="2018 - 2019"
                                    description="Early employee responsible for the MVP launch of a SaaS product."
                                    bullets={[
                                        "Developed the initial UI component library using React and Styled Components.",
                                        "Collaborated directly with founders to iterate on product features."
                                    ]}
                                />
                            </div>
                        </section>

                        {/* Projects */}
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-2 mb-6">Selected Projects</h3>
                            <div className="grid grid-cols-1 gap-4">
                                <Project
                                    title="Lumina Analytics"
                                    tech="Next.js, OpenAI, Postgres"
                                    desc="AI-powered dashboard for predictive business insights."
                                />
                                <Project
                                    title="FlowState"
                                    tech="React, Supabase, Tailwind"
                                    desc="Collaborative task management tool with real-time updates."
                                />
                            </div>
                        </section>

                    </main>
                </div>

                {/* Footer for print */}
                <div className="hidden print:block mt-8 pt-8 border-t border-slate-200 text-center text-xs text-slate-500">
                    CV - Aydin Gundeger - {new Date().getFullYear()}
                </div>

            </div>
        </div>
    );
}

function Role({ title, company, period, description, bullets, boxClass }: any) {
    return (
        <div className="">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h4 className="text-lg font-bold text-slate-900">{title}</h4>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">{period}</span>
            </div>
            <div className="text-sm font-semibold text-blue-600 mb-2">{company}</div>
            <p className="text-sm text-slate-700 mb-3">{description}</p>
            <ul className="list-disc list-inside space-y-1">
                {bullets.map((b: string, i: number) => (
                    <li key={i} className="text-sm text-slate-600">{b}</li>
                ))}
            </ul>
        </div>
    );
}

function Project({ title, tech, desc }: any) {
    return (
        <div className="p-4 bg-slate-50 rounded border border-slate-100 print:bg-transparent print:border-slate-200">
            <div className="flex justify-between items-baseline mb-1">
                <h4 className="text-base font-bold text-slate-900">{title}</h4>
                <span className="text-xs text-slate-500">{tech}</span>
            </div>
            <p className="text-sm text-slate-600">{desc}</p>
        </div>
    );
}
