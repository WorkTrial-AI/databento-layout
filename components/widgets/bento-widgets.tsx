"use client";

import { BentoCard } from "./bento-card";
import { Candidate } from "@/components/tables/data-table";

/**
 * BENTO WIDGET PROPS INTERFACE
 * Each widget can display either default data or candidate-specific data
 * When selectedCandidate is provided, it shows that candidate's metrics
 * When null/undefined, it shows default/aggregate data
 */
interface BentoWidgetProps {
  selectedCandidate?: Candidate | null;
}

/**
 * TEAM PERFORMANCE WIDGET
 * Shows percentage improvement in team performance
 * Default: +12% | Candidate-specific: candidate.metrics.teamPerformance
 */
export function TeamPerformanceWidget({ selectedCandidate }: BentoWidgetProps) {
  const displayValue = selectedCandidate?.metrics.teamPerformance || "+12%";
  const score = selectedCandidate?.scores.teamPerformance || "8.5/10";
  const personName = selectedCandidate?.name || "Sarah M.";

  return (
    <BentoCard 
      header="Team Performance"
      content={<div className="text-2xl font-bold text-primary">{displayValue}</div>}
      contentType="text"
      score={score}
      personName={personName}
    />
  );
}

/**
 * ACTIVE CANDIDATES WIDGET
 * Shows number of active candidates in pipeline
 * Default: 247 | Candidate-specific: candidate.metrics.activeCandidates
 */
export function ActiveCandidatesWidget({ selectedCandidate }: BentoWidgetProps) {
  const displayValue = selectedCandidate?.metrics.activeCandidates || "247";
  const score = selectedCandidate?.scores.activeCandidates || "95%";
  const personName = selectedCandidate?.name || "Mike R.";

  return (
    <BentoCard 
      header="Active Candidates"
      content={<div className="text-3xl font-bold text-primary">{displayValue}</div>}
      contentType="text"
      score={score}
      personName={personName}
    />
  );
}

/**
 * INTERVIEW RATE WIDGET
 * Shows percentage of candidates that proceed to interview
 * Default: 73% | Candidate-specific: candidate.metrics.interviewRate
 */
export function InterviewRateWidget({ selectedCandidate }: BentoWidgetProps) {
  const displayValue = selectedCandidate?.metrics.interviewRate || "73%";
  const score = selectedCandidate?.scores.interviewRate || "A+";
  const personName = selectedCandidate?.name || "Lisa K.";

  return (
    <BentoCard 
      header="Interview Rate"
      content={<div className="text-2xl font-bold text-primary">{displayValue}</div>}
      contentType="text"
      score={score}
      personName={personName}
    />
  );
}

/**
 * SUCCESS RATE WIDGET
 * Shows overall success rate with conversion rate context
 * Default: 89% | Candidate-specific: candidate.metrics.successRate
 */
export function SuccessRateWidget({ selectedCandidate }: BentoWidgetProps) {
  const displayValue = selectedCandidate?.metrics.successRate || "89%";
  const score = selectedCandidate?.scores.successRate || "9.2/10";
  const personName = selectedCandidate?.name || "David L.";

  return (
    <BentoCard 
      header="Success Rate"
      content={
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">{displayValue}</div>
          <div className="text-muted-foreground">Conversion Rate</div>
        </div>
      }
      contentType="custom"
      score={score}
      personName={personName}
    />
  );
}

/**
 * AI INSIGHTS WIDGET
 * Shows AI system status and readiness
 * Default: Ready | Candidate-specific: candidate.metrics.aiInsights
 */
export function AIInsightsWidget({ selectedCandidate }: BentoWidgetProps) {
  const displayValue = selectedCandidate?.metrics.aiInsights || "Ready";
  const score = selectedCandidate?.scores.aiInsights || "98%";
  const personName = selectedCandidate?.name || "Emma W.";

  return (
    <BentoCard 
      header="AI Insights"
      content={
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent mx-auto mb-2 flex items-center justify-center">
            <span className="font-bold text-primary-foreground">AI</span>
          </div>
          <div className="text-xs text-muted-foreground">{displayValue}</div>
        </div>
      }
      contentType="custom"
      score={score}
      personName={personName}
    />
  );
}

/**
 * RECRUITMENT GOAL WIDGET
 * Shows number of hires achieved this month
 * Default: 15 | Candidate-specific: candidate.metrics.recruitmentGoal
 */
export function RecruitmentGoalWidget({ selectedCandidate }: BentoWidgetProps) {
  const displayValue = selectedCandidate?.metrics.recruitmentGoal || "15";
  const score = selectedCandidate?.scores.recruitmentGoal || "75%";
  const personName = selectedCandidate?.name || "Alex T.";

  return (
    <BentoCard 
      header="Recruitment Goal"
      content={
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-4">{displayValue}</div>
          <div className="text-muted-foreground text-lg">Hires this month</div>
        </div>
      }
      contentType="custom"
      score={score}
      personName={personName}
    />
  );
}

/**
 * PIPELINE HEALTH WIDGET
 * Shows overall health status of recruitment pipeline
 * Default: Excellent | Candidate-specific: candidate.metrics.pipelineHealth
 */
export function PipelineHealthWidget({ selectedCandidate }: BentoWidgetProps) {
  const displayValue = selectedCandidate?.metrics.pipelineHealth || "Excellent";
  const score = selectedCandidate?.scores.pipelineHealth || "A";
  const personName = selectedCandidate?.name || "Tom B.";

  return (
    <BentoCard 
      header="Pipeline Health"
      content={<div className="text-lg font-bold text-primary">{displayValue}</div>}
      contentType="text"
      score={score}
      personName={personName}
    />
  );
}

/**
 * RESPONSE TIME WIDGET
 * Shows average response time to candidates
 * Default: 2.3h | Candidate-specific: candidate.metrics.responseTime
 */
export function ResponseTimeWidget({ selectedCandidate }: BentoWidgetProps) {
  const displayValue = selectedCandidate?.metrics.responseTime || "2.3h";
  const score = selectedCandidate?.scores.responseTime || "Fast";
  const personName = selectedCandidate?.name || "Nina P.";

  return (
    <BentoCard 
      header="Response Time"
      content={<div className="text-lg font-bold text-primary">{displayValue}</div>}
      contentType="text"
      score={score}
      personName={personName}
    />
  );
}

/**
 * QUALITY SCORE WIDGET
 * Shows overall quality rating
 * Default: 9.1 | Candidate-specific: candidate.metrics.qualityScore
 */
export function QualityScoreWidget({ selectedCandidate }: BentoWidgetProps) {
  const displayValue = selectedCandidate?.metrics.qualityScore || "9.1";
  const score = selectedCandidate?.scores.qualityScore || "High";
  const personName = selectedCandidate?.name || "Ryan S.";

  return (
    <BentoCard 
      header="Quality Score"
      content={<div className="text-xl font-bold text-primary">{displayValue}</div>}
      contentType="text"
      score={score}
      personName={personName}
    />
  );
}

/**
 * TEAM EFFICIENCY WIDGET
 * Shows team efficiency percentage
 * Default: 94% | Candidate-specific: candidate.metrics.teamEfficiency
 */
export function TeamEfficiencyWidget({ selectedCandidate }: BentoWidgetProps) {
  const displayValue = selectedCandidate?.metrics.teamEfficiency || "94%";
  const score = selectedCandidate?.scores.teamEfficiency || "High";
  const personName = selectedCandidate?.name || "Maya L.";

  return (
    <BentoCard 
      header="Team Efficiency"
      content={<div className="text-lg font-bold text-primary">{displayValue}</div>}
      contentType="text"
      score={score}
      personName={personName}
    />
  );
}

/**
 * NEW METRIC WIDGET
 * Example widget showing how easy it is to add new widgets
 * This demonstrates the widget system's extensibility
 */
export function NewMetricWidget({ selectedCandidate }: BentoWidgetProps) {
  // For demo widgets without candidate data, show static content
  const displayValue = "Amazing!";
  const score = "100%";
  const personName = selectedCandidate?.name || "You!";

  return (
    <BentoCard 
      header="New Metric"
      content={<div className="text-xl font-bold text-primary">{displayValue}</div>}
      contentType="text"
      score={score}
      personName={personName}
    />
  );
}

/**
 * SATISFACTION WIDGET
 * Shows satisfaction rating
 * Uses same pattern as other widgets for consistency
 */
export function SatisfactionWidget({ selectedCandidate }: BentoWidgetProps) {
  // For demo widgets without candidate data, show static content
  const displayValue = "9.8";
  const score = "Excellent";
  const personName = selectedCandidate?.name || "Jordan M.";

  return (
    <BentoCard 
      header="Satisfaction"
      content={<div className="text-xl font-bold text-primary">{displayValue}</div>}
      contentType="text"
      score={score}
      personName={personName}
    />
  );
} 