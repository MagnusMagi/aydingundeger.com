# Aydin Gundeger - Senior Software Engineer Portfolio

A premium, high-performance personal portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Designed to showcase professional experience, technical skills, and projects with a focus on modern aesthetics, interactivity, and accessibility.

![Portfolio Preview](https://raw.githubusercontent.com/MagnusMagi/aydingundeger.com/main/public/og-image.jpg)

## 🚀 Live Demo

[**https://aydingundeger.com**](https://aydingundeger.com)

## ✨ Features

- **Premium UI/UX**: Custom design system with glassmorphism, ambient gradients, and a refined color palette (Deep Ocean & Fresh Sky).
- **Advanced Animations**: High-performance scrolling and entrance animations powered by **GSAP** and **Framer Motion**.
- **Interactive Dock**: macOS-style navigation dock with magnification effects.
- **Project Gallery**: Immersive lightbox gallery for viewing high-resolution project screenshots.
- **Dynamic Routing**: Detailed case study pages for selected projects with rich metadata.
- **Print-Optimized CV**: Dedicated `/cv` route that renders a print-ready, A4-styled curriculum vitae.
- **Theme Support**: Seamless dark and light mode switching with persisted calls to action.
- **SEO Optimized**: Comprehensive metadata, OpenGraph tags, JSON-LD structured data, dynamic sitemap, and robots.txt.
- **Accessible**: WCAG 2.1 compliant focus indicators, semantic HTML, and ARIA labels.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**:
  - [GSAP](https://gsap.com/) (ScrollTrigger, Timeline)
  - [Framer Motion](https://www.framer.com/motion/) (Layout transitions)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Package Manager**: NPM

## 🏃‍♂️ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MagnusMagi/aydingundeger.com.git
   cd aydingundeger.com
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
src/
├── app/              # Next.js App Router pages and layouts
│   ├── about/        # About page
│   ├── contact/      # Contact page
│   ├── cv/           # CV/Resume page
│   ├── experience/   # Experience timeline
│   ├── projects/     # Project listing and details
│   ├── skills/       # Skills ticker and grid
│   ├── layout.tsx    # Root layout with Dock and SEO
│   └── page.tsx      # Home/Hero landing
├── components/       # Reusable UI components
│   ├── layout/       # Layout components (Dock, Header)
│   ├── sections/     # Page sections (Hero, About, etc.)
│   └── ui/           # Design system primitives (Button, Card, Badge)
└── lib/              # Data files and utilities
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
