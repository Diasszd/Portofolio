import { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  fallbackCode?: string;
  variant?: 'portrait' | 'project';
}

export function EditorialImage({
  src,
  alt,
  className = '',
  fallbackLabel,
  fallbackCode,
  variant = 'project',
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#230607] via-[#121214] to-[#0B0B0C] p-6 text-center ${className}`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 35%, rgba(225, 29, 35, 0.35), transparent 68%)',
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center border border-[#E11D23]/40 bg-[#0B0B0C]/80 text-[#E11D23]">
            <ImageIcon className="h-5 w-5" strokeWidth={1.6} />
          </div>
          {fallbackCode && (
            <span className="display-condensed text-3xl text-[#E11D23]">
              {fallbackCode}
            </span>
          )}
          <span className="max-w-[26ch] text-xs font-semibold uppercase tracking-[0.16em] text-[#F5F5F7]">
            {fallbackLabel || (variant === 'portrait' ? 'Diaz Aulady Rahman' : alt)}
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
