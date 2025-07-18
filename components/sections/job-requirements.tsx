"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface JobRequirementsProps {
  className?: string;
}

const requirements = [
  "5+ years of React development experience",
  "Strong TypeScript skills",
  "Experience with Next.js framework",
  "Knowledge of modern CSS (Tailwind preferred)",
  "Familiarity with Git version control",
  "Understanding of RESTful APIs",
  "Experience with testing frameworks",
  "Strong problem-solving abilities"
];

const techSkills = [
  "React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", 
  "Git", "Jest", "REST APIs", "GraphQL", "PostgreSQL"
];

export function JobRequirements({ className }: JobRequirementsProps) {
  return (
    <div className={cn("w-full h-full", className)}>
      <div className="rounded-md border border-stone-700 bg-stone-800 shadow-lg w-full h-full flex flex-col overflow-hidden">
        <div className="p-3 border-b border-stone-700 flex-shrink-0">
          <h2 className="text-sm font-semibold text-stone-100">Job Requirements</h2>
        </div>

        <div className="flex-1 p-3 space-y-4 overflow-y-auto">
          {/* Job Requirements Section */}
          <div>
            <h3 className="text-xs font-medium text-stone-200 mb-2">Requirements</h3>
            <ul className="space-y-1">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5 text-xs">•</span>
                  <span className="text-stone-300 text-xs leading-relaxed">
                    {requirement}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Skills Section */}
          <div>
            <h3 className="text-xs font-medium text-stone-200 mb-2">Tech Skills Needed</h3>
            <div className="flex flex-wrap gap-1">
              {techSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-stone-700 text-stone-200 text-xs px-1.5 py-0.5 hover:bg-stone-600 transition-colors"
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