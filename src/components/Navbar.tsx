import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5551999999999?text=Ol%C3%A1%2C%20Fabiana!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas.';

const navLinks = [
  { label: 'Início',        href: '#hero' },
  { label: 'Para Quem É',   href: '#publico' },
  { label: 'Como Funciona', href: '#servicos' },
  { label: 'Sobre Mim',     href: '#sobre' },
  { label: 'Onde Atendemos',href: '#locais' },
  { label: 'Dúvidas',       href: '#faq' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      {/* ── Main Navbar ── */}
      <header
        id="navbar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.3s ease',
          background: scrolled
            ? 'rgba(255,255,255,0.97)'
            : 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: scrolled ? '0 2px 24px rgba(79,72,120,0.10)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(79,72,120,0.08)' : 'none',
        }}
      >
        <nav
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1.25rem',
            height: '68px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* ── Logo ── */}
          <a
            href="#hero"
            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
            onClick={handleLinkClick}
          >
            {/* Brain icon mark */}
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #4F4878, #06A1BC)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 4px 12px rgba(79,72,120,0.3)',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C9.5 2 7.5 3.8 7.5 6c0 .8.2 1.5.6 2.1C6.1 8.8 5 10.3 5 12c0 1.3.5 2.4 1.3 3.3-.2.5-.3 1.1-.3 1.7C6 19.2 7.8 21 10 21c.8 0 1.5-.2 2.1-.6.6.4 1.3.6 2 .6 2.2 0 4-1.8 4-4 0-.6-.1-1.2-.3-1.7.8-.9 1.3-2 1.3-3.3 0-1.7-1.1-3.2-2.6-3.9.4-.6.6-1.3.6-2.1C17.1 3.8 14.8 2 12 2z" fill="white" fillOpacity="0.9"/>
                <circle cx="9.5" cy="9.5" r="1" fill="white" fillOpacity="0.6"/>
                <circle cx="14.5" cy="9.5" r="1" fill="white" fillOpacity="0.6"/>
                <path d="M9.5 14.5c0 0 1 1.5 2.5 1.5s2.5-1.5 2.5-1.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
              </svg>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: '#4F4878',
                  lineHeight: 1.1,
                }}
              >
                Fabiana Gaston
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.68rem',
                  color: '#06A1BC',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  textTransform: 'lowercase',
                }}
              >
                neuropsicopedagoga
              </div>
            </div>
          </a>

          {/* ── Desktop Nav Links ── */}
          <ul
            style={{
              display: 'none',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              gap: '2rem',
              alignItems: 'center',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Desktop CTA ── */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="desktop-cta"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, #06A1BC, #057f95)',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '9999px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '0.85rem',
              textDecoration: 'none',
              boxShadow: '0 4px 20px -4px rgba(6,161,188,0.5)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px -4px rgba(6,161,188,0.65)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px -4px rgba(6,161,188,0.5)';
            }}
          >
            <MessageCircle size={16} />
            Agendar pelo WhatsApp
          </a>

          {/* ── Mobile Hamburger ── */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: '#4F4878',
              borderRadius: '8px',
              transition: 'background 0.2s',
            }}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* ── Mobile Drawer Overlay ── */}
      <div
        id="mobile-drawer-overlay"
        onClick={() => setMenuOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 998,
          background: 'rgba(0,0,0,0.35)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* ── Mobile Drawer ── */}
      <div
        id="mobile-drawer"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
          width: 'min(80vw, 320px)',
          background: '#fff',
          boxShadow: '-8px 0 32px rgba(79,72,120,0.15)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '5rem 2rem 2rem',
          gap: '0.25rem',
        }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#4F4878',
          }}
          aria-label="Fechar menu"
        >
          <X size={24} />
        </button>

        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleLinkClick}
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '1rem',
              color: '#4F4878',
              textDecoration: 'none',
              padding: '0.9rem 0',
              borderBottom: '1px solid rgba(79,72,120,0.1)',
              transition: 'color 0.2s, padding-left 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = '#06A1BC';
              (e.currentTarget as HTMLElement).style.paddingLeft = '8px';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = '#4F4878';
              (e.currentTarget as HTMLElement).style.paddingLeft = '0';
            }}
          >
            {link.label}
          </a>
        ))}

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          style={{
            marginTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #06A1BC, #057f95)',
            color: '#fff',
            padding: '14px 20px',
            borderRadius: '9999px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '0.9rem',
            textDecoration: 'none',
            boxShadow: '0 4px 20px -4px rgba(6,161,188,0.5)',
          }}
        >
          <MessageCircle size={18} />
          Agendar pelo WhatsApp
        </a>
      </div>

      {/* ── Inline style to show/hide desktop elements ── */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav  { display: flex !important; }
          .desktop-cta  { display: flex !important; }
          #mobile-menu-btn { display: none !important; }
        }
      `}</style>

      {/* Spacer for fixed navbar */}
      <div style={{ height: '68px' }} />
    </>
  );
}
