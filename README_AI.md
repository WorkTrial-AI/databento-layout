# Bento Design System Documentation

## Core Design Principle: Findings-Focused Cards

**Primary Focus**: Each BentoCard should highlight the most significant positive and negative findings for that metric.

- Use clear visual indicators (green dots for positive, red dots for negative findings)
- Show 1-2 positive findings and 1 negative finding maximum
- Main content area shows findings, score goes in footer section

### Good Example:
```tsx
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
```

## System Requirements

1. **Candidates table always stays centered** (bulletproof 2:3:2 flex ratio)
2. **Bento cards fill all available space** automatically
3. **Even padding maintained** by the layout system
4. **Any number of widgets supported** (1 to 100+)

## Interactive Candidate Selection

- **Default State**: Widgets show aggregate/default metrics
- **Selected State**: Widgets show individual candidate's data
- **Toggle**: Click same candidate twice to unselect

### Selection Flow:
1. User clicks candidate in DataTable
2. Row highlights with blue background
3. All bento widgets update to show candidate's specific metrics
4. Click same candidate again to unselect and return to defaults

## Critical Requirement: Supporting Evidence

**All widgets MUST include supporting evidence/justification, not just raw numbers.**

### Bad Example:
```tsx
content={<div className="text-2xl font-bold text-primary">85%</div>}
```

### Good Example:
```tsx
content={
  <div className="text-center space-y-2">
    <div className="text-3xl font-bold text-primary">85%</div>
    <div className="text-xs text-muted-foreground space-y-1">
      <div>• 12 successful projects completed</div>
      <div>• React & TypeScript expertise</div>
      <div>• Strong GitHub activity</div>
      <div>• 4.8/5 peer reviews</div>
    </div>
  </div>
}
```

## Adding New Widgets

### Step 1: Create Widget Component
```tsx
interface BentoWidgetProps {
  selectedCandidate?: Candidate | null;
}

export function MyNewWidget({ selectedCandidate }: BentoWidgetProps) {
  const displayValue = selectedCandidate?.metrics.myMetric || "Default Value";
  const score = selectedCandidate?.scores.myMetric || "Default Score";
  const personName = selectedCandidate?.name || "Default Person";

  return (
    <BentoCard 
      header="My New Metric"
      content={
        // CRITICAL: ALWAYS include supporting evidence
        <div className="text-center space-y-2">
          <div className="text-3xl font-bold text-primary">{displayValue}</div>
          <div className="text-xs text-muted-foreground space-y-1">
            <div>• Supporting evidence point 1</div>
            <div>• Supporting evidence point 2</div>
            <div>• Supporting evidence point 3</div>
          </div>
        </div>
      }
      contentType="custom"
      score={score}
      personName={personName}
    />
  );
}
```

### Step 2: Add to Widget Array
```tsx
// In app/page.tsx
const bentoWidgets = [
  createBentoConfig('my-widget', <MyNewWidget selectedCandidate={selectedCandidate} />),
  // Add as many or as few widgets as needed
];
```
## Automatic Layout Algorithm

The system automatically handles widget placement:

1. **Premium space**: Fill spots directly next to center table (max 2 per side)
2. **Smart distribution**: Remaining widgets distributed above/below center
3. **Perfect space utilization**: Every pixel optimally filled
4. **Candidate data propagation**: All widgets receive selection state

### Layout Structure:
```
TOP SECTION (auto-expands)
├── Distributed widgets

CENTER SECTION (320px fixed)
├── Job Requirements (flex-2)
├── CANDIDATES TABLE (flex-3) ← ALWAYS CENTERED
└── Premium widgets (flex-2)

BOTTOM SECTION (auto-expands)
└── Distributed widgets
```

## Widget Count Flexibility

- **Quick assessment**: 3-5 widgets
- **Standard evaluation**: 8-12 widgets
- **Comprehensive analysis**: 15-25 widgets
- **Deep research**: 30+ widgets

The system automatically adapts to any number of widgets.

## Key Components

- **BentoLayoutEngine** - Handles automatic layout logic
- **createBentoConfig** - Helper for widget configuration
- **BentoCard** - Base component for consistent styling
- **Widget Components** - Individual reusable components with candidate support
- **DataTable** - Interactive candidate selection table

## Directory Structure

```
components/
├── layout/
│   └── bento-layout-engine.tsx
├── widgets/
│   ├── bento-card.tsx
│   └── bento-widgets.tsx
├── tables/
│   └── data-table.tsx
├── sections/
│   └── job-requirements.tsx
└── ui/
    └── (shadcn/ui components)
```

## Evidence Categories

**Code Quality**: Test coverage, code review scores, architecture patterns, documentation quality
**Technical Skills**: Technologies used, project complexity, experience years, certifications
**Collaboration**: Team feedback, communication frequency, mentoring activities
**Leadership**: Team size led, project ownership, initiative examples, decision-making

## State Management

- **Central State**: `selectedCandidate` in main page component
- **Callback System**: DataTable calls `onCandidateSelect` when clicked
- **Automatic Propagation**: All widgets receive `selectedCandidate` prop
- **Type Safety**: Full TypeScript support throughout 