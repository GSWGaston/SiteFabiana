interface PuzzleAccentProps {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
  opacity?: number;
  variant?: 'hero' | 'cluster' | 'frame' | 'trail' | 'corner';
}

type Piece = {
  color: string;
  x: number;
  y: number;
  rotation: number;
};

const palettes = {
  hero: [
    { color: '#FD8303', x: 8, y: 9, rotation: -5 },
    { color: '#06A1BC', x: 77, y: 5, rotation: 3 },
    { color: '#F52C75', x: 146, y: 8, rotation: -4 },
    { color: '#82B42D', x: 215, y: 6, rotation: 4 },
    { color: '#FD8303', x: 282, y: 10, rotation: -3 },
    { color: '#06A1BC', x: 151, y: 76, rotation: 4 },
    { color: '#82B42D', x: 220, y: 75, rotation: -3 },
    { color: '#F52C75', x: 286, y: 138, rotation: 4 },
  ],
  cluster: [
    { color: '#06A1BC', x: 8, y: 8, rotation: -5 },
    { color: '#F52C75', x: 78, y: 7, rotation: 4 },
    { color: '#82B42D', x: 42, y: 78, rotation: -4 },
    { color: '#FD8303', x: 112, y: 78, rotation: 5 },
  ],
  frame: [
    { color: '#F52C75', x: 7, y: 8, rotation: -5 },
    { color: '#06A1BC', x: 77, y: 8, rotation: 4 },
    { color: '#82B42D', x: 42, y: 78, rotation: -4 },
    { color: '#FD8303', x: 112, y: 78, rotation: 5 },
  ],
  trail: [
    { color: '#FD8303', x: 4, y: 17, rotation: -5 },
    { color: '#06A1BC', x: 73, y: 7, rotation: 3 },
    { color: '#82B42D', x: 142, y: 18, rotation: -4 },
    { color: '#F52C75', x: 211, y: 7, rotation: 4 },
    { color: '#FD8303', x: 280, y: 17, rotation: -3 },
  ],
  corner: [
    { color: '#82B42D', x: 7, y: 8, rotation: -4 },
    { color: '#F52C75', x: 77, y: 8, rotation: 4 },
    { color: '#06A1BC', x: 42, y: 78, rotation: -3 },
    { color: '#FD8303', x: 112, y: 78, rotation: 4 },
  ],
} satisfies Record<NonNullable<PuzzleAccentProps['variant']>, Piece[]>;

const viewBoxes = {
  hero: '0 0 370 225',
  cluster: '0 0 210 185',
  frame: '0 0 210 185',
  trail: '0 0 370 125',
  corner: '0 0 210 185',
} satisfies Record<NonNullable<PuzzleAccentProps['variant']>, string>;

/**
 * A soft-edged jigsaw motif. Every piece has recognizable tabs and sockets,
 * while the layout changes from section to section.
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
        filter: 'drop-shadow(0 5px 10px rgba(79,72,120,0.13))',
        opacity,
        ...style,
      }}
    >
      <svg viewBox={viewBoxes[variant]} xmlns="http://www.w3.org/2000/svg" className="block w-full h-auto">
        {palettes[variant].map((piece, index) => (
          <g
            key={`${variant}-${index}`}
            transform={`translate(${piece.x} ${piece.y}) rotate(${piece.rotation} 45 45)`}
          >
            <path
              d="M8 8 H30 C30 1 36 -2 41 -2 C46 -2 52 1 52 8 H74 V30 C81 30 84 36 84 41 C84 46 81 52 74 52 V74 H52 C52 81 46 84 41 84 C36 84 30 81 30 74 H8 V52 C1 52 -2 46 -2 41 C-2 36 1 30 8 30 V8 Z"
              fill={piece.color}
              stroke="#EAF0F8"
              strokeWidth="3.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path
              d="M13 12 H29 C31 6 36 3 41 3 C46 3 51 6 52 12"
              fill="none"
              stroke="rgba(255,255,255,0.28)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

/** Backwards-compatible name for any future compact use of the motif. */
export function PuzzlePieces(props: Omit<PuzzleAccentProps, 'variant'>) {
  return <PuzzleAccent {...props} variant="cluster" />;
}
