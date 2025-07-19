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
  },
  {
    id: "6",
    name: "Frank Rodriguez",
    email: "frank.rodriguez@email.com",
    jobRelevanceRank: 6,
    linkedinUrl: "https://linkedin.com/in/frank-rodriguez"
  },
  {
    id: "7",
    name: "Grace Chen",
    email: "grace.chen@email.com",
    jobRelevanceRank: 7,
    linkedinUrl: "https://linkedin.com/in/grace-chen"
  },
  {
    id: "8",
    name: "Henry Kumar",
    email: "henry.kumar@email.com",
    jobRelevanceRank: 8,
    linkedinUrl: "https://linkedin.com/in/henry-kumar"
  },
  {
    id: "9",
    name: "Isabella Martinez",
    email: "isabella.martinez@email.com",
    jobRelevanceRank: 9,
    linkedinUrl: "https://linkedin.com/in/isabella-martinez"
  },
  {
    id: "10",
    name: "James Anderson",
    email: "james.anderson@email.com",
    jobRelevanceRank: 10,
    linkedinUrl: "https://linkedin.com/in/james-anderson"
  },
  {
    id: "11",
    name: "Katherine Lee",
    email: "katherine.lee@email.com",
    jobRelevanceRank: 11,
    linkedinUrl: "https://linkedin.com/in/katherine-lee"
  },
  {
    id: "12",
    name: "Lucas Brown",
    email: "lucas.brown@email.com",
    jobRelevanceRank: 12,
    linkedinUrl: "https://linkedin.com/in/lucas-brown"
  },
  {
    id: "13",
    name: "Maya Patel",
    email: "maya.patel@email.com",
    jobRelevanceRank: 13,
    linkedinUrl: "https://linkedin.com/in/maya-patel"
  },
  {
    id: "14",
    name: "Nathan Wright",
    email: "nathan.wright@email.com",
    jobRelevanceRank: 14,
    linkedinUrl: "https://linkedin.com/in/nathan-wright"
  },
  {
    id: "15",
    name: "Olivia Taylor",
    email: "olivia.taylor@email.com",
    jobRelevanceRank: 15,
    linkedinUrl: "https://linkedin.com/in/olivia-taylor"
  }
];

export function DataTable({ className }: DataTableProps) {
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
                {candidateData.map((candidate) => (
                  <TableRow
                    key={candidate.id}
                    className="border-b hover:bg-muted/50 transition-colors h-12"
                  >
                    <TableCell className="py-2 px-3">
                      <div className="flex flex-col">
                        <span className="font-medium text-card-foreground text-xs leading-tight">
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
                        onClick={() => window.open(candidate.linkedinUrl, '_blank')}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Link
                      </Button>
                    </TableCell>
                    <TableCell className="py-2 px-3">
                      <Button
                        size="sm"
                        className="bg-secondary hover:bg-secondary/80 text-secondary-foreground h-6 px-2 text-xs"
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
    </div>
  );
} 