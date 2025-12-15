"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface ProjectGalleryProps {
    images: string[];
    color: string;
}

export function ProjectGallery({ images, color }: ProjectGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedImage]);

    return (
        <>
            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedImage(img)}
                            className="aspect-video rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center relative overflow-hidden group cursor-pointer w-full p-0 m-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-fresh-sky-500"
                            aria-label={`View gallery image ${idx + 1}`}
                        >
                            {/* Gradient Overlay for placeholder effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20`} />

                            {/* Placeholder Text */}
                            <span className="text-sm text-muted-foreground font-sans group-hover:opacity-0 transition-opacity">Image {idx + 1}</span>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <ZoomIn className="text-white w-8 h-8" />
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            {/* Lightbox Modal */}
            {mounted && createPortal(
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                            onClick={() => setSelectedImage(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="relative w-full max-w-7xl h-[90vh] flex items-center justify-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="relative w-full h-full">
                                    <Image
                                        src={selectedImage}
                                        alt="Project gallery view"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}
