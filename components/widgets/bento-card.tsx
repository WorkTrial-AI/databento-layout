"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  className?: string;
  header: string;
  content: ReactNode;
  score?: string;
  personName?: string;
  contentType?: "text" | "custom";
}

export function BentoCard({
  className,
  header,
  content,
  score,
  personName,
  contentType = "text"
}: BentoCardProps) {
  return (
    <div className={cn(
      "rounded-md border bg-card shadow-lg w-full h-full flex flex-col overflow-hidden",
      className
    )}>
      {/* Header */}
      <div className="px-3 py-3 border-b flex-shrink-0">
        <h3 className="text-sm font-semibold text-card-foreground truncate leading-none">{header}</h3>
      </div>

      {/* Content Area */}
      <div className="flex-1 px-3 py-3 flex items-center justify-center overflow-auto">
        {contentType === "text" ? (
          <div className="text-center">
            {content}
          </div>
        ) : (
          content
        )}
      </div>

      {/* Bottom Section - Score and Person Name */}
      {(score !== undefined || personName) && (
        <div className="px-3 py-3 border-t bg-muted flex-shrink-0">
          <div className="flex items-center justify-between min-h-[20px]">
            {score !== undefined && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground leading-none">Score:</span>
                <span className="text-xs font-semibold text-primary leading-none">
                  {score}
                </span>
              </div>
            )}
            {personName && (
              <span className="text-xs text-card-foreground font-medium truncate leading-none">
                {personName}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 