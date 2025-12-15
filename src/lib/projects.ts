
export const projectsData = [
    {
        slug: "lumina",
        title: "Lumina",
        subtitle: "AI Analytics Dashboard",
        description: "A real-time analytics platform powered by OpenAI, offering predictive insights and natural language query capabilities.",
        tags: ["Next.js", "Tremor", "OpenAI API", "PostgreSQL"],
        links: { demo: "#", code: "#" },
        image: "/project1.jpg",
        color: "from-fresh-sky-500/20 to-ocean-deep-500/20",
        border: "group-hover:border-fresh-sky-500/50",
        role: "Lead Frontend Engineer",
        timeline: "Oct 2023 - Jan 2024",
        year: "2024",
        team: "3 Engineers, 1 Designer",
        impact: "Reduced data query time by 60% for non-technical users and processed over 1M+ live data points daily.",
        gallery: ["https://images.unsplash.com/photo-1561448857-7b5d0b3c7b72?q=80&w=1167&auto=format&fit=crop", "/project1.jpg"],
        techStack: [
            { category: "Frontend", skills: ["Next.js 14", "TypeScript", "Tailwind CSS", "Tremor UI"] },
            { category: "Backend", skills: ["Node.js", "PostgreSQL", "Prisma", "Redis"] },
            { category: "AI & Data", skills: ["OpenAI GPT-4", "LangChain", "Tinybird"] }
        ],
        longDescription: "Lumina revolutionizes how businesses interact with their data. By leveraging OpenAI's GPT-4, it translates natural language questions into complex SQL queries, visualizing the results instantly. Built with performance in mind, it handles millions of data points with sub-second latency.",
        features: [
            "Natural Language to SQL conversion",
            "Real-time data visualization with Tremor",
            "Automated predictive reporting",
            "Role-based access control"
        ],
        challenges: "One of the main challenges was ensuring the accuracy of the generated SQL queries and handling potential security risks like SQL injection. We implemented a strict validation layer and a sandboxed execution environment.",
        solution: "We used a combination of prompt engineering and distinct validation logic to sanitise inputs. We also implemented a caching layer to reduce API costs and improve response times for common queries."
    },
    {
        slug: "flowstate",
        title: "FlowState",
        subtitle: "Task Management SaaS",
        description: "A collaborative project management tool featuring real-time updates, drag-and-drop boards, and team automation.",
        tags: ["React", "Supabase", "Tailwind", "DnD Kit"],
        links: { demo: "#", code: "#" },
        image: "/project2.jpg",
        color: "from-tropical-teal-500/20 to-fresh-sky-500/20",
        border: "group-hover:border-tropical-teal-500/50",
        role: "Full Stack Developer",
        timeline: "Mar 2023 - June 2023",
        year: "2023",
        team: "2 Developers",
        impact: "Scaled to 500+ active users in the first month and improved team collaboration efficiency by 40%.",
        gallery: ["https://images.unsplash.com/photo-1561448857-7b5d0b3c7b72?q=80&w=1167&auto=format&fit=crop", "/project2.jpg"],
        techStack: [
            { category: "Frontend", skills: ["React", "Vite", "Zustand", "DnD Kit"] },
            { category: "Backend", skills: ["Supabase", "PostgreSQL", "Edge Functions"] },
            { category: "Realtime", skills: ["Supabase Realtime", "WebSockets"] }
        ],
        longDescription: "FlowState is designed for remote teams that need clarity without the clutter. It synchronizes state across clients in real-time using Supabase, ensuring everyone is always on the same page. The intuitive drag-and-drop interface makes managing complex workflows effortless.",
        features: [
            "Real-time collaboration with Supabase Presence",
            "Kanban, List, and Calendar views",
            "Automated workflow triggers",
            "Slack and GitHub integrations"
        ],
        challenges: "Handling optimistic UI updates while maintaining data consistency across multiple connected clients was complex, especially with poor network conditions.",
        solution: "We implemented a robust optimistic update strategy with automatic rollback on failure, using React Query for server state management."
    },
    {
        slug: "zenith",
        title: "Zenith",
        subtitle: "Headless Storefront",
        description: "A high-performance headless commerce frontend built for scalability, featuring ISR and optimized image loading.",
        tags: ["Shopify", "Next.js", "Framer Motion", "Stripe"],
        links: { demo: "#", code: "#" },
        image: "/project3.jpg",
        color: "from-school-bus-yellow-500/20 to-pumpkin-spice-500/20",
        border: "group-hover:border-school-bus-yellow-500/50",
        role: "Frontend Architect",
        timeline: "Jan 2023 - Feb 2023",
        year: "2023",
        team: "Solo Project",
        impact: "Achieved perfect 100 Lighthouse scores and increased conversion rates by 25% compared to the previous theme.",
        gallery: ["/project3.jpg"],
        techStack: [
            { category: "Frontend", skills: ["Next.js", "Radix UI", "Framer Motion"] },
            { category: "Commerce", skills: ["Shopify Storefront API", "Stripe Connect"] },
            { category: "Performance", skills: ["ISR", "Vercel Analytics"] }
        ],
        longDescription: "Zenith decouples the frontend from the backend to deliver blazing fast shopping experiences. It utilizes Next.js Incremental Static Regeneration (ISR) to keep product data fresh without sacrificing the speed of static pages.",
        features: [
            "Headless Shopify integration",
            "ISR for product pages",
            "Custom cart and checkout flow",
            "Advanced product filtering"
        ],
        challenges: "Synchronizing cart state between the custom frontend and Shopify's checkout while maintaining a seamless user journey was critical.",
        solution: "We utilized Shopify's Storefront API and a persistent local storage cart that hydrates on page load to ensure a smooth transition to checkout."
    },
    {
        slug: "nova",
        title: "Nova",
        subtitle: "AI Content Generator",
        description: "A generative AI platform allowing users to create realistic images and text using state-of-the-art diffusion models.",
        tags: ["Python", "FastAPI", "React", "Stable Diffusion"],
        links: { demo: "#", code: "#" },
        image: "/project4.jpg",
        color: "from-tropical-teal-500/20 to-school-bus-yellow-500/20",
        border: "group-hover:border-tropical-teal-500/50",
        role: "Backend Lead",
        timeline: "July 2023 - Sep 2023",
        year: "2023",
        team: "4 Engineers",
        impact: "Processed over 50k image generation requests in beta requiring high-concurrency GPU management.",
        gallery: ["/project4.jpg"],
        techStack: [
            { category: "Frontend", skills: ["React", "Chakra UI", "React Query"] },
            { category: "Backend", skills: ["FastAPI", "Python", "Celery", "Redis"] },
            { category: "ML Ops", skills: ["Docker", "AWS EC2 (G4dn)", "S3"] }
        ],
        longDescription: "Nova puts the power of generative AI into the hands of creators. It provides a simple interface to complex diffusion models, allowing for fine-grained control over image generation parameters.",
        features: [
            "Text-to-Image generation",
            "Image-to-Image editing",
            "Custom model training support",
            "Community gallery and sharing"
        ],
        challenges: "Scaling the inference infrastructure to handle concurrent requests without massive GPU costs.",
        solution: "We built a queue-based system with Celery and Redis to manage job distribution across a scalable cluster of GPU workers on AWS."
    },
];
