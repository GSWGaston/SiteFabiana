interface DoodleProps {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

/**
 * Hand-drawn playful yellow/orange star with mini sparkle rays
 */
export function StarDoodle({ className = '', size = 28, style = {} }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none ${className}`}
      style={{ filter: 'drop-shadow(0 2px 6px rgba(253,131,3,0.3))', ...style }}
    >
      {/* Central 5-point playful star */}
      <path
        d="M24 6 
           C25 14 26 18 31 20 
           C37 22 41 23 41 24 
           C41 25 37 26 31 28 
           C26 30 25 34 24 42 
           C23 34 22 30 17 28 
           C11 26 7 25 7 24 
           C7 23 11 22 17 20 
           C22 18 23 14 24 6 Z"
        fill="#FD8303"
      />
      <circle cx="24" cy="24" r="3" fill="#FACC15" />
      {/* Sparkle rays */}
      <circle cx="36" cy="12" r="1.75" fill="#FD8303" />
      <circle cx="12" cy="12" r="1.5" fill="#FD8303" />
      <circle cx="37" cy="36" r="1.5" fill="#FACC15" />
      <circle cx="11" cy="35" r="1.75" fill="#FD8303" />
    </svg>
  );
}

/**
 * Hand-drawn style pink outline heart (#F52C75)
 */
export function HeartDoodle({
  className = '',
  size = 24,
  fill = false,
  style = {},
}: DoodleProps & { fill?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none ${className}`}
      style={{ filter: 'drop-shadow(0 2px 6px rgba(245,44,117,0.3))', ...style }}
    >
      <path
        d="M16 27.5
           C14 25.5 5 18.5 3.5 12.5
           C2.2 7.5 6.2 3.5 11 4
           C13.5 4.3 15.2 6 16 7.5
           C16.8 6 18.5 4.3 21 4
           C25.8 3.5 29.8 7.5 28.5 12.5
           C27 18.5 18 25.5 16 27.5 Z"
        fill={fill ? '#F52C75' : 'rgba(245,44,117,0.12)'}
        stroke="#F52C75"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Floating cluster of 5 to 7 colorful confetti dots
 * Inspired by Fabiana's social media carousel posts
 */
export function DotCluster({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) {
  const dots = [
    { cx: 8, cy: 8, r: 4.5, color: '#F52C75' },   // Pink
    { cx: 28, cy: 12, r: 3.5, color: '#06A1BC' },  // Cyan
    { cx: 48, cy: 6, r: 4, color: '#FD8303' },    // Orange
    { cx: 16, cy: 30, r: 3, color: '#82B42D' },    // Green
    { cx: 38, cy: 26, r: 5, color: '#4F4878' },    // Purple
    { cx: 54, cy: 36, r: 3.5, color: '#F52C75' },  // Pink
    { cx: 26, cy: 46, r: 4, color: '#06A1BC' },    // Cyan
  ];

  return (
    <svg
      width="64"
      height="54"
      viewBox="0 0 64 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      style={style}
    >
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r={d.r}
          fill={d.color}
          fillOpacity={0.85}
        />
      ))}
    </svg>
  );
}

/**
 * Playful curved dashed accent line
 */
export function CurvedDashedLine({
  className = '',
  color = '#4F4878',
  width = 120,
  height = 50,
  style = {},
}: {
  className?: string;
  color?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      style={style}
    >
      <path
        d="M6 44 C 36 8, 84 8, 114 42"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="6 6"
        strokeOpacity={0.4}
      />
    </svg>
  );
}
