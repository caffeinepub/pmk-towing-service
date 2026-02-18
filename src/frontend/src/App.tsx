import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { PhotosSection } from './components/PhotosSection';
import { ContactSection } from './components/ContactSection';
import { CallToActionBar } from './components/CallToActionBar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderNav />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ServiceAreaSection />
        <PhotosSection />
        <ContactSection />
      </main>
      <Footer />
      <CallToActionBar />
    </div>
  );
}

export default App;
