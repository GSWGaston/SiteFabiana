import { GraduationCap, MapPin, ClipboardList, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const credentials = [
  {
    icon: <GraduationCap size={26} />,
    iconBg: 'linear-gradient(135deg, #06A1BC, #057f95)',
    title: 'Pedagogia & Neuropsicopedagogia',
    subtitle: 'Formação e especialização',
    shadowColor: 'rgba(6,161,188,0.3)',
  },
  {
    icon: <MapPin size={26} />,
    iconBg: 'linear-gradient(135deg, #FD8303, #e06f02)',
    title: 'Presencial em Porto Alegre',
    subtitle: 'e Região Metropolitana',
    shadowColor: 'rgba(253,131,3,0.3)',
  },
  {
    icon: <ClipboardList size={26} />,
    iconBg: 'linear-gradient(135deg, #82B42D, #6a9424)',
    title: 'Avaliação Clínica',
    subtitle: 'Individualizada',
    shadowColor: 'rgba(130,180,45,0.3)',
  },
  {
    icon: <Heart size={26} />,
    iconBg: 'linear-gradient(135deg, #F52C75, #c9235f)',
    title: 'Cuidado em Todas as',
    subtitle: 'Fases da Vida',
    shadowColor: 'rgba(245,44,117,0.3)',
  },
];

export default function CredentialsStrip() {
  return (
    <section
      style={{
        background: '#fff',
        padding: '3rem 1.25rem',
        borderBottom: '1px solid rgba(79,72,120,0.06)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
        }}
        className="credentials-grid"
      >
        {credentials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.25rem 1.5rem',
              borderRadius: '16px',
              background: '#FAF9FC',
              border: '1px solid rgba(79,72,120,0.07)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            className="card-hover"
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '9999px',
                background: item.iconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                flexShrink: 0,
                boxShadow: `0 6px 20px -4px ${item.shadowColor}`,
              }}
            >
              {item.icon}
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  color: '#4F4878',
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.8rem',
                  color: '#8b8ba8',
                  marginTop: '2px',
                }}
              >
                {item.subtitle}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .credentials-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
