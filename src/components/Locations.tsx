import { motion } from 'framer-motion';
import { Home, Video, MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/555184310180?text=Ol%C3%A1%2C%20Fabiana!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas.';

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
    iconColor: '#057f95',
    iconBg: 'rgba(6,161,188,0.1)',
    gradient: 'linear-gradient(135deg, #057f95, #0a8fa8)',
    tag: 'Todo o Brasil',
    tagColor: '#06A1BC',
    title: 'Atendimento Online',
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
      aria-labelledby="locais-title"
      style={{
        background: '#fff',
        padding: '5.5rem 1.25rem',
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

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <h2
            id="locais-title"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.75rem, 4vw, 2.6rem)',
              color: '#4F4878',
              margin: '0 0 0.75rem',
            }}
          >
            Onde Atendemos
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.06rem',
              color: '#4a5568',
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
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.94rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)', margin: '0 0 4px' }}>
                    {card.tag}
                  </p>
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
                        fontSize: '0.94rem',
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
            className="btn btn-primary"
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
