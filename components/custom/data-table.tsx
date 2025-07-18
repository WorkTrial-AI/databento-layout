"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink, Mail } from "lucide-react";

interface DataTableProps {
  className?: string;
}

// Exactly 5 candidates - no more, no less
const candidateData = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    jobRelevanceRank: 92,
    linkedinUrl: "https://linkedin.com/in/sarahjohnson",
    githubUrl: "https://github.com/sarahjohnson",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.c@email.com",
    jobRelevanceRank: 88,
    linkedinUrl: "https://linkedin.com/in/michaelchen",
    githubUrl: "https://github.com/michaelchen",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.r@email.com",
    jobRelevanceRank: 85,
    linkedinUrl: "https://linkedin.com/in/emilyrodriguez",
    githubUrl: "https://github.com/emilyrodriguez",
  },
  {
    id: 4,
    name: "David Kim",
    email: "david.k@email.com",
    jobRelevanceRank: 79,
    linkedinUrl: "https://linkedin.com/in/davidkim",
    githubUrl: "https://github.com/davidkim",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    email: "lisa.t@email.com",
    jobRelevanceRank: 76,
    linkedinUrl: "https://linkedin.com/in/lisathompson",
    githubUrl: "https://github.com/lisathompson",
  },
];

export function DataTable({ className }: DataTableProps) {
  const handleContact = (candidate: typeof candidateData[0]) => {
    window.open(`mailto:${candidate.email}`, '_blank');
  };

  const getRankColor = (rank: number) => {
    if (rank >= 90) return "text-emerald-300";
    if (rank >= 80) return "text-amber-300";
    if (rank >= 70) return "text-orange-300";
    return "text-red-300";
  };

  const getRankBgColor = (rank: number) => {
    if (rank >= 90) return "bg-emerald-900/30";
    if (rank >= 80) return "bg-amber-900/30";
    if (rank >= 70) return "bg-orange-900/30";
    return "bg-red-900/30";
  };

  return (
    <div className={cn("h-full", className)}>
      <div className="rounded-md border border-stone-700 bg-stone-800 shadow-lg h-full flex flex-col overflow-hidden">
        <div className="p-3 border-b border-stone-700 flex-shrink-0">
          <h2 className="text-sm font-semibold text-stone-100">Candidates</h2>
        </div>
        
        {/* Fixed table sized for exactly 5 candidates */}
        <div className="flex-1 overflow-hidden">
          <Table className="h-full">
            <TableHeader>
              <TableRow className="border-b border-stone-700 bg-stone-800/50 h-10">
                <TableHead className="font-semibold text-stone-100 py-2 px-3 text-xs">Name</TableHead>
                <TableHead className="font-semibold text-stone-100 py-2 px-3 text-xs">Rank</TableHead>
                <TableHead className="font-semibold text-stone-100 py-2 px-3 text-xs">LinkedIn</TableHead>
                <TableHead className="font-semibold text-stone-100 py-2 px-3 text-xs">Contact</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {candidateData.map((candidate) => (
                <TableRow
                  key={candidate.id}
                  className="border-b border-stone-700 hover:bg-stone-700/50 transition-colors h-12"
                >
                  <TableCell className="py-2 px-3">
                    <div className="flex flex-col">
                      <span className="font-medium text-stone-100 text-xs leading-tight">
                        {candidate.name}
                      </span>
                      <span className="text-xs text-stone-400 leading-tight">
                        {candidate.email}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="py-2 px-3">
                    <span
                      className={cn(
                        "inline-flex items-center justify-center rounded-full px-2 py-1 text-xs font-semibold min-w-[35px]",
                        getRankColor(candidate.jobRelevanceRank),
                        getRankBgColor(candidate.jobRelevanceRank)
                      )}
                    >
                      {candidate.jobRelevanceRank}
                    </span>
                  </TableCell>
                  <TableCell className="py-2 px-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-400 hover:text-blue-300 hover:bg-stone-700/50 h-6 px-2 text-xs"
                      onClick={() => window.open(candidate.linkedinUrl, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Link
                    </Button>
                  </TableCell>
                  <TableCell className="py-2 px-3">
                    <Button
                      size="sm"
                      className="bg-stone-600 hover:bg-stone-500 text-stone-100 border-stone-500 h-6 px-2 text-xs"
                      onClick={() => handleContact(candidate)}
                    >
                      <Mail className="h-3 w-3 mr-1" />
                      Mail
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
} 