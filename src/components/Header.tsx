import { PROFILE } from '../data/portfolioData';

export type ActiveView = 'overview' | 'archive';

interface HeaderProps {
  activeView: ActiveView;
  onNavigateView: (view: ActiveView, sectionId?: string) => void;
  onOpenInquiry: () => void;
}

export function Header({ activeView, onNavigateView, onOpenInquiry }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[rgba(255,255,255,0.08)] bg-[#0B0B0C]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-8 px-6 py-4 lg:px-12">
        {/* Zone 1: Brand Lockup */}
        <button
          type="button"
          onClick={() => onNavigateView('overview', 'top')}
          className="flex shrink-0 flex-col text-left leading-tight whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E11D23]"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#E11D23]">
            {PROFILE.brandTop}
          </span>
          <span className="text-[11px] uppercase tracking-[0.16em] text-[#8E8E93]">
            {PROFILE.brandSub}
          </span>
        </button>

        {/* Zone 2: Clean Single-Line Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#8E8E93] md:flex"
        >
          <button
            type="button"
            onClick={() => onNavigateView('overview', 'top')}
            className={`shrink-0 whitespace-nowrap border-b pb-0.5 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E11D23] ${
              activeView === 'overview'
                ? 'border-[#E11D23] text-[#F5F5F7]'
                : 'border-transparent hover:border-[#E11D23]/60 hover:text-[#F5F5F7]'
            }`}
          >
            Overview
          </button>
          <button
            type="button"
            onClick={() => onNavigateView('archive')}
            className={`shrink-0 whitespace-nowrap border-b pb-0.5 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E11D23] ${
              activeView === 'archive'
                ? 'border-[#E11D23] text-[#F5F5F7]'
                : 'border-transparent hover:border-[#E11D23]/60 hover:text-[#F5F5F7]'
            }`}
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => onNavigateView('overview', 'credentials')}
            className="shrink-0 whitespace-nowrap border-b border-transparent pb-0.5 transition-colors duration-150 hover:border-[#E11D23]/60 hover:text-[#F5F5F7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E11D23]"
          >
            Credentials
          </button>
          <button
            type="button"
            onClick={() => onNavigateView('overview', 'contact')}
            className="shrink-0 whitespace-nowrap border-b border-transparent pb-0.5 transition-colors duration-150 hover:border-[#E11D23]/60 hover:text-[#F5F5F7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E11D23]"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Availability CTA */}
        <button
          type="button"
          onClick={onOpenInquiry}
          className="group flex shrink-0 items-center gap-2 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#F5F5F7] whitespace-nowrap transition-colors duration-150 hover:text-[#E11D23] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E11D23]"
        >
          <span>{PROFILE.statusLabel}</span>
          <span
            aria-hidden="true"
            className="text-sm text-[#E11D23] transition-transform duration-150 group-hover:scale-110"
          >
            ✦
          </span>
        </button>
      </div>
    </header>
  );
}
