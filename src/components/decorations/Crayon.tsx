import { useId } from 'react';

const NAVY = '#1B2A5E';

const SHAPES = {
  heart:
    'M50 88 C26 68 6 52 6 32 C6 16 18 8 31 10 C40 11 47 17 50 25 C53 17 60 11 69 10 C82 8 94 16 94 32 C94 52 74 68 50 88 Z',
  star: burst(5, 46, 22),
  sun: burst(9, 46, 32),
} as const;

/** Rounded-looking star/sunburst: `n` points alternating between radii `ro` and `ri`. */
function burst(n: number, ro: number, ri: number) {
  const pts = Array.from({ length: n * 2 }, (_, i) => {
    const a = (Math.PI * i) / n - Math.PI / 2;
    const r = i % 2 ? ri : ro;
    return `${(50 + r * Math.cos(a)).toFixed(1)} ${(52 + r * Math.sin(a)).toFixed(1)}`;
  });
  return `M${pts.join(' L')} Z`;
}

interface CrayonProps {
  shape: keyof typeof SHAPES;
  /** Crayon colour of the fill. */
  color: string;
  size?: number;
  /** Rotation of the whole drawing, in degrees. */
  tilt?: number;
  /** Changes the random scribble so repeated shapes don't look copy-pasted. */
  seed?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Child-like crayon drawing: wobbly navy outline, diagonal waxy strokes with gaps
 * where the paper shows through, and a dark offset edge. Built with SVG filters,
 * so the shape stays crisp at any size and needs no image.
 */
export function Crayon({ shape, color, size = 120, tilt = 0, seed = 1, className = '', style }: CrayonProps) {
  const id = useId().replace(/:/g, '');
  const k = size / 100;
  const streakAngle = -38;
  // Noise is measured in px, so frequencies follow the rendered size.
  const fy = Math.min(0.5, 30 / size);
  const fx = 2 / size;
  const d = SHAPES[shape];
  const grain = (s: number, gain: number, bias: number) => (
    <>
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="1" seed={s} result="g" />
      <feColorMatrix in="g" type="matrix" values={`0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  ${gain} 0 0 0 ${bias}`} result="gm" />
    </>
  );

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      overflow="visible"
      className={`select-none pointer-events-none ${className}`}
      style={style}
    >
      <defs>
        {/* hand wobble: displaces fill and outline together so they stay aligned */}
        <filter id={`${id}w`} x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence type="fractalNoise" baseFrequency={3 / size} numOctaves="2" seed={seed} result="w" />
          <feDisplacementMap in="SourceGraphic" in2="w" scale={size * 0.05} xChannelSelector="R" yChannelSelector="G" />
        </filter>
        {/* waxy fill: long streaks (the group is rotated so they run diagonally) + grain, over faint paper tint */}
        <filter id={`${id}f`} x="-15%" y="-15%" width="130%" height="130%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency={`${fx} ${fy}`} numOctaves="2" seed={seed + 3} result="n" />
          <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  7 0 0 0 -2.6" result="streak" />
          {grain(seed + 5, 6, -1.6)}
          <feComposite in="streak" in2="gm" operator="in" result="mask" />
          <feComposite in="SourceGraphic" in2="mask" operator="in" result="ink" />
          <feComponentTransfer in="SourceGraphic" result="paper">
            <feFuncA type="linear" slope="0.28" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="paper" />
            <feMergeNode in="ink" />
          </feMerge>
        </filter>
        {/* slightly broken pencil line */}
        <filter id={`${id}l`} x="-15%" y="-15%" width="130%" height="130%">
          {grain(seed + 8, 5, -1.1)}
          <feComposite in="SourceGraphic" in2="gm" operator="in" />
        </filter>
      </defs>

      <g transform={`rotate(${tilt} ${size / 2} ${size / 2})`}>
        <g filter={`url(#${id}w)`}>
          {/* dark offset edge, gives the thick "sticker" look */}
          <g filter={`url(#${id}l)`} transform={`translate(${size * 0.035} ${size * 0.045}) scale(${k})`}>
            <path d={d} fill={NAVY} stroke={NAVY} strokeWidth="4" strokeLinejoin="round" opacity="0.85" />
          </g>
          <g transform={`rotate(${streakAngle})`} filter={`url(#${id}f)`}>
            <g transform={`rotate(${-streakAngle}) scale(${k})`}>
              <path d={d} fill={color} />
            </g>
          </g>
          <g filter={`url(#${id}l)`} transform={`scale(${k})`}>
            <path d={d} fill="none" stroke={NAVY} strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
          </g>
        </g>
      </g>
    </svg>
  );
}
