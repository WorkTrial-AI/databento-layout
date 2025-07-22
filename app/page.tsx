"use client";

import { useState, useEffect } from "react";
import { DataTable, Candidate } from "@/components/tables/data-table";
import { JobRequirements } from "@/components/sections/job-requirements";
import { BentoConfig, BentoLayoutEngine, createBentoConfig } from "@/components/layout/bento-layout-engine";
import { TeamPerformanceWidget } from "@/components/widgets/bento-widgets";

interface Config {
  jobRequirements: string[];
  techSkills: string[];
  candidates: Candidate[];
}

export default function Home() {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [config, setConfig] = useState<Config>({ jobRequirements: [], techSkills: [], candidates: [] });

  useEffect(() => {
    fetch("/config.json")
      .then((res) => res.json())
      .then((data) => setConfig(data));
  }, []);

  const handleCandidateSelect = (candidate: Candidate | null) => {
    setSelectedCandidate(candidate);
  };

  // No widgets by default
  const bentoWidgets: BentoConfig[] = [
  ];

  return (
    <BentoLayoutEngine
      bentoComponents={bentoWidgets}
      centerComponent={
        <DataTable 
          selectedCandidateId={selectedCandidate?.id}
          onCandidateSelect={handleCandidateSelect}
          candidates={config.candidates}
        />
      }
      leftComponent={<JobRequirements requirements={config.jobRequirements} techSkills={config.techSkills} />}
      centerHeight="320px"
    />
  );
}
