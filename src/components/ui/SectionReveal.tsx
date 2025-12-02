'use client';

import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { ReactNode } from "react";

interface SectionRevealProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export function SectionReveal({ children, className, id }: SectionRevealProps) {
    return (
        <section id={id} className={cn("relative overflow-hidden", className)}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </section>
    );
}
