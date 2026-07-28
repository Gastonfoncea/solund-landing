/**
 * El sol de Solund: disco geométrico con el borde inferior encendido, el mismo
 * gesto que `OnboardingHero` en la app. No es un logo definitivo — es el ancla
 * visual mientras el ícono vive solo en el asset catalog de iOS.
 */
export function SunMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="sun-rise" x1="12" y1="3" x2="12" y2="21">
          <stop offset="0%" stopColor="#FF8A3C" />
          <stop offset="100%" stopColor="#C24A18" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="6.25" fill="url(#sun-rise)" />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeOpacity="0.32"
        strokeWidth="1.25"
      />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <SunMark className="h-[1.15em] w-[1.15em] text-signal" />
      <span className="font-display text-[1.05em] font-semibold tracking-[-0.015em]">
        Solund
      </span>
    </span>
  );
}
