"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps, useScroll } from "motion/react";
import React from "react";
type ScrollProgressProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  keyof MotionProps
>;

export function ScrollProgress({ className, ...props }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-background via-foreground to-background",
        className,
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  );
}

ScrollProgress.displayName = "ScrollProgress";
