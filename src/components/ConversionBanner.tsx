import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5551999999999?text=Ol%C3%A1%2C%20Fabiana!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas.';

export default function ConversionBanner() {
  return (
    <section
      id="contato"
      style={{
        background: '#4F4878',
        padding: '5rem 1.25rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial decorative blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-60px',
          left: '-60px',
          width: '350px',
          height: '350px',
          borderRadius: '9999px',
          background: 'radial-gradient(circle, rgba(6,161,188,0.25) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-60px',
          right: '-60px',
          width: '400px',
          height: '400px',
          borderRadius: '9999px',
          background: 'radial-gradient(circle, rgba(245,44,117,0.18) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '9999px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Decorative pattern dots */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '6px',
            height: '6px',
            borderRadius: '9999px',
            background: 'rgba(255,255,255,0.15)',
            top: `${15 + (i % 4) * 22}%`,
            left: `${5 + i * 8}%`,
            pointerEvents: 'none',
          }}
        />
      ))}

      <div
        style={{
          maxWidth: '750px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Emoji accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: '3rem', marginBottom: '1.5rem' }}
        >
          🧠
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            color: '#FFFFFF',
            margin: '0 0 1.25rem',
            lineHeight: 1.2,
          }}
        >
          Pronto para potencializar o
          <br />
          <span style={{ color: '#06A1BC' }}>desenvolvimento cognitivo?</span>
        </motion.h2>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.80)',
            lineHeight: 1.75,
            margin: '0 auto 2.5rem',
            maxWidth: '520px',
          }}
        >
          Entre em contato agora mesmo pelo WhatsApp para tirar dúvidas e
          agendar a sua primeira sessão. Cada jornada começa com uma conversa.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          id="banner-whatsapp-cta"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: '#fff',
            color: '#4F4878',
            padding: '16px 36px',
            borderRadius: '9999px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 800,
            fontSize: '1.05rem',
            textDecoration: 'none',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            transition: 'transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px) scale(1.02)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(0,0,0,0.3)';
            (e.currentTarget as HTMLElement).style.background = '#06A1BC';
            (e.currentTarget as HTMLElement).style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0) scale(1)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
            (e.currentTarget as HTMLElement).style.background = '#fff';
            (e.currentTarget as HTMLElement).style.color = '#4F4878';
          }}
        >
          <MessageCircle size={22} />
          Agendar Consulta no WhatsApp
        </motion.a>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.5)',
            margin: '1.5rem 0 0',
          }}
        >
          ✓ Sem compromisso inicial · ✓ Resposta rápida · ✓ Atendimento humanizado
        </motion.p>
      </div>
    </section>
  );
}
