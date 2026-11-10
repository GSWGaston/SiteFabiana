import photo from '../../assets/foto-fabiana.webp';

const BLOB = 'M52 2 C78 0 97 16 96 44 C95 68 82 80 66 92 C52 102 34 106 20 96 C6 86 3 66 6 46 C9 22 28 4 52 2 Z';
const HEART =
  'M16 28 C13 25 3 18 2 11 C1 6 5 2 10 3 C13 3.5 15 5.5 16 7.5 C17 5.5 19 3.5 22 3 C27 2 31 6 30 11 C29 18 19 25 16 28 Z';

const float = (delay = 0): React.CSSProperties => ({ animation: `float 5s ease-in-out ${delay}s infinite` });

/** Portrait cut into an organic blob, with the layered shapes around it. */
export function HeroPortrait() {
  return (
    <div style={{ position: 'relative', width: 'min(440px, 100%)', aspectRatio: '1 / 1.05' }}>
      {/* soft lavender backdrop */}
      <svg viewBox="0 0 100 108" aria-hidden="true" style={{ position: 'absolute', inset: '-8% -10%', width: '120%', height: '116%' }}>
        <path d={BLOB} fill="rgba(139,120,210,0.16)" transform="translate(-4 3) scale(1.06) rotate(-8 50 54)" />
      </svg>

      {/* photo */}
      <svg
        viewBox="0 0 100 108"
        role="img"
        aria-label="Fabiana Gaston, neuropsicopedagoga"
        style={{ position: 'relative', width: '100%', height: '100%', filter: 'drop-shadow(0 18px 28px rgba(79,72,120,0.28))' }}
      >
        <defs>
          <clipPath id="hero-blob">
            <path d={BLOB} />
          </clipPath>
        </defs>
        <image href={photo} width="100" height="108" preserveAspectRatio="xMidYMin slice" clipPath="url(#hero-blob)" />
        <path d={BLOB} fill="none" stroke="#fff" strokeWidth="1.6" />
      </svg>

      {/* green patterned heart */}
      <svg viewBox="0 0 32 32" aria-hidden="true" style={{ position: 'absolute', left: '-8%', top: '10%', width: '26%', transform: 'rotate(-12deg)', ...float() }}>
        <path d={HEART} fill="#82B42D" stroke="#fff" strokeWidth="0.8" />
        {[[9, 9], [15, 7], [21, 10], [8, 15], [14, 14], [20, 16], [13, 21]].map(([x, y]) => (
          <path key={`${x}-${y}`} d={`M${x} ${y} l3 -2`} stroke="#A9D35E" strokeWidth="1.2" strokeLinecap="round" />
        ))}
      </svg>

      {/* pink heart */}
      <svg viewBox="0 0 32 32" aria-hidden="true" style={{ position: 'absolute', left: '-6%', bottom: '24%', width: '12%', transform: 'rotate(8deg)', ...float(1.5) }}>
        <path d={HEART} fill="#F52C75" />
      </svg>

      {/* orange oval */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', right: '-3%', top: '50%', width: '14%', aspectRatio: '1 / 0.82', borderRadius: '50%',
          background: 'linear-gradient(135deg, #FFB347, #FD8303)', transform: 'rotate(-20deg)', boxShadow: '0 8px 16px -4px rgba(253,131,3,0.45)',
          ...float(0.8),
        }}
      />

      {/* teal blob */}
      <svg viewBox="0 0 100 70" aria-hidden="true" style={{ position: 'absolute', right: '12%', bottom: '-6%', width: '38%', ...float(2.2) }}>
        <path d="M8 40 C4 18 30 4 56 10 C84 16 98 38 82 56 C66 72 22 70 8 40 Z" fill="#1FC4C0" stroke="#fff" strokeWidth="3" />
      </svg>

      {/* confetti */}
      <svg viewBox="0 0 40 40" aria-hidden="true" style={{ position: 'absolute', right: '-2%', bottom: '14%', width: '9%' }}>
        {[[6, 6, '#F52C75'], [20, 4, '#FD8303'], [32, 12, '#06A1BC'], [12, 22, '#82B42D'], [28, 28, '#F52C75'], [8, 34, '#06A1BC']].map(([x, y, c]) => (
          <circle key={`${x}-${y}`} cx={x as number} cy={y as number} r="2.6" fill={c as string} />
        ))}
      </svg>
    </div>
  );
}
