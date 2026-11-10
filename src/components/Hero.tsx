import { MessageCircle, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { CornerPuzzleBorder } from './decorations/CornerPuzzleBorder';
import { LayeredWaves } from './decorations/LayeredWaves';
import { StarDoodle } from './decorations/BrandDoodles';
import { HeroPortrait } from './decorations/HeroPortrait';

const WHATSAPP_URL =
  'https://wa.me/555184310180?text=Ol%C3%A1%2C%20Fabiana!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas.';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        background: 'linear-gradient(160deg, #FAF9FC 0%, #EDE9F8 40%, #D6F0F6 100%)',
        minHeight: 'calc(100vh - 68px)',
        display: 'flex',
        alignItems: 'center',
        padding: '4rem 1.25rem 6.5rem',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Anchored Corner Puzzle Border - Brand Signature */}
      <CornerPuzzleBorder />

      {/* Decorative background blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '9999px',
          background: 'radial-gradient(circle, rgba(6,161,188,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-5%',
          left: '-8%',
          width: '400px',
          height: '400px',
          borderRadius: '9999px',
          background: 'radial-gradient(circle, rgba(245,44,117,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 5,
        }}
        className="hero-grid"
      >
        {/* ── Left Column ── */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          {/* Badge Pill with Star Doodle */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(79,72,120,0.08)',
              border: '1px solid rgba(79,72,120,0.18)',
              borderRadius: '9999px',
              padding: '8px 18px',
              fontSize: '0.78rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              color: '#4F4878',
              width: 'fit-content',
            }}
          >
            <StarDoodle size={20} />
            <span>Atendimento Presencial em Porto Alegre e Região Metropolitana</span>
          </div>

          {/* H1 Headline with cursive accent */}
          <h1
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2.1rem, 5.2vw, 3.35rem)',
              lineHeight: 1.18,
              color: '#4F4878',
              margin: 0,
            }}
          >
            Desenvolvimento cognitivo e aprendizagem com{' '}
            <span className="font-handwriting text-[#F52C75] text-4xl sm:text-5xl md:text-6xl font-bold inline-block transform -rotate-2 mx-1">
              afeto
            </span>{' '}
            e base científica.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              lineHeight: 1.7,
              color: '#4a5568',
              margin: 0,
              maxWidth: '520px',
            }}
          >
            Avaliação e intervenção neuropsicopedagógica personalizada para
            crianças, jovens, adultos e idosos. Construindo caminhos sólidos
            para o potencial de cada mente.
          </p>

          {/* CTA Group */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <a
              id="hero-whatsapp-cta"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'linear-gradient(135deg, #06A1BC, #057f95)',
                color: '#fff',
                padding: '15px 28px',
                borderRadius: '9999px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                boxShadow: '0 6px 28px -4px rgba(6,161,188,0.55)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 36px -4px rgba(6,161,188,0.7)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 28px -4px rgba(6,161,188,0.55)';
              }}
            >
              <MessageCircle size={20} />
              Agendar Consulta no WhatsApp
            </a>

            <a
              id="hero-services-cta"
              href="#servicos"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                color: '#4F4878',
                padding: '14px 28px',
                borderRadius: '9999px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                border: '2px solid rgba(79,72,120,0.3)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#4F4878';
                (e.currentTarget as HTMLElement).style.background = 'rgba(79,72,120,0.06)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(79,72,120,0.3)';
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              Conhecer Como Funciona
              <ChevronDown size={16} />
            </a>
          </div>

          {/* Social Proof Micro-Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.82rem',
              fontFamily: 'Inter, sans-serif',
              color: '#4a5568',
            }}
          >
            <span style={{ color: '#F52C75' }}>♥</span>
            <span>30 anos de experiência · atendimento humanizado, ético e individualizado</span>
          </div>
        </motion.div>

        {/* ── Right Column: Portrait ── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center', padding: '0 6%' }}
        >
          <HeroPortrait />
        </motion.div>
      </div>

      {/* Multi-layered organic wave transitioning into Credentials */}
      <LayeredWaves fillNext="#FFFFFF" className="absolute bottom-0 left-0 right-0 z-10" />

      <style>{`
        @media (min-width: 900px) {
          .hero-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
