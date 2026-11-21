import { Globe } from 'lucide-react';
import { HERO_METRICS, PORTRAIT_IMAGE, PROFILE } from '../data/portfolioData';
import { EditorialImage } from './EditorialImage';

interface HeroSectionProps {
  onExploreProjects: () => void;
}

export function HeroSection({ onExploreProjects }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] flex-col justify-between overflow-hidden border-b border-[rgba(255,255,255,0.08)] pt-4"
    >
      {/* Monumental Crimson Gradient Wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 z-0 flex w-full justify-center overflow-hidden select-none"
      >
        <div className="display-condensed wordmark-gradient w-full scale-y-105 text-center text-[21vw] leading-[0.8] font-bold tracking-tighter uppercase">
          PORTFOLIO
        </div>
      </div>

      {/* 3-Column Editorial Foreground Composition */}
      <div className="relative z-10 mx-auto grid min-h-[82vh] w-full max-w-[1400px] grid-cols-1 items-end gap-8 px-6 pt-16 pb-12 lg:grid-cols-12 lg:px-12">
        {/* Left Column: Identity, Role & Bio */}
        <div className="order-2 flex flex-col justify-end pb-4 lg:order-1 lg:col-span-4">
          <span className="script-text mb-1 text-3xl font-normal tracking-wide text-[#F5F5F7] md:text-4xl">
            {PROFILE.greeting}
          </span>

          <h1 className="display-condensed mb-4 text-[54px] leading-[0.88] tracking-normal text-[#F5F5F7] sm:text-[68px] xl:text-[84px]">
            <span className="block">{PROFILE.firstName}</span>
            <span className="block">{PROFILE.lastName}</span>
          </h1>

          <div className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[#E11D23] sm:text-[13px]">
            {PROFILE.role}
          </div>

          <p className="mb-7 max-w-[34ch] text-xs leading-relaxed font-normal text-[#8E8E93] sm:text-[13px]">
            {PROFILE.bio}
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F5F5F7]">
              <Globe
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-[#E11D23]"
                strokeWidth={1.8}
              />
              <span>{PROFILE.location}</span>
            </div>

            <button
              type="button"
              onClick={onExploreProjects}
              className="group inline-flex items-center gap-2 border border-[rgba(225,29,35,0.45)] bg-[#121214] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#F5F5F7] whitespace-nowrap transition-colors duration-150 hover:border-[#E11D23] hover:bg-[#E11D23] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E11D23]"
            >
              <span>Selected Work</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-150 group-hover:translate-x-0.5"
              >
                →
              </span>
            </button>
          </div>
        </div>

        {/* Center Column: Stylized Portrait with Crimson Ambient Glow */}
        <div className="order-1 flex items-end justify-center self-end lg:order-2 lg:col-span-5">
          <div className="relative w-full max-w-[420px] lg:max-w-[470px]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-12 bottom-12 h-64 rounded-full bg-[#E11D23]/22 blur-[80px]"
            />
            <EditorialImage
              src={PORTRAIT_IMAGE}
              alt="Diaz Aulady Rahman - Web & Visual Designer Portrait"
              variant="portrait"
              fallbackLabel="Diaz Aulady Rahman"
              className="portrait-mask relative z-10 h-[460px] w-full object-cover object-top contrast-110 drop-shadow-[0_25px_40px_rgba(0,0,0,0.9)] sm:h-[540px] xl:h-[620px]"
            />
          </div>
        </div>

        {/* Right Column: Value Proposition & Metric Highlights */}
        <div className="order-3 flex h-full flex-col items-start justify-between pb-4 lg:col-span-3 lg:items-end">
          <div className="flex max-w-[240px] items-start gap-3 text-left lg:mt-16">
            <span
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[rgba(225,29,35,0.45)] bg-[#121214] text-xs text-[#E11D23] shadow-lg shadow-[#E11D23]/10"
            >
              ✦
            </span>
            <p className="text-xs leading-relaxed text-[#8E8E93]">
              {PROFILE.shoulderNote}
            </p>
          </div>

          <div className="mt-8 w-full space-y-6 text-left lg:mt-auto lg:w-auto lg:text-right">
            {HERO_METRICS.map((metric, idx) => (
              <div
                key={metric.value}
                className={`flex items-baseline justify-between gap-2 lg:flex-col lg:items-end ${
                  idx < HERO_METRICS.length - 1
                    ? 'border-b border-[rgba(255,255,255,0.06)] pb-2 lg:border-none lg:pb-0'
                    : ''
                }`}
              >
                <span className="display-condensed tabular-nums text-[38px] leading-none font-bold tracking-tight text-[#E11D23]">
                  {metric.value}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8E8E93]">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
