import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface InquiryDrawerProps {
  isOpen: boolean;
  initialSubject?: string;
  onClose: () => void;
}

const PROJECT_SCOPES = [
  'Web Design & UI',
  'Visual Campaign',
  'Landing Page',
  'Internship / Collab',
];

export function InquiryDrawer({
  isOpen,
  initialSubject = '',
  onClose,
}: InquiryDrawerProps) {
  const [scope, setScope] = useState(PROJECT_SCOPES[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brief, setBrief] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialSubject) {
      setBrief(
        `Hi Diaz, I would like to discuss a design project inspired by "${initialSubject}".`
      );
    }
  }, [initialSubject]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setBrief('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={handleResetAndClose}
    >
      <div
        className="w-full max-w-[560px] border border-[rgba(255,255,255,0.12)] bg-[#0B0B0C] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] bg-[#121214] px-6 py-4">
          <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#E11D23]">
            PROJECT INQUIRY · BANDUNG, ID
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            aria-label="Close inquiry modal"
            className="flex h-8 w-8 items-center justify-center border border-[rgba(255,255,255,0.12)] text-[#F5F5F7] transition-colors hover:border-[#E11D23] hover:text-[#E11D23]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#E11D23]/50 bg-[#E11D23]/15 text-[#E11D23]">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h2
                id="inquiry-title"
                className="display-condensed text-3xl text-[#F5F5F7]"
              >
                BRIEF PREPARED
              </h2>
              <p className="mx-auto mt-3 max-w-[40ch] text-xs leading-relaxed text-[#8E8E93]">
                Thank you, {name || 'there'}. Your {scope.toLowerCase()} brief
                is ready. You can send it directly via your email client or
                reach Diaz at{' '}
                <span className="text-[#F5F5F7]">{PROFILE.email}</span>.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(
                    `[${scope}] Project Inquiry from ${name || 'Client'}`
                  )}&body=${encodeURIComponent(brief)}`}
                  className="border border-[#E11D23] bg-[#E11D23] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#c0171c]"
                >
                  Open in Email Client
                </a>
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="border border-[rgba(255,255,255,0.12)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#F5F5F7] transition-colors hover:border-[#E11D23]"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h2
                  id="inquiry-title"
                  className="display-condensed text-3xl text-[#F5F5F7] sm:text-4xl"
                >
                  START A PROJECT{' '}
                  <span aria-hidden="true" className="text-[#E11D23]">
                    ✦
                  </span>
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-[#8E8E93]">
                  Share your project goals or collaboration idea. Available for
                  freelance web design and visual branding.
                </p>
              </div>

              {/* Scope Selector */}
              <div>
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#E11D23]">
                  PROJECT TYPE
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {PROJECT_SCOPES.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setScope(item)}
                      className={`border px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wider transition-colors ${
                        scope === item
                          ? 'border-[#E11D23] bg-[#E11D23]/15 text-[#F5F5F7]'
                          : 'border-[rgba(255,255,255,0.08)] bg-[#121214] text-[#8E8E93] hover:text-[#F5F5F7]'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="inquiry-name"
                    className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.14em] text-[#8E8E93]"
                  >
                    YOUR NAME
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Pratama"
                    className="w-full border border-[rgba(255,255,255,0.12)] bg-[#121214] px-3.5 py-2.5 text-xs text-[#F5F5F7] placeholder:text-[#8E8E93]/60 focus:border-[#E11D23] focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="inquiry-email"
                    className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.14em] text-[#8E8E93]"
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="inquiry-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full border border-[rgba(255,255,255,0.12)] bg-[#121214] px-3.5 py-2.5 text-xs text-[#F5F5F7] placeholder:text-[#8E8E93]/60 focus:border-[#E11D23] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="inquiry-brief"
                  className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.14em] text-[#8E8E93]"
                >
                  PROJECT BRIEF
                </label>
                <textarea
                  id="inquiry-brief"
                  rows={3}
                  required
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  placeholder="Tell me about the deliverables, timeline, and visual direction..."
                  className="w-full resize-none border border-[rgba(255,255,255,0.12)] bg-[#121214] px-3.5 py-2.5 text-xs text-[#F5F5F7] placeholder:text-[#8E8E93]/60 focus:border-[#E11D23] focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between gap-4 pt-2">
                <span className="text-[11px] text-[#8E8E93]">
                  Direct: {PROFILE.email}
                </span>
                <button
                  type="submit"
                  className="border border-[#E11D23] bg-[#E11D23] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#c0171c]"
                >
                  Send Inquiry →
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
