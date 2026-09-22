import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { LayeredWaves } from './decorations/LayeredWaves';
import { StarDoodle, DotCluster } from './decorations/BrandDoodles';

const WHATSAPP_URL =
  'https://wa.me/555184310180?text=Ol%C3%A1%2C%20Fabiana!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas.';

export default function ConversionBanner() {
  return (
    <div id="contato" className="relative">
      {/* Multi-layered organic wave at the top edge of final banner */}
      <div style={{ background: '#FFFFFF', lineHeight: 0 }}>
        <LayeredWaves variant="bold" fillNext="#4F4878" className="w-full block" />
      </div>

      <section
        style={{
          background: '#4F4878',
          padding: '4rem 1.25rem 6rem',
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
        {/* Playful accent with StarDoodles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', marginBottom: '1.5rem' }}
        >
          <StarDoodle size={26} />
          <span style={{ fontSize: '3rem', lineHeight: 1 }}>🧠</span>
          <StarDoodle size={26} />
        </motion.div>

        {/* Floating confetti dots */}
        <div className="absolute top-10 left-6 opacity-40 pointer-events-none hidden md:block">
          <DotCluster />
        </div>
        <div className="absolute bottom-10 right-6 opacity-40 pointer-events-none hidden md:block">
          <DotCluster />
        </div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(1.85rem, 4.2vw, 2.9rem)',
            color: '#FFFFFF',
            margin: '0 0 1.25rem',
            lineHeight: 1.25,
          }}
        >
          Pronto para potencializar o
          <br />
          <span style={{ color: '#06A1BC' }}>desenvolvimento cognitivo</span> com{' '}
          <span className="font-handwriting text-[#F52C75] text-4xl sm:text-5xl md:text-6xl font-bold inline-block transform -rotate-2">
            afeto
          </span>
          ?
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
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.75,
            margin: '0 auto 2.5rem',
            maxWidth: '520px',
          }}
        >
          Entre em contato agora mesmo pelo WhatsApp para tirar dúvidas e
          agendar a sua primeira sessão. Cada jornada começa com uma conversa.
        </motion.p>

        {/* CTA Button - Vibrant Pacific Blue with glowing shadow */}
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
            background: 'linear-gradient(135deg, #06A1BC, #057f95)',
            color: '#FFFFFF',
            padding: '18px 40px',
            borderRadius: '9999px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 800,
            fontSize: '1.05rem',
            textDecoration: 'none',
            boxShadow: '0 8px 30px rgba(6,161,188,0.5)',
            border: '2px solid rgba(255,255,255,0.25)',
            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px) scale(1.03)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 44px rgba(6,161,188,0.75)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0) scale(1)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(6,161,188,0.5)';
          }}
        >
          <MessageCircle size={24} />
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
  </div>
  );
}
