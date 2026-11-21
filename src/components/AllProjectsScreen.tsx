import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import type { ProjectCategory, ProjectItem } from '../data/portfolioData';
import { EditorialImage } from './EditorialImage';

interface AllProjectsScreenProps {
  projects: ProjectItem[];
  onBackOverview: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onOpenInquiry: () => void;
}

const CATEGORIES: ('All' | ProjectCategory)[] = [
  'All',
  'Web Design',
  'Visual Campaign',
  'UI Exploration',
];

export function AllProjectsScreen({
  projects,
  onBackOverview,
  onSelectProject,
  onOpenInquiry,
}: AllProjectsScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | ProjectCategory>('All');

  const filtered =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="min-h-[85vh] border-b border-[rgba(255,255,255,0.08)] bg-[#0B0B0C] py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Archive Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 border-b border-[rgba(255,255,255,0.08)] pb-8 lg:flex-row lg:items-end">
          <div>
            <button
              type="button"
              onClick={onBackOverview}
              className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8E8E93] transition-colors hover:text-[#E11D23] focus-visible:outline-2 focus-visible:outline-[#E11D23]"
            >
              <ArrowLeft className="h-3.5 w-3.5 text-[#E11D23]" />
              <span>BACK TO OVERVIEW</span>
            </button>
            <h1 className="display-condensed text-5xl leading-[0.9] text-[#F5F5F7] sm:text-6xl">
              PROJECTS ARCHIVE
            </h1>
            <p className="mt-3 max-w-[46ch] text-xs leading-relaxed text-[#8E8E93] sm:text-[13px]">
              Selected web design concepts, visual branding campaigns from
              PT.INTENS, and editorial UI explorations crafted in Figma and
              Canva.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`border px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] whitespace-nowrap transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#E11D23] ${
                    isActive
                      ? 'border-[#E11D23] bg-[#E11D23] text-white'
                      : 'border-[rgba(255,255,255,0.08)] bg-[#121214] text-[#8E8E93] hover:border-[#E11D23] hover:text-[#F5F5F7]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Archive Count Bar */}
        <div className="mb-8 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8E8E93]">
          <span className="tabular-nums">
            SHOWING 0{filtered.length} OF 0{projects.length} WORKS
          </span>
          <button
            type="button"
            onClick={onOpenInquiry}
            className="text-[#E11D23] transition-colors hover:text-[#F5F5F7]"
          >
            COMMISSION A PROJECT →
          </button>
        </div>

        {/* Archive Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <article key={project.id} className="group flex flex-col">
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className="flex w-full flex-col text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E11D23]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#121214] transition-colors group-hover:border-[rgba(225,29,35,0.45)]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 z-10 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-70"
                  />
                  <EditorialImage
                    src={project.image}
                    alt={project.imageAlt}
                    fallbackCode={project.number}
                    fallbackLabel={project.title}
                    className={`h-full w-full object-cover transition-all duration-300 group-hover:scale-105 ${
                      project.grayscaleDefault
                        ? 'contrast-125 grayscale group-hover:grayscale-0'
                        : 'contrast-115'
                    }`}
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span
                      className={`inline-block border bg-black/80 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.2em] ${
                        project.tagTone === 'crimson'
                          ? 'border-[#E11D23]/30 text-[#E11D23]'
                          : 'border-white/20 text-[#F5F5F7]'
                      }`}
                    >
                      {project.tag}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex w-full items-center justify-between">
                  <div className="flex items-baseline gap-3.5">
                    <span className="display-condensed tabular-nums text-3xl font-bold text-[#E11D23]">
                      {project.number}
                    </span>
                    <div>
                      <h2 className="text-sm font-bold uppercase tracking-wider text-[#F5F5F7] transition-colors group-hover:text-[#E11D23]">
                        {project.title}
                      </h2>
                      <p className="text-[10px] uppercase tracking-[0.14em] text-[#8E8E93]">
                        {project.subtitle} · {project.year}
                      </p>
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    className="text-lg text-[#8E8E93] transition-all group-hover:translate-x-1.5 group-hover:text-[#E11D23]"
                  >
                    →
                  </span>
                </div>

                <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-[#8E8E93]">
                  {project.summary}
                </p>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
