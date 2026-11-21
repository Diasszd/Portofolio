import { useState } from 'react';
import { Check, Copy, Globe, Instagram, Mail, MapPin } from 'lucide-react';
import { PROFILE, type ProjectItem } from '../data/portfolioData';

interface ContactFooterProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  onOpenInquiry: () => void;
}

export function ContactFooter({
  projects,
  onSelectProject,
  onOpenInquiry,
}: ContactFooterProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mockupIndex, setMockupIndex] = useState(0);

  const featured = projects.filter((p) => p.featured);
  const activeMockupProject = featured[mockupIndex % featured.length] || projects[0];

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(PROFILE.email).catch(() => {});
    }
    setCopiedEmail(true);
    window.setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer id="contact" className="overflow-hidden bg-[#0B0B0C] pt-20 pb-12">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-8">
          {/* CTA Heading Block */}
          <div className="lg:col-span-4">
            <h2 className="display-condensed text-4xl leading-[0.92] tracking-tight text-[#F5F5F7] sm:text-5xl xl:text-6xl">
              LET&apos;S WORK
              <br />
              TOGETHER{' '}
              <span aria-hidden="true" className="text-4xl text-[#E11D23]">
                ✦
              </span>
            </h2>
            <p className="my-6 max-w-[34ch] text-xs leading-relaxed text-[#8E8E93] sm:text-[13px]">
              I&apos;m currently open for web design projects, internships, and
              creative collaborations. Let&apos;s create something amazing that
              drives results.
            </p>
            <button
              type="button"
              onClick={onOpenInquiry}
              className="group inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E11D23]"
            >
              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E11D23] text-sm text-[#E11D23] transition-colors duration-150 group-hover:bg-[#E11D23] group-hover:text-white"
              >
                →
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#E11D23] whitespace-nowrap">
                {PROFILE.statusLabel}
              </span>
            </button>
          </div>

          {/* Contact Details List */}
          <div className="space-y-3 lg:col-span-4">
            {/* Email with direct link + copy */}
            <div className="group flex items-center justify-between gap-3 border-b border-[rgba(255,255,255,0.06)] py-3 transition-colors hover:border-[#E11D23]/40">
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex min-w-0 items-center gap-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E11D23]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(225,29,35,0.45)] bg-[#121214] text-white group-hover:border-[#E11D23]">
                  <Mail
                    aria-hidden="true"
                    className="h-4 w-4 text-[#8E8E93] transition-colors group-hover:text-[#E11D23]"
                    strokeWidth={1.8}
                  />
                </div>
                <span className="truncate text-xs text-[#8E8E93] transition-colors group-hover:text-[#F5F5F7]">
                  {PROFILE.email}
                </span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="inline-flex shrink-0 items-center gap-1.5 border border-[rgba(255,255,255,0.08)] bg-[#121214] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#8E8E93] whitespace-nowrap transition-colors hover:border-[#E11D23] hover:text-[#F5F5F7]"
              >
                {copiedEmail ? (
                  <>
                    <Check className="h-3 w-3 text-[#E11D23]" />
                    <span className="text-[#F5F5F7]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* LinkedIn */}
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border-b border-[rgba(255,255,255,0.06)] py-3 transition-colors hover:border-[#E11D23]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E11D23]"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(225,29,35,0.45)] bg-[#121214] text-white group-hover:border-[#E11D23]">
                <Globe
                  aria-hidden="true"
                  className="h-4 w-4 text-[#8E8E93] transition-colors group-hover:text-[#E11D23]"
                  strokeWidth={1.8}
                />
              </div>
              <span className="truncate text-xs text-[#8E8E93] transition-colors group-hover:text-[#F5F5F7]">
                {PROFILE.linkedinLabel}
              </span>
            </a>

            {/* Instagram */}
            <a
              href={PROFILE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border-b border-[rgba(255,255,255,0.06)] py-3 transition-colors hover:border-[#E11D23]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E11D23]"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(225,29,35,0.45)] bg-[#121214] text-white group-hover:border-[#E11D23]">
                <Instagram
                  aria-hidden="true"
                  className="h-4 w-4 text-[#8E8E93] transition-colors group-hover:text-[#E11D23]"
                  strokeWidth={1.8}
                />
              </div>
              <span className="text-xs text-[#8E8E93] transition-colors group-hover:text-[#F5F5F7]">
                {PROFILE.instagramLabel}
              </span>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 py-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(225,29,35,0.45)] bg-[#121214] text-white">
                <MapPin
                  aria-hidden="true"
                  className="h-4 w-4 text-[#8E8E93]"
                  strokeWidth={1.8}
                />
              </div>
              <span className="text-xs text-[#8E8E93]">
                {PROFILE.shortLocation}
              </span>
            </div>
          </div>

          {/* Interactive MacBook Portfolio OS Mockup */}
          <div className="flex justify-center lg:col-span-4 lg:justify-end">
            <div className="relative w-full max-w-[380px]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-2 rounded-full bg-[#E11D23]/25 blur-2xl"
              />
              <div className="relative rounded-t-xl border border-white/10 bg-[#1c1c1f] p-3 pt-2 shadow-2xl">
                <div className="mx-auto mb-2 h-1.5 w-1.5 rounded-full border border-white/10 bg-black/80" />
                <div className="relative flex aspect-[16/10] flex-col justify-between overflow-hidden rounded border border-black/40 bg-[#0E0E10] p-3.5">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[#E11D23]/20 blur-xl"
                  />
                  <div className="relative z-10 flex items-center justify-between border-b border-white/5 pb-1 text-[8px] uppercase tracking-widest text-[#8E8E93]">
                    <span>PORTFOLIO OS</span>
                    <span className="tabular-nums font-bold text-[#E11D23]">
                      2026
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectProject(activeMockupProject)}
                    className="group relative z-10 my-auto text-left focus-visible:outline-2 focus-visible:outline-[#E11D23]"
                  >
                    <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-[#E11D23]">
                      {mockupIndex === 0
                        ? 'WE DESIGN'
                        : `${activeMockupProject.number} · ${activeMockupProject.category}`}
                    </span>
                    <span className="display-condensed block text-xl tracking-wider text-white transition-colors group-hover:text-[#E11D23]">
                      {mockupIndex === 0
                        ? 'DIGITAL EXPERIENCES'
                        : activeMockupProject.title}
                    </span>
                  </button>

                  {/* Interactive Slide Switcher */}
                  <div className="relative z-10 grid grid-cols-3 gap-1.5 border-t border-white/5 pt-2">
                    {featured.map((proj, idx) => (
                      <button
                        key={proj.id}
                        type="button"
                        onClick={() => setMockupIndex(idx)}
                        aria-label={`Preview ${proj.title} in Portfolio OS`}
                        className={`h-6 border text-[8px] font-bold uppercase tracking-wider transition-colors ${
                          idx === mockupIndex
                            ? 'border-[#E11D23]/60 bg-[#E11D23]/30 text-white'
                            : 'border-white/5 bg-white/5 text-[#8E8E93] hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {proj.number}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative flex h-2.5 items-start justify-center rounded-b-md border-t border-white/10 bg-[#2a2a2e] shadow-md">
                <div className="h-1 w-16 rounded-b bg-white/20" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Hairline Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[rgba(255,255,255,0.08)] pt-8 text-[10px] uppercase tracking-[0.14em] text-[#8E8E93] sm:flex-row">
          <div>{PROFILE.copyright}</div>
          <div>{PROFILE.footerMeta}</div>
        </div>
      </div>
    </footer>
  );
}
