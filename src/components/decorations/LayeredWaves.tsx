interface LayeredWavesProps {
  className?: string;
  fillNext?: string;
  flip?: boolean;
  variant?: 'signature' | 'soft' | 'ribbon' | 'bold';
}

/**
 * Signature multi-layered organic wavy curve divider featuring:
 * Pacific Blue (#06A1BC), Neon Pink (#F52C75), and Lime Green (#82B42D).
 */
export function LayeredWaves({
  className = '',
  fillNext = '#FFFFFF',
  flip = false,
  variant = 'signature',
}: LayeredWavesProps) {
  const heightClass = variant === 'ribbon' ? 'h-10 sm:h-12 md:h-14' : 'h-12 sm:h-16 md:h-20 lg:h-24';
  const duration = variant === 'ribbon' ? '18s' : variant === 'soft' ? '16s' : '13s';

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
        className={`wave-drift w-full ${heightClass} block`}
        style={{ animationDuration: duration }}
      >
        {variant === 'signature' && <>
          <path d="M0,24 C320,65 540,5 820,38 C1100,70 1320,20 1440,32 L1440,96 L0,96 Z" fill="#82B42D" fillOpacity="0.85" />
          <path d="M0,42 C280,12 600,68 920,30 C1200,5 1360,50 1440,40 L1440,96 L0,96 Z" fill="#F52C75" fillOpacity="0.88" />
          <path d="M0,56 C360,35 640,78 980,50 C1220,32 1380,62 1440,54 L1440,96 L0,96 Z" fill="#06A1BC" />
          <path d="M0,68 C380,52 720,84 1040,64 C1260,50 1380,72 1440,66 L1440,96 L0,96 Z" fill={fillNext} />
        </>}

        {variant === 'soft' && <>
          <path d="M0,34 C260,15 490,54 735,34 C1000,13 1210,42 1440,24 L1440,96 L0,96 Z" fill="#82B42D" fillOpacity="0.68" />
          <path d="M0,44 C230,31 490,67 755,46 C1010,26 1210,55 1440,38 L1440,96 L0,96 Z" fill="#F52C75" fillOpacity="0.82" />
          <path d="M0,55 C265,42 505,77 765,57 C1010,40 1220,67 1440,50 L1440,96 L0,96 Z" fill="#06A1BC" fillOpacity="0.9" />
          <path d="M0,66 C300,55 540,86 790,68 C1030,53 1240,79 1440,64 L1440,96 L0,96 Z" fill={fillNext} />
        </>}

        {variant === 'ribbon' && <>
          <path d="M0,52 C310,78 545,27 790,52 C1060,80 1260,37 1440,49 L1440,96 L0,96 Z" fill={fillNext} />
          <path d="M0,17 C275,60 520,4 790,33 C1060,61 1260,13 1440,29" fill="none" stroke="#06A1BC" strokeWidth="12" strokeLinecap="round" />
          <path d="M0,29 C260,72 540,18 800,44 C1050,69 1260,25 1440,40" fill="none" stroke="#F52C75" strokeWidth="9" strokeLinecap="round" />
          <path d="M0,41 C270,81 535,32 805,55 C1060,77 1260,39 1440,53" fill="none" stroke="#FD8303" strokeWidth="5" strokeLinecap="round" strokeDasharray="2 10" />
        </>}

        {variant === 'bold' && <>
          <path d="M0,17 C280,43 520,7 800,30 C1070,53 1260,8 1440,26 L1440,96 L0,96 Z" fill="#82B42D" />
          <path d="M0,31 C280,9 560,57 840,31 C1080,9 1270,48 1440,31 L1440,96 L0,96 Z" fill="#F52C75" />
          <path d="M0,48 C280,29 570,69 860,47 C1110,28 1280,65 1440,48 L1440,96 L0,96 Z" fill="#06A1BC" />
          <path d="M0,63 C290,47 590,84 880,62 C1100,47 1280,79 1440,64 L1440,96 L0,96 Z" fill={fillNext} />
        </>}
      </svg>
    </div>
  );
}
