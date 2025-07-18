"use client";

import { DataTable } from "@/components/tables/data-table";
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

export default function Home() {
  // CONFIGURATION - This is all an AI needs to modify to add/remove widgets!
  const bentoWidgets = [
    // Algorithm automatically determines optimal placement for ALL widgets!
    createBentoConfig('team-performance', <TeamPerformanceWidget />),
    createBentoConfig('active-candidates', <ActiveCandidatesWidget />),
    createBentoConfig('interview-rate', <InterviewRateWidget />),
    createBentoConfig('success-rate', <SuccessRateWidget />),
    createBentoConfig('ai-insights', <AIInsightsWidget />),
    createBentoConfig('pipeline-health', <PipelineHealthWidget />),
    createBentoConfig('response-time', <ResponseTimeWidget />),
    createBentoConfig('quality-score', <QualityScoreWidget />),
    createBentoConfig('team-efficiency', <TeamEfficiencyWidget />),
    // NEW WIDGETS - Just add them here! Algorithm handles everything automatically
    // createBentoConfig('new-metric', <NewMetricWidget />),
    // createBentoConfig('satisfaction', <SatisfactionWidget />),
  ];

  return (
    <BentoLayoutEngine
      bentoComponents={bentoWidgets}
      centerComponent={<DataTable />}
      leftComponent={<JobRequirements />}
      centerHeight="320px"
    />
  );
}
