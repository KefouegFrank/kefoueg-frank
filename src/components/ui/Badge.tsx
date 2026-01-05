import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "outline" | "filled";
}

export function Badge({ className, variant = "outline", children, ...props }: BadgeProps) {
    const variants = {
        outline: "border border-white/10 text-text-secondary",
        filled: "bg-white/5 border border-white/10 text-text-primary",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}
