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
      "rounded-md border border-stone-700 bg-stone-800 shadow-lg w-full h-full flex flex-col overflow-hidden",
      className
    )}>
      {/* Header */}
      <div className="p-3 border-b border-stone-700 flex-shrink-0">
        <h3 className="text-sm font-semibold text-stone-100 truncate">{header}</h3>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-3 flex items-center justify-center overflow-hidden">
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
        <div className="p-3 border-t border-stone-700 bg-stone-800/50 flex-shrink-0">
          <div className="flex items-center justify-between">
            {score !== undefined && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-stone-400">Score:</span>
                <span className="text-xs font-semibold text-emerald-300">
                  {score}
                </span>
              </div>
            )}
            {personName && (
              <span className="text-xs text-stone-200 font-medium truncate">
                {personName}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 