/**
 * Helper to compute an authentic interlocking jigsaw puzzle edge.
 * @param x1 Start X
 * @param y1 Start Y
 * @param x2 End X
 * @param y2 End Y
 * @param tabDir 0 = flat edge, -1 = protruding tab (outward), 1 = receptive hole (inward)
 */
function getEdge(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  tabDir: 0 | 1 | -1
): string {
  if (tabDir === 0) {
    return `L ${x2} ${y2}`;
  }

  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);

  // Normal vector (inward into the clockwise polygon)
  const nx = -dy / len;
  const ny = dx / len;

  // Tangent vector
  const tx = dx / len;
  const ty = dy / len;

  const pt = (u: number, v: number) => {
    const x = x1 + tx * u + nx * v * tabDir;
    const y = y1 + ty * u + ny * v * tabDir;
    return `${x.toFixed(1)} ${y.toFixed(1)}`;
  };

  const mid = len / 2;
  const tabH = len * 0.22; // ~17.6px tab depth
  const neckW = len * 0.11; // ~8.8px half-neck
  const headW = len * 0.19; // ~15.2px half-head

  return [
    `L ${pt(mid - neckW * 1.6, 0)}`,
    `C ${pt(mid - neckW * 0.8, 0)} ${pt(mid - neckW * 0.6, tabH * 0.32)} ${pt(mid - headW * 0.8, tabH * 0.48)}`,
    `C ${pt(mid - headW * 1.15, tabH * 0.72)} ${pt(mid - headW * 0.75, tabH)} ${pt(mid, tabH)}`,
    `C ${pt(mid + headW * 0.75, tabH)} ${pt(mid + headW * 1.15, tabH * 0.72)} ${pt(mid + headW * 0.8, tabH * 0.48)}`,
    `C ${pt(mid + neckW * 0.6, tabH * 0.32)} ${pt(mid + neckW * 0.8, 0)} ${pt(mid + neckW * 1.6, 0)}`,
    `L ${x2} ${y2}`,
  ].join(' ');
}

/**
 * Builds a closed jigsaw piece path with 4 edges (clockwise):
 * Top -> Right -> Bottom -> Left.
 */
function makePiece(
  xL: number,
  xR: number,
  yT: number,
  yB: number,
  topTab: 0 | 1 | -1,
  rightTab: 0 | 1 | -1,
  bottomTab: 0 | 1 | -1,
  leftTab: 0 | 1 | -1
): string {
  return [
    `M ${xL} ${yT}`,
    getEdge(xL, yT, xR, yT, topTab),
    getEdge(xR, yT, xR, yB, rightTab),
    getEdge(xR, yB, xL, yB, bottomTab),
    getEdge(xL, yB, xL, yT, leftTab),
    'Z',
  ].join(' ');
}

// Grid metrics: 3 columns (Col 1, 2, 3), 3 rows (Row 0, 1, 2)
// Width: X from 120 to 360 (Col 1: 120..200, Col 2: 200..280, Col 3: 280..360)
// Height: Y from 0 to 240 (Row 0: 0..80, Row 1: 80..160, Row 2: 160..240)
const pieces = [
  // ── ROW 0 (Top border, flush to Y = 0) ──
  {
    id: 'piece-1',
    fill: '#FD8303', // Orange
    // Top=0 (flat), Right=-1 (tab into P2), Bottom=-1 (tab into P4), Left=0 (flat)
    d: makePiece(120, 200, 0, 80, 0, -1, -1, 0),
  },
  {
    id: 'piece-2',
    fill: '#06A1BC', // Pacific Blue
    // Top=0 (flat), Right=1 (hole from P3), Bottom=1 (hole from P5), Left=1 (hole from P1)
    d: makePiece(200, 280, 0, 80, 0, 1, 1, 1),
  },
  {
    id: 'piece-3',
    fill: '#82B42D', // Lime Green (Corner piece flush to top Y=0 and right X=360)
    // Top=0 (flat), Right=0 (flat right edge), Bottom=-1 (tab into P6), Left=-1 (tab into P2)
    d: makePiece(280, 360, 0, 80, 0, 0, -1, -1),
  },

  // ── ROW 1 (Middle row) ──
  {
    id: 'piece-4',
    fill: '#F52C75', // Neon Pink
    // Top=1 (hole from P1), Right=1 (hole from P5), Bottom=0 (flat), Left=0 (flat)
    d: makePiece(120, 200, 80, 160, 1, 1, 0, 0),
  },
  {
    id: 'piece-5',
    fill: '#FD8303', // Orange
    // Top=-1 (tab into P2), Right=-1 (tab into P6), Bottom=-1 (tab into P7), Left=-1 (tab into P4)
    d: makePiece(200, 280, 80, 160, -1, -1, -1, -1),
  },
  {
    id: 'piece-6',
    fill: '#06A1BC', // Pacific Blue (flush to right X=360)
    // Top=1 (hole from P3), Right=0 (flat right edge), Bottom=1 (hole from P8), Left=1 (hole from P5)
    d: makePiece(280, 360, 80, 160, 1, 0, 1, 1),
  },

  // ── ROW 2 (Bottom cascade hugging right edge) ──
  {
    id: 'piece-7',
    fill: '#82B42D', // Lime Green
    // Top=1 (hole from P5), Right=1 (hole from P8), Bottom=0 (flat), Left=0 (flat)
    d: makePiece(200, 280, 160, 240, 1, 1, 0, 0),
  },
  {
    id: 'piece-8',
    fill: '#F52C75', // Neon Pink (flush to right X=360)
    // Top=-1 (tab into P6), Right=0 (flat right edge), Bottom=0 (flat), Left=-1 (tab into P7)
    d: makePiece(280, 360, 160, 240, -1, 0, 0, -1),
  },
];

/**
 * Mathematically perfect corner jigsaw puzzle border.
 * Anchored flush to top: 0, right: 0.
 * 8 genuine interlocking pieces with crisp white outlines and brand colors.
 */
export const CornerPuzzleBorder = () => {
  return (
    <div
      className="absolute top-0 right-0 z-0 pointer-events-none select-none overflow-hidden w-[210px] sm:w-[270px] md:w-[330px] lg:w-[370px]"
      style={{
        filter: 'drop-shadow(0 6px 14px rgba(79, 72, 120, 0.15))',
      }}
    >
      <svg
        viewBox="110 0 250 245"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
      >
        {pieces.map((piece) => (
          <path
            key={piece.id}
            d={piece.d}
            fill={piece.fill}
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  );
};
