import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import type { ProjectItem } from '../data/portfolioData';
import { EditorialImage } from './EditorialImage';

interface ProjectCaseStudyModalProps {
  project: ProjectItem | null;
  allProjects: ProjectItem[];
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onStartInquiryForProject: (projectTitle: string) => void;
}

type CaseStudyTab = 'overview' | 'system' | 'deliverables';

export function ProjectCaseStudyModal({
  project,
  allProjects,
  onClose,
  onSelectProject,
  onStartInquiryForProject,
}: ProjectCaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<CaseStudyTab>('overview');

  useEffect(() => {
    setActiveTab('overview');
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-6 lg:p-10"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-[1160px] flex-col overflow-hidden border border-[rgba(255,255,255,0.12)] bg-[#0B0B0C] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Case Study Bar */}
        <div className="flex items-center justify-between gap-4 border-b border-[rgba(255,255,255,0.08)] bg-[#121214] px-6 py-4">
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em]">
            <span className="display-condensed tabular-nums text-2xl text-[#E11D23]">
              {project.number}
            </span>
            <span className="text-[#8E8E93]">/</span>
            <span className="text-[#F5F5F7]">{project.tag}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project case study"
            className="flex h-9 w-9 items-center justify-center border border-[rgba(255,255,255,0.12)] bg-[#0B0B0C] text-[#F5F5F7] transition-colors hover:border-[#E11D23] hover:text-[#E11D23] focus-visible:outline-2 focus-visible:outline-[#E11D23]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable Case Study Content */}
        <div className="overflow-y-auto p-6 sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Media Frame */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#121214]">
                <EditorialImage
                  src={project.image}
                  alt={project.imageAlt}
                  fallbackCode={project.number}
                  fallbackLabel={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Outcome Metrics Strip */}
              <div className="mt-4 grid grid-cols-3 border border-[rgba(255,255,255,0.08)] bg-[#121214]">
                {project.outcomes.map((outcome, idx) => (
                  <div
                    key={outcome.label}
                    className={`p-4 ${
                      idx < project.outcomes.length - 1
                        ? 'border-r border-[rgba(255,255,255,0.08)]'
                        : ''
                    }`}
                  >
                    <div className="display-condensed tabular-nums text-2xl text-[#E11D23]">
                      {outcome.value}
                    </div>
                    <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8E8E93]">
                      {outcome.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Editorial Narrative */}
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#E11D23]">
                  <span>{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{project.year}</span>
                </div>

                <h2
                  id="case-study-title"
                  className="display-condensed text-4xl leading-[0.94] text-[#F5F5F7] sm:text-5xl"
                >
                  {project.title}
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-[#8E8E93]">
                  {project.summary}
                </p>

                {/* Metadata List */}
                <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-[rgba(255,255,255,0.08)] py-4 text-xs">
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8E8E93]">
                      CLIENT / CONTEXT
                    </dt>
                    <dd className="mt-1 font-medium text-[#F5F5F7]">
                      {project.client}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8E8E93]">
                      ROLE
                    </dt>
                    <dd className="mt-1 font-medium text-[#F5F5F7]">
                      {project.role}
                    </dd>
                  </div>
                </dl>

                {/* Case Study Section Tabs */}
                <div className="mt-6 flex border-b border-[rgba(255,255,255,0.08)]">
                  {(
                    [
                      { id: 'overview', label: 'Challenge & Solution' },
                      { id: 'system', label: 'Visual System' },
                      { id: 'deliverables', label: 'Deliverables' },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`border-b-2 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] whitespace-nowrap transition-colors ${
                        activeTab === tab.id
                          ? 'border-[#E11D23] text-[#F5F5F7]'
                          : 'border-transparent text-[#8E8E93] hover:text-[#F5F5F7]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Panel Content */}
                <div className="mt-5 min-h-[150px]">
                  {activeTab === 'overview' && (
                    <div className="space-y-4 text-xs leading-relaxed">
                      <div>
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#E11D23]">
                          THE CHALLENGE
                        </h3>
                        <p className="mt-1 text-[#8E8E93]">{project.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#E11D23]">
                          DESIGN SOLUTION
                        </h3>
                        <p className="mt-1 text-[#F5F5F7]/90">
                          {project.solution}
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'system' && (
                    <div className="space-y-4">
                      <div>
                        <h3 className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#E11D23]">
                          COLOR TOKENS
                        </h3>
                        <div className="grid grid-cols-4 gap-2">
                          {project.palette.map((hex) => (
                            <div
                              key={hex}
                              className="border border-[rgba(255,255,255,0.1)] p-2"
                            >
                              <div
                                className="h-8 w-full border border-white/10"
                                style={{ backgroundColor: hex }}
                              />
                              <span className="tabular-nums mt-1.5 block text-[10px] font-medium text-[#8E8E93]">
                                {hex}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#E11D23]">
                          TOOLS &amp; DISCIPLINES
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool) => (
                            <span
                              key={tool}
                              className="border border-[rgba(255,255,255,0.08)] bg-[#141416] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#F5F5F7]"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'deliverables' && (
                    <ul className="space-y-2.5 text-xs text-[#F5F5F7]/90">
                      {project.deliverables.map((item, idx) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 border-b border-[rgba(255,255,255,0.06)] pb-2.5"
                        >
                          <span className="display-condensed tabular-nums text-base text-[#E11D23]">
                            0{idx + 1}
                          </span>
                          <span className="pt-0.5">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4">
                <button
                  type="button"
                  onClick={() => onStartInquiryForProject(project.title)}
                  className="w-full border border-[#E11D23] bg-[#E11D23] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#c0171c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E11D23]"
                >
                  Request Similar Design Project
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Next / Prev Navigation */}
        <div className="flex items-center justify-between border-t border-[rgba(255,255,255,0.08)] bg-[#121214] px-6 py-4">
          <button
            type="button"
            onClick={() => onSelectProject(prevProject)}
            className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8E8E93] transition-colors hover:text-[#F5F5F7]"
          >
            <ArrowLeft className="h-3.5 w-3.5 text-[#E11D23]" />
            <span>
              {prevProject.number} · {prevProject.title}
            </span>
          </button>

          <button
            type="button"
            onClick={() => onSelectProject(nextProject)}
            className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8E8E93] transition-colors hover:text-[#F5F5F7]"
          >
            <span>
              {nextProject.number} · {nextProject.title}
            </span>
            <ArrowRight className="h-3.5 w-3.5 text-[#E11D23]" />
          </button>
        </div>
      </div>
    </div>
  );
}
