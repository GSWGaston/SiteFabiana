import { PuzzleAccent } from './PuzzlePieces';

/**
 * Kept as a semantic name for the hero, while using the softer puzzle motif
 * shared across the rest of the page.
 */
export function CornerPuzzleBorder() {
  return (
    <div className="absolute top-3 right-0 z-0 hidden md:block pointer-events-none select-none">
      <PuzzleAccent variant="hero" size={285} opacity={0.92} />
    </div>
  );
}
