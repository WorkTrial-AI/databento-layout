"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FlexBentoProps {
  children: ReactNode;
  direction?: "row" | "col";
  gap?: string;
  className?: string;
  flex?: number | string;
  height?: string;
}

interface FlexBentoItemProps {
  children: ReactNode;
  flex?: number | string;
  className?: string;
}

// Main FlexBento container
export function FlexBento({ 
  children, 
  direction = "row", 
  gap = "gap-2", 
  className,
  flex,
  height
}: FlexBentoProps) {
  const directionClass = direction === "row" ? "flex" : "flex flex-col";
  const flexStyle = flex ? { flex: flex } : {};
  const heightStyle = height ? { height: height } : {};

  return (
    <div 
      className={cn(directionClass, gap, "w-full h-full", className)} 
      style={{ ...flexStyle, ...heightStyle }}
    >
      {children}
    </div>
  );
}

// Individual FlexBento item - ensures full height expansion
export function FlexBentoItem({ children, flex = 1, className }: FlexBentoItemProps) {
  const flexStyle = { flex: flex };

  return (
    <div className={cn("h-full w-full", className)} style={flexStyle}>
      {children}
    </div>
  );
}

// Quick wrapper for common flex values - all ensure full height
export const FlexBentoSmall = ({ children, className }: { children: ReactNode; className?: string }) => (
  <FlexBentoItem flex={1} className={cn("h-full", className)}>{children}</FlexBentoItem>
);

export const FlexBentoMedium = ({ children, className }: { children: ReactNode; className?: string }) => (
  <FlexBentoItem flex={2} className={cn("h-full", className)}>{children}</FlexBentoItem>
);

export const FlexBentoLarge = ({ children, className }: { children: ReactNode; className?: string }) => (
  <FlexBentoItem flex={3} className={cn("h-full", className)}>{children}</FlexBentoItem>
);

export const FlexBentoXLarge = ({ children, className }: { children: ReactNode; className?: string }) => (
  <FlexBentoItem flex={4} className={cn("h-full", className)}>{children}</FlexBentoItem>
); 