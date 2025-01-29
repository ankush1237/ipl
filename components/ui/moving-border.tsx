"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  as: Component = "button",
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: any;
}) => {
  return (
    <Component className={cn("relative", containerClassName)}>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: duration / 1000, ease: "linear", repeat: Infinity }}
        className={cn(
          "absolute inset-0 rounded-full bg-gradient-to-r from-primary via-purple-500 to-secondary opacity-75 blur-sm",
          borderClassName
        )}
      />
      <div className={cn("relative", className)}>{children}</div>
    </Component>
  );
};