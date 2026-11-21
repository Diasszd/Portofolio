import type { ProjectItem } from '../data/portfolioData';
import { EditorialImage } from './EditorialImage';

interface SelectedProjectsProps {
  projects: ProjectItem[];
  activeSkillFilter: string | null;
  onClearSkillFilter: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onViewAllProjects: () => void;
}

export function SelectedProjects({
  projects,
  activeSkillFilter,
  onClearSkillFilter,
  onSelectProject,
  onViewAllProjects,
}: SelectedProjectsProps) {
  const featured = projects.filter((p) => p.featured);
  const displayed = activeSkillFilter
    ? projects.filter((p) => p.skillsUsed.includes(activeSkillFilter))
    : featured;

  return (
    <section
      id="projects"
      className="border-b border-[rgba(255,255,255,0.08)] bg-[#0B0B0C] py-20"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Section Header Row */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(255,255,255,0.08)] pb-4">
          <div className="flex flex-wrap items-baseline gap-4">
            <h2 className="display-condensed text-3xl tracking-wider text-[#F5F5F7] sm:text-4xl">
              SELECTED PROJECTS
            </h2>
            {activeSkillFilter && (
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E11D23]">
                <span>FILTER: {activeSkillFilter}</span>
                <button
                  type="button"
                  onClick={onClearSkillFilter}
                  className="border border-[rgba(255,255,255,0.12)] px-2 py-0.5 text-[10px] text-[#F5F5F7] transition-colors hover:border-[#E11D23] hover:text-[#E11D23]"
                >
                  Clear
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={onViewAllProjects}
            className="group flex shrink-0 items-center gap-2 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#8E8E93] whitespace-nowrap transition-colors duration-150 hover:text-[#E11D23] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E11D23]"
          >
            <span>VIEW ALL PROJECTS</span>
            <span
              aria-hidden="true"
              className="transform transition-transform duration-150 group-hover:translate-x-1"
            >
              →
            </span>
          </button>
        </div>

        {/* 3-Column Project Card Grid */}
        {displayed.length === 0 ? (
          <div className="border border-[rgba(255,255,255,0.08)] bg-[#121214] p-10 text-center">
            <p className="text-sm text-[#8E8E93]">
              No projects match the selected skill filter.
            </p>
            <button
              type="button"
              onClick={onClearSkillFilter}
              className="mt-4 border border-[#E11D23] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#E11D23] transition-colors hover:bg-[#E11D23] hover:text-white"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayed.map((project) => (
              <article key={project.id} className="group flex flex-col">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="flex w-full flex-col text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E11D23]"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-none border border-[rgba(255,255,255,0.08)] bg-[#121214] transition-colors duration-200 group-hover:border-[rgba(225,29,35,0.45)]">
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
                        className={`inline-block px-2 py-1 text-[9px] font-bold uppercase tracking-[0.2em] bg-black/80 border ${
                          project.tagTone === 'crimson'
                            ? 'border-[#E11D23]/30 text-[#E11D23]'
                            : 'border-white/20 text-[#F5F5F7]'
                        }`}
                      >
                        {project.tag}
                      </span>
                    </div>
                  </div>

                  {/* Card Metadata Footer */}
                  <div className="mt-4 flex w-full items-center justify-between">
                    <div className="flex items-baseline gap-3.5">
                      <span className="display-condensed tabular-nums text-3xl font-bold text-[#E11D23]">
                        {project.number}
                      </span>
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#F5F5F7] transition-colors duration-150 group-hover:text-[#E11D23]">
                          {project.title}
                        </h3>
                        <p className="text-[10px] uppercase tracking-[0.14em] text-[#8E8E93]">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    <span
                      aria-hidden="true"
                      className="text-lg text-[#8E8E93] transition-all duration-150 group-hover:translate-x-1.5 group-hover:text-[#E11D23]"
                    >
                      →
                    </span>
                  </div>
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
