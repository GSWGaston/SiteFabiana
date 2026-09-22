import { MessageCircle, MapPin, Phone } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5551999999999?text=Ol%C3%A1%2C%20Fabiana!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas.';
const INSTAGRAM_URL = 'https://instagram.com/fabianagaston.neuropedago';
const currentYear = new Date().getFullYear();

function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

const footerLinks = [
  { label: 'Início',         href: '#hero' },
  { label: 'Para Quem É',   href: '#publico' },
  { label: 'Como Funciona', href: '#servicos' },
  { label: 'Sobre Mim',     href: '#sobre' },
  { label: 'Onde Atendemos',href: '#locais' },
  { label: 'Dúvidas',       href: '#faq' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: '#1a1830',
        color: '#c4c0dc',
        padding: '4rem 1.25rem 0',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}
        className="footer-grid"
      >
        {/* ── Column 1: Brand ── */}
        <div>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #4F4878, #06A1BC)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(6,161,188,0.3)',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C9.5 2 7.5 3.8 7.5 6c0 .8.2 1.5.6 2.1C6.1 8.8 5 10.3 5 12c0 1.3.5 2.4 1.3 3.3-.2.5-.3 1.1-.3 1.7C6 19.2 7.8 21 10 21c.8 0 1.5-.2 2.1-.6.6.4 1.3.6 2 .6 2.2 0 4-1.8 4-4 0-.6-.1-1.2-.3-1.7.8-.9 1.3-2 1.3-3.3 0-1.7-1.1-3.2-2.6-3.9.4-.6.6-1.3.6-2.1C17.1 3.8 14.8 2 12 2z" fill="white" fillOpacity="0.9"/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#fff', fontSize: '1rem' }}>
                Fabiana Gaston
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', color: '#06A1BC', fontWeight: 500 }}>
                neuropsicopedagoga
              </div>
            </div>
          </div>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.88rem',
              lineHeight: 1.75,
              color: '#9896b8',
              maxWidth: '280px',
              margin: 0,
            }}
          >
            Desenvolvimento cognitivo e aprendizagem com afeto e rigor científico.
            Cuidando do potencial de cada mente, em cada fase da vida.
          </p>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Fabiana Gaston"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(37,211,102,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#25D366',
                transition: 'background 0.2s, transform 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.28)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.15)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <MessageCircle size={20} />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Fabiana Gaston"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(245,44,117,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#F52C75',
                transition: 'background 0.2s, transform 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(245,44,117,0.24)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(245,44,117,0.12)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <InstagramIcon size={20} />
            </a>
          </div>
        </div>

        {/* ── Column 2: Localização ── */}
        <div>
          <h4
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '0.9rem',
              color: '#fff',
              margin: '0 0 1.25rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Localização
          </h4>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              marginBottom: '1rem',
            }}
          >
            <MapPin size={18} style={{ color: '#06A1BC', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: '#c4c0dc', lineHeight: 1.6 }}>
                Porto Alegre e Região Metropolitana
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#6f6d8a', marginTop: '2px' }}>
                Rio Grande do Sul - RS
              </div>
            </div>
          </div>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.86rem',
                    color: '#9896b8',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#06A1BC')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9896b8')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Column 3: Contato ── */}
        <div>
          <h4
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '0.9rem',
              color: '#fff',
              margin: '0 0 1.25rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Contato
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.88rem',
                color: '#25D366',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
            >
              <Phone size={16} />
              +55 (51) 99999-9999
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.88rem',
                color: '#F52C75',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
            >
              <InstagramIcon size={16} />
              @fabianagaston.neuropedago
            </a>
          </div>

          {/* Mini CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, #06A1BC, #057f95)',
              color: '#fff',
              padding: '11px 20px',
              borderRadius: '9999px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '0.82rem',
              textDecoration: 'none',
              marginTop: '1.5rem',
              boxShadow: '0 4px 20px -4px rgba(6,161,188,0.5)',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <MessageCircle size={15} />
            Falar pelo WhatsApp
          </a>
        </div>
      </div>

      {/* Copyright bar */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1.5rem 0',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
        }}
      >
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.78rem',
            color: '#6f6d8a',
            margin: 0,
          }}
        >
          © {currentYear} Fabiana Gaston – Neuropsicopedagoga. Todos os direitos reservados.
        </p>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.78rem',
            color: '#4a4860',
            margin: 0,
          }}
        >
          CRP/CFP · Neuropsicopedagogia Clínica · Porto Alegre - RS
        </p>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid { grid-template-columns: 1.4fr 1fr 1.2fr !important; }
        }
      `}</style>
    </footer>
  );
}
