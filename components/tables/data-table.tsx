"use client";

import { ExternalLink, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Candidate {
  id: string;
  name: string;
  email: string;
  jobRelevanceRank: number;
  linkedinUrl: string;
}

interface DataTableProps {
  className?: string;
}

const candidateData: Candidate[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice.johnson@email.com",
    jobRelevanceRank: 1,
    linkedinUrl: "https://linkedin.com/in/alice-johnson"
  },
  {
    id: "2", 
    name: "Bob Smith",
    email: "bob.smith@email.com",
    jobRelevanceRank: 2,
    linkedinUrl: "https://linkedin.com/in/bob-smith"
  },
  {
    id: "3",
    name: "Carol Davis",
    email: "carol.davis@email.com", 
    jobRelevanceRank: 3,
    linkedinUrl: "https://linkedin.com/in/carol-davis"
  },
  {
    id: "4",
    name: "David Wilson",
    email: "david.wilson@email.com",
    jobRelevanceRank: 4,
    linkedinUrl: "https://linkedin.com/in/david-wilson"
  },
  {
    id: "5",
    name: "Emma Thompson",
    email: "emma.thompson@email.com",
    jobRelevanceRank: 5,
    linkedinUrl: "https://linkedin.com/in/emma-thompson"
  }
];

export function DataTable({ className }: DataTableProps) {
  const handleContact = (candidate: Candidate) => {
    const subject = encodeURIComponent(`Regarding your application - ${candidate.name}`);
    const body = encodeURIComponent(`Hi ${candidate.name},\n\nI hope this email finds you well.\n\nBest regards`);
    window.open(`mailto:${candidate.email}?subject=${subject}&body=${body}`);
  };

  const getRankColor = (rank: number): string => {
    if (rank <= 2) return "text-emerald-700";
    if (rank <= 4) return "text-amber-700";
    return "text-red-700";
  };

  const getRankBgColor = (rank: number): string => {
    if (rank <= 2) return "bg-emerald-100";
    if (rank <= 4) return "bg-amber-100";
    return "bg-red-100";
  };

  return (
    <div className={cn("w-full h-full", className)}>
      <div className="rounded-md border border-stone-200 bg-stone-800 shadow-lg w-full h-full flex flex-col overflow-hidden">
        <div className="p-3 border-b border-stone-700 flex-shrink-0">
          <h2 className="text-sm font-semibold text-stone-100">Candidates Rank</h2>
        </div>

        <div className="flex-1 overflow-hidden">
          <Table className="w-full h-full">
            <TableHeader>
              <TableRow className="border-b border-stone-700 bg-stone-800/50 h-10">
                <TableHead className="font-semibold text-stone-100 py-2 px-3 text-xs">Candidate</TableHead>
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