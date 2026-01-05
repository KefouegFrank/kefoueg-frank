"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string;
    align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, align = "left", className, ...props }: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "mb-12",
                align === "center" ? "text-center" : "text-left",
                className
            )}
            {...props}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
                    {title}
                    <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="absolute -bottom-2 left-0 h-1 bg-gradient-accent rounded-full"
                    />
                </h2>
                {subtitle && (
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto mt-4">
                        {subtitle}
                    </p>
                )}
            </motion.div>
        </div>
    );
}
