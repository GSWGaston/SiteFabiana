import photo from '../../assets/foto-fabiana.webp';
import { Crayon } from './Crayon';

const BLOB = 'M52 2 C78 0 97 16 96 44 C95 68 82 80 66 92 C52 102 34 106 20 96 C6 86 3 66 6 46 C9 22 28 4 52 2 Z';

// Same crayon box as the puzzle illustration.
const GREEN = '#6CC22C';
const RED = '#F0264F';
const ORANGE = '#FF9410';
const YELLOW = '#FFC82E';

const float = (delay = 0): React.CSSProperties => ({ animation: `float 5s ease-in-out ${delay}s infinite` });

/** Portrait cut into an organic blob, with crayon-drawn hearts and stars around it. */
export function HeroPortrait({ minimal = false }: { minimal?: boolean }) {
  return (
    <div style={{ position: 'relative', width: 'min(440px, 100%)', aspectRatio: '1 / 1.05' }}>
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

      {minimal ? (
        <>
          <div style={{ position: 'absolute', left: '-4%', bottom: '-5%', ...float(1.2) }}>
            <Crayon shape="heart" color={RED} size={96} tilt={-12} seed={4} />
          </div>
          <div style={{ position: 'absolute', right: '4%', top: '-3%', ...float(0.4) }}>
            <Crayon shape="star" color={ORANGE} size={64} tilt={14} seed={7} />
          </div>
        </>
      ) : (
        <>
          <div style={{ position: 'absolute', left: '-9%', top: '6%', ...float() }}>
            <Crayon shape="heart" color={GREEN} size={104} tilt={-14} seed={2} />
          </div>
          <div className="hero-oval" style={{ position: 'absolute', right: '-5%', top: '34%', ...float(0.8) }}>
            <Crayon shape="star" color={ORANGE} size={72} tilt={12} seed={5} />
          </div>
          <div style={{ position: 'absolute', right: '6%', bottom: '-7%', ...float(2.2) }}>
            <Crayon shape="heart" color={RED} size={112} tilt={11} seed={9} />
          </div>
          <div className="hero-oval" style={{ position: 'absolute', right: '22%', top: '-6%', ...float(1.5) }}>
            <Crayon shape="sun" color={YELLOW} size={58} tilt={-8} seed={12} />
          </div>
        </>
      )}
    </div>
  );
}
