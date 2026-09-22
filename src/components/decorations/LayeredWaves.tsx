interface LayeredWavesProps {
  className?: string;
  fillNext?: string; // Color of the base filling into the next section (default: #ffffff)
  flip?: boolean;
}

/**
 * Signature multi-layered organic wavy curve divider featuring:
 * Pacific Blue (#06A1BC), Neon Pink (#F52C75), and Lime Green (#82B42D).
 */
export function LayeredWaves({
  className = '',
  fillNext = '#FFFFFF',
  flip = false,
}: LayeredWavesProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}
      style={{
        transform: flip ? 'rotate(180deg)' : 'none',
        height: 'auto',
      }}
    >
      <svg
        viewBox="0 0 1440 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-12 sm:h-16 md:h-20 lg:h-24 block"
      >
        {/* Layer 1: Lime Green (#82B42D) - Back wave */}
        <path
          d="M0,24 C320,65 540,5 820,38 C1100,70 1320,20 1440,32 L1440,96 L0,96 Z"
          fill="#82B42D"
          fillOpacity="0.85"
        />

        {/* Layer 2: Neon Pink (#F52C75) - Middle wave */}
        <path
          d="M0,42 C280,12 600,68 920,30 C1200,5 1360,50 1440,40 L1440,96 L0,96 Z"
          fill="#F52C75"
          fillOpacity="0.88"
        />

        {/* Layer 3: Pacific Blue (#06A1BC) - Front-accent wave */}
        <path
          d="M0,56 C360,35 640,78 980,50 C1220,32 1380,62 1440,54 L1440,96 L0,96 Z"
          fill="#06A1BC"
        />

        {/* Layer 4: Base Fill transitioning into next section */}
        <path
          d="M0,68 C380,52 720,84 1040,64 C1260,50 1380,72 1440,66 L1440,96 L0,96 Z"
          fill={fillNext}
        />
      </svg>
    </div>
  );
}
