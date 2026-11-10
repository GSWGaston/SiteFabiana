interface PuzzleAccentProps {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
  opacity?: number;
  variant?: 'hero' | 'cluster' | 'frame' | 'trail' | 'corner';
}

/** Tab on each edge, clockwise from top: 1 = knob out, -1 = socket, 0 = flat. */
type Tabs = [number, number, number, number];

type Piece = { color: string; x: number; y: number; rotation: number; tabs: Tabs };

/** One jigsaw edge from A to B; `n` is the outward normal, `s` the tab sign. */
function edge(ax: number, ay: number, bx: number, by: number, nx: number, ny: number, s: number) {
  const p = (u: number, v: number) =>
    `${(ax + (bx - ax) * u + nx * v * 100 * s).toFixed(1)} ${(ay + (by - ay) * u + ny * v * 100 * s).toFixed(1)}`;
  if (s === 0) return `L${bx} ${by}`;
  return [
    `L${p(0.34, 0)}`,
    `C${p(0.4, 0)} ${p(0.4, 0.06)} ${p(0.37, 0.1)}`,
    `C${p(0.28, 0.24)} ${p(0.72, 0.24)} ${p(0.63, 0.1)}`,
    `C${p(0.6, 0.06)} ${p(0.6, 0)} ${p(0.66, 0)}`,
    `L${bx} ${by}`,
  ].join(' ');
}

/** Jigsaw outline on a 100x100 body; knobs reach about 20 units outside it. */
function piecePath([t, r, b, l]: Tabs) {
  return `M0 0 ${edge(0, 0, 100, 0, 0, -1, t)} ${edge(100, 0, 100, 100, 1, 0, r)} ${edge(100, 100, 0, 100, 0, 1, b)} ${edge(0, 100, 0, 0, -1, 0, l)} Z`;
}

const RED = '#E2284D';
const ORANGE = '#FD8303';
const GREEN = '#82B42D';
const TEAL = '#06A1BC';
const PINK = '#F52C75';

// Neighbours use complementary tabs (knob next to socket) so pieces read as interlocked.
const palettes = {
  hero: [
    { color: RED, x: 0, y: 0, rotation: -4, tabs: [0, 1, -1, 0] },
    { color: ORANGE, x: 70, y: 4, rotation: 3, tabs: [1, -1, 1, -1] },
    { color: GREEN, x: 140, y: 0, rotation: -2, tabs: [-1, 1, 0, 1] },
    { color: TEAL, x: 210, y: 6, rotation: 4, tabs: [0, 0, 1, -1] },
    { color: PINK, x: 205, y: 76, rotation: -6, tabs: [-1, 0, 0, 1] },
  ],
  cluster: [
    { color: TEAL, x: 0, y: 0, rotation: -5, tabs: [0, 1, 1, 0] },
    { color: PINK, x: 70, y: 4, rotation: 4, tabs: [1, 0, -1, -1] },
    { color: GREEN, x: 4, y: 70, rotation: -4, tabs: [-1, -1, 0, 0] },
    { color: ORANGE, x: 74, y: 74, rotation: 5, tabs: [1, 0, 0, 1] },
  ],
  frame: [
    { color: PINK, x: 0, y: 0, rotation: -5, tabs: [0, -1, 1, 0] },
    { color: TEAL, x: 70, y: 4, rotation: 4, tabs: [1, 0, 1, 1] },
    { color: GREEN, x: 4, y: 70, rotation: -4, tabs: [-1, 1, 0, 0] },
    { color: ORANGE, x: 74, y: 74, rotation: 5, tabs: [-1, 0, 0, -1] },
  ],
  trail: [
    { color: ORANGE, x: 0, y: 10, rotation: -5, tabs: [1, 1, 0, 0] },
    { color: TEAL, x: 70, y: 0, rotation: 3, tabs: [0, -1, 1, -1] },
    { color: GREEN, x: 140, y: 10, rotation: -4, tabs: [-1, 1, 0, 1] },
    { color: PINK, x: 210, y: 0, rotation: 4, tabs: [1, -1, -1, -1] },
  ],
  corner: [
    { color: GREEN, x: 0, y: 0, rotation: -4, tabs: [0, 1, 1, 0] },
    { color: PINK, x: 70, y: 4, rotation: 4, tabs: [-1, 0, -1, -1] },
    { color: TEAL, x: 4, y: 70, rotation: -3, tabs: [-1, 1, 0, 0] },
    { color: ORANGE, x: 74, y: 74, rotation: 4, tabs: [1, 0, 0, -1] },
  ],
} satisfies Record<NonNullable<PuzzleAccentProps['variant']>, Piece[]>;

const viewBoxes = {
  hero: '-24 -24 330 210',
  cluster: '-24 -24 220 200',
  frame: '-24 -24 220 200',
  trail: '-24 -24 330 160',
  corner: '-24 -24 220 200',
} satisfies Record<NonNullable<PuzzleAccentProps['variant']>, string>;

/**
 * Jigsaw motif: every piece has its own tab layout, a soft highlight and a white
 * edge, and neighbours interlock.
 */
export function PuzzleAccent({
  className = '',
  size = 170,
  style = {},
  opacity = 1,
  variant = 'cluster',
}: PuzzleAccentProps) {
  return (
    <div
      aria-hidden="true"
      className={`select-none pointer-events-none ${className}`}
      style={{
        width: size,
        filter: 'drop-shadow(0 6px 8px rgba(79,72,120,0.22))',
        opacity,
        ...style,
      }}
    >
      <svg viewBox={viewBoxes[variant]} xmlns="http://www.w3.org/2000/svg" className="block w-full h-auto">
        <defs>
          <linearGradient id="pz-shine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="0.38" />
            <stop offset="0.55" stopColor="#fff" stopOpacity="0" />
            <stop offset="1" stopColor="#000" stopOpacity="0.14" />
          </linearGradient>
        </defs>
        {palettes[variant].map((piece, index) => {
          const d = piecePath(piece.tabs);
          return (
            <g
              key={`${variant}-${index}`}
              transform={`translate(${piece.x + 2} ${piece.y + 2}) rotate(${piece.rotation} 33 33) scale(0.66)`}
            >
              <path d={d} fill={piece.color} stroke="#fff" strokeWidth="5" strokeLinejoin="round" />
              <path d={d} fill="url(#pz-shine)" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/** Backwards-compatible name for any future compact use of the motif. */
export function PuzzlePieces(props: Omit<PuzzleAccentProps, 'variant'>) {
  return <PuzzleAccent {...props} variant="cluster" />;
}
