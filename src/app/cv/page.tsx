import { Metadata } from 'next';
import CVContent from '@/components/cv-content';

export const metadata: Metadata = {
    title: "Curriculum Vitae",
    description: "Professional experience, skills, and career history of Aydin Gundeger. View or download my detailed CV.",
};

export default function CVPage() {
    return <CVContent />;
}
