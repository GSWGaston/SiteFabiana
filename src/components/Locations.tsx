import { motion } from 'framer-motion';
import { Home, Video, MessageCircle } from 'lucide-react';
import { PuzzleAccent } from './decorations/PuzzlePieces';
import { LayeredWaves } from './decorations/LayeredWaves';

const WHATSAPP_URL =
  'https://wa.me/555184310180?text=Ol%C3%A1%2C%20Fabiana!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas.';

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: 'inline-block',
        background: 'rgba(130,180,45,0.10)',
        color: '#82B42D',
        borderRadius: '9999px',
        padding: '6px 16px',
        fontSize: '0.78rem',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 700,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        border: '1px solid rgba(130,180,45,0.2)',
      }}
    >
      {children}
    </span>
  );
}

const cards = [
  {
    id: 'presencial',
    icon: <Home size={32} />,
    iconColor: '#4F4878',
    iconBg: 'rgba(79,72,120,0.1)',
    gradient: 'linear-gradient(135deg, #4F4878, #6b64a0)',
    tag: 'Porto Alegre · RS',
    tagColor: '#4F4878',
    title: 'Atendimento Presencial',
    emoji: '🏢',
    features: [
      'Consultório acolhedor em Porto Alegre',
      'Atendimento itinerante na Região Metropolitana',
      'Parcerias com clínicas e escolas',
      'Ambiente preparado para crianças e adultos',
    ],
  },
  {
    id: 'online',
    icon: <Video size={32} />,
    iconColor: '#06A1BC',
    iconBg: 'rgba(6,161,188,0.1)',
    gradient: 'linear-gradient(135deg, #06A1BC, #1db8d5)',
    tag: 'Todo o Brasil',
    tagColor: '#06A1BC',
    title: 'Atendimento Online',
    emoji: '💻',
    features: [
      'Orientação parental a distância',
      'Assessoria pedagógica a professores',
      'Sessões de suporte e acompanhamento',
      'Flexibilidade de horários e localização',
    ],
  },
];

export default function Locations() {
  return (
    <section
      id="locais"
      style={{
        background: '#fff',
        padding: '5rem 1.25rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* BG blob */}
      <div
        style={{
          position: 'absolute',
          top: '-40px',
          left: '-40px',
          width: '300px',
          height: '300px',
          borderRadius: '9999px',
          background: 'radial-gradient(circle, rgba(130,180,45,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div className="absolute -top-3 -right-7 hidden lg:block">
        <PuzzleAccent variant="corner" size={215} opacity={0.3} />
      </div>
      <LayeredWaves variant="soft" fillNext="#FAF9FC" className="absolute bottom-0 left-0 right-0 z-0" />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <SectionBadge>Onde Atendemos</SectionBadge>
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.75rem, 4vw, 2.6rem)',
              color: '#4F4878',
              margin: '1rem 0 0.75rem',
            }}
          >
            Onde Atendemos
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.05rem',
              color: '#64748b',
              maxWidth: '480px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Flexibilidade para acolher você da melhor forma.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.75rem',
            marginBottom: '3rem',
          }}
          className="locations-grid"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                background: '#FAF9FC',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px -10px rgba(79,72,120,0.1)',
                border: '1px solid rgba(79,72,120,0.07)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              className="card-hover"
            >
              {/* Card header with gradient */}
              <div
                style={{
                  background: card.gradient,
                  padding: '2rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: 'rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    flexShrink: 0,
                  }}
                >
                  {card.icon}
                </div>
                <div>
                  <span
                    style={{
                      background: 'rgba(255,255,255,0.25)',
                      color: '#fff',
                      borderRadius: '9999px',
                      padding: '3px 12px',
                      fontSize: '0.72rem',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 700,
                      display: 'inline-block',
                      marginBottom: '6px',
                    }}
                  >
                    {card.emoji} {card.tag}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      color: '#fff',
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: '1.75rem 2rem' }}>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  {card.features.map((feat, j) => (
                    <li
                      key={j}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.9rem',
                        color: '#475569',
                      }}
                    >
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '9999px',
                          background: card.iconColor,
                          flexShrink: 0,
                        }}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center' }}
        >
          <a
            id="locations-whatsapp-cta"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'linear-gradient(135deg, #06A1BC, #057f95)',
              color: '#fff',
              padding: '15px 32px',
              borderRadius: '9999px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              boxShadow: '0 6px 28px -4px rgba(6,161,188,0.5)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 36px -4px rgba(6,161,188,0.65)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 28px -4px rgba(6,161,188,0.5)';
            }}
          >
            <MessageCircle size={20} />
            Consultar Disponibilidade de Horários
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .locations-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
