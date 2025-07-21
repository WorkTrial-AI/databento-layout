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
}

/**
 * COMPREHENSIVE CANDIDATE DATABASE
 * Each candidate has detailed metrics and scores for all dashboard categories
 * This allows dynamic updates of bento cards based on candidate selection
 */
const candidateData: Candidate[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice.johnson@email.com",
    jobRelevanceRank: 1,
    linkedinUrl: "https://linkedin.com/in/alice-johnson",
    metrics: {
      teamPerformance: "+18%",
      activeCandidates: "156",
      interviewRate: "89%",
      successRate: "94%",
      aiInsights: "Perfect",
      recruitmentGoal: "22",
      pipelineHealth: "Excellent",
      responseTime: "1.2h",
      qualityScore: "9.8",
      teamEfficiency: "96%"
    },
    scores: {
      teamPerformance: "9.5/10",
      activeCandidates: "98%",
      interviewRate: "A+",
      successRate: "9.8/10",
      aiInsights: "99%",
      recruitmentGoal: "85%",
      pipelineHealth: "A+",
      responseTime: "Excellent",
      qualityScore: "High",
      teamEfficiency: "High"
    }
  },
  {
    id: "2",
    name: "Bob Smith", 
    email: "bob.smith@email.com",
    jobRelevanceRank: 2,
    linkedinUrl: "https://linkedin.com/in/bob-smith",
    metrics: {
      teamPerformance: "+12%",
      activeCandidates: "247",
      interviewRate: "73%",
      successRate: "89%",
      aiInsights: "Ready",
      recruitmentGoal: "15",
      pipelineHealth: "Excellent",
      responseTime: "2.3h",
      qualityScore: "9.1",
      teamEfficiency: "94%"
    },
    scores: {
      teamPerformance: "8.5/10",
      activeCandidates: "95%",
      interviewRate: "A+",
      successRate: "9.2/10",
      aiInsights: "98%",
      recruitmentGoal: "75%",
      pipelineHealth: "A",
      responseTime: "Fast",
      qualityScore: "High",
      teamEfficiency: "High"
    }
  },
  {
    id: "3",
    name: "Carol Davis",
    email: "carol.davis@email.com", 
    jobRelevanceRank: 3,
    linkedinUrl: "https://linkedin.com/in/carol-davis",
    metrics: {
      teamPerformance: "+8%",
      activeCandidates: "189",
      interviewRate: "67%",
      successRate: "82%",
      aiInsights: "Good",
      recruitmentGoal: "12",
      pipelineHealth: "Good",
      responseTime: "3.1h",
      qualityScore: "8.7",
      teamEfficiency: "88%"
    },
    scores: {
      teamPerformance: "7.8/10",
      activeCandidates: "85%",
      interviewRate: "B+",
      successRate: "8.5/10",
      aiInsights: "85%",
      recruitmentGoal: "60%",
      pipelineHealth: "B+",
      responseTime: "Good",
      qualityScore: "Good",
      teamEfficiency: "Good"
    }
  },
  {
    id: "4",
    name: "David Wilson",
    email: "david.wilson@email.com",
    jobRelevanceRank: 4,
    linkedinUrl: "https://linkedin.com/in/david-wilson",
    metrics: {
      teamPerformance: "+15%",
      activeCandidates: "198",
      interviewRate: "78%",
      successRate: "91%",
      aiInsights: "Great",
      recruitmentGoal: "18",
      pipelineHealth: "Great",
      responseTime: "1.8h",
      qualityScore: "9.3",
      teamEfficiency: "92%"
    },
    scores: {
      teamPerformance: "9.0/10",
      activeCandidates: "90%",
      interviewRate: "A",
      successRate: "9.5/10",
      aiInsights: "95%",
      recruitmentGoal: "80%",
      pipelineHealth: "A",
      responseTime: "Great",
      qualityScore: "High",
      teamEfficiency: "High"
    }
  },
  {
    id: "5",
    name: "Emma Thompson",
    email: "emma.thompson@email.com",
    jobRelevanceRank: 5,
    linkedinUrl: "https://linkedin.com/in/emma-thompson",
    metrics: {
      teamPerformance: "+6%",
      activeCandidates: "134",
      interviewRate: "58%",
      successRate: "76%",
      aiInsights: "Fair",
      recruitmentGoal: "9",
      pipelineHealth: "Fair",
      responseTime: "4.2h",
      qualityScore: "7.9",
      teamEfficiency: "79%"
    },
    scores: {
      teamPerformance: "6.5/10",
      activeCandidates: "70%",
      interviewRate: "B",
      successRate: "7.8/10",
      aiInsights: "75%",
      recruitmentGoal: "45%",
      pipelineHealth: "B",
      responseTime: "Fair",
      qualityScore: "Fair",
      teamEfficiency: "Fair"
    }
  },
  // Adding more candidates with varied performance metrics
  {
    id: "6",
    name: "Frank Rodriguez",
    email: "frank.rodriguez@email.com",
    jobRelevanceRank: 6,
    linkedinUrl: "https://linkedin.com/in/frank-rodriguez",
    metrics: {
      teamPerformance: "+11%",
      activeCandidates: "223",
      interviewRate: "71%",
      successRate: "85%",
      aiInsights: "Good",
      recruitmentGoal: "14",
      pipelineHealth: "Good",
      responseTime: "2.7h",
      qualityScore: "8.8",
      teamEfficiency: "91%"
    },
    scores: {
      teamPerformance: "8.2/10",
      activeCandidates: "88%",
      interviewRate: "A-",
      successRate: "8.8/10",
      aiInsights: "88%",
      recruitmentGoal: "70%",
      pipelineHealth: "B+",
      responseTime: "Good",
      qualityScore: "Good",
      teamEfficiency: "Good"
    }
  },
  {
    id: "7",
    name: "Grace Chen",
    email: "grace.chen@email.com",
    jobRelevanceRank: 7,
    linkedinUrl: "https://linkedin.com/in/grace-chen",
    metrics: {
      teamPerformance: "+14%",
      activeCandidates: "267",
      interviewRate: "82%",
      successRate: "88%",
      aiInsights: "Great",
      recruitmentGoal: "19",
      pipelineHealth: "Great",
      responseTime: "1.9h",
      qualityScore: "9.0",
      teamEfficiency: "93%"
    },
    scores: {
      teamPerformance: "8.8/10",
      activeCandidates: "92%",
      interviewRate: "A",
      successRate: "9.1/10",
      aiInsights: "92%",
      recruitmentGoal: "78%",
      pipelineHealth: "A-",
      responseTime: "Great",
      qualityScore: "High",
      teamEfficiency: "High"
    }
  },
  // Continue with remaining candidates with similar detailed data...
  {
    id: "8",
    name: "Henry Kumar",
    email: "henry.kumar@email.com",
    jobRelevanceRank: 8,
    linkedinUrl: "https://linkedin.com/in/henry-kumar",
    metrics: {
      teamPerformance: "+5%",
      activeCandidates: "98",
      interviewRate: "52%",
      successRate: "71%",
      aiInsights: "Fair",
      recruitmentGoal: "7",
      pipelineHealth: "Fair",
      responseTime: "5.1h",
      qualityScore: "7.2",
      teamEfficiency: "76%"
    },
    scores: {
      teamPerformance: "6.0/10",
      activeCandidates: "65%",
      interviewRate: "C+",
      successRate: "7.2/10",
      aiInsights: "70%",
      recruitmentGoal: "35%",
      pipelineHealth: "C+",
      responseTime: "Slow",
      qualityScore: "Fair",
      teamEfficiency: "Fair"
    }
  },
  {
    id: "9",
    name: "Isabella Martinez",
    email: "isabella.martinez@email.com",
    jobRelevanceRank: 9,
    linkedinUrl: "https://linkedin.com/in/isabella-martinez",
    metrics: {
      teamPerformance: "+9%",
      activeCandidates: "178",
      interviewRate: "65%",
      successRate: "79%",
      aiInsights: "Good",
      recruitmentGoal: "11",
      pipelineHealth: "Good",
      responseTime: "3.4h",
      qualityScore: "8.3",
      teamEfficiency: "84%"
    },
    scores: {
      teamPerformance: "7.5/10",
      activeCandidates: "78%",
      interviewRate: "B",
      successRate: "8.1/10",
      aiInsights: "82%",
      recruitmentGoal: "55%",
      pipelineHealth: "B",
      responseTime: "Fair",
      qualityScore: "Good",
      teamEfficiency: "Good"
    }
  },
  {
    id: "10",
    name: "James Anderson",
    email: "james.anderson@email.com",
    jobRelevanceRank: 10,
    linkedinUrl: "https://linkedin.com/in/james-anderson",
    metrics: {
      teamPerformance: "+13%",
      activeCandidates: "234",
      interviewRate: "76%",
      successRate: "87%",
      aiInsights: "Great",
      recruitmentGoal: "17",
      pipelineHealth: "Great",
      responseTime: "2.1h",
      qualityScore: "8.9",
      teamEfficiency: "90%"
    },
    scores: {
      teamPerformance: "8.6/10",
      activeCandidates: "89%",
      interviewRate: "A-",
      successRate: "9.0/10",
      aiInsights: "90%",
      recruitmentGoal: "72%",
      pipelineHealth: "A-",
      responseTime: "Good",
      qualityScore: "Good",
      teamEfficiency: "Good"
    }
  },
  {
    id: "11",
    name: "Katherine Lee",
    email: "katherine.lee@email.com",
    jobRelevanceRank: 11,
    linkedinUrl: "https://linkedin.com/in/katherine-lee",
    metrics: {
      teamPerformance: "+7%",
      activeCandidates: "145",
      interviewRate: "61%",
      successRate: "74%",
      aiInsights: "Fair",
      recruitmentGoal: "8",
      pipelineHealth: "Fair",
      responseTime: "3.8h",
      qualityScore: "7.6",
      teamEfficiency: "81%"
    },
    scores: {
      teamPerformance: "6.8/10",
      activeCandidates: "72%",
      interviewRate: "B-",
      successRate: "7.5/10",
      aiInsights: "76%",
      recruitmentGoal: "40%",
      pipelineHealth: "B-",
      responseTime: "Fair",
      qualityScore: "Fair",
      teamEfficiency: "Fair"
    }
  },
  {
    id: "12",
    name: "Lucas Brown",
    email: "lucas.brown@email.com",
    jobRelevanceRank: 12,
    linkedinUrl: "https://linkedin.com/in/lucas-brown",
    metrics: {
      teamPerformance: "+10%",
      activeCandidates: "201",
      interviewRate: "69%",
      successRate: "83%",
      aiInsights: "Good",
      recruitmentGoal: "13",
      pipelineHealth: "Good",
      responseTime: "2.9h",
      qualityScore: "8.5",
      teamEfficiency: "87%"
    },
    scores: {
      teamPerformance: "8.0/10",
      activeCandidates: "82%",
      interviewRate: "B+",
      successRate: "8.6/10",
      aiInsights: "84%",
      recruitmentGoal: "65%",
      pipelineHealth: "B+",
      responseTime: "Good",
      qualityScore: "Good",
      teamEfficiency: "Good"
    }
  },
  {
    id: "13",
    name: "Maya Patel",
    email: "maya.patel@email.com",
    jobRelevanceRank: 13,
    linkedinUrl: "https://linkedin.com/in/maya-patel",
    metrics: {
      teamPerformance: "+16%",
      activeCandidates: "289",
      interviewRate: "84%",
      successRate: "92%",
      aiInsights: "Excellent",
      recruitmentGoal: "21",
      pipelineHealth: "Excellent",
      responseTime: "1.5h",
      qualityScore: "9.4",
      teamEfficiency: "95%"
    },
    scores: {
      teamPerformance: "9.2/10",
      activeCandidates: "96%",
      interviewRate: "A+",
      successRate: "9.6/10",
      aiInsights: "96%",
      recruitmentGoal: "82%",
      pipelineHealth: "A+",
      responseTime: "Excellent",
      qualityScore: "High",
      teamEfficiency: "High"
    }
  },
  {
    id: "14",
    name: "Nathan Wright",
    email: "nathan.wright@email.com",
    jobRelevanceRank: 14,
    linkedinUrl: "https://linkedin.com/in/nathan-wright",
    metrics: {
      teamPerformance: "+4%",
      activeCandidates: "87",
      interviewRate: "48%",
      successRate: "68%",
      aiInsights: "Poor",
      recruitmentGoal: "5",
      pipelineHealth: "Poor",
      responseTime: "6.2h",
      qualityScore: "6.8",
      teamEfficiency: "72%"
    },
    scores: {
      teamPerformance: "5.5/10",
      activeCandidates: "58%",
      interviewRate: "C",
      successRate: "6.8/10",
      aiInsights: "65%",
      recruitmentGoal: "25%",
      pipelineHealth: "C",
      responseTime: "Slow",
      qualityScore: "Poor",
      teamEfficiency: "Poor"
    }
  },
  {
    id: "15",
    name: "Olivia Taylor",
    email: "olivia.taylor@email.com",
    jobRelevanceRank: 15,
    linkedinUrl: "https://linkedin.com/in/olivia-taylor",
    metrics: {
      teamPerformance: "+17%",
      activeCandidates: "312",
      interviewRate: "91%",
      successRate: "96%",
      aiInsights: "Perfect",
      recruitmentGoal: "24",
      pipelineHealth: "Perfect",
      responseTime: "0.9h",
      qualityScore: "9.9",
      teamEfficiency: "98%"
    },
    scores: {
      teamPerformance: "9.7/10",
      activeCandidates: "99%",
      interviewRate: "A+",
      successRate: "9.9/10",
      aiInsights: "99%",
      recruitmentGoal: "90%",
      pipelineHealth: "A+",
      responseTime: "Perfect",
      qualityScore: "Perfect",
      teamEfficiency: "Perfect"
    }
  }
];

export function DataTable({ className, selectedCandidateId, onCandidateSelect }: DataTableProps) {
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
                {candidateData.map((candidate) => (
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

// Export the candidateData for use in other components
export { candidateData }; 