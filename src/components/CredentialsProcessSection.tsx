import { useState } from 'react';
import { Code2, Layers, PenLine, Search, Send } from 'lucide-react';
import {
  EDUCATION_ITEMS,
  EXPERIENCE_ITEMS,
  PROFILE,
  SKILLS_LIST,
  WORK_PROCESS_STEPS,
  type ProcessStep,
} from '../data/portfolioData';

interface CredentialsProcessSectionProps {
  activeSkillFilter: string | null;
  onToggleSkillFilter: (skill: string) => void;
  onOpenInquiry: () => void;
}

function ProcessIcon({ name }: { name: ProcessStep['iconName'] }) {
  const cls = 'h-3.5 w-3.5 text-white';
  switch (name) {
    case 'search':
      return <Search className={cls} strokeWidth={2} />;
    case 'pen':
      return <PenLine className={cls} strokeWidth={2} />;
    case 'layers':
      return <Layers className={cls} strokeWidth={2} />;
    case 'code':
      return <Code2 className={cls} strokeWidth={2} />;
    case 'send':
      return <Send className={cls} strokeWidth={2} />;
  }
}

export function CredentialsProcessSection({
  activeSkillFilter,
  onToggleSkillFilter,
  onOpenInquiry,
}: CredentialsProcessSectionProps) {
  const [expandedStep, setExpandedStep] = useState<string>('03');
  const [expandedCredential, setExpandedCredential] = useState<string | null>(null);

  return (
    <section
      id="credentials"
      className="border-b border-[rgba(255,255,255,0.08)] bg-[#0B0B0C]"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-12">
        {/* COLUMN 1: Education, Experience & Skills */}
        <div className="flex flex-col justify-between border-b border-[rgba(255,255,255,0.08)] p-8 sm:p-12 lg:col-span-5 lg:border-r lg:border-b-0">
          <div>
            <h2 className="display-condensed mb-8 text-2xl tracking-wider text-[#F5F5F7] sm:text-3xl">
              EDUCATION &amp; SKILLS
            </h2>

            {/* Subsection: Education */}
            <div className="mb-7">
              <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.18em] text-[#E11D23]">
                EDUCATION
              </span>
              <div className="space-y-3">
                {EDUCATION_ITEMS.map((item) => {
                  const isOpen = expandedCredential === item.title;
                  return (
                    <div
                      key={item.title}
                      className="border-b border-[rgba(255,255,255,0.06)] pb-3"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedCredential(isOpen ? null : item.title)
                        }
                        className="flex w-full items-start justify-between gap-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E11D23]"
                      >
                        <div>
                          <h3 className="text-xs font-bold text-[#F5F5F7] transition-colors hover:text-[#E11D23]">
                            {item.title}
                          </h3>
                          <p className="text-[11px] text-[#8E8E93]">
                            {item.organization}
                          </p>
                        </div>
                        <span className="tabular-nums shrink-0 text-[11px] font-semibold whitespace-nowrap text-[#E11D23]">
                          {item.period}
                        </span>
                      </button>
                      {isOpen && (
                        <p className="mt-2 text-[11px] leading-relaxed text-[#8E8E93]">
                          {item.description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Subsection: Experience */}
            <div className="mb-8">
              <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.18em] text-[#E11D23]">
                EXPERIENCE
              </span>
              <div className="space-y-3">
                {EXPERIENCE_ITEMS.map((item) => {
                  const isOpen = expandedCredential === item.title;
                  return (
                    <div
                      key={item.title}
                      className="border-b border-[rgba(255,255,255,0.06)] pb-3"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedCredential(isOpen ? null : item.title)
                        }
                        className="flex w-full items-start justify-between gap-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E11D23]"
                      >
                        <div>
                          <h3 className="text-xs font-bold text-[#F5F5F7] transition-colors hover:text-[#E11D23]">
                            {item.title}
                          </h3>
                          <p className="text-[11px] text-[#8E8E93]">
                            {item.organization}
                          </p>
                        </div>
                        <span className="tabular-nums shrink-0 text-[11px] font-semibold whitespace-nowrap text-[#8E8E93]">
                          {item.period}
                        </span>
                      </button>
                      {isOpen && (
                        <p className="mt-2 text-[11px] leading-relaxed text-[#8E8E93]">
                          {item.description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Subsection: Interactive Skills Filter Blocks */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E11D23]">
                SKILLS &amp; TOOLS
              </span>
              {activeSkillFilter && (
                <span className="text-[10px] uppercase tracking-[0.12em] text-[#8E8E93]">
                  Filtering projects
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {SKILLS_LIST.map((skill) => {
                const isActive = activeSkillFilter === skill;
                return (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => onToggleSkillFilter(skill)}
                    aria-pressed={isActive}
                    className={`border px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E11D23] ${
                      isActive
                        ? 'border-[#E11D23] bg-[#E11D23] text-white'
                        : 'border-[rgba(255,255,255,0.08)] bg-[#141416] text-[#F5F5F7] hover:border-[#E11D23] hover:text-[#E11D23]'
                    }`}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* COLUMN 2: Work Process Timeline */}
        <div
          id="process"
          className="border-b border-[rgba(255,255,255,0.08)] p-8 sm:p-12 lg:col-span-4 lg:border-r lg:border-b-0"
        >
          <h2 className="display-condensed mb-8 text-2xl tracking-wider text-[#F5F5F7] sm:text-3xl">
            WORK PROCESS
          </h2>

          <div className="relative space-y-6 before:absolute before:top-4 before:bottom-4 before:left-[43px] before:w-[1px] before:bg-[rgba(255,255,255,0.1)]">
            {WORK_PROCESS_STEPS.map((step) => {
              const isExpanded = expandedStep === step.number;
              return (
                <div key={step.number} className="relative">
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedStep(isExpanded ? '' : step.number)
                    }
                    aria-expanded={isExpanded}
                    className="group relative flex w-full items-start gap-4 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E11D23]"
                  >
                    <span className="display-condensed tabular-nums w-6 shrink-0 pt-1 text-xl font-bold text-[#E11D23]">
                      {step.number}
                    </span>
                    <div
                      className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-150 ${
                        isExpanded
                          ? 'border-[#E11D23] bg-[#E11D23]/25'
                          : 'border-[#E11D23]/50 bg-[#121214] group-hover:border-[#E11D23]'
                      }`}
                    >
                      <ProcessIcon name={step.iconName} />
                    </div>
                    <div className="pt-0.5">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#E11D23]">
                        {step.title}
                      </h3>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-[#8E8E93]">
                        {step.summary}
                      </p>
                      {isExpanded && (
                        <p className="mt-2 border-t border-[rgba(255,255,255,0.06)] pt-2 text-[11px] leading-relaxed text-[#F5F5F7]/90">
                          Output: {step.deliverable}
                        </p>
                      )}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* COLUMN 3: Crimson Editorial Quote Card */}
        <div className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#4A090B] via-[#1C0506] to-[#0E0B0C] p-8 sm:p-12 lg:col-span-3">
          <div>
            <div
              aria-hidden="true"
              className="-mb-3 font-serif text-7xl leading-none text-[#E11D23] select-none"
            >
              “
            </div>
            <blockquote className="mb-6 text-lg leading-relaxed font-medium text-[#F5F5F7] sm:text-xl">
              {PROFILE.quote}
            </blockquote>
            <div className="script-text text-3xl font-normal text-white/90">
              {PROFILE.signature}
            </div>
          </div>

          <div className="pt-12">
            <button
              type="button"
              onClick={onOpenInquiry}
              className="group text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E11D23]"
            >
              <span className="block text-[11px] leading-snug font-bold uppercase tracking-[0.16em] text-[#F5F5F7] transition-colors group-hover:text-[#E11D23]">
                {PROFILE.quoteClosing}
              </span>
              <span
                aria-hidden="true"
                className="mt-2 block text-sm text-[#E11D23]"
              >
                ✦
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
