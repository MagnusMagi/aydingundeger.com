import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Dock } from "@/components/layout/dock";
import DarkVeil from "@/components/ui/dark-veil";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aydingundeger.com"),
  title: {
    default: "Aydin Gundeger | Senior Software Engineer",
    template: "%s | Aydin Gundeger",
  },
  description: "Senior Software Engineer specializing in Full Stack Development, React, Next.js, and Modern Web Technologies. View my portfolio and projects.",
  keywords: ["Aydin Gundeger", "Software Engineer", "Full Stack Developer", "React", "Next.js", "TypeScript", "Portfolio", "Web Development"],
  authors: [{ name: "Aydin Gundeger", url: "https://aydingundeger.com" }],
  creator: "Aydin Gundeger",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aydingundeger.com",
    title: "Aydin Gundeger | Senior Software Engineer",
    description: "Senior Software Engineer specializing in Full Stack Development, React, Next.js, and Modern Web Technologies. View my portfolio and projects.",
    siteName: "Aydin Gundeger Portfolio",
    images: [
      {
        url: "/og-image.jpg", // We should probably ensure this exists or use a generic one, but this is standard
        width: 1200,
        height: 630,
        alt: "Aydin Gundeger Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aydin Gundeger | Senior Software Engineer",
    description: "Senior Software Engineer specializing in Full Stack Development. View my portfolio.",
    creator: "@aydingundeger", // Placeholder, acceptable if unknown
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aydin Gundeger",
  url: "https://aydingundeger.com",
  jobTitle: "Senior Software Engineer",
  sameAs: [
    "https://github.com/aydingundeger", // Assuming standard handle
    "https://linkedin.com/in/aydingundeger", // Assuming standard handle
    "https://twitter.com/aydingundeger"
  ],
  knowsAbout: ["Software Engineering", "React", "Next.js", "TypeScript", "Full Stack Development"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="antialiased font-sans relative">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="fixed inset-0 z-[-1]">
          <DarkVeil hueShift={40} speed={2} />
        </div>
        <Dock />
        {children}
      </body>
    </html>
  );
}
