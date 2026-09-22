export const CornerPuzzleBorder = () => {
  return (
    <div className="absolute top-0 right-0 z-0 pointer-events-none select-none overflow-hidden w-[220px] sm:w-[280px] md:w-[340px] opacity-95">
      <svg
        viewBox="0 0 350 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm"
      >
        {/* Piece 1: Top Left Orange */}
        <path
          d="M 50 0 L 110 0 C 110 15 125 15 125 0 L 180 0 L 180 60 C 165 60 165 75 180 75 L 180 70 L 120 70 C 120 55 105 55 105 70 L 50 70 C 65 70 65 55 50 55 Z"
          fill="#FD8303"
          stroke="#FFFFFF"
          strokeWidth="3"
        />

        {/* Piece 2: Top Center-Left Teal / Blue */}
        <path
          d="M 110 0 L 190 0 C 190 18 205 18 205 0 L 260 0 L 260 70 C 245 70 245 55 260 55 L 260 70 L 180 70 C 180 55 165 55 180 70 Z"
          fill="#06A1BC"
          stroke="#FFFFFF"
          strokeWidth="3"
        />

        {/* Piece 3: Top Center-Right Pink */}
        <path
          d="M 190 0 L 270 0 C 270 18 285 18 285 0 L 320 0 L 320 70 C 305 70 305 55 320 55 L 260 70 Z"
          fill="#F52C75"
          stroke="#FFFFFF"
          strokeWidth="3"
        />

        {/* Piece 4: Top Far-Right Green (Hugs the edge) */}
        <path
          d="M 270 0 L 350 0 L 350 75 C 335 75 335 90 350 90 L 350 80 L 320 80 L 320 0 Z"
          fill="#82B42D"
          stroke="#FFFFFF"
          strokeWidth="3"
        />

        {/* Piece 5: Middle Row - Orange Inner Piece */}
        <path
          d="M 180 70 L 250 70 C 250 85 265 85 265 70 L 250 140 C 235 140 235 125 250 125 L 180 140 L 180 70 Z"
          fill="#FD8303"
          stroke="#FFFFFF"
          strokeWidth="3"
        />

        {/* Piece 6: Middle Row - Teal Interlocking Piece */}
        <path
          d="M 250 70 L 320 70 L 320 150 C 305 150 305 135 320 135 L 250 150 C 265 150 265 135 250 135 L 250 70 Z"
          fill="#06A1BC"
          stroke="#FFFFFF"
          strokeWidth="3"
        />

        {/* Piece 7: Right Edge Middle - Lime Green */}
        <path
          d="M 320 75 L 350 75 L 350 160 C 335 160 335 175 350 175 L 350 170 L 320 170 Z"
          fill="#82B42D"
          stroke="#FFFFFF"
          strokeWidth="3"
        />

        {/* Piece 8: Bottom-Right Terminal - Neon Pink */}
        <path
          d="M 320 150 L 350 150 L 350 240 C 335 240 335 225 350 225 L 310 240 C 325 240 325 225 310 225 L 310 160 Z"
          fill="#F52C75"
          stroke="#FFFFFF"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
};
