import { GraduationCap, MapPin, ClipboardList, Heart } from 'lucide-react';

const credentials = [
  { icon: GraduationCap, color: '#057f95', title: 'Pedagogia e Neuropsicopedagogia', subtitle: 'Formação e especialização' },
  { icon: MapPin, color: '#A04E00', title: 'Presencial e Online', subtitle: 'Porto Alegre e todo o Brasil' },
  { icon: ClipboardList, color: '#4F7A12', title: 'Avaliação clínica', subtitle: 'Individualizada' },
  { icon: Heart, color: '#D01F63', title: 'Cuidado em todas', subtitle: 'as fases da vida' },
];

export default function CredentialsStrip() {
  return (
    <section aria-label="Credenciais" style={{ background: '#fff', padding: '2.75rem 1.25rem' }}>
      <ul
        className="credentials"
        style={{ maxWidth: '1200px', margin: '0 auto', padding: 0, listStyle: 'none', display: 'grid', gap: '1.5rem' }}
      >
        {credentials.map(({ icon: Icon, color, title, subtitle }) => (
          <li key={title} style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', minWidth: 0 }}>
            <Icon size={28} strokeWidth={1.75} aria-hidden="true" style={{ color, flexShrink: 0 }} />
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.94rem', color: '#4F4878', lineHeight: 1.3 }}>
                {title}
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.94rem', color: '#5f5a80', marginTop: '2px' }}>
                {subtitle}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <style>{`
        @media (min-width: 560px) { .credentials { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (min-width: 900px) {
          .credentials { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0; }
          .credentials li { padding: 0 1.5rem; }
          .credentials li + li { border-left: 1px solid rgba(79, 72, 120, 0.15); }
        }
      `}</style>
    </section>
  );
}
