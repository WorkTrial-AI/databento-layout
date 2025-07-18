"use client";

import { BentoCard } from "./bento-card";

// Individual Bento Widget Components

export function TeamPerformanceWidget() {
  return (
    <BentoCard 
      header="Team Performance"
      content={<div className="text-2xl font-bold text-emerald-300">+12%</div>}
      contentType="text"
      score="8.5/10"
      personName="Sarah M."
    />
  );
}

export function ActiveCandidatesWidget() {
  return (
    <BentoCard 
      header="Active Candidates"
      content={<div className="text-3xl font-bold text-blue-300">247</div>}
      contentType="text"
      score="95%"
      personName="Mike R."
    />
  );
}

export function InterviewRateWidget() {
  return (
    <BentoCard 
      header="Interview Rate"
      content={<div className="text-2xl font-bold text-amber-300">73%</div>}
      contentType="text"
      score="A+"
      personName="Lisa K."
    />
  );
}

export function SuccessRateWidget() {
  return (
    <BentoCard 
      header="Success Rate"
      content={
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-300 mb-2">89%</div>
          <div className="text-stone-300">Conversion Rate</div>
        </div>
      }
      contentType="custom"
      score="9.2/10"
      personName="David L."
    />
  );
}

export function AIInsightsWidget() {
  return (
    <BentoCard 
      header="AI Insights"
      content={
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-2 flex items-center justify-center">
            <span className="text-white font-bold">AI</span>
          </div>
          <div className="text-stone-300 text-xs">Ready</div>
        </div>
      }
      contentType="custom"
      score="98%"
      personName="Emma W."
    />
  );
}

export function RecruitmentGoalWidget() {
  return (
    <BentoCard 
      header="Recruitment Goal"
      content={
        <div className="text-center">
          <div className="text-4xl font-bold text-emerald-300 mb-4">15</div>
          <div className="text-stone-400 text-lg">Hires this month</div>
        </div>
      }
      contentType="custom"
      score="75%"
      personName="Alex T."
    />
  );
}

export function PipelineHealthWidget() {
  return (
    <BentoCard 
      header="Pipeline Health"
      content={<div className="text-lg font-bold text-green-300">Excellent</div>}
      contentType="text"
      score="A"
      personName="Tom B."
    />
  );
}

export function ResponseTimeWidget() {
  return (
    <BentoCard 
      header="Response Time"
      content={<div className="text-lg font-bold text-blue-300">2.3h</div>}
      contentType="text"
      score="Fast"
      personName="Nina P."
    />
  );
}

export function QualityScoreWidget() {
  return (
    <BentoCard 
      header="Quality Score"
      content={<div className="text-xl font-bold text-purple-300">9.1</div>}
      contentType="text"
      score="High"
      personName="Ryan S."
    />
  );
}

export function TeamEfficiencyWidget() {
  return (
    <BentoCard 
      header="Team Efficiency"
      content={<div className="text-lg font-bold text-green-300">94%</div>}
      contentType="text"
      score="High"
      personName="Maya L."
    />
  );
}

// NEW WIDGET EXAMPLE - This is how easy it is to add a new widget!
export function NewMetricWidget() {
  return (
    <BentoCard 
      header="New Metric"
      content={<div className="text-xl font-bold text-cyan-300">Amazing!</div>}
      contentType="text"
      score="100%"
      personName="You!"
    />
  );
}

export function SatisfactionWidget() {
  return (
    <BentoCard 
      header="Satisfaction"
      content={<div className="text-xl font-bold text-emerald-300">9.8</div>}
      contentType="text"
      score="Excellent"
      personName="Jordan M."
    />
  );
} 