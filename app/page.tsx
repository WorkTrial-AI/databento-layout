import Image from "next/image";
import { DataTable } from "@/components/custom/data-table";
import { JobRequirements } from "@/components/custom/job-requirements";
import { BentoCard } from "@/components/custom/bento-card";
import { 
  FlexBento, 
  FlexBentoSmall, 
  FlexBentoMedium, 
  FlexBentoLarge, 
  FlexBentoXLarge 
} from "@/components/custom/flex-bento";

export default function Home() {
  // Fixed height for candidates table - header + 5 rows + padding (increased to show all 5)
  const candidatesHeight = "320px"; // Sized to definitely show all 5 candidates

  return (
    <div className="h-screen bg-stone-900 p-2 overflow-hidden">
      <div className="w-full h-full flex flex-col gap-2">
        
        {/* Top Section - Expands to fill all space above center */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex gap-2 h-full">
            <FlexBentoSmall>
              <BentoCard 
                header="Team Performance"
                content={<div className="text-2xl font-bold text-emerald-300">+12%</div>}
                contentType="text"
                score="8.5/10"
                personName="Sarah M."
              />
            </FlexBentoSmall>

            <FlexBentoMedium>
              <BentoCard 
                header="Active Candidates"
                content={<div className="text-3xl font-bold text-blue-300">247</div>}
                contentType="text"
                score="95%"
                personName="Mike R."
              />
            </FlexBentoMedium>

            <FlexBentoSmall>
              <BentoCard 
                header="Interview Rate"
                content={<div className="text-2xl font-bold text-amber-300">73%</div>}
                contentType="text"
                score="A+"
                personName="Lisa K."
              />
            </FlexBentoSmall>

            <FlexBentoMedium>
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
            </FlexBentoMedium>

            <FlexBentoSmall>
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
            </FlexBentoSmall>
          </div>
        </div>

        {/* CENTER SECTION - FIXED HEIGHT for exactly 5 candidates */}
        <div className="flex gap-2" style={{ height: candidatesHeight }}>
          <div className="flex-[2]">
            <JobRequirements />
          </div>

          {/* FIXED CANDIDATES TABLE - Center of screen, narrower width */}
          <div className="flex-[3]">
            <DataTable />
          </div>

          <div className="flex-[2]">
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
          </div>
        </div>

        {/* Bottom Section - Expands to fill all space below center */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex gap-2 h-full">
            <FlexBentoSmall>
              <BentoCard 
                header="Pipeline Health"
                content={<div className="text-lg font-bold text-green-300">Excellent</div>}
                contentType="text"
                score="A"
                personName="Tom B."
              />
            </FlexBentoSmall>

            <FlexBentoSmall>
              <BentoCard 
                header="Response Time"
                content={<div className="text-lg font-bold text-blue-300">2.3h</div>}
                contentType="text"
                score="Fast"
                personName="Nina P."
              />
            </FlexBentoSmall>

            <FlexBentoSmall>
              <BentoCard 
                header="Quality Score"
                content={<div className="text-xl font-bold text-purple-300">9.1</div>}
                contentType="text"
                score="High"
                personName="Ryan S."
              />
            </FlexBentoSmall>

            <FlexBentoSmall>
              <BentoCard 
                header="Team Efficiency"
                content={<div className="text-lg font-bold text-green-300">94%</div>}
                contentType="text"
                score="High"
                personName="Maya L."
              />
            </FlexBentoSmall>
          </div>
        </div>

      </div>
    </div>
  );
}
