import puzzle from '../../assets/puzzle-giz.webp';

/** Crayon-drawn puzzle pieces, anchored to the hero's top-right corner. */
export function CornerPuzzleBorder() {
  return (
    <img
      src={puzzle}
      alt=""
      width={1000}
      height={334}
      aria-hidden="true"
      className="absolute top-4 right-2 z-0 hidden md:block pointer-events-none select-none"
      style={{ width: 'min(380px, 32vw)', height: 'auto' }}
    />
  );
}
