import { motion } from 'framer-motion';
import { Users, ClipboardCheck, TrendingUp } from 'lucide-react';

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: 'inline-block',
        background: 'rgba(6,161,188,0.10)',
        color: '#06A1BC',
        borderRadius: '9999px',
        padding: '6px 16px',
        fontSize: '0.78rem',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 700,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        border: '1px solid rgba(6,161,188,0.2)',
      }}
    >
      {children}
    </span>
  );
}

const steps = [
  {
    number: '01',
    icon: <Users size={28} />,
    iconColor: '#06A1BC',
    iconBg: 'rgba(6,161,188,0.12)',
    accentLine: '#06A1BC',
    title: 'Acolhimento & Anamnese',
    description:
      'Sessão inicial de escuta atenta com a família ou paciente para compreender histórico de vida, queixas e expectativas. Um espaço de acolhimento sem julgamentos.',
    tag: 'Primeira Sessão',
    tagColor: '#06A1BC',
  },
  {
    number: '02',
    icon: <ClipboardCheck size={28} />,
    iconColor: '#4F4878',
    iconBg: 'rgba(79,72,120,0.10)',
    accentLine: '#4F4878',
    title: 'Avaliação Neuropsicopedagógica',
    description:
      'Aplicação de instrumentos padronizados, testes cognitivos, atividades lúdicas e observação clínica minuciosa — um mapeamento completo das potencialidades e dificuldades.',
    tag: 'Avaliação Completa',
    tagColor: '#4F4878',
  },
  {
    number: '03',
    icon: <TrendingUp size={28} />,
    iconColor: '#82B42D',
    iconBg: 'rgba(130,180,45,0.12)',
    accentLine: '#82B42D',
    title: 'Intervenção & Devolutiva',
    description:
      'Apresentação de relatório detalhado e início do plano de intervenção contínuo, focado em metas reais e mensuráveis — com acompanhamento constante da evolução.',
    tag: 'Plano Personalizado',
    tagColor: '#82B42D',
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      style={{
        background: '#fff',
        padding: '5rem 1.25rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* BG decorative blob */}
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '400px',
          height: '400px',
          borderRadius: '9999px',
          background: 'radial-gradient(circle, rgba(6,161,188,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <SectionBadge>Como Funciona</SectionBadge>
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.75rem, 4vw, 2.6rem)',
              color: '#4F4878',
              margin: '1rem 0 0.75rem',
            }}
          >
            Um processo claro, acolhedor e baseado em evidências
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.05rem',
              color: '#64748b',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Etapas estruturadas para entender a singularidade de cada aprendiz.
          </p>
        </motion.div>

        {/* Steps */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            position: 'relative',
          }}
          className="steps-grid"
        >
          {/* Connector line (desktop only) */}
          <div
            className="step-line"
            style={{
              display: 'none',
              position: 'absolute',
              top: '80px',
              left: '33.33%',
              right: '33.33%',
              height: '3px',
              background: 'linear-gradient(90deg, #06A1BC, #82B42D)',
              borderRadius: '9999px',
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                background: '#FAF9FC',
                borderRadius: '20px',
                padding: '2.25rem 2rem',
                border: '1px solid rgba(79,72,120,0.07)',
                boxShadow: '0 10px 30px -10px rgba(79,72,120,0.1)',
                position: 'relative',
                zIndex: 1,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              className="card-hover"
            >
              {/* Step number accent */}
              <div
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.5rem',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 800,
                  fontSize: '3.5rem',
                  color: step.accentLine,
                  opacity: 0.08,
                  lineHeight: 1,
                }}
              >
                {step.number}
              </div>

              {/* Icon circle */}
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '9999px',
                  background: step.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: step.iconColor,
                  marginBottom: '1.25rem',
                  border: `2px solid ${step.accentLine}20`,
                }}
              >
                {step.icon}
              </div>

              {/* Step label tag */}
              <span
                style={{
                  display: 'inline-block',
                  background: `${step.tagColor}12`,
                  color: step.tagColor,
                  borderRadius: '9999px',
                  padding: '3px 10px',
                  fontSize: '0.7rem',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  marginBottom: '0.75rem',
                  border: `1px solid ${step.tagColor}25`,
                }}
              >
                Passo {step.number} · {step.tag}
              </span>

              <h3
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  color: '#4F4878',
                  margin: '0 0 0.75rem',
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.9rem',
                  color: '#64748b',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {step.description}
              </p>

              {/* Left accent bar */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '20%',
                  bottom: '20%',
                  width: '4px',
                  borderRadius: '0 4px 4px 0',
                  background: `linear-gradient(180deg, ${step.accentLine}, ${step.accentLine}80)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .steps-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .step-line   { display: block !important; }
        }
      `}</style>
    </section>
  );
}
