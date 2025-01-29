"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Timeline = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    date: string;
  }[];
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <motion.div 
      ref={containerRef}
      style={{ opacity, scale }}
      className={cn("relative max-w-5xl mx-auto px-8", className)}
    >
      <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-purple-500 to-secondary transform -translate-x-1/2" />
      {items.map((item, idx) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
          key={idx}
          className={cn(
            "relative mb-12 grid grid-cols-1 md:grid-cols-2 gap-8",
            idx % 2 === 0 ? "md:text-right" : "md:text-left md:grid-flow-dense"
          )}
        >
          <div className={cn(
            "relative",
            idx % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
          )}>
            <div className="bg-card p-6 rounded-lg shadow-lg border border-border relative">
              <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"
                style={{
                  [idx % 2 === 0 ? "right" : "left"]: "-2rem",
                }}
              >
                <div className="absolute inset-1 rounded-full bg-background animate-pulse" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </div>
          <div className={cn(
            "flex items-center",
            idx % 2 === 0 ? "md:col-start-2 md:justify-start" : "md:col-start-1 md:justify-end"
          )}>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {item.date}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};