import { motion } from 'framer-motion';

// Real sequence: the numbered markers are intentional here.
const steps = [
  {
    number: '1',
    color: '#057f95',
    title: 'Acolhimento e anamnese',
    label: 'Primeira sessão',
    description:
      'Sessão inicial de escuta atenta com a família ou paciente para compreender histórico de vida, queixas e expectativas. Um espaço de acolhimento sem julgamentos.',
  },
  {
    number: '2',
    color: '#D01F63',
    title: 'Avaliação e diagnóstico neuropsicopedagógico',
    label: 'Avaliação completa',
    description:
      'Aplicação de instrumentos padronizados, testes cognitivos, atividades lúdicas e observação clínica minuciosa — um mapeamento completo das potencialidades e dificuldades.',
  },
  {
    number: '3',
    color: '#4F7A12',
    title: 'Intervenção, estratégias e acompanhamento',
    label: 'Acompanhamento contínuo',
    description:
      'Plano personalizado com estratégias para desenvolver habilidades, superar desafios e acompanhar cada conquista com acolhimento e ética.',
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-title"
      style={{ background: '#fff', padding: '5.5rem 1.25rem', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <h2
            id="servicos-title"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.75rem, 4vw, 2.6rem)',
              color: '#4F4878',
              margin: '0 auto 0.75rem',
              maxWidth: '22ch',
            }}
          >
            Um processo claro, acolhedor e baseado em evidências
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.06rem', color: '#4a5568', margin: '0 auto', lineHeight: 1.7 }}>
            Etapas estruturadas para entender a singularidade de cada aprendiz.
          </p>
        </motion.div>

        <ol className="steps" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {steps.map((step, i) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="step"
            >
              <span className="step-dot" style={{ background: step.color }} aria-hidden="true">
                {step.number}
              </span>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.94rem', fontWeight: 600, color: step.color, margin: '0 0 0.3rem' }}>
                  {step.label}
                </p>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.25rem', color: '#4F4878', margin: '0 0 0.7rem', lineHeight: 1.3 }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.94rem', color: '#4a5568', lineHeight: 1.75, margin: 0 }}>
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>

      <style>{`
        .steps { position: relative; display: grid; gap: 2.5rem; }
        .step { position: relative; display: grid; grid-template-columns: 44px 1fr; gap: 1.1rem; }
        .step-dot {
          width: 44px; height: 44px; border-radius: 9999px; color: #fff;
          display: flex; align-items: center; justify-content: center;
          font-family: Poppins, sans-serif; font-weight: 700; font-size: 1.1rem;
          position: relative; z-index: 1;
        }
        /* one continuous line behind the markers (vertical on mobile) */
        .steps::before {
          content: ''; position: absolute; left: 21px; top: 22px; bottom: 22px; width: 2px;
          background: linear-gradient(180deg, #057f95, #D01F63, #4F7A12); opacity: 0.35;
        }
        @media (min-width: 900px) {
          .steps { grid-template-columns: repeat(3, 1fr); gap: 2.5rem; }
          .step { grid-template-columns: 1fr; gap: 1.25rem; }
          .steps::before { left: 22px; right: 22px; top: 21px; bottom: auto; width: auto; height: 2px;
            background: linear-gradient(90deg, #057f95, #D01F63, #4F7A12); }
        }
      `}</style>
    </section>
  );
}
