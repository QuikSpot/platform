'use client';

export interface WizardSection {
  id: string;
  label: string;
  stepCount: number;
}

interface ProgressBarProps {
  sections: WizardSection[];
  globalStepIndex: number;
}

export function ProgressBar({ sections, globalStepIndex }: ProgressBarProps) {
  let cursor = 0;

  return (
    <div className="flex gap-1.5 w-full">
      {sections.map(section => {
        const start = cursor;
        cursor += section.stepCount;
        const end = cursor;

        let fill = 0;
        if (globalStepIndex >= end) fill = 1;
        else if (globalStepIndex >= start) fill = (globalStepIndex - start + 1) / section.stepCount;

        return (
          <div key={section.id} className="flex-1 h-1.5 rounded-full bg-slate-200/70 overflow-hidden">
            <div
              className="h-full rounded-full bg-[#1aae74] transition-all duration-500 ease-out"
              style={{ width: `${fill * 100}%` }}
            />
          </div>
        );
      })}
    </div>
  );
}
