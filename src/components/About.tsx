import { motion } from 'framer-motion';

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: 'inline-block',
        background: 'rgba(253,131,3,0.1)',
        color: '#FD8303',
        borderRadius: '9999px',
        padding: '6px 16px',
        fontSize: '0.78rem',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 700,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        border: '1px solid rgba(253,131,3,0.2)',
      }}
    >
      {children}
    </span>
  );
}

/* ── Reuse of the SVG portrait from Hero (self-contained here) ── */
function AboutPortrait() {
  return (
    <svg
      viewBox="0 0 320 400"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', borderRadius: '24px' }}
    >
      <defs>
        <linearGradient id="aboutBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF3E6" />
          <stop offset="100%" stopColor="#EDE9F8" />
        </linearGradient>
        <radialGradient id="aboutFaceGrad" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#F8D5B5" />
          <stop offset="100%" stopColor="#E8A87C" />
        </radialGradient>
      </defs>

      <rect width="320" height="400" fill="url(#aboutBgGrad)" />

      {/* Decorative shapes */}
      <circle cx="290" cy="60" r="50" fill="rgba(253,131,3,0.1)" />
      <circle cx="30" cy="360" r="60" fill="rgba(79,72,120,0.08)" />
      <circle cx="270" cy="330" r="30" fill="rgba(130,180,45,0.1)" />

      {/* Body */}
      <ellipse cx="160" cy="370" rx="110" ry="65" fill="#F5E6D3" />
      <rect x="70" y="290" width="180" height="120" fill="#F0D5B8" rx="8" />

      {/* Neck */}
      <rect x="142" y="248" width="36" height="52" fill="url(#aboutFaceGrad)" rx="4" />

      {/* Face */}
      <ellipse cx="160" cy="195" rx="76" ry="85" fill="url(#aboutFaceGrad)" />

      {/* Hair – warm brown waves */}
      <ellipse cx="160" cy="136" rx="78" ry="52" fill="#5C3A1E" />
      <ellipse cx="93" cy="178" rx="16" ry="42" fill="#5C3A1E" />
      <ellipse cx="227" cy="178" rx="16" ry="42" fill="#5C3A1E" />
      <ellipse cx="160" cy="135" rx="76" ry="38" fill="#6B4423" />

      {/* Eyes – warm brown */}
      <ellipse cx="133" cy="195" rx="12" ry="10" fill="white" />
      <ellipse cx="187" cy="195" rx="12" ry="10" fill="white" />
      <circle cx="135" cy="196" r="7" fill="#3D1F0A" />
      <circle cx="189" cy="196" r="7" fill="#3D1F0A" />
      <circle cx="137" cy="194" r="2.5" fill="white" />
      <circle cx="191" cy="194" r="2.5" fill="white" />

      {/* Eyebrows */}
      <path d="M119 183 Q133 176 147 180" stroke="#4A2912" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M173 180 Q187 176 201 183" stroke="#4A2912" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Nose */}
      <path d="M156 207 Q159 220 165 220 Q168 220 164 207" stroke="#C68642" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Warm smile */}
      <path d="M141 235 Q160 250 179 235" stroke="#B8511A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <ellipse cx="160" cy="239" rx="14" ry="6" fill="#E87070" fillOpacity="0.3" />

      {/* Blush */}
      <ellipse cx="116" cy="218" rx="14" ry="8" fill="#FD8303" fillOpacity="0.13" />
      <ellipse cx="204" cy="218" rx="14" ry="8" fill="#FD8303" fillOpacity="0.13" />

      {/* Pearl earrings */}
      <circle cx="85" cy="200" r="5.5" fill="#FD8303" />
      <circle cx="235" cy="200" r="5.5" fill="#FD8303" />

      {/* Blouse */}
      <path d="M100 292 L70 400 L250 400 L220 292 L160 315 Z" fill="#4F4878" fillOpacity="0.85" />
      <path d="M125 290 L160 320 L195 290" fill="white" fillOpacity="0.2" />

      {/* Decorative dots */}
      {[[30,25],[290,25],[15,200],[305,200]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3.5" fill="#FD8303" fillOpacity="0.35" />
      ))}
    </svg>
  );
}

export default function About() {
  return (
    <section
      id="sobre"
      style={{
        background: '#FAF9FC',
        padding: '5rem 1.25rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blob */}
      <div
        style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-60px',
          width: '350px',
          height: '350px',
          borderRadius: '9999px',
          background: 'radial-gradient(circle, rgba(253,131,3,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3.5rem',
          alignItems: 'center',
        }}
        className="about-grid"
      >
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div
            style={{
              position: 'relative',
              width: 'min(320px, 85vw)',
              height: 'min(390px, 105vw)',
            }}
          >
            {/* Outer decorative border */}
            <div
              style={{
                position: 'absolute',
                inset: '-14px',
                borderRadius: '36px',
                background: 'linear-gradient(135deg, #FD830330, #4F487820)',
                border: '2px solid rgba(253,131,3,0.2)',
              }}
            />
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 24px 60px -10px rgba(79,72,120,0.2)',
              }}
            >
              <AboutPortrait />
            </div>

            {/* Experience badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                right: '-24px',
                background: '#fff',
                borderRadius: '16px',
                padding: '12px 18px',
                boxShadow: '0 8px 28px rgba(79,72,120,0.18)',
                border: '1px solid rgba(79,72,120,0.1)',
                fontFamily: 'Poppins, sans-serif',
                textAlign: 'center',
                minWidth: '100px',
              }}
            >
              <div
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  color: '#FD8303',
                  lineHeight: 1,
                }}
              >
                🏆
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>
                Mestranda
              </div>
              <div style={{ fontSize: '0.65rem', color: '#06A1BC', fontWeight: 700 }}>
                Internacional ABA
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <div>
            <SectionBadge>Sobre Mim</SectionBadge>
          </div>

          <div>
            <h2
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                color: '#4F4878',
                margin: '0 0 0.4rem',
              }}
            >
              Prazer, eu sou a Fabiana Gaston
            </h2>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '1rem',
                color: '#06A1BC',
                margin: 0,
              }}
            >
              Neuropsicopedagoga Clínica · Mestranda Internacional em ABA
            </p>
          </div>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.96rem',
              color: '#4a5568',
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Acredito que cada mente carrega um potencial único, e é esse potencial que me move. 
            Dedico minha prática profissional à integração entre neurociência, psicologia e pedagogia,
            criando pontes entre o que a ciência sabe sobre o cérebro e o que cada família precisa
            para sua própria jornada.
          </p>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.96rem',
              color: '#4a5568',
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Atualmente, aprofundo minha formação em Análise do Comportamento Aplicada (ABA) 
            em programa internacional de mestrado, mantendo-me na vanguarda das práticas
            baseadas em evidências. Essa busca constante pela atualização científica caminha
            sempre lado a lado com o afeto genuíno por cada história que chega até mim.
          </p>

          {/* Quote Box */}
          <div
            style={{
              background: 'linear-gradient(135deg, #FFF8EE, #FEF3E2)',
              border: '2px solid rgba(253,131,3,0.25)',
              borderRadius: '16px',
              padding: '1.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Quote mark */}
            <div
              style={{
                position: 'absolute',
                top: '8px',
                left: '16px',
                fontFamily: 'Georgia, serif',
                fontSize: '4rem',
                color: '#FD8303',
                opacity: 0.15,
                lineHeight: 1,
              }}
            >
              "
            </div>
            <p
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontStyle: 'italic',
                fontWeight: 600,
                fontSize: '1rem',
                color: '#92490A',
                margin: 0,
                lineHeight: 1.65,
                position: 'relative',
                zIndex: 1,
              }}
            >
              Por trás de cada proposta, existe observação, afeto, objetivo e estratégia.
            </p>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.78rem',
                color: '#FD8303',
                margin: '0.75rem 0 0',
                fontWeight: 600,
              }}
            >
              — Fabiana Gaston
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid { grid-template-columns: 1fr 1.2fr !important; }
        }
      `}</style>
    </section>
  );
}
