import { MessageCircle, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { CornerPuzzleBorder } from './decorations/CornerPuzzleBorder';
import { LayeredWaves } from './decorations/LayeredWaves';
import { StarDoodle, DotCluster } from './decorations/BrandDoodles';
import photoFabiana from '../assets/Foto Fabiana 2.png';

const WHATSAPP_URL =
  'https://wa.me/5551984310108?text=Ol%C3%A1%2C%20Fabiana!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas.';

const floatStyle = {
  animation: 'float 4s ease-in-out infinite',
};

/* ── Inline SVG brain illustration (placeholder for the portrait) ── */
function PortraitIllustration() {
  return (
    <svg
      viewBox="0 0 320 400"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', borderRadius: '24px' }}
    >
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EDE9F8" />
          <stop offset="100%" stopColor="#D6F0F6" />
        </linearGradient>
        <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5C7A3" />
          <stop offset="100%" stopColor="#E8A87C" />
        </linearGradient>
        <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6b64a0" />
          <stop offset="100%" stopColor="#4F4878" />
        </linearGradient>
        <radialGradient id="faceGrad" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#F8D5B5" />
          <stop offset="100%" stopColor="#E8A87C" />
        </radialGradient>
      </defs>

      {/* Background */}
      <rect width="320" height="400" fill="url(#bgGrad)" />

      {/* Decorative circles */}
      <circle cx="30" cy="60" r="40" fill="rgba(79,72,120,0.08)" />
      <circle cx="290" cy="340" r="55" fill="rgba(6,161,188,0.08)" />
      <circle cx="280" cy="80" r="25" fill="rgba(245,44,117,0.07)" />

      {/* Body / shirt */}
      <ellipse cx="160" cy="370" rx="100" ry="60" fill="url(#shirtGrad)" />
      <rect x="80" y="300" width="160" height="100" fill="url(#shirtGrad)" rx="8" />

      {/* Neck */}
      <rect x="140" y="255" width="40" height="55" fill="url(#skinGrad)" rx="4" />

      {/* Face */}
      <ellipse cx="160" cy="200" rx="78" ry="88" fill="url(#faceGrad)" />

      {/* Hair */}
      <ellipse cx="160" cy="140" rx="80" ry="55" fill="#3D2B1F" />
      <ellipse cx="90" cy="185" rx="18" ry="45" fill="#3D2B1F" />
      <ellipse cx="230" cy="185" rx="18" ry="45" fill="#3D2B1F" />
      <rect x="88" y="138" width="144" height="40" fill="#3D2B1F" />

      {/* Eyes */}
      <ellipse cx="132" cy="200" rx="12" ry="10" fill="white" />
      <ellipse cx="188" cy="200" rx="12" ry="10" fill="white" />
      <circle cx="134" cy="201" r="7" fill="#2D1B0E" />
      <circle cx="190" cy="201" r="7" fill="#2D1B0E" />
      <circle cx="136" cy="199" r="2.5" fill="white" />
      <circle cx="192" cy="199" r="2.5" fill="white" />

      {/* Eyebrows */}
      <path d="M118 186 Q132 179 146 183" stroke="#3D2B1F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M174 183 Q188 179 202 186" stroke="#3D2B1F" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Nose */}
      <path d="M155 210 Q158 225 165 225 Q168 225 165 210" stroke="#C68642" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Smile */}
      <path d="M140 238 Q160 252 180 238" stroke="#C06A30" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Lips tint */}
      <ellipse cx="160" cy="242" rx="16" ry="7" fill="#E87070" fillOpacity="0.35" />

      {/* Earrings */}
      <circle cx="83" cy="205" r="5" fill="#06A1BC" />
      <circle cx="237" cy="205" r="5" fill="#06A1BC" />

      {/* Blush */}
      <ellipse cx="118" cy="222" rx="14" ry="8" fill="#F52C75" fillOpacity="0.12" />
      <ellipse cx="202" cy="222" rx="14" ry="8" fill="#F52C75" fillOpacity="0.12" />

      {/* White coat collar hint */}
      <path d="M120 295 L90 350 L160 340 L230 350 L200 295 L160 320 Z" fill="white" fillOpacity="0.3" />

      {/* Decorative neural dots */}
      {[ 
        [40, 30], [280, 30], [20, 380], [300, 130]
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3.5" fill="#06A1BC" fillOpacity="0.4" />
      ))}
      <rect width="320" height="400" fill="#80614c" />
      <image
        href={photoFabiana}
        x="0"
        y="14"
        width="320"
        height="400"
        preserveAspectRatio="xMidYMin slice"
      />
    </svg>
  );
}

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

      {/* Floating dot clusters */}
      <div className="absolute top-14 left-6 opacity-60 hidden md:block pointer-events-none">
        <DotCluster />
      </div>
      <div className="absolute bottom-28 right-1/3 opacity-50 hidden lg:block pointer-events-none">
        <DotCluster />
      </div>

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
              color: '#64748b',
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
              color: '#64748b',
            }}
          >
            <span style={{ color: '#FD8303', fontSize: '1rem' }}>⭐⭐⭐⭐⭐</span>
            <span>Atendimento humanizado, ético e individualizado</span>
          </div>
        </motion.div>

        {/* ── Right Column: Portrait ── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          {/* Portrait Frame */}
          <div
            style={{
              position: 'relative',
              width: 'min(340px, 90vw)',
              height: 'min(420px, 110vw)',
              borderRadius: '28px',
              overflow: 'visible',
            }}
          >
            {/* Decorative ring */}
            <div
              style={{
                position: 'absolute',
                inset: '-12px',
                borderRadius: '36px',
                background: 'linear-gradient(135deg, #06A1BC22, #4F487822)',
                border: '2px solid rgba(79,72,120,0.15)',
                zIndex: 0,
              }}
            />

            {/* Portrait box */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                height: '100%',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 24px 60px -10px rgba(79,72,120,0.22)',
              }}
            >
              <PortraitIllustration />
            </div>

            {/* Floating Tag – Top Right */}
            <div
              style={{
                ...floatStyle,
                position: 'absolute',
                top: '16px',
                right: '-20px',
                zIndex: 10,
                background: '#fff',
                borderRadius: '9999px',
                padding: '8px 14px',
                boxShadow: '0 8px 24px rgba(79,72,120,0.18)',
                border: '1px solid rgba(79,72,120,0.1)',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '0.75rem',
                color: '#4F4878',
                whiteSpace: 'nowrap',
              }}
            >
              🧠 Estimulação Cognitiva
            </div>

            {/* Floating Tag – Bottom Left */}
            <div
              style={{
                ...floatStyle,
                animationDelay: '2s',
                position: 'absolute',
                bottom: '28px',
                left: '-20px',
                zIndex: 10,
                background: '#fff',
                borderRadius: '9999px',
                padding: '8px 14px',
                boxShadow: '0 8px 24px rgba(79,72,120,0.18)',
                border: '1px solid rgba(79,72,120,0.1)',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '0.75rem',
                color: '#4F4878',
                whiteSpace: 'nowrap',
              }}
            >
              💜 30 anos de experiência
            </div>

            {/* Decorative corner dots */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-16px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '5px',
              }}
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '9999px',
                    background: '#06A1BC',
                    opacity: 0.4,
                  }}
                />
              ))}
            </div>
          </div>
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
