import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { HeartDoodle } from './decorations/BrandDoodles';
import { HeroPortrait } from './decorations/HeroPortrait';

export default function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      style={{
        background: '#FAF9FC',
        padding: '7rem 1.25rem',
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
          <div style={{ position: 'relative', width: 'min(420px, 100%)', padding: '0 4%' }}>
            <HeroPortrait minimal />
            <div
              style={{
                position: 'absolute',
                bottom: '12%',
                right: '-2%',
                background: '#fff',
                borderRadius: '16px',
                padding: '12px 18px',
                boxShadow: '0 8px 28px rgba(79,72,120,0.18)',
                fontFamily: 'Poppins, sans-serif',
                textAlign: 'center',
              }}
            >
              <Heart size={22} fill="#F52C75" color="#F52C75" aria-hidden="true" />
              <div style={{ fontSize: '0.94rem', color: '#4F4878', fontWeight: 700, marginTop: '4px' }}>30 anos</div>
              <div style={{ fontSize: '0.84rem', color: '#057f95', fontWeight: 600 }}>de experiência</div>
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
            <h2
              id="sobre-title"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(1.65rem, 3.8vw, 2.5rem)',
                color: '#4F4878',
                margin: '0 0 0.4rem',
              }}
            >
              Prazer, eu{' '}
              <span className="font-handwriting text-[#F52C75] text-4xl sm:text-5xl font-bold inline-block transform -rotate-2 mx-1">
                sou
              </span>{' '}
              a Fabiana!
            </h2>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '1.06rem',
                color: '#04758a',
                margin: 0,
              }}
            >
              Neuropsicopedagoga · Pedagoga especialista em Neuropsicopedagogia
            </p>
          </div>

          <p
            className="prose"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.06rem',
              color: '#4a5568',
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Sou apaixonada pelo desenvolvimento humano e por transformar vidas através do acolhimento,
            da compreensão e de estratégias que fazem sentido. Acredito que cada pessoa é única e que
            toda conquista tem valor.
          </p>

          <p
            className="prose"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.06rem',
              color: '#4a5568',
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Formada em Pedagogia e especialista em Neuropsicopedagogia, atuo com avaliação,
            intervenção e orientação para crianças, adolescentes, adultos, famílias e escolas.
            Meu propósito é ajudar pessoas a superar desafios, desenvolver habilidades e conquistar autonomia.
          </p>

          {/* Dashed-Border Experience Card (Inspired by the "30 Anos" Post) */}
          <div
            className="dashed-card"
            style={{
              border: '2px dashed #4F4878',
              borderRadius: '16px',
              padding: '1.15rem 1.4rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              background: 'rgba(255,255,255,0.95)',
              boxShadow: '0 6px 20px -6px rgba(79,72,120,0.1)',
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '9999px',
                background: 'rgba(245,44,117,0.12)',
                border: '1.5px solid rgba(245,44,117,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <HeartDoodle size={24} fill={true} />
            </div>
            <div>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  color: '#D01F63',
                  marginBottom: '2px',
                }}
              >
                Tradição & Amor pelo Educar
              </span>
              <p
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.94rem',
                  color: '#4F4878',
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                30 anos de experiência dedicados à educação e ao desenvolvimento humano.
              </p>
            </div>
          </div>

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
                fontSize: '0.94rem',
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
                fontSize: '0.94rem',
                color: '#A04E00',
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
