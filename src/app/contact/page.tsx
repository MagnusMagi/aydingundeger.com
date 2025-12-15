import { Contact } from "@/components/sections/contact";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Aydin Gundeger for collaboration opportunities or just to say hello.",
};

export default function ContactPage() {
    return <Contact />;
}
