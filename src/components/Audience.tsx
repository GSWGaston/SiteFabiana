import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PuzzlePieces } from './decorations/PuzzlePieces';
import { HeartDoodle, DotCluster } from './decorations/BrandDoodles';

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: 'inline-block',
        background: 'rgba(79,72,120,0.08)',
        color: '#4F4878',
        borderRadius: '9999px',
        padding: '6px 16px',
        fontSize: '0.78rem',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 700,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        border: '1px solid rgba(79,72,120,0.15)',
      }}
    >
      {children}
    </span>
  );
}

const audiences = [
  {
    emoji: '🧒',
    title: 'Crianças e Jovens',
    topAccent: '#F52C75',
    bottomAccent: '#FD8303',
    cardBorder: '1.5px solid rgba(245,44,117,0.25)',
    cardShadow: '0 12px 36px -10px rgba(245,44,117,0.14)',
    tagColor: '#F52C75',
    tagBg: 'rgba(245,44,117,0.08)',
    tagText: 'Infância & Adolescência',
    isPediatric: true,
    items: [
      'Dificuldades de aprendizagem, alfabetização, leitura e escrita (Dislexia)',
      'Desatenção, impulsividade e foco (TDAH)',
      'Apoio no Transtorno do Espectro Autista (TEA)',
      'Desenvolvimento de autonomia escolar e socioemocional',
    ],
    checkColor: '#F52C75',
  },
  {
    emoji: '🧓',
    title: 'Adultos e Terceira Idade',
    topAccent: '#06A1BC',
    bottomAccent: '#82B42D',
    cardBorder: '1.5px solid rgba(6,161,188,0.22)',
    cardShadow: '0 12px 36px -10px rgba(6,161,188,0.12)',
    tagColor: '#06A1BC',
    tagBg: 'rgba(6,161,188,0.08)',
    tagText: 'Todas as Idades',
    highlight: '"Seu cérebro não se aposenta."',
    items: [
      'Treino de memória de curto e longo prazo, atenção e raciocínio',
      'Estimulação cognitiva preventiva e reabilitação neurofuncional',
      'Manutenção da independência, clareza mental e bem-estar',
    ],
    checkColor: '#06A1BC',
  },
  {
    emoji: '🏫',
    title: 'Famílias e Escolas',
    topAccent: '#4F4878',
    bottomAccent: '#6b64a0',
    cardBorder: '1.5px solid rgba(79,72,120,0.2)',
    cardShadow: '0 12px 36px -10px rgba(79,72,120,0.12)',
    tagColor: '#4F4878',
    tagBg: 'rgba(79,72,120,0.08)',
    tagText: 'Suporte Sistêmico',
    items: [
      'Orientação parental e suporte nas rotinas do lar',
      'Mediação pedagógica e visitas escolares para alinhamento com educadores',
      'Adaptação curricular e estratégias conjuntas de evolução',
    ],
    checkColor: '#82B42D',
  },
];

export default function Audience() {
  return (
    <section
      id="publico"
      style={{ background: '#FAF9FC', padding: '5rem 1.25rem', position: 'relative', overflow: 'hidden' }}
    >
      {/* Subtle corner puzzle piece accent */}
      <div className="absolute top-8 right-6 opacity-35 pointer-events-none hidden sm:block">
        <PuzzlePieces size={70} />
      </div>
      <div className="absolute bottom-8 left-8 opacity-45 pointer-events-none hidden md:block">
        <DotCluster />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <SectionBadge>Público-Alvo</SectionBadge>
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.75rem, 4.2vw, 2.7rem)',
              color: '#4F4878',
              margin: '1rem 0 0.75rem',
            }}
          >
            Aprender e estimular o cérebro{' '}
            <span className="font-handwriting text-[#F52C75] text-3xl sm:text-4xl md:text-5xl font-bold inline-block transform -rotate-1 mx-1">
              não tem idade
            </span>
            .
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.05rem',
              color: '#64748b',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Cada fase da vida tem suas particularidades cognitivas e emocionais.
            Oferecemos suporte personalizado para:
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.75rem',
          }}
          className="audience-grid"
        >
          {audiences.map((aud, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              style={{
                background: '#fff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: aud.cardShadow,
                border: aud.cardBorder,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default',
              }}
              className="card-hover"
            >
              {/* Top accent bar */}
              <div
                style={{
                  height: '6px',
                  background: `linear-gradient(90deg, ${aud.topAccent}, ${aud.bottomAccent})`,
                }}
              />

              <div style={{ padding: '2rem' }}>
                {/* Title row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '2rem' }}>{aud.emoji}</span>
                    <h3
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 700,
                        fontSize: '1.2rem',
                        color: '#4F4878',
                        margin: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      {aud.title}
                      {aud.isPediatric && (
                        <HeartDoodle size={18} fill={false} />
                      )}
                    </h3>
                  </div>
                  <span
                    style={{
                      background: aud.tagBg,
                      color: aud.tagColor,
                      borderRadius: '9999px',
                      padding: '4px 12px',
                      fontSize: '0.72rem',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 700,
                      border: `1px solid ${aud.tagColor}30`,
                    }}
                  >
                    {aud.tagText}
                  </span>
                </div>

                {/* Highlight quote */}
                {aud.highlight && (
                  <div
                    style={{
                      background: 'rgba(6,161,188,0.06)',
                      borderLeft: '3px solid #06A1BC',
                      borderRadius: '0 12px 12px 0',
                      padding: '10px 16px',
                      marginBottom: '1rem',
                      fontFamily: 'Poppins, sans-serif',
                      fontStyle: 'italic',
                      fontWeight: 600,
                      color: '#06A1BC',
                      fontSize: '0.95rem',
                    }}
                  >
                    {aud.highlight}
                  </div>
                )}

                {/* Items */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {aud.items.map((item, j) => (
                    <li
                      key={j}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.9rem',
                        color: '#475569',
                        lineHeight: 1.55,
                      }}
                    >
                      <span
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '9999px',
                          background: `${aud.checkColor}18`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '1px',
                        }}
                      >
                        <Check size={12} style={{ color: aud.checkColor }} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .audience-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
