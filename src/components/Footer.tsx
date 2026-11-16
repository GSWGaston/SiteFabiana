import { Mail, MessageCircle, MapPin, Phone } from 'lucide-react';
import logoFabiana from '../assets/logo-fabiana.webp';

const WHATSAPP_URL =
  'https://wa.me/555184310180?text=Ol%C3%A1%2C%20Fabiana!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas.';
const INSTAGRAM_URL = 'https://instagram.com/fabianagaston.neuro';
const EMAIL = 'fabianadgaston.pedagoga@gmail.com';
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
      className="on-dark"
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
            <img
              src={logoFabiana}
              alt="Logo Fabiana Gaston"
              width={44}
              height={44}
              loading="lazy"
              style={{ width: '44px', height: '44px', objectFit: 'contain', flexShrink: 0 }}
            />
            <div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#fff', fontSize: '0.94rem' }}>
                Fabiana Gaston
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.84rem', color: '#5FD3E8', fontWeight: 500 }}>
                neuropsicopedagoga
              </div>
            </div>
          </div>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.94rem',
              lineHeight: 1.75,
              color: '#c4c0dc',
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
              className="icon-link"
              style={{ background: 'rgba(37,211,102,0.15)', color: '#25D366' }}
            >
              <MessageCircle size={20} />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Fabiana Gaston"
              className="icon-link"
              style={{ background: 'rgba(245,44,117,0.18)', color: '#FF6B9E' }}
            >
              <InstagramIcon size={20} />
            </a>
          </div>
        </div>

        {/* ── Column 2: Localização ── */}
        <div>
          <h3
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '0.94rem',
              color: '#fff',
              margin: '0 0 1.25rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Localização
          </h3>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              marginBottom: '1rem',
            }}
          >
            <MapPin size={18} style={{ color: '#5FD3E8', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.94rem', color: '#c4c0dc', lineHeight: 1.6 }}>
                Porto Alegre e Região Metropolitana
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.84rem', color: '#a9a6c8', marginTop: '2px' }}>
                Rio Grande do Sul - RS · Atendimento online para todo o Brasil
              </div>
            </div>
          </div>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="footer-link"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.94rem' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Column 3: Contato ── */}
        <div>
          <h3
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '0.94rem',
              color: '#fff',
              margin: '0 0 1.25rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Contato
          </h3>

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
                fontSize: '0.94rem',
                color: '#25D366',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
            >
              <Phone size={16} />
              (51) 8431-0180
            </a>

            <a
              href={`mailto:${EMAIL}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.94rem',
                color: '#5FD3E8',
                textDecoration: 'none',
                overflowWrap: 'anywhere',
              }}
            >
              <Mail size={16} />
              {EMAIL}
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
                fontSize: '0.94rem',
                color: '#FF6B9E',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
            >
              <InstagramIcon size={16} />
              @fabianagaston.neuro
            </a>
          </div>

          {/* Mini CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            style={{ marginTop: '1.5rem' }}
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
            fontSize: '0.84rem',
            color: '#a9a6c8',
            margin: 0,
          }}
        >
          © {currentYear} Fabiana Gaston – Neuropsicopedagoga. Todos os direitos reservados.
        </p>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.84rem',
            color: '#a9a6c8',
            margin: 0,
          }}
        >
          Pedagogia · Neuropsicopedagogia · Porto Alegre - RS
        </p>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid { grid-template-columns: 1.1fr 0.9fr 1.6fr !important; }
        }
      `}</style>
    </footer>
  );
}
