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
 * Shows significant positive and negative findings about team performance
 * Default: +12% | Candidate-specific: candidate.metrics.teamPerformance
 */
export function TeamPerformanceWidget({ selectedCandidate }: BentoWidgetProps) {
  const displayValue = selectedCandidate?.metrics.teamPerformance || "+12%";
  const score = selectedCandidate?.scores.teamPerformance || "8.5/10";
  const personName = selectedCandidate?.name || "Sarah M.";

  return (
    <BentoCard 
      header="Team Performance"
      content={
        <div className="space-y-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-card-foreground">Strong project leadership</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-card-foreground">Improved delivery speed</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-destructive"></div>
              <span className="text-sm text-muted-foreground">Limited cross-team experience</span>
            </div>
          </div>
        </div>
      }
      contentType="custom"
      score={score}
      personName={personName}
    />
  );
}

/**
 * ACTIVE CANDIDATES WIDGET
 * Shows significant findings about candidate pipeline health
 * Default: 247 | Candidate-specific: candidate.metrics.activeCandidates
 */
export function ActiveCandidatesWidget({ selectedCandidate }: BentoWidgetProps) {
  const displayValue = selectedCandidate?.metrics.activeCandidates || "247";
  const score = selectedCandidate?.scores.activeCandidates || "95%";
  const personName = selectedCandidate?.name || "Mike R.";

  return (
    <BentoCard 
      header="Active Candidates"
      content={
        <div className="space-y-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-card-foreground">Strong pipeline flow</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-card-foreground">High final round volume</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-destructive"></div>
              <span className="text-sm text-muted-foreground">Interview bottleneck</span>
            </div>
          </div>
        </div>
      }
      contentType="custom"
      score={score}
      personName={personName}
    />
  );
}

/**
 * INTERVIEW RATE WIDGET
 * Shows significant findings about interview process effectiveness
 * Default: 73% | Candidate-specific: candidate.metrics.interviewRate
 */
export function InterviewRateWidget({ selectedCandidate }: BentoWidgetProps) {
  const displayValue = selectedCandidate?.metrics.interviewRate || "73%";
  const score = selectedCandidate?.scores.interviewRate || "A+";
  const personName = selectedCandidate?.name || "Lisa K.";

  return (
    <BentoCard 
      header="Interview Rate"
      content={
        <div className="space-y-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-card-foreground">Efficient screening process</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-card-foreground">High conversion rate</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-destructive"></div>
              <span className="text-sm text-muted-foreground">Long scheduling delays</span>
            </div>
          </div>
        </div>
      }
      contentType="custom"
      score={score}
      personName={personName}
    />
  );
}

/**
 * SUCCESS RATE WIDGET
 * Shows significant findings about overall success and conversion
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
        <div className="space-y-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-card-foreground">Excellent offer acceptance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-card-foreground">Strong first day show rate</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-destructive"></div>
              <span className="text-sm text-muted-foreground">Retention needs improvement</span>
            </div>
          </div>
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
 * Shows significant findings about AI system performance
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
        <div className="space-y-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-card-foreground">High matching accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-card-foreground">Bias detection active</span>
            </div>
          </div>
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
 * Shows significant findings about recruitment progress
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
        <div className="space-y-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-card-foreground">On track for monthly target</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-card-foreground">Quality hires maintained</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-destructive"></div>
              <span className="text-sm text-muted-foreground">Pace needs acceleration</span>
            </div>
          </div>
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
 * Shows significant findings about recruitment pipeline status
 * Default: Excellent | Candidate-specific: candidate.metrics.pipelineHealth
 */
export function PipelineHealthWidget({ selectedCandidate }: BentoWidgetProps) {
  const displayValue = selectedCandidate?.metrics.pipelineHealth || "Excellent";
  const score = selectedCandidate?.scores.pipelineHealth || "A";
  const personName = selectedCandidate?.name || "Tom B.";

  return (
    <BentoCard 
      header="Pipeline Health"
      content={
        <div className="space-y-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-card-foreground">Consistent candidate flow</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-card-foreground">Strong conversion rates</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-destructive"></div>
              <span className="text-sm text-muted-foreground">Junior roles understaffed</span>
            </div>
          </div>
        </div>
      }
      contentType="custom"
      score={score}
      personName={personName}
    />
  );
}

/**
 * RESPONSE TIME WIDGET
 * Shows significant findings about response and communication timing
 * Default: 2.3h | Candidate-specific: candidate.metrics.responseTime
 */
export function ResponseTimeWidget({ selectedCandidate }: BentoWidgetProps) {
  const displayValue = selectedCandidate?.metrics.responseTime || "2.3h";
  const score = selectedCandidate?.scores.responseTime || "Fast";
  const personName = selectedCandidate?.name || "Nina P.";

  return (
    <BentoCard 
      header="Response Time"
      content={
        <div className="space-y-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-card-foreground">Fast initial review</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-card-foreground">Above industry standard</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-destructive"></div>
              <span className="text-sm text-muted-foreground">Slow feedback delivery</span>
            </div>
          </div>
        </div>
      }
      contentType="custom"
      score={score}
      personName={personName}
    />
  );
}

/**
 * QUALITY SCORE WIDGET
 * Shows significant findings about overall quality assessment
 * Default: 9.1 | Candidate-specific: candidate.metrics.qualityScore
 */
export function QualityScoreWidget({ selectedCandidate }: BentoWidgetProps) {
  const displayValue = selectedCandidate?.metrics.qualityScore || "9.1";
  const score = selectedCandidate?.scores.qualityScore || "High";
  const personName = selectedCandidate?.name || "Ryan S.";

  return (
    <BentoCard 
      header="Quality Score"
      content={
        <div className="space-y-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-card-foreground">Excellent skills match</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-card-foreground">Strong cultural alignment</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-destructive"></div>
              <span className="text-sm text-muted-foreground">Limited leadership experience</span>
            </div>
          </div>
        </div>
      }
      contentType="custom"
      score={score}
      personName={personName}
    />
  );
}

/**
 * TEAM EFFICIENCY WIDGET
 * Shows significant findings about team productivity and effectiveness
 * Default: 94% | Candidate-specific: candidate.metrics.teamEfficiency
 */
export function TeamEfficiencyWidget({ selectedCandidate }: BentoWidgetProps) {
  const displayValue = selectedCandidate?.metrics.teamEfficiency || "94%";
  const score = selectedCandidate?.scores.teamEfficiency || "High";
  const personName = selectedCandidate?.name || "Maya L.";

  return (
    <BentoCard 
      header="Team Efficiency"
      content={
        <div className="space-y-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-card-foreground">Streamlined processes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-card-foreground">Clear communication</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-destructive"></div>
              <span className="text-sm text-muted-foreground">Knowledge silos present</span>
            </div>
          </div>
        </div>
      }
      contentType="custom"
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
      content={
        <div className="space-y-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-card-foreground">Easy to extend</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-card-foreground">AI-friendly design</span>
            </div>
          </div>
        </div>
      }
      contentType="custom"
      score={score}
      personName={personName}
    />
  );
}

/**
 * SATISFACTION WIDGET
 * Shows significant findings about satisfaction and feedback
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
      content={
        <div className="space-y-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-card-foreground">Outstanding feedback</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-card-foreground">Clear communication</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-destructive"></div>
              <span className="text-sm text-muted-foreground">Timeline concerns raised</span>
            </div>
          </div>
        </div>
      }
      contentType="custom"
      score={score}
      personName={personName}
    />
  );
} 