"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface BentoConfig {
  id: string;
  component: ReactNode;
  // No position or size properties - algorithm determines everything automatically!
}

interface BentoLayoutEngineProps {
  bentoComponents: BentoConfig[];
  centerComponent: ReactNode;
  centerHeight?: string;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
  className?: string;
}



// ACTUALLY smart distribution - use horizontal space efficiently!
const distributeIntoRows = (components: BentoConfig[], totalAvailableWidth: number): BentoConfig[][] => {
  if (components.length === 0) return [];
  
  // SMART RULE: Try to fit as many as possible horizontally first
  // Most screens can easily fit 5-6 widgets horizontally with flex-1
  const maxWidgetsPerRow = 6; // Reasonable limit for horizontal layout
  
  if (components.length <= maxWidgetsPerRow) {
    // Put ALL widgets in a single horizontal row - much better space usage!
    return [components];
  } else {
    // Only split if we have too many widgets for one row
    const rowCount = Math.ceil(components.length / maxWidgetsPerRow);
    const rows: BentoConfig[][] = [];
    
    for (let i = 0; i < rowCount; i++) {
      const start = i * maxWidgetsPerRow;
      const end = Math.min(start + maxWidgetsPerRow, components.length);
      rows.push(components.slice(start, end));
    }
    
    return rows;
  }
};

export function BentoLayoutEngine({
  bentoComponents,
  centerComponent,
  centerHeight = "320px",
  leftComponent,
  rightComponent,
  className
}: BentoLayoutEngineProps) {
  // FULLY AUTOMATIC ALGORITHM: Optimal placement for ALL widgets
  let allWidgets = [...bentoComponents];
  let assignedLeftWidgets: BentoConfig[] = [];
  let assignedRightWidgets: BentoConfig[] = [];
  
  // Calculate premium space next to center (most valuable real estate)
  const leftSlots = leftComponent ? 0 : 2;   // Max 2 widgets left of center
  const rightSlots = rightComponent ? 0 : 2; // Max 2 widgets right of center
  
  // STEP 1: Fill the most valuable space first (directly next to center)
  if (leftSlots > 0 && allWidgets.length > 0) {
    assignedLeftWidgets = allWidgets.splice(0, Math.min(leftSlots, allWidgets.length));
  }
  
  if (rightSlots > 0 && allWidgets.length > 0) {
    assignedRightWidgets = allWidgets.splice(0, Math.min(rightSlots, allWidgets.length));
  }
  
  // STEP 2: Intelligently distribute remaining widgets above/below center
  const remainingWidgets = allWidgets;
  let topComponents: BentoConfig[] = [];
  let bottomComponents: BentoConfig[] = [];
  
  if (remainingWidgets.length === 0) {
    // All widgets fit next to center - perfect!
    topComponents = [];
    bottomComponents = [];
  } else if (remainingWidgets.length <= 6) {
    // Moderate number: favor top section (premium space above fold)
    const topCount = Math.ceil(remainingWidgets.length * 0.6); // 60% to top
    topComponents = remainingWidgets.slice(0, topCount);
    bottomComponents = remainingWidgets.slice(topCount);
  } else {
    // Many widgets: distribute evenly for balance
    const mid = Math.ceil(remainingWidgets.length / 2);
    topComponents = remainingWidgets.slice(0, mid);
    bottomComponents = remainingWidgets.slice(mid);
  }

  // Auto-distribute into optimal rows
  const topRows = distributeIntoRows(topComponents, 7);
  const bottomRows = distributeIntoRows(bottomComponents, 7);

  // Render a row of widgets that automatically expand to fill ALL available space
  const renderBentoRow = (components: BentoConfig[], key: string) => {
    if (components.length === 0) return null;

    return (
      <div key={key} className="flex gap-4 h-full">
        {components.map((config) => (
          <div
            key={config.id}
            className="h-full flex-1" // flex-1 makes each widget expand equally
          >
            {config.component}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("h-screen p-4", className)}>
      <div className="w-full h-full flex flex-col gap-4 min-h-0">
        
        {/* TOP SECTION - Widgets above center, properly constrained */}
        {topComponents.length > 0 && (
          <div className="flex-1 flex flex-col gap-4 min-h-0">
            {topRows.map((row, index) => renderBentoRow(row, `top-row-${index}`))}
          </div>
        )}

        {/* CENTER SECTION - Fixed candidates table with smart widget placement */}
        <div className="flex gap-4 flex-shrink-0" style={{ height: centerHeight }}>
          {/* LEFT SIDE - Either leftComponent or assigned widgets stacked vertically */}
          <div className="flex-[2] min-w-0">
            {leftComponent ? (
              leftComponent
            ) : assignedLeftWidgets.length > 0 ? (
              <div className="flex flex-col gap-4 h-full">
                {assignedLeftWidgets.map((config) => (
                  <div key={config.id} className="flex-1 min-h-0">
                    {config.component}
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {/* CENTER COMPONENT - ALWAYS PERFECTLY CENTERED */}
          <div className="flex-[3] min-w-0 flex justify-center">
            <div className="w-full">
              {centerComponent}
            </div>
          </div>

          {/* RIGHT SIDE - Either rightComponent or assigned widgets stacked vertically */}
          <div className="flex-[2] min-w-0">
            {rightComponent ? (
              rightComponent
            ) : assignedRightWidgets.length > 0 ? (
              <div className="flex flex-col gap-4 h-full">
                {assignedRightWidgets.map((config) => (
                  <div key={config.id} className="flex-1 min-h-0">
                    {config.component}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {/* BOTTOM SECTION - Widgets below center, properly constrained within remaining space */}
        {bottomComponents.length > 0 && (
          <div className="flex-1 flex flex-col gap-4 min-h-0">
            {bottomRows.map((row, index) => renderBentoRow(row, `bottom-row-${index}`))}
          </div>
        )}

      </div>
    </div>
  );
}

// Helper function to create bento configs - algorithm handles everything!
export const createBentoConfig = (
  id: string, 
  component: ReactNode
): BentoConfig => ({
  id,
  component
}); 