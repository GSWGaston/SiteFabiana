import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: 'inline-block',
        background: 'rgba(245,44,117,0.08)',
        color: '#F52C75',
        borderRadius: '9999px',
        padding: '6px 16px',
        fontSize: '0.78rem',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 700,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        border: '1px solid rgba(245,44,117,0.18)',
      }}
    >
      {children}
    </span>
  );
}

const faqs = [
  {
    id: 'faq1',
    question: 'O que faz exatamente uma neuropsicopedagoga?',
    answer:
      'A neuropsicopedagogia integra conhecimentos da neurociência, psicologia e pedagogia para compreender como o cérebro aprende, identifica dificuldades cognitivas e estrutura estratégias para potencializar o aprendizado e a memória. A neuropsicopedagoga avalia, intervém e orienta famílias e instituições de ensino com base em evidências científicas.',
  },
  {
    id: 'faq2',
    question: 'Quando é o momento certo de buscar uma avaliação para meu filho?',
    answer:
      'Ao notar sinais persistentes como atraso na fala ou alfabetização, desatenção frequente, resistência excessiva para fazer tarefas escolares, notas em queda ou dificuldades de interação social. Não é necessário aguardar que os problemas se agravem — quanto antes a avaliação acontece, mais eficaz e rápida é a intervenção.',
  },
  {
    id: 'faq3',
    question: 'Adultos e idosos também podem realizar estimulação cognitiva?',
    answer:
      'Com certeza! O cérebro possui neuroplasticidade por toda a vida. A estimulação cognitiva fortalece conexões neurais, previne perdas de memória e promove autonomia e agilidade mental em adultos e idosos. Trabalhar a cognição de forma preventiva é um dos melhores investimentos em qualidade de vida.',
  },
  {
    id: 'faq4',
    question: 'Como funciona o primeiro contato e agendamento?',
    answer:
      'Basta clicar em qualquer botão de WhatsApp aqui na página. Você conversará diretamente conosco para tirar dúvidas sobre valores, horários e marcar a primeira conversa de acolhimento. O processo é simples, rápido e sem burocracia — estamos aqui para facilitar cada etapa.',
  },
];

function FaqItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="faq-item"
      style={{ borderBottom: '1px solid rgba(79,72,120,0.12)', overflow: 'hidden' }}
    >
      <button
        id={item.id}
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          padding: '1.5rem 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(0.92rem, 2vw, 1.02rem)',
            color: isOpen ? '#06A1BC' : '#4F4878',
            lineHeight: 1.45,
            transition: 'color 0.25s',
            flex: 1,
          }}
        >
          {item.question}
        </span>

        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '9999px',
            background: isOpen ? '#06A1BC' : 'rgba(79,72,120,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isOpen ? '#fff' : '#4F4878',
            flexShrink: 0,
            transition: 'background 0.25s, color 0.25s',
          }}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.92rem',
                color: '#4a5568',
                lineHeight: 1.8,
                paddingBottom: '1.5rem',
                paddingRight: '3rem',
              }}
            >
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq1');

  return (
    <section
      id="faq"
      style={{ background: '#FAF9FC', padding: '5rem 1.25rem' }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <SectionBadge>Dúvidas Frequentes</SectionBadge>
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              color: '#4F4878',
              margin: '1rem 0 0.75rem',
            }}
          >
            Dúvidas Frequentes
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              color: '#64748b',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            As respostas para as perguntas mais comuns sobre neuropsicopedagogia.
          </p>
        </motion.div>

        {/* Accordion */}
        <div
          style={{
            background: '#fff',
            borderRadius: '20px',
            padding: '0.5rem 2rem',
            boxShadow: '0 10px 30px -10px rgba(79,72,120,0.1)',
            border: '1px solid rgba(79,72,120,0.07)',
          }}
        >
          {faqs.map((item, i) => (
            <FaqItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
