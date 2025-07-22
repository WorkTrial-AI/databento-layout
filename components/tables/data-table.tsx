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

/**
 * CANDIDATE DATA STRUCTURE
 * This defines the complete profile for each candidate including all metrics
 * that will be displayed in the bento cards
 */
export interface Candidate {
  id: string;
  name: string;
  email: string;
  jobRelevanceRank: number;
  linkedinUrl: string;
  // Detailed metrics for bento card display
  metrics: {
    teamPerformance: string;
    activeCandidates: string;
    interviewRate: string;
    successRate: string;
    aiInsights: string;
    recruitmentGoal: string;
    pipelineHealth: string;
    responseTime: string;
    qualityScore: string;
    teamEfficiency: string;
  };
  // Scores for each metric (used in bento card footers)
  scores: {
    teamPerformance: string;
    activeCandidates: string;
    interviewRate: string;
    successRate: string;
    aiInsights: string;
    recruitmentGoal: string;
    pipelineHealth: string;
    responseTime: string;
    qualityScore: string;
    teamEfficiency: string;
  };
}

interface DataTableProps {
  className?: string;
  selectedCandidateId?: string;
  onCandidateSelect?: (candidate: Candidate | null) => void;
  candidates: Candidate[];
}

export function DataTable({ className, selectedCandidateId, onCandidateSelect, candidates }: DataTableProps) {
  /**
   * CANDIDATE SELECTION HANDLER
   * When a candidate is clicked, this function:
   * 1. If candidate is already selected: Unselects them (sets to null)
   * 2. If candidate is not selected: Selects them
   * 3. Calls the parent callback to update all bento cards
   * This allows users to toggle selection on/off by clicking the same candidate
   */
  const handleCandidateClick = (candidate: Candidate) => {
    if (onCandidateSelect) {
      // Toggle selection: if already selected, unselect (null), otherwise select
      const newSelection = selectedCandidateId === candidate.id ? null : candidate;
      onCandidateSelect(newSelection);
    }
  };

  const handleContact = (candidate: Candidate) => {
    const subject = encodeURIComponent(`Regarding your application - ${candidate.name}`);
    const body = encodeURIComponent(`Hi ${candidate.name},\n\nI hope this email finds you well.\n\nBest regards`);
    window.open(`mailto:${candidate.email}?subject=${subject}&body=${body}`);
  };

  const getRankColor = (rank: number): string => {
    if (rank <= 2) return "text-primary";
    if (rank <= 4) return "text-primary";
    return "text-destructive";
  };

  const getRankBgColor = (rank: number): string => {
    if (rank <= 2) return "bg-primary/20";
    if (rank <= 4) return "bg-accent";
    return "bg-destructive/20";
  };

  return (
    <div className={cn("w-full h-full", className)}>
      <div className="rounded-md border bg-card shadow-lg w-full h-full flex flex-col overflow-hidden border-primary">
        <div className="p-3 border-b flex-shrink-0">
          <h2 className="text-sm font-semibold text-card-foreground">Candidates Rank</h2>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Fixed Header */}
          <div className="flex-shrink-0 border-b bg-muted">
            <Table>
              <TableHeader>
                <TableRow className="h-10">
                  <TableHead className="font-semibold text-card-foreground py-2 px-3 text-xs">Candidate</TableHead>
                  <TableHead className="font-semibold text-card-foreground py-2 px-3 text-xs">Rank</TableHead>
                  <TableHead className="font-semibold text-card-foreground py-2 px-3 text-xs">LinkedIn</TableHead>
                  <TableHead className="font-semibold text-card-foreground py-2 px-3 text-xs">Contact</TableHead>
                </TableRow>
              </TableHeader>
            </Table>
          </div>

          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto">
            <Table>
              <TableBody>
                {candidates.map((candidate) => (
                  <TableRow
                    key={candidate.id}
                    className={cn(
                      "border-b transition-colors h-12 cursor-pointer",
                      selectedCandidateId === candidate.id 
                        ? "bg-primary/20 hover:bg-primary/30" // Highlighted when selected
                        : "hover:bg-muted/50" // Default hover
                    )}
                    onClick={() => handleCandidateClick(candidate)}
                  >
                    <TableCell className="py-2 px-3">
                      <div className="flex flex-col">
                        <span className={cn(
                          "font-medium text-xs leading-tight",
                          selectedCandidateId === candidate.id 
                            ? "text-primary font-bold" // Bold when selected
                            : "text-card-foreground"
                        )}>
                          {candidate.name}
                        </span>
                        <span className="text-xs text-muted-foreground leading-tight">
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
                        className="text-primary hover:text-primary/80 hover:bg-muted h-6 px-2 text-xs"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent row click when clicking LinkedIn
                          window.open(candidate.linkedinUrl, '_blank');
                        }}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Link
                      </Button>
                    </TableCell>
                    <TableCell className="py-2 px-3">
                      <Button
                        size="sm"
                        className="bg-secondary hover:bg-secondary/80 text-secondary-foreground h-6 px-2 text-xs"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent row click when clicking Mail
                          handleContact(candidate);
                        }}
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
    </div>
  );
} 