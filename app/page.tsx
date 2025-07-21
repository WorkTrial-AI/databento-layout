"use client";

import { useState } from "react";
import { DataTable, Candidate } from "@/components/tables/data-table";
import { JobRequirements } from "@/components/sections/job-requirements";
import { BentoLayoutEngine, createBentoConfig } from "@/components/layout/bento-layout-engine";
import {
  TeamPerformanceWidget,
  ActiveCandidatesWidget,
  InterviewRateWidget,
  SuccessRateWidget,
  AIInsightsWidget,
  RecruitmentGoalWidget,
  PipelineHealthWidget,
  ResponseTimeWidget,
  QualityScoreWidget,
  TeamEfficiencyWidget,
  NewMetricWidget,
  SatisfactionWidget
} from "@/components/widgets/bento-widgets";

/**
 * MAIN DASHBOARD PAGE
 * 
 * STATE MANAGEMENT:
 * - selectedCandidate: Currently selected candidate from the DataTable
 * - When null: All bento widgets show default/aggregate data
 * - When set: All bento widgets show candidate-specific metrics
 * 
 * INTERACTION FLOW:
 * 1. User clicks on a candidate in the DataTable
 * 2. If candidate not selected: Selects them and highlights the row
 * 3. If candidate already selected: Unselects them (toggles off)
 * 4. handleCandidateSelect updates selectedCandidate state
 * 5. All bento widgets automatically re-render with candidate's data or default data
 * 6. Selected candidate is highlighted in the table (or no highlight when unselected)
 * 
 * This architecture allows easy extension by:
 * - Adding new widgets that accept selectedCandidate prop
 * - Adding new candidate metrics to the Candidate interface
 * - Adding new interaction patterns (e.g., candidate comparison)
 */
export default function Home() {
  // STATE: Currently selected candidate for bento card updates
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  /**
   * CANDIDATE SELECTION HANDLER
   * Called when user clicks on a candidate in the DataTable
   * - If candidate is provided: Updates all bento widgets to show candidate-specific data
   * - If null is provided: Resets all bento widgets to show default/aggregate data
   * - Supports toggle behavior: clicking the same candidate twice will unselect them
   */
  const handleCandidateSelect = (candidate: Candidate | null) => {
    setSelectedCandidate(candidate);
  };

  /**
   * BENTO WIDGET CONFIGURATION
   * Each widget now receives the selectedCandidate prop
   * Algorithm automatically determines optimal placement for ALL widgets!
   */
  const bentoWidgets = [
    createBentoConfig('team-performance', 
      <TeamPerformanceWidget selectedCandidate={selectedCandidate} />
    ),
    createBentoConfig('active-candidates', 
      <ActiveCandidatesWidget selectedCandidate={selectedCandidate} />
    ),
    createBentoConfig('interview-rate', 
      <InterviewRateWidget selectedCandidate={selectedCandidate} />
    ),
    createBentoConfig('success-rate', 
      <SuccessRateWidget selectedCandidate={selectedCandidate} />
    ),
    createBentoConfig('ai-insights', 
      <AIInsightsWidget selectedCandidate={selectedCandidate} />
    ),
    createBentoConfig('pipeline-health', 
      <PipelineHealthWidget selectedCandidate={selectedCandidate} />
    ),
    createBentoConfig('response-time', 
      <ResponseTimeWidget selectedCandidate={selectedCandidate} />
    ),
    createBentoConfig('quality-score', 
      <QualityScoreWidget selectedCandidate={selectedCandidate} />
    ),
    createBentoConfig('team-efficiency', 
      <TeamEfficiencyWidget selectedCandidate={selectedCandidate} />
    ),
    // NEW WIDGETS - Just add them here! Algorithm handles everything automatically
    // Uncomment these to add more widgets to the dashboard
    // createBentoConfig('new-metric', 
    //   <NewMetricWidget selectedCandidate={selectedCandidate} />
    // ),
    // createBentoConfig('satisfaction', 
    //   <SatisfactionWidget selectedCandidate={selectedCandidate} />
    // ),
  ];

  return (
    <BentoLayoutEngine
      bentoComponents={bentoWidgets}
      centerComponent={
        <DataTable 
          selectedCandidateId={selectedCandidate?.id}
          onCandidateSelect={handleCandidateSelect}
        />
      }
      leftComponent={<JobRequirements />}
      centerHeight="320px"
    />
  );
}
