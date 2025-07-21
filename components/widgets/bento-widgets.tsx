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
 * Shows percentage improvement in team performance with supporting evidence
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
        <div className="text-center space-y-2">
          <div className="text-3xl font-bold text-primary">{displayValue}</div>
          <div className="text-xs text-muted-foreground space-y-1">
            <div>• Led 8 major projects</div>
            <div>• Improved delivery speed</div>
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
 * Shows number of active candidates with pipeline breakdown
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
        <div className="space-y-2">
          <div className="text-3xl font-bold text-primary text-center">{displayValue}</div>
          <div className="space-y-1 text-xs text-muted-foreground">
            <div className="flex justify-between">
              <span>In Review</span>
              <span className="text-primary">89</span>
            </div>
            <div className="flex justify-between">
              <span>Final Round</span>
              <span className="text-primary">28</span>
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
 * Shows percentage of candidates proceeding to interview with breakdown
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
        <div className="text-center space-y-2">
          <div className="text-3xl font-bold text-primary">{displayValue}</div>
          <div className="text-xs text-muted-foreground space-y-1">
            <div>• 156 reviewed</div>
            <div>• 114 interviewed</div>
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
 * Shows overall success rate with conversion metrics
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
        <div className="space-y-2">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-1">{displayValue}</div>
            <div className="text-muted-foreground text-sm">Conversion Rate</div>
          </div>
          <div className="space-y-1 text-xs text-muted-foreground">
            <div className="flex justify-between">
              <span>Offer Acceptance</span>
              <span className="text-primary">94%</span>
            </div>
            <div className="flex justify-between">
              <span>First Day Show</span>
              <span className="text-primary">91%</span>
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
 * Shows AI system performance with detailed metrics
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
        <div className="space-y-2">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent mx-auto mb-2 flex items-center justify-center">
              <span className="font-bold text-primary-foreground">AI</span>
            </div>
            <div className="text-sm font-medium text-primary">{displayValue}</div>
          </div>
          <div className="space-y-1 text-xs text-muted-foreground">
            <div className="flex justify-between">
              <span>Match Accuracy</span>
              <span className="text-primary">96%</span>
            </div>
            <div className="flex justify-between">
              <span>Skills Analysis</span>
              <span className="text-primary">Active</span>
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
 * Shows hires achieved with progress breakdown
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
        <div className="space-y-2">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-1">{displayValue}</div>
            <div className="text-muted-foreground text-sm">Hires this month</div>
          </div>
          <div className="space-y-1 text-xs text-muted-foreground">
            <div className="flex justify-between">
              <span>Target</span>
              <span className="text-primary">20</span>
            </div>
            <div className="flex justify-between">
              <span>Progress</span>
              <span className="text-primary">75%</span>
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
 * Shows pipeline status with key health indicators
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
        <div className="text-center space-y-2">
          <div className="text-2xl font-bold text-primary">{displayValue}</div>
          <div className="text-xs text-muted-foreground space-y-1">
            <div>• Steady candidate flow</div>
            <div>• Strong conversion rates</div>
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
 * Shows average response time with breakdown by stage
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
        <div className="space-y-2">
          <div className="text-2xl font-bold text-primary text-center">{displayValue}</div>
          <div className="space-y-1 text-xs text-muted-foreground">
            <div className="flex justify-between">
              <span>Initial Review</span>
              <span className="text-primary">1.2h</span>
            </div>
            <div className="flex justify-between">
              <span>Feedback Delivery</span>
              <span className="text-primary">4.5h</span>
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
 * Shows overall quality rating with assessment breakdown
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
        <div className="space-y-2">
          <div className="text-2xl font-bold text-primary text-center">{displayValue}</div>
          <div className="space-y-1 text-xs text-muted-foreground">
            <div className="flex justify-between">
              <span>Skills Match</span>
              <span className="text-primary">9.5</span>
            </div>
            <div className="flex justify-between">
              <span>Culture Fit</span>
              <span className="text-primary">8.9</span>
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
 * Shows team efficiency with productivity metrics
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
        <div className="text-center space-y-2">
          <div className="text-2xl font-bold text-primary">{displayValue}</div>
          <div className="text-xs text-muted-foreground space-y-1">
            <div>• Streamlined processes</div>
            <div>• Effective communication</div>
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
        <div className="text-center space-y-2">
          <div className="text-xl font-bold text-primary">{displayValue}</div>
          <div className="text-xs text-muted-foreground space-y-1">
            <div>• Easy to extend</div>
            <div>• Flexible framework</div>
            <div>• Rich evidence support</div>
            <div>• AI-friendly design</div>
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
 * Shows satisfaction rating with feedback breakdown
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
          <div className="text-xl font-bold text-primary text-center">{displayValue}</div>
          <div className="space-y-1 text-xs text-muted-foreground">
            <div className="flex justify-between">
              <span>Process Rating</span>
              <span className="text-primary">9.9</span>
            </div>
            <div className="flex justify-between">
              <span>Communication</span>
              <span className="text-primary">9.8</span>
            </div>
            <div className="flex justify-between">
              <span>Timeline</span>
              <span className="text-primary">9.7</span>
            </div>
            <div className="text-center mt-2 text-muted-foreground">
              Outstanding feedback
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