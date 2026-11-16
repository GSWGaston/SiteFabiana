import { motion } from 'framer-motion';
import { Check, Baby, Brain, School } from 'lucide-react';

const audiences = [
  {
    icon: Baby,
    title: 'Crianças e Jovens',
    label: 'Infância e adolescência',
    color: '#D01F63',
    border: 'rgba(245,44,117,0.28)',
    items: [
      'Dificuldades de aprendizagem, alfabetização, leitura e escrita (Dislexia)',
      'Desatenção, impulsividade e foco (TDAH)',
      'Apoio no Transtorno do Espectro Autista (TEA)',
      'Desenvolvimento de autonomia escolar e socioemocional',
    ],
  },
  {
    icon: Brain,
    title: 'Adultos e Terceira Idade',
    label: 'Todas as idades',
    color: '#057f95',
    border: 'rgba(6,161,188,0.28)',
    highlight: 'Seu cérebro não se aposenta.',
    items: [
      'Treino de memória de curto e longo prazo, atenção e raciocínio',
      'Estimulação cognitiva preventiva e reabilitação neurofuncional',
      'Manutenção da independência, clareza mental e bem-estar',
    ],
  },
  {
    icon: School,
    title: 'Famílias e Escolas',
    label: 'Suporte sistêmico',
    color: '#4F4878',
    border: 'rgba(79,72,120,0.22)',
    items: [
      'Orientação parental e suporte nas rotinas do lar',
      'Mediação pedagógica e visitas escolares para alinhamento com educadores',
      'Adaptação curricular e estratégias conjuntas de evolução',
    ],
  },
];

export default function Audience() {
  return (
    <section
      id="publico"
      aria-labelledby="publico-title"
      style={{ background: '#FAF9FC', padding: '5.5rem 1.25rem', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <h2
            id="publico-title"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.75rem, 4.2vw, 2.7rem)',
              color: '#4F4878',
              margin: '0 0 0.75rem',
            }}
          >
            Aprender e estimular o cérebro não tem idade.
          </h2>
          <p
            className="prose"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.06rem',
              color: '#4a5568',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Cada fase da vida tem suas particularidades cognitivas e emocionais. Oferecemos suporte
            personalizado para:
          </p>
        </motion.div>

        <div className="audience-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          {audiences.map((aud, i) => {
            const Icon = aud.icon;
            return (
              <motion.div
                key={aud.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="card-hover"
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  border: `1.5px solid ${aud.border}`,
                  padding: i === 0 ? '2.25rem' : '2rem',
                }}
              >
                <Icon size={i === 0 ? 36 : 30} strokeWidth={1.75} style={{ color: aud.color }} aria-hidden="true" />
                <h3
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: i === 0 ? '1.4rem' : '1.25rem',
                    color: '#4F4878',
                    margin: '0.9rem 0 0.15rem',
                  }}
                >
                  {aud.title}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.94rem', fontWeight: 600, color: aud.color, margin: '0 0 1.1rem' }}>
                  {aud.label}
                </p>

                {aud.highlight && (
                  <p
                    style={{
                      borderLeft: `3px solid ${aud.color}`,
                      padding: '2px 0 2px 14px',
                      margin: '0 0 1.1rem',
                      fontFamily: 'Poppins, sans-serif',
                      fontStyle: 'italic',
                      fontWeight: 600,
                      color: aud.color,
                      fontSize: '1.06rem',
                    }}
                  >
                    “{aud.highlight}”
                  </p>
                )}

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  {aud.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.94rem',
                        color: '#475569',
                        lineHeight: 1.6,
                      }}
                    >
                      <Check size={16} strokeWidth={2.5} aria-hidden="true" style={{ color: aud.color, flexShrink: 0, marginTop: '4px' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .audience-grid { grid-template-columns: 1.25fr 1fr 1fr !important; align-items: start; }
        }
      `}</style>
    </section>
  );
}
