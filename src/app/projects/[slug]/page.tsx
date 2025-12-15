
import { projectsData } from "@/lib/projects";
import { notFound } from "next/navigation";
import { ProjectGallery } from "@/components/project-gallery";
import Link from "next/link";
import { ArrowLeft, Globe, Github, ArrowRight, Calendar, User, Code2, Users, Clock, Award, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
    return projectsData.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    if (!project) {
        notFound();
    }

    // Find next project for navigation
    const currentIndex = projectsData.findIndex((p) => p.slug === slug);
    const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

    return (
        <main className="min-h-screen pt-24 pb-20 px-4 md:px-12 lg:px-24 overflow-hidden relative selection:bg-fresh-sky-500/30">

            {/* Ambient Background */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-br ${project.color} blur-[120px] opacity-15 -z-10`} />

            <div className="max-w-6xl mx-auto space-y-16">

                {/* Navigation & Header */}
                <div className="space-y-8">
                    <Link
                        href="/projects"
                        className="inline-flex items-center text-muted-foreground hover:text-fresh-sky-500 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </Link>

                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="space-y-4 max-w-3xl">
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                                    {project.title}
                                </h1>
                                <p className="text-xl md:text-2xl text-fresh-sky-600 font-medium">
                                    {project.subtitle}
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <Link
                                    href={project.links.demo}
                                    target="_blank"
                                    className="px-6 py-3 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all flex items-center gap-2 active:scale-95"
                                >
                                    <Globe className="w-4 h-4" /> Live Demo
                                </Link>
                                <Link
                                    href={project.links.code}
                                    target="_blank"
                                    className="px-6 py-3 rounded-full border border-border hover:bg-muted/50 transition-colors flex items-center gap-2 active:scale-95"
                                >
                                    <Github className="w-4 h-4" /> Code
                                </Link>
                            </div>
                        </div>

                        {/* Metadata Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border/50">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                    <User className="w-4 h-4" /> Role
                                </div>
                                <div className="font-medium">{project.role}</div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                    <Clock className="w-4 h-4" /> Timeline
                                </div>
                                <div className="font-medium">{project.timeline}</div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                    <Users className="w-4 h-4" /> Team
                                </div>
                                <div className="font-medium">{project.team}</div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                    <Calendar className="w-4 h-4" /> Year
                                </div>
                                <div className="font-medium">{project.year}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Image / Gallery Preview */}
                <div className={`w-full aspect-video rounded-3xl bg-gradient-to-br ${project.color} relative overflow-hidden group border border-white/10 shadow-2xl shadow-black/50`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                    {/* Placeholder for actual image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-3xl bg-white/10 backdrop-blur-3xl flex items-center justify-center border border-white/20 shadow-2xl">
                            <Code2 className="w-16 h-16 text-white/90" />
                        </div>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column (Content) */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* Overview */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                Overview
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {project.longDescription}
                            </p>
                        </section>

                        {/* Challenges & Solutions */}
                        <section className="space-y-8">
                            <h2 className="text-2xl font-bold">Technical Journey</h2>
                            <div className="grid gap-6">
                                <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-orange-500/10 text-orange-500 mt-1">
                                            <Layers className="w-5 h-5" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-bold">The Challenge</h3>
                                            <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-fresh-sky-500/10 text-fresh-sky-500 mt-1">
                                            <Code2 className="w-5 h-5" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-bold">The Solution</h3>
                                            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Gallery Grid */}
                        <ProjectGallery images={project.gallery || []} color={project.color} />
                    </div>

                    {/* Right Column (Sidebar) */}
                    <div className="lg:col-span-4 space-y-12">

                        {/* Impact Card */}
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-fresh-sky-500/10 to-transparent border border-fresh-sky-500/20 space-y-4">
                            <div className="flex items-center gap-3 text-fresh-sky-500 font-bold">
                                <Award className="w-5 h-5" />
                                Project Impact
                            </div>
                            <p className="text-muted-foreground">{project.impact}</p>
                        </div>

                        {/* Tech Stack */}
                        <section className="space-y-6">
                            <h3 className="text-lg font-bold">Tech Stack</h3>
                            <div className="space-y-6">
                                {project.techStack?.map((stack, idx) => (
                                    <div key={idx} className="space-y-3">
                                        <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                                            {stack.category}
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {stack.skills.map((skill) => (
                                                <Badge key={skill} variant="secondary" className="bg-muted/50 hover:bg-muted transition-colors">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Key Features List */}
                        <section className="space-y-6">
                            <h3 className="text-lg font-bold">Key Features</h3>
                            <ul className="space-y-3">
                                {project.features?.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fresh-sky-500 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </section>

                    </div>
                </div>

                {/* Footer Navigation */}
                <div className="border-t border-border pt-12 mt-20">
                    <Link
                        href={`/projects/${nextProject.slug}`}
                        className="group block relative overflow-hidden rounded-3xl bg-muted/20 hover:bg-muted/40 transition-all duration-500 p-8 md:p-12 border border-border/50"
                    >
                        <div className="flex items-center justify-between relative z-10">
                            <div>
                                <div className="text-sm font-sans text-muted-foreground mb-4 uppercase tracking-widest">Next Project</div>
                                <h3 className="text-3xl md:text-5xl font-bold mb-2 group-hover:text-fresh-sky-500 transition-colors">
                                    {nextProject.title}
                                </h3>
                                <p className="text-lg text-muted-foreground">{nextProject.subtitle}</p>
                            </div>
                            <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center group-hover:scale-110 group-hover:border-fresh-sky-500/50 transition-all duration-500">
                                <ArrowRight className="w-6 h-6 text-foreground group-hover:text-fresh-sky-500 transition-colors" />
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </main>
    );
}
