# Bento Design System Documentation

## Core Design Principle: Findings-Focused Cards

**Primary Focus**: Each BentoCard should highlight the most significant positive and negative findings for that metric.

- Use clear visual indicators (green dots for positive, red dots for negative findings)
- Show 1-2 positive findings and 1 negative finding maximum
- Main content area shows findings, score goes in footer section

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

## Candidate Ranking System

### How Rankings Work

The `jobRelevanceRank` displayed in the candidates table is calculated as the **average of all category rankings** for each candidate.

**Example Calculation:**
- Candidate A ranks #1 in "Technical Skills Match"
- Candidate A ranks #3 in "GitHub Commits"
- Candidate A ranks #2 in "Code Quality"
- **Final Rank**: (1 + 3 + 2) ÷ 3 = **2.0** (rounded to nearest integer)

### Special Cases
- **Unranked Candidates**: If a candidate has `jobRelevanceRank: -1`, the table displays "Unranked" instead of a number
- **Tied Scores**: Candidates with identical averages may share the same rank

### Data Management Requirements

#### scores.txt File
**CRITICAL**: Maintain a `scores.txt` file that tracks individual category scores for each candidate.

**Format Example:**
```
CANDIDATE_ID | TECHNICAL_MATCH | GITHUB_COMMITS | CODE_QUALITY | TEAM_COLLABORATION | LEADERSHIP_POTENTIAL
candidate-1  | 1               | 3              | 2            | 1                  | 4
candidate-2  | 2               | 1              | 1            | 3                  | 2
candidate-3  | 3               | 2              | 3            | 2                  | 1
```

#### When Adding New Components

**ALWAYS update both files when adding new ranking categories:**

1. **config.json** - Update the actual candidate ranking
2. **scores.txt** - Add the new ranking column for ALL candidates

**Example Workflow:**
```bash
# 1. Add new widget component
# 2. Update config.json with new widget
# 3. Update scores.txt with new ranking column
# 4. Recalculate jobRelevanceRank averages
# 5. Update candidate data with new averages
```

### Ranking Categories

Track separate rankings for each evaluation dimension:
- **Technical Skills Match** - How well skills align with job requirements
- **GitHub Activity** - Commit frequency, repository quality, open source contributions
- **Code Quality** - Code review scores, test coverage, architecture patterns
- **Team Collaboration** - Communication skills, teamwork feedback, mentoring
- **Leadership Potential** - Project ownership, decision-making, team influence
- **Experience Relevance** - Years in relevant technologies, industry experience
- **Cultural Fit** - Values alignment, work style compatibility

### Implementation Notes

- Rankings should be **1-based** (1 = best, higher numbers = lower ranking)
- Calculate averages using **all available category scores**
- Round final averages to **nearest integer** for display
- Store raw averages for tie-breaking if needed
- Update rankings whenever new evaluation data is available

## State Management

- **Central State**: `selectedCandidate` in main page component
- **Callback System**: DataTable calls `onCandidateSelect` when clicked
- **Automatic Propagation**: All widgets receive `selectedCandidate` prop
- **Type Safety**: Full TypeScript support throughout 