"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface JobRequirementsProps {
  className?: string;
  requirements: string[];
  techSkills: string[];
}

export function JobRequirements({ className, requirements, techSkills }: JobRequirementsProps) {
  return (
    <div className={cn("w-full h-full", className)}>
      <div className="rounded-md border bg-card shadow-lg w-full h-full flex flex-col overflow-hidden">
        <div className="p-3 border-b flex-shrink-0">
          <h2 className="text-sm font-semibold text-card-foreground">Job Requirements</h2>
        </div>

        <div className="flex-1 p-3 space-y-4 overflow-y-auto">
          {/* Job Requirements Section */}
          <div>
            <h3 className="text-xs font-medium text-card-foreground mb-2">Requirements</h3>
            <ul className="space-y-1">
              {requirements && requirements.length === 0 && (
                <li className="text-xs text-muted-foreground italic">No requirements specified.</li>
              )}
              {requirements && requirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5 text-xs">•</span>
                  <span className="text-muted-foreground text-xs leading-relaxed">
                    {requirement}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Skills Section */}
          <div>
            <h3 className="text-xs font-medium text-card-foreground mb-2">Tech Skills Needed</h3>
            <div className="flex flex-wrap gap-1">
              {techSkills.length === 0 && (
                <span className="text-xs text-muted-foreground italic">No tech skills specified.</span>
              )}
              {techSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs px-1.5 py-0.5 hover:bg-secondary/80 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 