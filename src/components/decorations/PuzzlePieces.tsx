interface PuzzleProps {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

/**
 * Interlocking puzzle pieces in Fabiana's brand signature colors:
 * Neon Pink (#F52C75), Lime Green (#82B42D), and Deep Purple (#4F4878).
 */
export function PuzzlePieces({ className = '', size = 80, style = {} }: PuzzleProps) {
  return (
    <div
      className={`inline-block select-none pointer-events-none ${className}`}
      style={{ width: size, height: size, filter: 'drop-shadow(0 6px 16px rgba(79,72,120,0.18))', ...style }}
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Piece 1: Deep Purple (#4F4878) - Top Left */}
        <g id="puzzle-piece-purple">
          <path
            d="M 15 15 
               H 40 
               C 40 8, 48 4, 52 4 
               C 56 4, 64 8, 64 15 
               H 68 
               V 40 
               C 62 40, 58 48, 58 52 
               C 58 56, 62 64, 68 64 
               V 68 
               H 44 
               C 44 62, 36 58, 32 58 
               C 28 58, 20 62, 20 68 
               H 15 
               V 15 Z"
            fill="#4F4878"
          />
          {/* Subtle highlight */}
          <path
            d="M 17 17 H 39 C 40 12, 47 7, 52 7 C 57 7, 63 12, 63 17"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>

        {/* Piece 2: Neon Pink (#F52C75) - Top Right */}
        <g id="puzzle-piece-pink">
          <path
            d="M 68 15 
               H 105 
               V 44 
               C 99 44, 95 52, 95 56 
               C 95 60, 99 68, 105 68 
               V 68 
               H 68 
               V 64 
               C 62 64, 58 56, 58 52 
               C 58 48, 62 40, 68 40 
               V 15 Z"
            fill="#F52C75"
          />
          {/* Subtle highlight */}
          <path
            d="M 70 17 H 103 V 42"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>

        {/* Piece 3: Lime Green (#82B42D) - Bottom Left */}
        <g id="puzzle-piece-green">
          <path
            d="M 15 68 
               H 20 
               C 20 62, 28 58, 32 58 
               C 36 58, 44 62, 44 68 
               H 68 
               V 105 
               H 40 
               C 40 99, 32 95, 28 95 
               C 24 95, 16 99, 16 105 
               H 15 
               V 68 Z"
            fill="#82B42D"
          />
          <path
            d="M 17 70 V 103"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>

        {/* Piece 4: Pacific Blue Accent (#06A1BC) - Bottom Right interlocking */}
        <g id="puzzle-piece-cyan">
          <path
            d="M 68 68 
               H 105 
               V 105 
               H 68 
               V 68 Z"
            fill="#06A1BC"
            fillOpacity="0.9"
          />
          {/* Inner small star symbol */}
          <path
            d="M 86.5 80 L 88 84 L 92 84.5 L 89 87 L 90 91 L 86.5 89 L 83 91 L 84 87 L 81 84.5 L 85 84 Z"
            fill="#FFFFFF"
            fillOpacity="0.85"
          />
        </g>

        {/* Gentle interlocking joint outlines */}
        <path
          d="M 68 15 V 40 C 62 40, 58 48, 58 52 C 58 56, 62 64, 68 64 V 68 H 44 C 44 62, 36 58, 32 58 C 28 58, 20 62, 20 68 H 15"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

/**
 * Single floating puzzle piece for accents
 */
export function SinglePuzzlePiece({
  color = '#F52C75',
  size = 36,
  rotation = 0,
  className = '',
}: {
  color?: string;
  size?: number;
  rotation?: number;
  className?: string;
}) {
  return (
    <div
      className={`inline-block select-none pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotation}deg)`,
        filter: `drop-shadow(0 4px 10px ${color}40)`,
      }}
    >
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path
          d="M 10 10 
             H 25 
             C 25 4, 31 2, 35 2 
             C 39 2, 45 4, 45 10 
             H 50 
             V 25 
             C 45 25, 42 30, 42 35 
             C 42 40, 45 45, 50 45 
             V 50 
             H 35 
             C 35 44, 30 40, 25 40 
             C 20 40, 15 44, 15 50 
             H 10 
             V 10 Z"
          fill={color}
        />
        <path
          d="M 12 12 H 24 C 24 6, 29 4, 33 4 C 37 4, 42 6, 42 12"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
