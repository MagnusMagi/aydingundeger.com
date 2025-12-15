"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { PopupModal } from "react-calendly";

export function ScheduleCall() {
    const [isOpen, setIsOpen] = useState(false);
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        // Wait for mount to set root element for accessibility
        setRootElement(document.getElementById("root") || document.body);
    }, []);

    return (
        <>
            <Button
                size="lg"
                variant="outline"
                className="border-ocean-deep-200 bg-transparent text-foreground hover:bg-ocean-deep-100 dark:border-ocean-deep-700 dark:text-ocean-deep-200 dark:hover:bg-ocean-deep-800 dark:hover:text-white focus-visible:ring-fresh-sky-500"
                onClick={() => setIsOpen(true)}
            >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Call
            </Button>

            {rootElement && (
                <PopupModal
                    url="https://calendly.com/aydingundeger"
                    onModalClose={() => setIsOpen(false)}
                    open={isOpen}
                    rootElement={rootElement}
                />
            )}
        </>
    );
}
