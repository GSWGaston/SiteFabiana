import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CredentialsStrip from './components/CredentialsStrip';
import Audience from './components/Audience';
import Services from './components/Services';
import About from './components/About';
import Locations from './components/Locations';
import FAQ from './components/FAQ';
import ConversionBanner from './components/ConversionBanner';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CredentialsStrip />
        <Audience />
        <Services />
        <About />
        <Locations />
        <FAQ />
        <ConversionBanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
